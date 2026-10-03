'use client';

import React, { useState } from 'react';
import { Person } from '@/types';
import { 
  PlusCircle, Sparkles, CheckCircle2, ArrowRight, 
  ExternalLink, Loader2, AlertCircle, Zap 
} from 'lucide-react';

interface IngestModalProps {
  onSuccess: (newPerson: Person) => void;
  onCancel: () => void;
}

export default function IngestModal({ onSuccess, onCancel }: IngestModalProps) {
  const [linkedinUrl, setLinkedinUrl] = useState<string>('');
  const [instagramUrl, setInstagramUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handlePreset = (li: string, ig: string) => {
    setLinkedinUrl(li);
    setInstagramUrl(ig);
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!linkedinUrl || !instagramUrl) {
      setError('Please provide both an official LinkedIn URL and an Instagram public profile URL.');
      return;
    }

    setLoading(true);
    setError('');
    setCurrentStep('Connecting to LinkedIn public profile & scraping career history...');

    try {
      setTimeout(() => {
        setCurrentStep('Connecting to Instagram public profile & reading bio, posts, and visual vibes...');
      }, 700);

      setTimeout(() => {
        setCurrentStep('Agent Synthesizer active: extracting Needs, Hobbies, Interests, and Qualities...');
      }, 1400);

      const res = await fetch('/api/people', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ linkedinUrl, instagramUrl }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to analyze links and synthesize agent.');
      }

      setCurrentStep('Agent synthesized! Generating initial compatibility vectors...');
      setTimeout(() => {
        setLoading(false);
        onSuccess(data.person);
      }, 600);
    } catch (err: any) {
      setLoading(false);
      setError(err?.message || 'Error processing the links. Please check the URLs and try again.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 bg-slate-900/90 shadow-2xl animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
          <PlusCircle className="w-5 h-5 text-emerald-400" />
        </div>
        <div>
          <h2 className="text-xl font-extrabold text-white tracking-tight">
            Add Person & Synthesize AI Dating Agent
          </h2>
          <p className="text-xs text-slate-400">
            Provide exactly two official links: a LinkedIn public profile + a public Instagram.
          </p>
        </div>
      </div>

      {/* Two Sources Diagram */}
      <div className="my-5 p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-300">
        <div className="flex items-center gap-2">
          <span className="font-bold text-blue-400">LinkedIn</span> (Career, Skills, Education)
        </div>
        <span className="text-slate-500">+</span>
        <div className="flex items-center gap-2">
          <span className="font-bold text-pink-400">Instagram</span> (Lifestyle, Hobbies, Vibe)
        </div>
        <span className="text-slate-500">→</span>
        <div className="flex items-center gap-2 text-rose-300 font-bold">
          <Sparkles className="w-3.5 h-3.5 text-rose-400" /> Agent Profile & Dates
        </div>
      </div>

      {/* Quick Load Presets */}
      <div className="mb-6">
        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
          Or Test Instantly with Real Verified Presets:
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          <button
            type="button"
            onClick={() => handlePreset('https://www.linkedin.com/in/alexisohanian', 'https://www.instagram.com/alexisohanian')}
            className="p-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-800 transition-colors text-left flex items-center justify-between"
          >
            <span>Alexis Ohanian</span>
            <Zap className="w-3 h-3 text-amber-400" />
          </button>

          <button
            type="button"
            onClick={() => handlePreset('https://www.linkedin.com/in/whitney-wolfe-herd-1791a299', 'https://www.instagram.com/whitney')}
            className="p-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-800 transition-colors text-left flex items-center justify-between"
          >
            <span>Whitney Wolfe Herd</span>
            <Zap className="w-3 h-3 text-amber-400" />
          </button>

          <button
            type="button"
            onClick={() => handlePreset('https://www.linkedin.com/in/brianchesky', 'https://www.instagram.com/bchesky')}
            className="p-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-800 transition-colors text-left flex items-center justify-between"
          >
            <span>Brian Chesky</span>
            <Zap className="w-3 h-3 text-amber-400" />
          </button>

          <button
            type="button"
            onClick={() => handlePreset('https://www.linkedin.com/in/marquesbrownlee', 'https://www.instagram.com/mkbhd')}
            className="p-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-800 transition-colors text-left flex items-center justify-between"
          >
            <span>Marques Brownlee</span>
            <Zap className="w-3 h-3 text-amber-400" />
          </button>

          <button
            type="button"
            onClick={() => handlePreset('https://www.linkedin.com/in/payalkadakia', 'https://www.instagram.com/payal')}
            className="p-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-800 transition-colors text-left flex items-center justify-between"
          >
            <span>Payal Kadakia</span>
            <Zap className="w-3 h-3 text-amber-400" />
          </button>

          <button
            type="button"
            onClick={() => handlePreset('https://www.linkedin.com/in/ali-abdaal', 'https://www.instagram.com/aliabdaal')}
            className="p-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-800 transition-colors text-left flex items-center justify-between"
          >
            <span>Ali Abdaal</span>
            <Zap className="w-3 h-3 text-amber-400" />
          </button>
        </div>
      </div>

      {/* Main Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="p-3.5 rounded-xl bg-rose-950/50 border border-rose-800 text-rose-300 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* LinkedIn Input */}
        <div>
          <label className="text-xs font-bold text-slate-300 block mb-1.5 flex items-center gap-1.5">
            <span className="text-blue-400 font-extrabold">in</span>
            <span>LinkedIn Public Profile URL</span>
          </label>
          <input
            type="url"
            required
            placeholder="https://www.linkedin.com/in/username"
            value={linkedinUrl}
            onChange={(e) => setLinkedinUrl(e.target.value)}
            disabled={loading}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Instagram Input */}
        <div>
          <label className="text-xs font-bold text-slate-300 block mb-1.5 flex items-center gap-1.5">
            <span className="text-pink-400 font-extrabold">IG</span>
            <span>Instagram Public Profile URL</span>
          </label>
          <input
            type="url"
            required
            placeholder="https://www.instagram.com/username"
            value={instagramUrl}
            onChange={(e) => setInstagramUrl(e.target.value)}
            disabled={loading}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-pink-500"
          />
        </div>

        {/* Progress Pipeline Animation */}
        {loading && (
          <div className="p-4 rounded-2xl bg-slate-950 border border-emerald-900/40 text-xs text-emerald-300 space-y-2 animate-in fade-in">
            <div className="flex items-center gap-2 font-bold">
              <Loader2 className="w-4 h-4 animate-spin text-emerald-400" />
              <span>Scraper & Synthesizer Pipeline Running</span>
            </div>
            <p className="text-slate-400 pl-6 text-[11px]">{currentStep}</p>
          </div>
        )}

        {/* Submit Actions */}
        <div className="flex items-center justify-end gap-3 pt-3">
          <button
            type="button"
            onClick={onCancel}
            disabled={loading}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-extrabold shadow-lg shadow-emerald-950/40 flex items-center gap-2 transition-all disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Reading & Synthesizing...</span>
              </>
            ) : (
              <>
                <span>Ingest & Create Agent</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

      </form>

    </div>
  );
}
