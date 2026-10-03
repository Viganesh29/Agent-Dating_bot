'use client';

import React, { useState, useMemo } from 'react';
import { Person, CandidateRanking } from '@/types';
import { getRankingsForPerson } from '@/lib/datingEngine';
import { 
  Trophy, Medal, Heart, Play, Sparkles, Filter, 
  Search, ArrowUpDown, ChevronRight, CheckCircle2 
} from 'lucide-react';

interface RankingsViewProps {
  people: Person[];
  selectedPersonId?: string;
  onSelectPerson: (person: Person) => void;
  onWatchDate: (personA: Person, personB: Person) => void;
}

export default function RankingsView({
  people,
  selectedPersonId,
  onSelectPerson,
  onWatchDate
}: RankingsViewProps) {
  const [currentPersonId, setCurrentPersonId] = useState<string>(
    selectedPersonId || people[0]?.id || ''
  );
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [minScore, setMinScore] = useState<number>(0);

  const currentPerson = useMemo(() => {
    return people.find(p => p.id === currentPersonId) || people[0];
  }, [people, currentPersonId]);

  const rankingsDossier = useMemo(() => {
    if (!currentPerson) return null;
    return getRankingsForPerson(currentPerson, people);
  }, [currentPerson, people]);

  const filteredRankings = useMemo(() => {
    if (!rankingsDossier) return [];
    return rankingsDossier.topRankings.filter(item => {
      const matchesSearch = item.candidateName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.candidateTagline.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesScore = item.overallScore >= minScore;
      return matchesSearch && matchesScore;
    });
  }, [rankingsDossier, searchQuery, minScore]);

  if (!currentPerson || !rankingsDossier) return null;

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* HEADER & PERSON SELECTOR */}
      <div className="glass-panel p-6 rounded-3xl border border-slate-800 bg-slate-900/80">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Target Person Info */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-amber-500/60 shadow-lg shadow-amber-950/30 shrink-0">
              <img src={currentPerson.avatar} alt={currentPerson.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                  <Trophy className="w-3.5 h-3.5 text-amber-400" /> Compatibility Rankings for
                </span>
              </div>
              <h2 className="text-2xl font-extrabold text-white tracking-tight">
                {currentPerson.name}
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                {currentPerson.agentProfile.archetype} • {currentPerson.location}
              </p>
            </div>
          </div>

          {/* Person Selector Dropdown */}
          <div className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-3">
            <label className="text-xs text-slate-400 font-semibold whitespace-nowrap">
              Select Another Person:
            </label>
            <select
              value={currentPersonId}
              onChange={(e) => setCurrentPersonId(e.target.value)}
              className="w-full sm:w-64 px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-200 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500/50"
            >
              {people.map(p => (
                <option key={p.id} value={p.id}>
                  {p.name} ({p.agentProfile.archetype})
                </option>
              ))}
            </select>
          </div>

        </div>

        {/* Filter & Search Bar */}
        <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search suitors by name or role..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <span className="text-xs text-slate-400 font-medium">Filter Fit:</span>
            <button
              onClick={() => setMinScore(0)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                minScore === 0 ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              All ({rankingsDossier.topRankings.length})
            </button>
            <button
              onClick={() => setMinScore(85)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                minScore === 85 ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Top Matches (&ge;85%)
            </button>
          </div>
        </div>
      </div>

      {/* RANKINGS LEADERBOARD */}
      <div className="space-y-4">
        {filteredRankings.map((candidate) => {
          const candidatePerson = people.find(p => p.id === candidate.candidateId);
          const isTopThree = candidate.rank <= 3;

          return (
            <div
              key={candidate.candidateId}
              className={`glass-panel rounded-2xl p-5 border transition-all duration-300 ${
                candidate.rank === 1
                  ? 'border-amber-500/50 bg-gradient-to-r from-amber-950/20 via-slate-900/90 to-slate-900/90 shadow-xl shadow-amber-950/20'
                  : candidate.rank === 2
                  ? 'border-slate-600/50 bg-slate-900/70'
                  : candidate.rank === 3
                  ? 'border-amber-800/40 bg-slate-900/70'
                  : 'border-slate-800 bg-slate-950/60'
              }`}
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
                
                {/* Left: Rank Badge + Avatar + Candidate Details */}
                <div className="flex items-start sm:items-center gap-4">
                  {/* Rank Badge */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg shrink-0 ${
                    candidate.rank === 1
                      ? 'bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/30'
                      : candidate.rank === 2
                      ? 'bg-gradient-to-br from-slate-300 to-slate-400 text-slate-950'
                      : candidate.rank === 3
                      ? 'bg-gradient-to-br from-amber-700 to-amber-900 text-amber-200'
                      : 'bg-slate-800 text-slate-400 border border-slate-700'
                  }`}>
                    {candidate.rank === 1 ? '👑 #1' : `#${candidate.rank}`}
                  </div>

                  {/* Candidate Avatar */}
                  <div 
                    onClick={() => candidatePerson && onSelectPerson(candidatePerson)}
                    className="w-14 h-14 rounded-2xl overflow-hidden border border-slate-700 shrink-0 cursor-pointer hover:scale-105 transition-transform"
                  >
                    <img src={candidate.candidateAvatar} alt={candidate.candidateName} className="w-full h-full object-cover" />
                  </div>

                  {/* Candidate Name & Tagline */}
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 
                        onClick={() => candidatePerson && onSelectPerson(candidatePerson)}
                        className="text-base font-extrabold text-white hover:text-amber-400 cursor-pointer transition-colors"
                      >
                        {candidate.candidateName}
                      </h3>
                      {candidate.rank === 1 && (
                        <span className="px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/40 rounded-full">
                          Soulmate Match
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                      {candidate.candidateTagline}
                    </p>
                    
                    {/* Match Rationale */}
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80">
                      <span className="font-bold text-amber-400">Why they fit: </span>
                      {candidate.matchRationale}
                    </p>
                  </div>
                </div>

                {/* Right: Score Gauges + Action */}
                <div className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-5 border-t lg:border-t-0 border-slate-800 pt-4 lg:pt-0">
                  
                  {/* Score Breakdown Mini Bars */}
                  <div className="w-full sm:w-48 space-y-1.5 text-[11px]">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Intellectual</span>
                      <span className="font-bold text-cyan-300">{candidate.breakdown.intellectual}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Lifestyle</span>
                      <span className="font-bold text-indigo-300">{candidate.breakdown.lifestyle}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Humor & Banter</span>
                      <span className="font-bold text-pink-300">{candidate.breakdown.humor}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Core Values</span>
                      <span className="font-bold text-rose-300">{candidate.breakdown.values}%</span>
                    </div>
                  </div>

                  {/* Overall Match Circle */}
                  <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-950 border border-slate-800 min-w-[90px]">
                    <span className="text-2xl font-black bg-gradient-to-r from-amber-400 via-rose-400 to-pink-500 bg-clip-text text-transparent">
                      {candidate.overallScore}%
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      FIT SCORE
                    </span>
                  </div>

                  {/* Watch Date Action */}
                  <button
                    onClick={() => {
                      if (candidatePerson) {
                        onWatchDate(currentPerson, candidatePerson);
                      }
                    }}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white text-xs font-bold shadow-md shadow-rose-950/40 flex items-center justify-center gap-1.5 transition-all whitespace-nowrap"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Watch Date</span>
                  </button>

                </div>

              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
