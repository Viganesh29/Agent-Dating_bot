import { Person, DateSession, CandidateRanking, PersonRankingDossier } from '@/types';
import { INITIAL_PEOPLE } from '@/data/people';

export const DATE_VENUES = [
  {
    name: 'The Obsidian Speakeasy',
    type: 'Hidden Cocktail Lounge',
    city: 'SoHo, New York',
    atmosphere: 'Dim amber lighting, velvet booths, vintage vinyl jazz playing softly in the background.',
    icon: '🍸'
  },
  {
    name: 'Ritual Garden Cafe',
    type: 'Courtyard Coffee & Matcha Walk',
    city: 'Hayes Valley, San Francisco',
    atmosphere: 'Sunlight filtering through redwood trellises, warm ceramic mugs, crisp Pacific breeze.',
    icon: '☕'
  },
  {
    name: 'Rooftop Stargazing Lounge',
    type: 'Skyline Terrace & Fire Pit',
    city: 'Austin, Texas',
    atmosphere: 'Panoramic skyline views, cedar wood fire crackling, craft cider, relaxed evening air.',
    icon: '✨'
  },
  {
    name: 'The Modernist Art Pavilion',
    type: 'Contemporary Gallery Walk',
    city: 'Venice Beach, California',
    atmosphere: 'High ceilings, kinetic light sculptures, ocean air drifting through glass doors.',
    icon: '🎨'
  },
  {
    name: 'Chiltern Courtyard',
    type: 'Historic Terrace & Fireside Dining',
    city: 'Marylebone, London',
    atmosphere: 'Flickering outdoor fireplace, cobblestones, vintage wine, cozy woolen throws.',
    icon: '🍷'
  },
  {
    name: 'Harbour Light Terrace',
    type: 'Coastal Sunset Lounge',
    city: 'Sydney, Australia',
    atmosphere: 'Sunset ocean mist, sparkling coastal lights, fresh sea breeze, relaxed laughter.',
    icon: '🌊'
  }
];

/**
 * Calculates algorithmic compatibility based on needs, hobbies, interests, and qualities
 */
export function calculateCompatibility(personA: Person, personB: Person): {
  intellectual: number;
  lifestyle: number;
  humor: number;
  values: number;
  overall: number;
} {
  // Deterministic seed based on combined IDs to ensure consistent rankings
  const combo = [personA.id, personB.id].sort().join('::');
  let hash = 0;
  for (let i = 0; i < combo.length; i++) {
    hash = (hash << 5) - hash + combo.charCodeAt(i);
    hash |= 0;
  }
  const normalized = Math.abs(hash % 1000) / 1000;

  // Evaluate Interest Overlap (Intellectual)
  const aInterests = new Set([...personA.agentProfile.interests.intellectual, ...personA.agentProfile.interests.favoriteTopics]);
  const bInterests = new Set([...personB.agentProfile.interests.intellectual, ...personB.agentProfile.interests.favoriteTopics]);
  let sharedInterestBonus = 0;
  aInterests.forEach(item => {
    bInterests.forEach(other => {
      if (item.toLowerCase().includes(other.toLowerCase()) || other.toLowerCase().includes(item.toLowerCase())) {
        sharedInterestBonus += 5;
      }
    });
  });

  // Evaluate Hobbies & Lifestyle
  const aHobbies = new Set([...personA.agentProfile.hobbies.primary, ...personA.agentProfile.hobbies.weekendRituals]);
  const bHobbies = new Set([...personB.agentProfile.hobbies.primary, ...personB.agentProfile.hobbies.weekendRituals]);
  let sharedHobbyBonus = 0;
  aHobbies.forEach(item => {
    bHobbies.forEach(other => {
      if (item.toLowerCase().includes(other.toLowerCase()) || other.toLowerCase().includes(item.toLowerCase())) {
        sharedHobbyBonus += 5;
      }
    });
  });

  // Quality & Energy Level Synergy
  let energyMatch = 75;
  if (personA.agentProfile.qualities.energyLevel === personB.agentProfile.qualities.energyLevel) {
    energyMatch = 88;
  } else if (
    (personA.agentProfile.qualities.energyLevel.includes('High') && personB.agentProfile.qualities.energyLevel.includes('Calm')) ||
    (personA.agentProfile.qualities.energyLevel.includes('Calm') && personB.agentProfile.qualities.energyLevel.includes('High'))
  ) {
    energyMatch = 92; // Complementary grounding opposites!
  }

  const intellectual = Math.min(98, Math.max(68, Math.round(72 + sharedInterestBonus + (normalized * 15))));
  const lifestyle = Math.min(97, Math.max(65, Math.round(70 + sharedHobbyBonus + ((1 - normalized) * 16))));
  const humor = Math.min(99, Math.max(68, Math.round(energyMatch + ((normalized * 20) - 10))));
  const values = Math.min(98, Math.max(70, Math.round(78 + (sharedInterestBonus / 2) + (normalized * 12))));

  const overall = Math.round((intellectual * 0.3) + (lifestyle * 0.25) + (humor * 0.2) + (values * 0.25));

  return { intellectual, lifestyle, humor, values, overall };
}

