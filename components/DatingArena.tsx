'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Person, DateSession, DialogueTurn } from '@/types';
import { simulateDate } from '@/lib/datingEngine';
import { 
  Heart, Sparkles, MapPin, Play, Pause, RotateCcw, 
  FastForward, Brain, Flame, MessageCircle, ChevronRight, CheckCircle2 
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface DatingArenaProps {
  people: Person[];
  initialPersonA?: Person;
  initialPersonB?: Person;
  onViewPerson: (person: Person) => void;
  onViewRankings: (person: Person) => void;
}

export default function DatingArena({
  people,
  initialPersonA,
  initialPersonB,
  onViewPerson,
  onViewRankings
}: DatingArenaProps) {
  const [personA, setPersonA] = useState<Person>(initialPersonA || people[0]);
  const [personB, setPersonB] = useState<Person>(
    initialPersonB || people.find(p => p.id !== (initialPersonA || people[0]).id) || people[1]
  );

  const [dateSession, setDateSession] = useState<DateSession | null>(null);
  const [currentTurnIndex, setCurrentTurnIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [speed, setSpeed] = useState<'normal' | 'fast'>('normal');

  const dialogueEndRef = useRef<HTMLDivElement>(null);

  // Initialize or re-simulate date when people change
  useEffect(() => {
    if (personA && personB && personA.id !== personB.id) {
      const session = simulateDate(personA, personB);
      setDateSession(session);
      setCurrentTurnIndex(0);
      setIsPlaying(true);
    }
  }, [personA, personB]);

  // Handle auto-playing dialogue turns
  useEffect(() => {
    if (!isPlaying || !dateSession) return;

    if (currentTurnIndex < dateSession.dialogue.length - 1) {
      const delay = speed === 'fast' ? 1400 : 2600;
      const timer = setTimeout(() => {
        setCurrentTurnIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      setIsPlaying(false);
      // Trigger romantic celebration confetti if high score!
      if (dateSession.compatibilityScore >= 88) {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#f43f5e', '#ec4899', '#8b5cf6']
        });
      }
    }
  }, [isPlaying, currentTurnIndex, dateSession, speed]);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    dialogueEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [currentTurnIndex]);

  const handleQuickPair = (idA: string, idB: string) => {
    const a = people.find(p => p.id === idA);
    const b = people.find(p => p.id === idB);
    if (a && b) {
      setPersonA(a);
      setPersonB(b);
    }
  };

  const handleRandomPair = () => {
    const randomA = people[Math.floor(Math.random() * people.length)];
    const others = people.filter(p => p.id !== randomA.id);
    const randomB = others[Math.floor(Math.random() * others.length)];
    setPersonA(randomA);
    setPersonB(randomB);
  };

  if (!dateSession) return null;

  const visibleTurns = dateSession.dialogue.slice(0, currentTurnIndex + 1);
  const isDateComplete = currentTurnIndex >= dateSession.dialogue.length - 1;

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* ARENA HEADER: Quick Pairing Bar */}
      <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-slate-800 bg-slate-900/70">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <span>Autonomous Dating Arena</span>
            </h2>
            <p className="text-xs text-slate-400">
              Watch two AI agents meet, spar intellectually, test dealbreakers, and reveal their secret thoughts in real-time.
            </p>
          </div>

          {/* Quick Match Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider hidden sm:inline">
              Featured Dates:
            </span>
            <button
              onClick={() => handleQuickPair('alexis-ohanian', 'whitney-wolfe-herd')}
              className="px-2.5 py-1 text-xs rounded-lg bg-rose-950/40 hover:bg-rose-900/60 border border-rose-800/60 text-rose-300 font-semibold transition-colors"
            >
              Alexis & Whitney
            </button>
            <button
              onClick={() => handleQuickPair('brian-chesky', 'payal-kadakia')}
              className="px-2.5 py-1 text-xs rounded-lg bg-indigo-950/40 hover:bg-indigo-900/60 border border-indigo-800/60 text-indigo-300 font-semibold transition-colors"
            >
              Brian & Payal
            </button>
            <button
              onClick={() => handleQuickPair('marques-brownlee', 'sara-dietschy')}
              className="px-2.5 py-1 text-xs rounded-lg bg-purple-950/40 hover:bg-purple-900/60 border border-purple-800/60 text-purple-300 font-semibold transition-colors"
            >
              MKBHD & Sara
            </button>
            <button
              onClick={() => handleQuickPair('ali-abdaal', 'justine-ezarik')}
              className="px-2.5 py-1 text-xs rounded-lg bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-800/60 text-emerald-300 font-semibold transition-colors"
            >
              Ali & Justine
            </button>
            <button
              onClick={handleRandomPair}
              className="px-2.5 py-1 text-xs rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold transition-colors"
            >
              🎲 Random Pair
            </button>
          </div>
        </div>
      </div>

      {/* MATCH STAGE: Both Agents & Venue */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Date Stage & Turn-by-Turn Dialogue (8 Cols) */}
        <div className="lg:col-span-8 space-y-4">
          
          {/* Stage Banner: The Venue */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 p-5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Person A Avatar & Name */}
              <div 
                onClick={() => onViewPerson(personA)}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-xl overflow-hidden border border-rose-500/50 shadow-md group-hover:scale-105 transition-transform">
                  <img src={personA.avatar} alt={personA.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-rose-400 transition-colors">
                    {personA.name}
                  </h4>
                  <span className="text-[11px] text-rose-300 font-medium">
                    {personA.agentProfile.archetype}
                  </span>
                </div>
              </div>

              {/* Venue Card */}
              <div className="text-center px-4 py-2 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-amber-400 mb-0.5">
                  <span>{dateSession.venue.icon}</span>
                  <span>{dateSession.venue.name}</span>
                </div>
                <p className="text-[11px] text-slate-400 flex items-center justify-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-500" />
                  <span>{dateSession.venue.city} • {dateSession.venue.type}</span>
                </p>
              </div>

              {/* Person B Avatar & Name */}
              <div 
                onClick={() => onViewPerson(personB)}
                className="flex items-center gap-3 cursor-pointer group text-right sm:text-left"
              >
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {personB.name}
                  </h4>
                  <span className="text-[11px] text-indigo-300 font-medium">
                    {personB.agentProfile.archetype}
                  </span>
                </div>
                <div className="w-12 h-12 rounded-xl overflow-hidden border border-indigo-500/50 shadow-md group-hover:scale-105 transition-transform">
                  <img src={personB.avatar} alt={personB.name} className="w-full h-full object-cover" />
                </div>
              </div>

            </div>

            {/* Atmosphere description */}
            <div className="mt-3 text-center text-xs text-slate-400 italic">
              Atmosphere: &ldquo;{dateSession.venue.atmosphere}&rdquo;
            </div>
          </div>

          {/* Dialogue Transcript Container */}
          <div className="glass-panel rounded-2xl border border-slate-800 p-4 sm:p-6 bg-slate-950/80 min-h-[440px] max-h-[520px] overflow-y-auto space-y-4">
            
            {visibleTurns.map((turn, index) => {
              const isSpeakerA = turn.speakerId === personA.id;
              const speaker = isSpeakerA ? personA : personB;

              return (
                <div
                  key={index}
                  className={`flex flex-col ${isSpeakerA ? 'items-start' : 'items-end'} animate-in fade-in duration-300`}
                >
                  <div className={`flex items-start gap-2.5 max-w-[85%] ${isSpeakerA ? 'flex-row' : 'flex-row-reverse'}`}>
                    
                    {/* Speaker Avatar */}
                    <img 
                      src={speaker.avatar} 
                      alt={speaker.name}
                      className="w-8 h-8 rounded-full object-cover shrink-0 border border-slate-700 mt-1" 
                    />

                    {/* Speech Bubble */}
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-300">
                          {speaker.name.split(' ')[0]}
                        </span>
                        {turn.mood && (
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 lowercase">
                            {turn.mood}
                          </span>
                        )}
                      </div>

                      <div
                        className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-md ${
                          isSpeakerA
                            ? 'bg-slate-900 border border-rose-900/40 text-slate-100 rounded-tl-none'
                            : 'bg-indigo-950/70 border border-indigo-800/50 text-indigo-100 rounded-tr-none'
                        }`}
                      >
                        {turn.message}
                      </div>

                      {/* Secret Inner Thought */}
                      {turn.innerThought && (
                        <div
                          className={`p-2.5 rounded-xl text-[11px] italic flex items-start gap-1.5 border ${
                            isSpeakerA
                              ? 'bg-rose-950/30 border-rose-900/30 text-rose-300'
                              : 'bg-indigo-950/30 border-indigo-900/30 text-indigo-300'
                          }`}
                        >
                          <Brain className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                          <span>
                            <strong>Inner Thought:</strong> {turn.innerThought}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            <div ref={dialogueEndRef} />
          </div>

          {/* Dialogue Playback Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                disabled={isDateComplete}
                className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 disabled:opacity-50 text-white font-bold flex items-center gap-1.5 transition-colors"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isPlaying ? 'Pause' : isDateComplete ? 'Date Finished' : 'Play Live'}</span>
              </button>

              <button
                onClick={() => {
                  if (currentTurnIndex < dateSession.dialogue.length - 1) {
                    setCurrentTurnIndex(prev => prev + 1);
                  }
                }}
                disabled={isDateComplete}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-slate-200 font-semibold border border-slate-700 transition-colors flex items-center gap-1"
              >
                <span>Next Line</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => {
                  setCurrentTurnIndex(dateSession.dialogue.length - 1);
                  setIsPlaying(false);
                }}
                disabled={isDateComplete}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-slate-300 font-semibold border border-slate-700 transition-colors flex items-center gap-1"
              >
                <FastForward className="w-3.5 h-3.5" />
                <span>Instant Reveal</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setSpeed(speed === 'normal' ? 'fast' : 'normal')}
                className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 font-medium"
              >
                Speed: {speed === 'normal' ? '1x' : '2x'}
              </button>

              <button
                onClick={() => {
                  setCurrentTurnIndex(0);
                  setIsPlaying(true);
                }}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
                title="Restart Date"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Live Chemistry & Date Takeaway (4 Cols) */}
        <div className="lg:col-span-4 space-y-4">
          
          {/* Real-time Chemistry Card */}
          <div className="glass-panel p-5 rounded-2xl border border-slate-800 bg-slate-900/80 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-rose-500 fill-rose-500/20" /> Chemistry Meter
              </span>
              <span className="text-xl font-black bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
                {dateSession.compatibilityScore}%
              </span>
            </div>

            {/* Score Breakdown Bars */}
            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between text-slate-400 mb-1">
                  <span>Intellectual Sparring</span>
                  <span className="font-bold text-cyan-300">{dateSession.takeaway.scoreBreakdown.intellectual}%</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-cyan-500 h-full rounded-full transition-all duration-1000"
                    style={{ width: `${dateSession.takeaway.scoreBreakdown.intellectual}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-slate-400 mb-1">
                  <span>Lifestyle & Hobbies Synergy</span>
                  <span className="font-bold text-indigo-300">{dateSession.takeaway.scoreBreakdown.lifestyle}%</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-indigo-500 h-full rounded-full transition-all duration-1000"
                    style={{ width: `${dateSession.takeaway.scoreBreakdown.lifestyle}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-slate-400 mb-1">
                  <span>Humor & Banter Chemistry</span>
                  <span className="font-bold text-pink-300">{dateSession.takeaway.scoreBreakdown.humor}%</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-pink-500 h-full rounded-full transition-all duration-1000"
                    style={{ width: `${dateSession.takeaway.scoreBreakdown.humor}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-slate-400 mb-1">
                  <span>Values & Emotional Needs</span>
                  <span className="font-bold text-rose-300">{dateSession.takeaway.scoreBreakdown.values}%</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-rose-500 h-full rounded-full transition-all duration-1000"
                    style={{ width: `${dateSession.takeaway.scoreBreakdown.values}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Verdict Badge */}
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-0.5">
                AGENT VERDICT
              </span>
              <span className="text-sm font-extrabold text-rose-300">
                {dateSession.takeaway.verdict}
              </span>
            </div>
          </div>

          {/* Date Takeaways & Analysis */}
          <div className="glass-panel p-5 rounded-2xl border border-slate-800 bg-slate-900/80 space-y-3.5">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Date Debrief & Dynamics
            </h4>

            <p className="text-xs text-slate-300 leading-relaxed">
              {dateSession.takeaway.chemistryAnalysis}
            </p>

            <div className="space-y-1.5 pt-2 border-t border-slate-800">
              <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Observed Strengths:
              </span>
              <ul className="text-xs text-slate-300 space-y-1">
                {dateSession.takeaway.strengths.map((str, i) => (
                  <li key={i} className="flex items-start gap-1">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>{str}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => onViewRankings(personA)}
                className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
              >
                View All {personA.name.split(' ')[0]}&apos;s Rankings
              </button>

              <button
                onClick={() => onViewRankings(personB)}
                className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
              >
                View All {personB.name.split(' ')[0]}&apos;s Rankings
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
