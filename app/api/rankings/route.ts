import { NextResponse } from 'next/server';
import { INITIAL_PEOPLE } from '@/data/people';
import { getRankingsForPerson } from '@/lib/datingEngine';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const personId = searchParams.get('personId');

  if (!personId) {
    // Return sample rankings for the first 5 flagship people
    const samples = INITIAL_PEOPLE.slice(0, 5).map(p => getRankingsForPerson(p, INITIAL_PEOPLE));
    return NextResponse.json({ rankings: samples });
  }

  const person = INITIAL_PEOPLE.find(p => p.id === personId);
  if (!person) {
    return NextResponse.json({ error: 'Person not found' }, { status: 404 });
  }

  const dossier = getRankingsForPerson(person, INITIAL_PEOPLE);
  return NextResponse.json({ dossier });
}
