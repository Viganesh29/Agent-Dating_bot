'use client';

import React from 'react';
import { Person } from '@/types';
import { 
  X, ExternalLink, Heart, Trophy, Sparkles, Target, 
  Compass, Lightbulb, Zap, Shield, Flame, BookOpen, Clock, Smile 
} from 'lucide-react';

interface ProfileDetailProps {
  person: Person;
  onClose: () => void;
  onDateClick: (person: Person) => void;
  onViewRankings: (person: Person) => void;
}

export default function ProfileDetail({ 
  person, 
  onClose, 
  onDateClick, 
  onViewRankings 
}: ProfileDetailProps) {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div 
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200 cursor-pointer"
      role="dialog"
      aria-modal="true"
      aria-labelledby="profile-detail-title"
    >
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col cursor-default">
        
        {/* Modal Header & Hero */}
        <div className="relative bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 p-6 sm:p-8 border-b border-slate-800">
          <button 
            onClick={onClose}
            aria-label="Close dossier dialog"
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700 focus:ring-2 focus:ring-rose-500 focus:outline-none"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="relative">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-rose-500/50 shadow-xl shadow-rose-950/40">
                <img 
                  src={person.avatar} 
                  alt={person.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <span className="absolute -bottom-2 -right-2 px-2.5 py-1 text-[11px] font-bold bg-rose-600 text-white rounded-lg shadow-md">
                Agent
              </span>
            </div>

            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1.5">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {person.name}
                </h2>
                <span className="px-3 py-0.5 text-xs font-semibold bg-rose-500/20 text-rose-300 border border-rose-500/30 rounded-full">
                  {person.agentProfile.archetype}
                </span>
              </div>
              
              <p className="text-slate-300 text-sm font-medium mb-3">
                {person.tagline} • <span className="text-slate-400">{person.location}</span>
              </p>

              {/* The Two Official Sources */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
                <a 
                  href={person.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-blue-950/60 border border-blue-700/60 text-blue-300 text-xs font-semibold hover:bg-blue-900/80 transition-colors shadow-sm"
                >
                  <span className="font-bold text-blue-400">in</span>
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
                </a>

                <a 
                  href={person.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-pink-950/60 border border-pink-700/60 text-pink-300 text-xs font-semibold hover:bg-pink-900/80 transition-colors shadow-sm"
                >
                  <span className="font-bold text-pink-400">IG</span>
                  <span>Instagram ({person.instagramHandle})</span>
                  <ExternalLink className="w-3.5 h-3.5 text-pink-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Dating Quote Banner */}
          <div className="mt-5 p-3.5 rounded-xl bg-rose-950/40 border border-rose-800/40 text-rose-200 text-xs italic flex items-center gap-2.5">
            <Heart className="w-4 h-4 text-rose-400 shrink-0 fill-rose-400/20" />
            <span>&ldquo;{person.agentProfile.datingQuote}&rdquo;</span>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          
          {/* SECTION 1: THE READING (THE TWO SOURCES INGESTION ANALYSIS) */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400">
                The Reading • Dual-Source Ingestion Analysis
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* LinkedIn Source Reading */}
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2.5">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-xs font-bold text-blue-400 flex items-center gap-1.5">
                    <span className="font-black text-blue-500">in</span> LinkedIn Reading
                  </span>
                  <span className="text-[11px] text-slate-400">{person.linkedinData.education}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {person.linkedinData.summary}
                </p>
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 block mb-1">Key Professional Skills:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {person.linkedinData.skills.map((skill, idx) => (
                      <span key={idx} className="px-2 py-0.5 text-[10px] rounded-md bg-blue-950/40 text-blue-300 border border-blue-900/60">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Instagram Source Reading */}
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2.5">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-xs font-bold text-pink-400 flex items-center gap-1.5">
                    <span className="font-black text-pink-500">IG</span> Instagram Reading
                  </span>
                  <span className="text-[11px] text-pink-400 font-bold">{person.instagramData.followersCount} Followers</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed italic">
                  &ldquo;{person.instagramData.bio}&rdquo;
                </p>
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 block mb-1">Visual Aesthetic & Lifestyle:</span>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    {person.instagramData.visualAesthetic}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 2: SYNTHESIZED AGENT DOSSIER (NEEDS, HOBBIES, INTERESTS, QUALITIES) */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-2 border-t border-slate-800 pt-6">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-rose-400">
                Agent Synthesized Profile • What It Found
              </h3>
            </div>

            {/* Grid of 4 Core Dimensions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* 1. NEEDS */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-rose-900/30 space-y-3.5">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                  <Target className="w-4 h-4 text-rose-500" />
                  <h4>Needs & Dealbreakers</h4>
                </div>
                
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                    Emotional Needs:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-200">
                    {person.agentProfile.needs.emotional.map((need, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-rose-500 font-bold">•</span>
                        <span>{need}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Relationship Vision:
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {person.agentProfile.needs.relationshipGoals}
                  </p>
                </div>

                <div>
                  <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block mb-1 flex items-center gap-1">
                    <Shield className="w-3 h-3" /> Dealbreakers:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {person.agentProfile.needs.dealbreakers.map((db, i) => (
                      <span key={i} className="px-2 py-0.5 text-[10px] rounded-md bg-amber-950/40 text-amber-300 border border-amber-900/60">
                        {db}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 2. HOBBIES */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-indigo-900/30 space-y-3.5">
                <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm">
                  <Compass className="w-4 h-4 text-indigo-500" />
                  <h4>Hobbies & Offline Life</h4>
                </div>

                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                    Primary Passions:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {person.agentProfile.hobbies.primary.map((hobby, i) => (
                      <span key={i} className="px-2.5 py-1 text-xs rounded-lg bg-indigo-950/50 text-indigo-200 border border-indigo-800/60 font-medium">
                        {hobby}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Creative Outlets:
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {person.agentProfile.hobbies.creative.join(' • ')}
                  </p>
                </div>

                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> Weekend Rituals:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {person.agentProfile.hobbies.weekendRituals.map((r, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-indigo-400">→</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 3. INTERESTS */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-emerald-900/30 space-y-3.5">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <Lightbulb className="w-4 h-4 text-emerald-500" />
                  <h4>Interests & Curiosities</h4>
                </div>

                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                    Intellectual Topics:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {person.agentProfile.interests.intellectual.map((topic, i) => (
                      <span key={i} className="px-2.5 py-1 text-xs rounded-lg bg-emerald-950/50 text-emerald-200 border border-emerald-800/60 font-medium">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Favorite Debate Questions:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {person.agentProfile.interests.favoriteTopics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-1.5 italic">
                        <span className="text-emerald-400 font-bold">?</span>
                        <span>&ldquo;{topic}&rdquo;</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 4. QUALITIES */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-purple-900/30 space-y-3.5">
                <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
                  <Zap className="w-4 h-4 text-purple-500" />
                  <h4>Agent Personality Qualities</h4>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-[10px] text-slate-400 block font-bold">ENERGY LEVEL</span>
                    <span className="font-semibold text-purple-300">{person.agentProfile.qualities.energyLevel}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-[10px] text-slate-400 block font-bold">ATTACHMENT STYLE</span>
                    <span className="font-semibold text-purple-300">{person.agentProfile.qualities.attachmentStyle}</span>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Humor Style:
                  </span>
                  <p className="text-xs text-slate-300">
                    {person.agentProfile.qualities.humorStyle}
                  </p>
                </div>

                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1 flex items-center gap-1">
                    <Smile className="w-3 h-3 text-purple-400" /> Quirks:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {person.agentProfile.qualities.quirks.map((q, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-purple-400 font-bold">•</span>
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400 text-center sm:text-left">
            This agent represents <strong className="text-white">{person.name}</strong> autonomously across all dates and rankings.
          </p>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onViewRankings(person);
              }}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition-colors flex items-center justify-center gap-1.5"
            >
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>View Rankings</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onDateClick(person);
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 via-pink-600 to-rose-600 hover:from-rose-500 hover:to-pink-500 text-white text-xs font-extrabold shadow-lg shadow-rose-900/40 transition-all flex items-center justify-center gap-2"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Launch Live Date</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