/**
 * Generates an authentic, turn-by-turn date simulation dialogue between two agents
 */
export function simulateDate(personA: Person, personB: Person): DateSession {
  const scores = calculateCompatibility(personA, personB);
  
  // Pick venue deterministically
  const venueIndex = Math.abs((personA.id.length * 13) + (personB.id.length * 7)) % DATE_VENUES.length;
  const venue = DATE_VENUES[venueIndex];

  const dateId = `date-${[personA.id, personB.id].sort().join('-vs-')}`;

  const dialogue = [
    {
      speakerId: personA.id,
      speakerName: personA.name,
      message: `Hey ${personB.name.split(' ')[0]}! Great to meet you here at ${venue.name}. Your agent mentioned your obsession with ${personB.agentProfile.hobbies.primary[0].toLowerCase()}, and I had to see if you are as relentless in person as you sound on paper.`,
      innerThought: `First impression: ${personB.agentProfile.archetype} energy is undeniable. Let's see if we can get past the polished bio into real substance.`,
      mood: 'curious' as const
    },
    {
      speakerId: personB.id,
      speakerName: personB.name,
      message: `Haha, guilty as charged! And I read your agent notes too—"${personA.agentProfile.datingQuote}". That’s a bold philosophy to lead with. Honestly, I appreciate anyone who doesn't waste time on generic pleasantries. What made you pick this spot tonight?`,
      innerThought: `They have great eye contact and confidence. Zero awkward hesitation. I like the directness.`,
      mood: 'playful' as const
    },
    {
      speakerId: personA.id,
      speakerName: personA.name,
      message: `Because life is too short for bad acoustics and sterile meeting rooms. Look around—the atmosphere here actually lets people think. My agent says I need someone who understands that my mind rarely turns off, especially when I’m excited about ${personA.agentProfile.interests.favoriteTopics[0].toLowerCase()}. How do you protect your flow state when everything is moving at 100 miles an hour?`,
      innerThought: `Testing how they handle high-velocity ambition vs emotional decompression. This is usually where people stumble.`,
      mood: 'thoughtful' as const
    },
    {
      speakerId: personB.id,
      speakerName: personB.name,
      message: `For me, it is all about ruthless intentionality. On weekends you will usually find me ${personB.agentProfile.hobbies.weekendRituals[0].toLowerCase()}. If you can't unplug and enjoy simple tactile things, all the scale in the world just turns into noise. My dealbreaker is people who perform ambition instead of living it with genuine curiosity.`,
      innerThought: `Spot on. Their eyes lit up when talking about their craft. No vanity, just real passion.`,
      mood: 'intrigued' as const
    },
    {
      speakerId: personA.id,
      speakerName: personA.name,
      message: `I love that. One of my biggest quirks is that I ${personA.agentProfile.qualities.quirks[0].toLowerCase()}. Most people think it is eccentric, but to me, the little details tell you everything about how a person views the world. Do you have a weird habit that most people misunderstand?`,
      innerThought: `Throwing in a genuine quirk to check humor alignment and vulnerability.`,
      mood: 'laughing' as const
    },
    {
      speakerId: personB.id,
      speakerName: personB.name,
      message: `Oh, absolutely! I ${personB.agentProfile.qualities.quirks[0].toLowerCase()}. People either find it hilarious or totally baffling. But when you find someone whose weirdness clicks with your own, everything else falls into place. The banter tonight has been effortless.`,
      innerThought: `We share the exact same brand of self-aware humor. That is rare.`,
      mood: 'charmed' as const
    },
    {
      speakerId: personA.id,
      speakerName: personA.name,
      message: `Effortless is the exact word. You know, our agents analyzed thousands of data points between our LinkedIn achievements and Instagram lifestyles, but watching you light up while talking about ${personB.agentProfile.interests.intellectual[0].toLowerCase()} is something no algorithm can fake.`,
      innerThought: `High mutual respect and genuine intellectual chemistry. My agent called this one correctly.`,
      mood: 'vulnerable' as const
    },
    {
      speakerId: personB.id,
      speakerName: personB.name,
      message: `Agreed. Let’s finish these drinks, take a stroll, and plan that ${personA.agentProfile.hobbies.weekendRituals[1] ? personA.agentProfile.hobbies.weekendRituals[1].toLowerCase() : 'weekend adventure'} we just talked about. Consider date number two already booked.`,
      innerThought: `Definitely a keeper. High chemistry, shared values, and electrifying conversation.`,
      mood: 'charmed' as const
    }
  ];

  let verdict: DateSession['takeaway']['verdict'] = 'Great Intellectual Dynamic';
  if (scores.overall >= 93) {
    verdict = 'Soulmate Spark';
  } else if (scores.overall >= 86) {
    verdict = 'High Chemistry & High Value';
  } else if (scores.overall >= 75) {
    verdict = 'Great Intellectual Dynamic';
  } else if (scores.overall >= 68) {
    verdict = 'Best As Collaborators';
  } else {
    verdict = 'Polite But Mismatched';
  }

  const takeaway: DateSession['takeaway'] = {
    chemistryAnalysis: `Dynamic conversational friction with powerful underlying alignment. Both agents exhibited strong resonance between ${personA.name.split(' ')[0]}'s drive for ${personA.agentProfile.archetype.toLowerCase()} and ${personB.name.split(' ')[0]}'s ${personB.agentProfile.archetype.toLowerCase()} nature. Banter was sharp, self-aware, and emotionally grounded.`,
    strengths: [
      `Synergistic communication: ${personA.agentProfile.qualities.humorStyle} seamlessly complemented ${personB.agentProfile.qualities.humorStyle}`,
      `Complementary lifestyle rhythms: Mutual appreciation for ${personA.agentProfile.hobbies.primary[0]} and ${personB.agentProfile.hobbies.primary[0]}`,
      `Zero ego clash: Both hold high emotional maturity and clear relationship boundaries`
    ],
    potentialFrictions: [
      `High-velocity schedules: Both lead demanding lives that require calendar intentionality`,
      `High independence: Both prioritize autonomous flow states`
    ],
    verdict,
    scoreBreakdown: scores
  };

  return {
    id: dateId,
    personAId: personA.id,
    personBId: personB.id,
    venue,
    timestamp: 'Tonight, 8:30 PM',
    compatibilityScore: scores.overall,
    dialogue,
    takeaway
  };
}

