'use client';

import React from 'react';
import { Person } from '@/types';
import { ExternalLink, Heart, Sparkles, Compass, Target, MessageSquare } from 'lucide-react';

interface ProfileCardProps {
  person: Person;
  onSelect: (person: Person) => void;
  onDateClick: (person: Person) => void;
}

export default function ProfileCard({ person, onSelect, onDateClick }: ProfileCardProps) {
  return (
    <div className="glass-panel glass-panel-hover rounded-2xl p-5 flex flex-col justify-between border border-slate-800 bg-slate-900/60 transition-all duration-300">
      <div>
        {/* Top Badges & Image */}
        <div className="relative mb-4">
          <div className="w-full h-48 rounded-xl overflow-hidden relative group">
            <img 
              src={person.avatar} 
              alt={person.name}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
            
            {/* Archetype Ribbon */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
              <span className="px-2.5 py-1 text-xs font-semibold bg-rose-500/90 text-white rounded-lg backdrop-blur-md shadow-md flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                {person.agentProfile.archetype}
              </span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-950/80 text-slate-300 border border-slate-700/50">
                {person.location.split(',')[0]}
              </span>
            </div>
          </div>
        </div>

        {/* Identity & Tagline */}
        <div className="mb-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white tracking-tight hover:text-rose-400 cursor-pointer transition-colors" onClick={() => onSelect(person)}>
              {person.name}
            </h3>
            <span className="text-xs text-slate-400 font-medium">{person.age} yrs</span>
          </div>
          <p className="text-xs text-slate-400 font-medium line-clamp-1 mt-0.5">
            {person.tagline}
          </p>
        </div>

        {/* Two Official Sources Badges */}
        <div className="grid grid-cols-2 gap-2 mb-3.5 pt-1">
          <a 
            href={person.linkedinUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-blue-950/40 border border-blue-800/40 text-blue-300 text-[11px] font-medium hover:bg-blue-900/50 transition-colors"
          >
            <span className="flex items-center gap-1.5">
              <span className="font-bold text-blue-400">in</span> LinkedIn
            </span>
            <ExternalLink className="w-3 h-3 text-blue-400" />
          </a>

          <a 
            href={person.instagramUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-pink-950/40 border border-pink-800/40 text-pink-300 text-[11px] font-medium hover:bg-pink-900/50 transition-colors"
          >
            <span className="flex items-center gap-1.5">
              <span className="font-bold text-pink-400">IG</span> {person.instagramHandle}
            </span>
            <ExternalLink className="w-3 h-3 text-pink-400" />
          </a>
        </div>

        {/* Agent Readout Preview: Needs & Hobbies */}
        <div className="space-y-2 text-xs border-t border-slate-800/80 pt-3">
          <div>
            <div className="flex items-center gap-1 text-[11px] font-bold text-rose-400 uppercase tracking-wider mb-1">
              <Target className="w-3 h-3" /> Core Need
            </div>
            <p className="text-slate-300 line-clamp-2 leading-relaxed text-[11px]">
              {person.agentProfile.needs.emotional[0]}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-1 text-[11px] font-bold text-indigo-400 uppercase tracking-wider mb-1">
              <Compass className="w-3 h-3" /> Hobbies & Passions
            </div>
            <div className="flex flex-wrap gap-1">
              {person.agentProfile.hobbies.primary.slice(0, 2).map((hobby, i) => (
                <span key={i} className="px-2 py-0.5 text-[10px] rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-800/80">
        <button
          onClick={() => onSelect(person)}
          className="w-full py-2 px-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700/80 transition-all flex items-center justify-center gap-1.5"
        >
          <span>View Dossier</span>
        </button>

        <button
          onClick={() => onDateClick(person)}
          className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white text-xs font-bold shadow-md shadow-rose-900/30 transition-all flex items-center justify-center gap-1.5"
        >
          <Heart className="w-3.5 h-3.5 fill-white" />
          <span>Date Agent</span>
        </button>
      </div>
    </div>
  );
}
