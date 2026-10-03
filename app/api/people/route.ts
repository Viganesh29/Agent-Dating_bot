import { NextResponse } from 'next/server';
import { INITIAL_PEOPLE } from '@/data/people';
import { analyzeAndCreateAgent } from '@/lib/scraper';

// In-memory runtime store for dynamic additions during the session
let globalPeople = [...INITIAL_PEOPLE];

export async function GET() {
  return NextResponse.json({ people: globalPeople });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { linkedinUrl, instagramUrl } = body;

    if (!linkedinUrl || !instagramUrl) {
      return NextResponse.json(
        { error: 'Both LinkedIn and Instagram public profile URLs are required.' },
        { status: 400 }
      );
    }

    // Scrape and analyze person
    const newPerson = await analyzeAndCreateAgent(linkedinUrl, instagramUrl);

    // If it's a new custom person not already in memory, add to cohort
    if (!globalPeople.some(p => p.id === newPerson.id)) {
      globalPeople.unshift(newPerson);
    }

    return NextResponse.json({ person: newPerson, allCount: globalPeople.length });
  } catch (error: any) {
    console.error('Error creating agent:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to scrape and synthesize agent.' },
      { status: 500 }
    );
  }
}