/**
 * Computes the complete ordered ranking list for a given person against all other candidates
 */
export function getRankingsForPerson(targetPerson: Person, allPeople: Person[] = INITIAL_PEOPLE): PersonRankingDossier {
  const candidates = allPeople.filter(p => p.id !== targetPerson.id);

  const rankedCandidates: CandidateRanking[] = candidates.map(candidate => {
    const scores = calculateCompatibility(targetPerson, candidate);
    const date = simulateDate(targetPerson, candidate);

    let matchRationale = '';
    if (scores.overall >= 90) {
      matchRationale = `Exceptional alignment! ${candidate.name.split(' ')[0]}'s ${candidate.agentProfile.archetype} directly satisfies ${targetPerson.name.split(' ')[0]}'s need for ${targetPerson.agentProfile.needs.emotional[0].toLowerCase()}. Shared passion for ${candidate.agentProfile.interests.intellectual[0]} and magnetic conversational banter.`;
    } else if (scores.overall >= 82) {
      matchRationale = `Strong high-value match. Both share deep respect for ${targetPerson.agentProfile.hobbies.primary[0].toLowerCase()} and ${candidate.agentProfile.hobbies.primary[0].toLowerCase()}. Balanced energy dynamics create a grounding sanctuary.`;
    } else if (scores.overall >= 74) {
      matchRationale = `Stimulating intellectual dynamic. Great sparring partner on ${candidate.agentProfile.interests.favoriteTopics[0].toLowerCase()}, though lifestyle tempos require minor schedule alignment.`;
    } else {
      matchRationale = `Respectful peer dynamic with solid conversational respect, but differing emotional attachment styles suggest a stronger collaborative friendship than romantic romance.`;
    }

    return {
      candidateId: candidate.id,
      candidateName: candidate.name,
      candidateAvatar: candidate.avatar,
      candidateTagline: candidate.tagline,
      rank: 0, // Assigned after sort
      overallScore: scores.overall,
      breakdown: {
        intellectual: scores.intellectual,
        lifestyle: scores.lifestyle,
        humor: scores.humor,
        values: scores.values
      },
      matchRationale,
      dateId: date.id
    };
  });

  // Sort by overall score descending
  rankedCandidates.sort((a, b) => b.overallScore - a.overallScore);

  // Assign 1-indexed ranks
  rankedCandidates.forEach((item, index) => {
    item.rank = index + 1;
  });

  return {
    personId: targetPerson.id,
    personName: targetPerson.name,
    personAvatar: targetPerson.avatar,
    topRankings: rankedCandidates
  };
}

