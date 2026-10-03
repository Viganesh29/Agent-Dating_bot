import { NextResponse } from 'next/server';
import { INITIAL_PEOPLE } from '@/data/people';
import { simulateDate, getPrecomputedDates } from '@/lib/datingEngine';

// Global cache of simulated dates
let globalDates = getPrecomputedDates(INITIAL_PEOPLE);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const personId = searchParams.get('personId');
  const dateId = searchParams.get('dateId');

  if (dateId) {
    const found = globalDates.find(d => d.id === dateId);
    if (found) return NextResponse.json({ date: found });
  }

  if (personId) {
    const filtered = globalDates.filter(d => d.personAId === personId || d.personBId === personId);
    return NextResponse.json({ dates: filtered });
  }

  return NextResponse.json({ dates: globalDates });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { personAId, personBId } = body;

    if (!personAId || !personBId) {
      return NextResponse.json({ error: 'Both person IDs are required.' }, { status: 400 });
    }

    if (personAId === personBId) {
      return NextResponse.json({ error: 'An agent cannot date themselves!' }, { status: 400 });
    }

    // Lookup people
    const personA = INITIAL_PEOPLE.find(p => p.id === personAId);
    const personB = INITIAL_PEOPLE.find(p => p.id === personBId);

    if (!personA || !personB) {
      return NextResponse.json({ error: 'One or both people not found.' }, { status: 404 });
    }

    const newDate = simulateDate(personA, personB);

    // Save or update in global dates
    const existingIndex = globalDates.findIndex(d => d.id === newDate.id);
    if (existingIndex >= 0) {
      globalDates[existingIndex] = newDate;
    } else {
      globalDates.unshift(newDate);
    }

    return NextResponse.json({ date: newDate });
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Failed to simulate date.' }, { status: 500 });
  }
}
