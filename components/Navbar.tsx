'use client';

import React from 'react';
import { Heart, Users, Sparkles, Trophy, PlusCircle } from 'lucide-react';

interface NavbarProps {
  activeTab: 'profiles' | 'arena' | 'rankings' | 'ingest';
  setActiveTab: (tab: 'profiles' | 'arena' | 'rankings' | 'ingest') => void;
  peopleCount: number;
}

export default function Navbar({ activeTab, setActiveTab, peopleCount }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand */}
        <div 
          onClick={() => setActiveTab('profiles')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-rose-600 via-pink-600 to-indigo-600 p-[2px] shadow-lg shadow-rose-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
              <Heart className="w-6 h-6 text-rose-500 fill-rose-500/30 animate-pulse" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-white via-rose-100 to-pink-300 bg-clip-text text-transparent">
                AgentMatch
              </span>
              <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/30 rounded-full">
                AI Dating Engine
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium hidden sm:block">
              Agents date on their behalf • LinkedIn + Instagram Intelligence
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => setActiveTab('profiles')}
            className={`flex items-center gap-2 px-3.5 py-2 min-h-[44px] rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'profiles'
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
            }`}
          >
            <Users className="w-4 h-4 text-rose-400" />
            <span>Agents</span>
            <span className="ml-0.5 px-1.5 py-0.2 text-[11px] font-bold bg-slate-800 text-rose-300 rounded-full">
              {peopleCount}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('arena')}
            className={`flex items-center gap-2 px-3.5 py-2 min-h-[44px] rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'arena'
                ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
            }`}
          >
            <Sparkles className="w-4 h-4 text-indigo-400 animate-spin-slow" />
            <span>Dating Arena</span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
          </button>

          <button
            onClick={() => setActiveTab('rankings')}
            className={`flex items-center gap-2 px-3.5 py-2 min-h-[44px] rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'rankings'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
            }`}
          >
            <Trophy className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">Rankings</span>
            <span className="sm:hidden">Rank</span>
          </button>

          <button
            onClick={() => setActiveTab('ingest')}
            className={`flex items-center gap-2 px-3.5 py-2 min-h-[44px] rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'ingest'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
            }`}
          >
            <PlusCircle className="w-4 h-4 text-emerald-400" />
            <span className="hidden md:inline">Add Person</span>
            <span className="md:hidden">Add</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
