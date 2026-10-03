'use client';

import React from 'react';
import { 
  X, Video, Play, Sparkles, CheckCircle2, 
  Clock, Compass, Target, Trophy, ExternalLink 
} from 'lucide-react';

interface VideoGuideModalProps {
  onClose: () => void;
  onStartTour: () => void;
}

export default function VideoGuideModal({ onClose, onStartTour }: VideoGuideModalProps) {
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
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200 cursor-pointer"
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col cursor-default">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-rose-950 via-slate-900 to-indigo-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-600/30 border border-rose-500/40 flex items-center justify-center">
              <Video className="w-5 h-5 text-rose-400" aria-hidden="true" />
            </div>
            <div>
              <h3 id="video-modal-title" className="text-lg font-bold text-white">
                3-Minute Official Video Tour & Evaluation Guide
              </h3>
              <p className="text-xs text-slate-400">
                Showcasing 34 real people dating autonomously through AI agents
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close video tour guide"
            className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors focus:ring-2 focus:ring-rose-500 focus:outline-none"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-xs text-slate-300">
          
          {/* Executive Overview */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <span className="font-extrabold text-white text-sm block">
              What This System Achieves
            </span>
            <p className="leading-relaxed">
              Every person is represented by an autonomous AI agent. There are exactly two sources of information: their official public LinkedIn and public Instagram. The agent reads both, synthesizes their Needs, Hobbies, Interests, and Qualities into a structured dossier, dates other agents on their behalf with real-time thoughts, and ranks who fits each person best.
            </p>
          </div>

          {/* 3-Minute Video Timeline */}
          <div>
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-rose-400" /> Exact 3-Minute Video Structure
            </h4>

            <div className="space-y-3">
              {/* Part 1 */}
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
                <span className="px-2 py-1 rounded bg-rose-950/80 text-rose-300 font-black text-[11px] shrink-0">
                  0:00 - 0:45
                </span>
                <div>
                  <strong className="text-white block mb-0.5">
                    1. Dual-Source Reading & Profile Page Analysis
                  </strong>
                  <p className="text-slate-400">
                    Open an agent&apos;s profile page (e.g. Alexis Ohanian, Whitney Wolfe Herd, Brian Chesky). Inspect both official links (LinkedIn & Instagram). Show how the agent reads both platforms and reveals their Needs, Hobbies, Interests, and Qualities.
                  </p>
                </div>
              </div>

              {/* Part 2 */}
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
                <span className="px-2 py-1 rounded bg-indigo-950/80 text-indigo-300 font-black text-[11px] shrink-0">
                  0:45 - 2:00
                </span>
                <div>
                  <strong className="text-white block mb-0.5">
                    2. The Agents Actually Dating (Real-Time Dialogue & Secret Thoughts)
                  </strong>
                  <p className="text-slate-400">
                    Watch the agents go out on a date! Notice the venue atmosphere, turn-by-turn dialogue, real-time chemistry meter, and secret inner thoughts as the agents test mutual compatibility and dealbreakers.
                  </p>
                </div>
              </div>

              {/* Part 3 */}
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
                <span className="px-2 py-1 rounded bg-amber-950/80 text-amber-300 font-black text-[11px] shrink-0">
                  2:00 - 2:30
                </span>
                <div>
                  <strong className="text-white block mb-0.5">
                    3. Live Ingestion: Pasting New Official Links
                  </strong>
                  <p className="text-slate-400">
                    Demonstrate adding a new person: paste their LinkedIn and Instagram public links, trigger live scraping and synthesis, and immediately produce their new profile page.
                  </p>
                </div>
              </div>

              {/* Part 4 */}
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
                <span className="px-2 py-1 rounded bg-emerald-950/80 text-emerald-300 font-black text-[11px] shrink-0">
                  2:30 - 3:00
                </span>
                <div>
                  <strong className="text-white block mb-0.5">
                    4. The Rankings Matrix (Who Fits Best)
                  </strong>
                  <p className="text-slate-400">
                    Open the rankings leaderboard for any person. View all candidates ranked #1 to #33 with score breakdown, compatibility rationale, and one-click date replays.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Section Preview */}
          <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-900/40 space-y-1.5">
            <span className="font-bold text-indigo-300 text-xs block">
              Technical Section: Scraping Stack
            </span>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              Dual-source scraper pipeline using high-fidelity HTTP headers with browser emulation, OpenGraph & JSON-LD microdata parsers, DOM schema extractors, and LLM Persona Synthesizer that compiles unstructured social media into validated agent dossiers.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Ready to experience the working platform?
          </span>

          <button
            onClick={() => {
              onClose();
              onStartTour();
            }}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 via-pink-600 to-indigo-600 hover:from-rose-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-rose-950/40 flex items-center gap-2 transition-all"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Start Interactive Walkthrough</span>
          </button>
        </div>

      </div>
    </div>
  );
}