/**
 * Pre-generate top dates between iconic cohort pairings for instant video & demo viewing
 */
export function getPrecomputedDates(people: Person[] = INITIAL_PEOPLE): DateSession[] {
  const dates: DateSession[] = [];
  
  // Featured headline pairings
  const pairs = [
    ['alexis-ohanian', 'whitney-wolfe-herd'],
    ['brian-chesky', 'payal-kadakia'],
    ['marques-brownlee', 'sara-dietschy'],
    ['ali-abdaal', 'justine-ezarik'],
    ['garry-tan', 'julie-zhuo'],
    ['lex-fridman', 'melanie-perkins'],
    ['tim-ferriss', 'codie-sanchez'],
    ['austin-rief', 'grace-beverley'],
    ['sam-parr', 'sophia-amoruso'],
    ['guillermo-rauch', 'lucy-guo'],
    ['kevin-systrom', 'sara-blakely'],
    ['james-clear', 'cassey-ho'],
    ['amjad-masad', 'bozoma-saint-john'],
    ['justin-kan', 'sahil-bloom'],
    ['gary-vaynerchuk', 'arlan-hamilton'],
    ['delane-parnell', 'nikita-bier'],
    ['austen-allred', 'sahil-lavingia']
  ];

  for (const [idA, idB] of pairs) {
    const personA = people.find(p => p.id === idA);
    const personB = people.find(p => p.id === idB);
    if (personA && personB) {
      dates.push(simulateDate(personA, personB));
    }
  }

  return dates;
}
