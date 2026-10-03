export interface Person {
  id: string;
  name: string;
  avatar: string;
  gender: 'male' | 'female' | 'other';
  age: number;
  tagline: string;
  location: string;
  linkedinUrl: string;
  instagramUrl: string;
  instagramHandle: string;
  linkedinData: {
    headline: string;
    currentRole: string;
    company: string;
    education: string;
    skills: string[];
    summary: string;
    achievements: string[];
  };
  instagramData: {
    bio: string;
    postsSummary: string;
    visualAesthetic: string;
    recentInterests: string[];
    lifestyleHighlights: string[];
    followersCount: string;
  };
  agentProfile: {
    archetype: string;
    tagline: string;
    datingQuote: string;
    needs: {
      emotional: string[];
      communication: string[];
      relationshipGoals: string;
      dealbreakers: string[];
    };
    hobbies: {
      primary: string[];
      creative: string[];
      weekendRituals: string[];
    };
    interests: {
      intellectual: string[];
      cultural: string[];
      favoriteTopics: string[];
    };
    qualities: {
      energyLevel: string;
      attachmentStyle: string;
      humorStyle: string;
      loveLanguages: string[];
      socialBattery: string;
      quirks: string[];
    };
  };
}

export interface DialogueTurn {
  speakerId: string;
  speakerName: string;
  message: string;
  innerThought?: string;
  mood?: 'curious' | 'charmed' | 'intrigued' | 'playful' | 'thoughtful' | 'vulnerable' | 'laughing';
}

export interface DateSession {
  id: string;
  personAId: string;
  personBId: string;
  venue: {
    name: string;
    type: string;
    city: string;
    atmosphere: string;
    icon: string;
  };
  timestamp: string;
  compatibilityScore: number;
  dialogue: DialogueTurn[];
  takeaway: {
    chemistryAnalysis: string;
    strengths: string[];
    potentialFrictions: string[];
    verdict: 'Soulmate Spark' | 'High Chemistry & High Value' | 'Great Intellectual Dynamic' | 'Best As Collaborators' | 'Polite But Mismatched';
    scoreBreakdown: {
      intellectual: number;
      lifestyle: number;
      humor: number;
      values: number;
      overall: number;
    };
  };
}

export interface CandidateRanking {
  candidateId: string;
  candidateName: string;
  candidateAvatar: string;
  candidateTagline: string;
  rank: number;
  overallScore: number;
  breakdown: {
    intellectual: number;
    lifestyle: number;
    humor: number;
    values: number;
  };
  matchRationale: string;
  dateId?: string;
}

export interface PersonRankingDossier {
  personId: string;
  personName: string;
  personAvatar: string;
  topRankings: CandidateRanking[];
}
