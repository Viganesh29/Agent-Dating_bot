'use client';

import React, { useState, useEffect } from 'react';
import { Person } from '@/types';
import { INITIAL_PEOPLE } from '@/data/people';
import Navbar from '@/components/Navbar';
import ProfileCard from '@/components/ProfileCard';
import ProfileDetail from '@/components/ProfileDetail';
import DatingArena from '@/components/DatingArena';
import RankingsView from '@/components/RankingsView';
import IngestModal from '@/components/IngestModal';
import VideoGuideModal from '@/components/VideoGuideModal';
import { 
  Heart, Sparkles, Users, Trophy, PlusCircle, Video, 
  Search, ExternalLink, ArrowRight, ShieldCheck, Zap 
} from 'lucide-react';

export default function HomePage() {
  const [people, setPeople] = useState<Person[]>(INITIAL_PEOPLE);
  const [activeTab, setActiveTab] = useState<'profiles' | 'arena' | 'rankings' | 'ingest' | 'video'>('profiles');
  
  // Selected state for modals & transitions
  const [inspectingPerson, setInspectingPerson] = useState<Person | null>(null);
  const [arenaPersonA, setArenaPersonA] = useState<Person>(INITIAL_PEOPLE[0]);
  const [arenaPersonB, setArenaPersonB] = useState<Person>(INITIAL_PEOPLE[1]);
  const [rankingsTargetPerson, setRankingsTargetPerson] = useState<Person>(INITIAL_PEOPLE[0]);
  
  // Search & Filter
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedGender, setSelectedGender] = useState<'all' | 'male' | 'female'>('all');

  // Load latest people from API if any added
  useEffect(() => {
    fetch('/api/people')
      .then(res => res.json())
      .then(data => {
        if (data?.people && Array.isArray(data.people)) {
          setPeople(data.people);
        }
      })
      .catch(err => console.warn('Could not sync people:', err));
  }, []);

  // Filtered people
  const filteredPeople = people.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.agentProfile.archetype.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGender = selectedGender === 'all' || p.gender === selectedGender;
    return matchesSearch && matchesGender;
  });

  // Action handlers
  const handleStartTour = () => {
    // Open profile of Alexis Ohanian first to inspect analysis & sources
    const alexis = people.find(p => p.id === 'alexis-ohanian') || people[0];
    setInspectingPerson(alexis);
  };

  const handleDateClick = (person: Person) => {
    setArenaPersonA(person);
    const candidate = people.find(p => p.id !== person.id) || people[1];
    setArenaPersonB(candidate);
    setActiveTab('arena');
  };

  const handleViewRankings = (person: Person) => {
    setRankingsTargetPerson(person);
    setActiveTab('rankings');
  };

  const handleWatchDateBetween = (personA: Person, personB: Person) => {
    setArenaPersonA(personA);
    setArenaPersonB(personB);
    setActiveTab('arena');
  };

  const handleNewPersonCreated = (newPerson: Person) => {
    setPeople(prev => [newPerson, ...prev]);
    setInspectingPerson(newPerson);
    setActiveTab('profiles');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#090d16] text-slate-100 selection:bg-rose-500 selection:text-white">
      
      {/* Skip Link for Keyboard Accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 px-4 py-2 bg-rose-600 text-white font-bold rounded-xl shadow-xl focus:outline-none focus:ring-2 focus:ring-white text-xs"
      >
        Skip to main content
      </a>

      {/* Top Navigation */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        peopleCount={people.length} 
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 focus:outline-none" tabIndex={-1}>
        
        {/* HERO BANNER */}
        <section className="relative overflow-hidden rounded-3xl p-6 sm:p-10 border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/70 shadow-2xl">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-rose-600/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-600/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Autonomous AI Dating Harness • {people.length} Real Verified Cohort</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Each person has an agent. <br />
              <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                The agents date each other.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed mb-6">
              There are exactly two sources of truth: each person&apos;s official public <strong>LinkedIn</strong> and public <strong>Instagram</strong>. The agent reads both, synthesizes their Needs, Hobbies, Interests, and Qualities, dates other agents on their behalf, and reveals who fits them best.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setActiveTab('arena')}
                className="px-5 py-3 rounded-2xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white text-xs sm:text-sm font-extrabold shadow-lg shadow-rose-950/40 flex items-center gap-2 transition-all min-h-[44px]"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Watch Live Agent Dates</span>
              </button>

              <button
                onClick={() => setActiveTab('rankings')}
                className="px-5 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-bold border border-slate-700 transition-all flex items-center gap-2 min-h-[44px]"
              >
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>View Final Rankings</span>
              </button>

              <button
                onClick={() => setActiveTab('ingest')}
                className="px-4 py-3 rounded-2xl bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-300 text-xs sm:text-sm font-bold border border-emerald-800/60 transition-all flex items-center gap-2 min-h-[44px]"
              >
                <PlusCircle className="w-4 h-4 text-emerald-400" />
                <span>Paste Your Own Public Links</span>
              </button>
            </div>
          </div>
        </section>

        {/* TAB 1: PROFILES GALLERY */}
        {activeTab === 'profiles' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Semantic Section Heading */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div>
                <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                  <Users className="w-5 h-5 text-rose-500" />
                  <span>Verified Agent Profiles Directory</span>
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Inspect dual-source intelligence dossiers or launch autonomous dates.
                </p>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-900 text-rose-400 border border-slate-800">
                {filteredPeople.length} Agents Available
              </span>
            </div>

            {/* Gallery Control Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 glass-panel p-4 rounded-2xl border border-slate-800 bg-slate-900/60">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" aria-hidden="true" />
                <input
                  id="agent-search-input"
                  type="text"
                  aria-label="Search among real people by name, tagline, or archetype"
                  placeholder="Search among 34 real people..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 min-h-[44px] rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/30"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  onClick={() => setSelectedGender('all')}
                  className={`px-4 py-2 min-h-[44px] rounded-xl text-xs font-semibold transition-colors focus:ring-2 focus:ring-rose-500 focus:outline-none ${
                    selectedGender === 'all' ? 'bg-rose-600 text-white shadow-md' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  All ({people.length})
                </button>
                <button
                  onClick={() => setSelectedGender('female')}
                  className={`px-4 py-2 min-h-[44px] rounded-xl text-xs font-semibold transition-colors focus:ring-2 focus:ring-rose-500 focus:outline-none ${
                    selectedGender === 'female' ? 'bg-rose-600 text-white shadow-md' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  Women
                </button>
                <button
                  onClick={() => setSelectedGender('male')}
                  className={`px-4 py-2 min-h-[44px] rounded-xl text-xs font-semibold transition-colors focus:ring-2 focus:ring-rose-500 focus:outline-none ${
                    selectedGender === 'male' ? 'bg-rose-600 text-white shadow-md' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  Men
                </button>
              </div>
            </div>

            {/* Grid of Profile Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPeople.map(person => (
                <ProfileCard
                  key={person.id}
                  person={person}
                  onSelect={(p) => setInspectingPerson(p)}
                  onDateClick={(p) => handleDateClick(p)}
                />
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: DATING ARENA */}
        {activeTab === 'arena' && (
          <DatingArena
            people={people}
            initialPersonA={arenaPersonA}
            initialPersonB={arenaPersonB}
            onViewPerson={(p) => setInspectingPerson(p)}
            onViewRankings={(p) => handleViewRankings(p)}
          />
        )}

        {/* TAB 3: RANKINGS MATRIX */}
        {activeTab === 'rankings' && (
          <RankingsView
            people={people}
            selectedPersonId={rankingsTargetPerson?.id}
            onSelectPerson={(p) => setInspectingPerson(p)}
            onWatchDate={(pA, pB) => handleWatchDateBetween(pA, pB)}
          />
        )}

        {/* TAB 4: ADD PERSON / INGEST */}
        {activeTab === 'ingest' && (
          <IngestModal
            onSuccess={handleNewPersonCreated}
            onCancel={() => setActiveTab('profiles')}
          />
        )}

        {/* TAB 5: VIDEO WALKTHROUGH GUIDE */}
        {activeTab === 'video' && (
          <VideoGuideModal
            onClose={() => setActiveTab('profiles')}
            onStartTour={handleStartTour}
          />
        )}

      </main>

      {/* Profile Detail Modal */}
      {inspectingPerson && (
        <ProfileDetail
          person={inspectingPerson}
          onClose={() => setInspectingPerson(null)}
          onDateClick={handleDateClick}
          onViewRankings={handleViewRankings}
        />
      )}

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-8 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-rose-500" />
            <span className="font-bold text-slate-300">AgentMatch AI</span>
            <span>• Autonomous Multi-Agent Dating Simulation</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>Dual-Source Intelligence: LinkedIn + Instagram</span>
            <span>•</span>
            <span>34 Real Verified Cohort</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
