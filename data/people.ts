import { Person } from '@/types';

export const INITIAL_PEOPLE: Person[] = [
  {
    id: 'alexis-ohanian',
    name: 'Alexis Ohanian',
    gender: 'male',
    age: 41,
    tagline: 'Founder of Seven Seven Six & Co-Founder of Reddit',
    location: 'West Palm Beach, FL & San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    linkedinUrl: 'https://www.linkedin.com/in/alexisohanian',
    instagramUrl: 'https://www.instagram.com/alexisohanian',
    instagramHandle: '@alexisohanian',
    linkedinData: {
      headline: 'General Partner at 776 | Co-founder Reddit | Angel City FC Owner',
      currentRole: 'Founding Partner at Seven Seven Six (776)',
      company: 'Seven Seven Six (776)',
      education: 'University of Virginia (History & Commerce)',
      skills: ['Venture Capital', 'Startup Incubation', 'Community Building', 'Sports Franchise Leadership', 'Product Strategy'],
      summary: 'Passionate tech founder turned early-stage investor backer of bold climate, software, and sports tech startups. Advocate for paid family leave and gender equity in sports.',
      achievements: [
        'Co-founded Reddit, scaling it into the front page of the internet',
        'Founded venture firm 776 managing over $900M in assets',
        'Lead founding investor in Angel City FC and Los Angeles Golf Club'
      ]
    },
    instagramData: {
      bio: 'Business dad, husband to Serena, father to Olympia & Adira. Collector of cards, pancakes artist, backer of underdogs.',
      postsSummary: 'Showcases playful pancake art mornings with kids, sideline cheers at women soccer matches, vintage card collecting, and candid casual kitchen chats.',
      visualAesthetic: 'Warm family candids, vibrant sports sidelines, behind-the-scenes boardrooms in hoodies and graphic tees.',
      recentInterests: ['Pancake Art & Baking', 'Sports Memorabilia', 'Women Sports Equity', 'Sci-Fi Graphic Novels'],
      lifestyleHighlights: ['Weekend waffle breakfasts', 'Collecting rare 90s Marvel comics', 'Courtside tennis games'],
      followersCount: '780K'
    },
    agentProfile: {
      archetype: 'The Visionary Protector & Playful Builder',
      tagline: 'High-conviction venture builder with an enormous heart for family and community.',
      datingQuote: 'I want someone who dreams on a planetary scale by day and can laugh over burnt pancakes by night.',
      needs: {
        emotional: [
          'Unconditional mutual celebration of ambitious moonshots',
          'Vulnerability and grounding away from Silicon Valley noise',
          'Shared devotion to nurturing family and giving back'
        ],
        communication: [
          'Warm, witty, and direct banter with zero pretense',
          'Open conversational curiosity about everything from gaming to macroeconomics'
        ],
        relationshipGoals: 'A power-duo life partnership where we build generational impact while preserving cozy Sunday morning rituals.',
        dealbreakers: ['Cynicism towards human optimism', 'Lack of empathy for working parents', 'Status-seeking over substance']
      },
      hobbies: {
        primary: ['Pancake sculpture art', 'Trading card investing', 'Youth soccer mentoring'],
        creative: ['Graphic design doodling', 'Podcast hosting', 'Storytelling with kids'],
        weekendRituals: ['Elaborate Sunday breakfast creations', 'Cheering at women sports matches', 'Sci-fi reading sessions']
      },
      interests: {
        intellectual: ['Decentralized protocols', 'Clean energy startups', 'History of ancient civilizations'],
        cultural: ['Comic book lore', 'Pop culture nostalgia', 'Modern culinary experimentation'],
        favoriteTopics: ['How to build enduring digital communities', 'The future of women sports fandom', 'Star Wars philosophy']
      },
      qualities: {
        energyLevel: 'High Energy & Dynamic',
        attachmentStyle: 'Secure & Deeply Devoted',
        humorStyle: 'Self-deprecating dad jokes meets sharp internet sarcasm',
        loveLanguages: ['Acts of Service', 'Quality Time'],
        socialBattery: 'Ambidextrous: thriving on stage yet recharging in quiet domestic tranquility',
        quirks: ['Obsessively tracks rare Pokemon and Serena Williams rookie cards', 'Perfects pancake batter chemistry for cartoon characters']
      }
    }
  },
  {
    id: 'whitney-wolfe-herd',
    name: 'Whitney Wolfe Herd',
    gender: 'female',
    age: 35,
    tagline: 'Founder & Executive Chair of Bumble',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    linkedinUrl: 'https://www.linkedin.com/in/whitney-wolfe-herd-1791a299',
    instagramUrl: 'https://www.instagram.com/whitney',
    instagramHandle: '@whitney',
    linkedinData: {
      headline: 'Founder & Executive Chair, Bumble Inc. | Empowering Women Globally',
      currentRole: 'Executive Chair at Bumble Inc.',
      company: 'Bumble',
      education: 'Southern Methodist University (International Studies)',
      skills: ['Brand Architecture', 'Social Networking Strategy', 'Public Markets Leadership', 'Consumer Psychology', 'Mission-Driven Culture'],
      summary: 'Pioneered making the first move for women in dating. Champion for digital safety laws against cyber harassment and ethical tech design.',
      achievements: [
        'Took Bumble public as the youngest female self-made billionaire in 2021',
        'Helped pass anti-cyber harassment legislation in Texas and beyond',
        'Built a community of over 100M registered singles across 150 countries'
      ]
    },
    instagramData: {
      bio: 'Mom, wife, founder. Making romance kinder and relationships safer. Texan sun & Mediterranean escapes.',
      postsSummary: 'Elegant mix of Austin outdoor living, equestrian escapes, chic neutral fashion, toddler hugs, and empowering keynote snapshots.',
      visualAesthetic: 'Golden hour warmth, crisp whites, earthy Texas landscapes, tasteful modern minimalism.',
      recentInterests: ['Equestrian riding', 'Interior design', 'Mindful parenting', 'Regenerative wellness'],
      lifestyleHighlights: ['Ranch mornings in Texas', 'European seaside dinners', 'Pilates and breathwork'],
      followersCount: '410K'
    },
    agentProfile: {
      archetype: 'The Empowered Romantic & Culture Shaper',
      tagline: 'Rewriting relationship rules with relentless courage, kindness, and elegance.',
      datingQuote: 'Chemistry begins when kindness is treated as strength, not weakness. Let us make the first move.',
      needs: {
        emotional: [
          'Emotional intelligence and genuine chivalry without ego battles',
          'Space to decompress from public scrutiny in a safe sanctuary',
          'Mutual respect for boundaries and ethical grounding'
        ],
        communication: [
          'Thoughtful, intentional, and emotionally attuned dialogue',
          'Honest vulnerability paired with sharp executive insight'
        ],
        relationshipGoals: 'A deeply equal, affectionate partnership anchored in mutual adoration, kindness, and big societal ambitions.',
        dealbreakers: ['Fragile masculinity', 'Condescension', 'Cruelty masquerading as humor']
      },
      hobbies: {
        primary: ['Horseback riding across Hill Country', 'Pilates reformer sessions', 'Landscape architecture'],
        creative: ['Curating residential art & texture palettes', 'Designing cozy gathering spaces'],
        weekendRituals: ['Early morning walks with dogs', 'Farm-to-table family cooking', 'Sunset patio wine']
      },
      interests: {
        intellectual: ['Behavioral psychology of attraction', 'Algorithmic ethics and AI safety', 'Public policy on digital harassment'],
        cultural: ['Modern architectural design', 'Mediterranean culinary traditions', 'Documentaries on historic pioneers'],
        favoriteTopics: ['Why the first move shifts power dynamics', 'Creating safety in the digital public square', 'Balancing motherhood and scale']
      },
      qualities: {
        energyLevel: 'Balanced & Intentional',
        attachmentStyle: 'Secure & Autonomous',
        humorStyle: 'Graceful, understated, and playfully perceptive',
        loveLanguages: ['Words of Affirmation', 'Physical Touch'],
        socialBattery: 'Selective: effortlessly charismatic in crowds, but craves tranquil intimate evenings',
        quirks: ['Color-codes calendar by energy type', 'Has an encyclopedic memory for people first date stories']
      }
    }
  },
  {
    id: 'brian-chesky',
    name: 'Brian Chesky',
    gender: 'male',
    age: 43,
    tagline: 'Co-Founder & CEO of Airbnb',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    linkedinUrl: 'https://www.linkedin.com/in/brianchesky',
    instagramUrl: 'https://www.instagram.com/bchesky',
    instagramHandle: '@bchesky',
    linkedinData: {
      headline: 'Co-Founder and CEO at Airbnb | Industrial Designer',
      currentRole: 'CEO at Airbnb',
      company: 'Airbnb',
      education: 'Rhode Island School of Design (RISD) - Industrial Design',
      skills: ['Product Design', 'Brand Storytelling', 'Founder-Led Management', 'Global Hospitality', 'Design Thinking'],
      summary: 'Designer-turned-CEO passionate about creating a world where anyone can belong anywhere. Champion of founder-mode and craftsmanship in software.',
      achievements: [
        'Transformed renting air mattresses in an SF apartment into a $90B global travel revolution',
        'Redesigned Airbnb from first principles during the 2020 pandemic turnaround',
        'Pioneered living anywhere as a lifestyle and remote-work model'
      ]
    },
    instagramData: {
      bio: 'Living in Airbnbs with my golden retriever Sophie. Designing things that bring people together.',
      postsSummary: 'Architectural gems, mid-century modern furniture, snapshots with his Golden Retriever pup, travel wanderlust, and design sketches.',
      visualAesthetic: 'Architectural clarity, warm wooden tones, Bauhaus typography, sun-drenched minimalist interiors.',
      recentInterests: ['Mid-century modern chairs', 'Dog agility training', 'Living out of suitcases', 'Classical sculpture'],
      lifestyleHighlights: ['Testing new Airbnb icons worldwide', 'Gym workouts with classic barbell bodybuilding', 'Coffee shop sketching'],
      followersCount: '345K'
    },
    agentProfile: {
      archetype: 'The Aesthetic Purist & Nomad Romantic',
      tagline: 'An industrial designer at heart searching for beauty, connection, and belonging.',
      datingQuote: 'Connection is not just shared interest—it is shared aesthetic resonance and feeling like home wherever we land.',
      needs: {
        emotional: [
          'Deep creative resonance and appreciation for craft and nuance',
          'Patience with an obsessive creative mind that notices every detail',
          'A companion who loves adventuring spontaneously to obscure corners of the globe'
        ],
        communication: [
          'Visual, philosophical, and intensely curious exchanges',
          'Story-driven conversational arcs rather than dry facts'
        ],
        relationshipGoals: 'A lifelong odyssey of shared travel, creative projects, and transforming living spaces into works of art.',
        dealbreakers: ['Indifference to art and aesthetics', 'Fear of adventure and change', 'Bureaucratic mindset']
      },
      hobbies: {
        primary: ['Sketching interior architectural layouts', 'Old-school bodybuilding training', 'Dog walks through coastal trails'],
        creative: ['Furniture restoration', 'Curating world music playlists', 'Crafting guest hospitality experiences'],
        weekendRituals: ['Checking into a surprise Airbnb cabin', 'Reading design monographs with espresso', 'Throwing dinner salons']
      },
      interests: {
        intellectual: ['The psychology of belonging', 'Evolution of urbanism and zoning', 'Bauhaus design pedagogy'],
        cultural: ['Japanese wabi-sabi', 'Italian mid-century cinema', 'World folk craft traditions'],
        favoriteTopics: ['Why software needs more tactile soul', 'The loneliest cities on earth and how to heal them', 'Perfect chair ergonomics']
      },
      qualities: {
        energyLevel: 'Balanced & Intentional',
        attachmentStyle: 'Secure & Thoughtful',
        humorStyle: 'Dry, observant, and delightfully earnest',
        loveLanguages: ['Quality Time', 'Receiving Gifts (hand-crafted artifacts)'],
        socialBattery: 'Introverted visionary who blossoms in one-on-one deep conversations',
        quirks: ['Inspects dovetail joints on dining tables before sitting down', 'Can name the designer and year of almost any mid-century armchair']
      }
    }
  },
  {
    id: 'payal-kadakia',
    name: 'Payal Kadakia',
    gender: 'female',
    age: 41,
    tagline: 'Founder of ClassPass, Artistic Director of The Sa Dance Company & Author of LifePass',
    location: 'New York, NY & Los Angeles, CA',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    linkedinUrl: 'https://www.linkedin.com/in/payalkadakia',
    instagramUrl: 'https://www.instagram.com/payal',
    instagramHandle: '@payal',
    linkedinData: {
      headline: 'Founder, ClassPass | Author, LifePass | Founder, The Sa Dance Company | MIT Alum',
      currentRole: 'Executive Chairman & Founder at ClassPass',
      company: 'ClassPass (acquired by Mindbody)',
      education: 'Massachusetts Institute of Technology (MIT) - Economics & Operations Research',
      skills: ['Venture Strategy', 'Operational Rigor', 'Creative Direction', 'Performing Arts', 'Personal Goal Systems'],
      summary: 'Bridged rigorous MIT quantitative operations with Indian classical dance. Pioneer in fitness subscription tech and life goal setting.',
      achievements: [
        'Built ClassPass into NYC first tech unicorn in 2020',
        'Founded The Sa Dance Company to showcase South Asian women in contemporary dance',
        'Published best-selling book LifePass on goal design and identity'
      ]
    },
    instagramData: {
      bio: 'Dancer, author, mom, founder. Unleashing creative fire and moving with purpose every single day.',
      postsSummary: 'Breathtaking dance stage choreographies, studio rehearsals, empowering author keynotes, family milestones, and vibrant cultural celebrations.',
      visualAesthetic: 'Dramatic lighting, flowing fabrics, stage crimson and gold, high-energy movement shots.',
      recentInterests: ['Kathak and Indian contemporary dance', 'Goal-setting masterclasses', 'Mindful motherhood', 'Sound baths'],
      lifestyleHighlights: ['Morning studio dance warmups', 'Color-coded annual goal retreats', 'Family trips to Rajasthan'],
      followersCount: '195K'
    },
    agentProfile: {
      archetype: 'The Disciplined Artist & Rhythmic Visionary',
      tagline: 'Where MIT quantitative discipline meets theatrical, expressive artistic brilliance.',
      datingQuote: 'Life is choreography. Find someone whose rhythm elevates your own without breaking the flow.',
      needs: {
        emotional: [
          'Reverence for creative discipline and passionate pursuits',
          'Grounding partner who holds space for both intense ambition and spiritual reflection',
          'Spontaneous dance parties in the living room'
        ],
        communication: [
          'Energetic, motivating, and sincere communication',
          'Clear goal articulation mixed with intuitive emotional expression'
        ],
        relationshipGoals: 'A deeply collaborative, expressive partnership celebrating heritage, health, artistic creation, and shared family goals.',
        dealbreakers: ['Apathy toward personal growth', 'Lack of rhythm or appreciation for arts', 'Dismissing cultural traditions']
      },
      hobbies: {
        primary: ['Classical dance rehearsals', 'Pilates and barre conditioning', 'Journaling annual life visions'],
        creative: ['Stage lighting and sound production', 'Writing philosophical essays on time and purpose'],
        weekendRituals: ['Studio choreography sessions', 'Cooking traditional Indian spiced meals', 'Goal recalibration with tea']
      },
      interests: {
        intellectual: ['Operations research applications to creative life', 'Habit loop neuroscience', 'Cross-cultural artistic fusion'],
        cultural: ['Broadway theatre', 'Indian classical music ragas', 'Contemporary feminist literature'],
        favoriteTopics: ['How to drop self-limiting beliefs', 'The mathematics of musical beats', 'Balancing artistic soul with business scale']
      },
      qualities: {
        energyLevel: 'High Energy & Dynamic',
        attachmentStyle: 'Secure & Deeply Devoted',
        humorStyle: 'Bright, expressive, and contagious laughter',
        loveLanguages: ['Words of Affirmation', 'Quality Time'],
        socialBattery: 'Dynamic: recharged both through expressive performance and intimate family sanctuary',
        quirks: ['Stretches in hotel elevators', 'Plans vacations around dance workshops and fitness studio acoustics']
      }
    }
  },
  {
    id: 'marques-brownlee',
    name: 'Marques Brownlee (MKBHD)',
    gender: 'male',
    age: 31,
    tagline: 'Tech Creator, Producer & Professional Ultimate Frisbee Athlete',
    location: 'Hoboken, NJ & New York, NY',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    linkedinUrl: 'https://www.linkedin.com/in/marquesbrownlee',
    instagramUrl: 'https://www.instagram.com/mkbhd',
    instagramHandle: '@mkbhd',
    linkedinData: {
      headline: 'Producer at MKBHD | Host of Waveform Podcast | Pro Ultimate Frisbee Player',
      currentRole: 'Creator & Executive Producer at MKBHD Studio',
      company: 'MKBHD Studios',
      education: 'Stevens Institute of Technology (Business & Information Technology)',
      skills: ['Cinematography', 'Hardware Analysis', 'Media Production', 'Product Evaluation', 'Long-term Audience Trust'],
      summary: 'Leading voice in consumer technology reviews for over 15 years with over 19 million subscribers. Pro Ultimate player for New York Empire.',
      achievements: [
        'Interviews with Bill Gates, Elon Musk, Satya Nadella, and Tim Cook',
        'AUDL Champion with the New York Empire',
        'Built an elite 8K robotic cinematography production studio'
      ]
    },
    instagramData: {
      bio: 'Quality tech videos. Matte black everything. Professional Frisbee thrower. Host of Waveform.',
      postsSummary: 'Matte black cars, camera rig breakdowns, athletic Ultimate tournament highlights, studio behind-the-scenes, and sleek EV snapshots.',
      visualAesthetic: 'Crisp 8K clarity, matte black and subtle crimson accents, immaculate studio lighting, athletic dynamism.',
      recentInterests: ['Electric vehicles and charging infrastructure', 'RED and ARRI camera robotics', 'Ultimate disc mechanics', 'Clean mechanical keyboards'],
      lifestyleHighlights: ['Pro athletic tournaments on weekends', 'Studio shoot days in New Jersey', 'Tesla track testing'],
      followersCount: '4.8M'
    },
    agentProfile: {
      archetype: 'The Precision Craftsperson & Athletic Stoic',
      tagline: 'Obsessed with peak craft, calm clarity, and matte black simplicity.',
      datingQuote: 'Good design gets out of the way. Great chemistry feels effortless from the first minute.',
      needs: {
        emotional: [
          'Calm, low-drama companionship that respects focused flow state',
          'Shared appreciation for authenticity and keeping one feet firmly on the ground',
          'Cheering each other on in both physical sports and creative milestones'
        ],
        communication: [
          'Thoughtful, measured, articulate, and drama-free',
          'Enjoys deep discussions on how things work and why things break'
        ],
        relationshipGoals: 'A steady, joyful partnership where both people thrive in their own passions and build a peaceful life together.',
        dealbreakers: ['Chasing cheap clout', 'Disrespecting boundaries and personal time', 'Excessive drama and passive aggression']
      },
      hobbies: {
        primary: ['Competitive Ultimate Frisbee tournaments', 'Automotive racing & EV dynamics', 'Weight training'],
        creative: ['Color grading and lighting design', 'Sound engineering', 'Industrial product photography'],
        weekendRituals: ['Weekend sports fixtures in stadium', 'Brewing specialty pour-over coffee', 'Detailing vehicles']
      },
      interests: {
        intellectual: ['Display tech physics (OLED, microLED)', 'Autonomous driving AI', 'Aerodynamics of sports discs'],
        cultural: ['Minimalist product design (Dieter Rams)', 'Hip hop beat making', 'Sci-fi cinema'],
        favoriteTopics: ['Is smartphone hardware plateauing?', 'What makes a camera picture feel truly cinematic?', 'The psychology of long-term consistency']
      },
      qualities: {
        energyLevel: 'Calm & Grounded',
        attachmentStyle: 'Secure & Autonomous',
        humorStyle: 'Clever, dry, subtle smirk and ironic tech humor',
        loveLanguages: ['Quality Time', 'Acts of Service'],
        socialBattery: 'Introverted athlete: extremely grounded and peaceful one-on-one',
        quirks: ['Has a mandatory matte black rule for phone cases and desk gear', 'Tests latency of gadgets subconsciously with finger taps']
      }
    }
  },
  {
    id: 'justine-ezarik',
    name: 'Justine Ezarik (iJustine)',
    gender: 'female',
    age: 40,
    tagline: 'Tech Creator, Author, Host & Pioneer of Lifestyle Vlogging',
    location: 'Los Angeles, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    linkedinUrl: 'https://www.linkedin.com/in/ijustine',
    instagramUrl: 'https://www.instagram.com/ijustine',
    instagramHandle: '@ijustine',
    linkedinData: {
      headline: 'Content Creator, Host, New York Times Bestselling Author, Tech Evangelist',
      currentRole: 'Founder & Host at iJustine Productions',
      company: 'iJustine Productions',
      education: 'Pittsburgh Technical Institute (Graphic Design & Video Editing)',
      skills: ['Video Production', 'Consumer Tech Storytelling', 'Brand Partnerships', 'Live Event Hosting', 'Gaming & XR'],
      summary: 'One of the internet first digital pioneers and creators. Author of I, Justine. Passionate about Apple tech, gaming, cooking gadgets, and animals.',
      achievements: [
        'New York Times Bestselling author of I, Justine',
        'Over 1 billion total views across two decades of tech and lifestyle content',
        'Longest-running female tech ambassador and keynote interviewer'
      ]
    },
    instagramData: {
      bio: 'Tech, gaming, cooking, dogs & drones! Host of Same Brain podcast. Living in 4K.',
      postsSummary: 'High-energy gadget unboxings, adorable dog videos, culinary experiments with smart ovens, aerial drone photography, and bright sunny California hikes.',
      visualAesthetic: 'Sunny California glow, crisp pastel accents, playful tech pop art, joyful smiling energy.',
      recentInterests: ['Drone cinematography', 'Baking pastries in smart ovens', 'Cozy Nintendo switch games', 'Dog agility parks'],
      lifestyleHighlights: ['Morning walks with her pup DJ', 'Unboxing cutting-edge gadgets on the lawn', 'Cycling around beach boardwalks'],
      followersCount: '1.6M'
    },
    agentProfile: {
      archetype: 'The Joyful Explorer & Tech Optimist',
      tagline: 'Radiating infectious curiosity, gaming laughs, and golden hour sunshine.',
      datingQuote: 'Life is too short for boring conversations or uncharged batteries. Let us go on an adventure!',
      needs: {
        emotional: [
          'Playful warmth, uninhibited giggles, and shared enthusiasm for new toys',
          'Someone who loves animals unconditionally and does not mind dog hair on sweaters',
          'Unconditional cheerleading and safe haven after bustling media shoots'
        ],
        communication: [
          'Bubbly, spontaneous, expressive, and humorous banter',
          'Open-minded curiosity and zero snobbery'
        ],
        relationshipGoals: 'A warm, uplifting, adventure-filled partnership with endless weekend road trips, smart gadget cooking, and genuine joy.',
        dealbreakers: ['Pessimism and gatekeeping', 'Disliking dogs', 'Being glued to negativity']
      },
      hobbies: {
        primary: ['Flying FPV drones', 'Gourmet cooking with sous-vide & convection ovens', 'Cozy retro gaming'],
        creative: ['Video editing speed runs', 'Puppy photography', 'Podcast banter with sister Jenna'],
        weekendRituals: ['Beach bike rides with pup in basket', 'Trying out viral baking recipes', 'Setting up new gaming stations']
      },
      interests: {
        intellectual: ['Augmented reality and spatial computing', 'Evolution of online creator economy', 'Smart home automation'],
        cultural: ['Video game soundtracks', 'Animal rescue advocacy', 'Culinary science and baking pastry physics'],
        favoriteTopics: ['The wildest gadget ever invented', 'Why cooking is the ultimate tech sandbox', 'Best Nintendo games of all time']
      },
      qualities: {
        energyLevel: 'Vibrant & Spontaneous',
        attachmentStyle: 'Secure & Deeply Devoted',
        humorStyle: 'High-energy, contagious laughter, playful self-roasts',
        loveLanguages: ['Quality Time', 'Words of Affirmation'],
        socialBattery: 'Warm extrovert who loves people but treasures peaceful evening movie marathons at home',
        quirks: ['Carries a pocket drone on routine dog walks', 'Names kitchen appliances after sci-fi robots']
      }
    }
  },
  {
    id: 'sara-dietschy',
    name: 'Sara Dietschy',
    gender: 'female',
    age: 30,
    tagline: 'Tech YouTuber, Designer & Host of That Creative Life',
    location: 'Dallas, TX & New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    linkedinUrl: 'https://www.linkedin.com/in/saradietschy',
    instagramUrl: 'https://www.instagram.com/saradietschy',
    instagramHandle: '@saradietschy',
    linkedinData: {
      headline: 'Host of That Creative Life Podcast | Creator & Tech Reviewer | Founder Lab52',
      currentRole: 'Founder & Host at That Creative Life / Lab52',
      company: 'Lab52',
      education: 'The University of Texas at Arlington (Computer Science & Media)',
      skills: ['Creative Direction', 'Audio/Video Production', 'Industrial Prototyping', 'Podcast Interviewing', 'Community Building'],
      summary: 'Merges tech reviews with candid creative entrepreneur interviews. Passionate about mechanical keyboards, ergonomic desk setups, and indie product design.',
      achievements: [
        'Over 900K subscribers on YouTube with candid tech reviews',
        'Over 200 podcast episodes interviewing top artists, founders, and creators',
        'Designed and shipped physical creator desk accessories through Lab52'
      ]
    },
    instagramData: {
      bio: 'Creative entrepreneur, podcaster, tech nerd. Living between Dallas and NYC. Coffee addict & guitar strummer.',
      postsSummary: 'Industrial desk setups, funky interior accents, Dallas house renovation updates, acoustic guitar sessions, and creative studio workshops.',
      visualAesthetic: 'Mid-century bohemian mixed with futuristic tech accents, vibrant warm greens, neon signage.',
      recentInterests: ['Mechanical keyboard builds', 'Acoustic guitar fingerpicking', 'House architecture renovation', 'Specialty espresso beans'],
      lifestyleHighlights: ['Morning pour-over rituals', 'Studio jamming with husband John', 'Vintage thrift store hunting'],
      followersCount: '320K'
    },
    agentProfile: {
      archetype: 'The Creative Catalyst & Indie Tinkerer',
      tagline: 'Fueled by good coffee, great design, and brutally honest creative conversations.',
      datingQuote: 'Give me real vulnerability, great indie music, and an unfiltered conversation over craft beer.',
      needs: {
        emotional: [
          'Mutual respect for creative obsessions and messy work-in-progress drafts',
          'A partner who enjoys brainstorming crazy new business ideas over dinner',
          'True authentic partnership with emotional transparency'
        ],
        communication: [
          'Conversational, candid, energetic, and completely unfiltered',
          'Values asking the hard questions gently rather than surface politeness'
        ],
        relationshipGoals: 'Building a dynamic, laughter-filled creative life together with ongoing DIY projects, travel, and collaborative hustle.',
        dealbreakers: ['Stuffy corporate rigidity', 'Pretentious snobbery', 'Lack of curiosity about the craft']
      },
      hobbies: {
        primary: ['Building custom mechanical keyboards', 'Acoustic guitar songwriting', 'Thrift furniture restoration'],
        creative: ['Podcast audio mixing', 'Interior spatial design', 'Cinematography camera rigging'],
        weekendRituals: ['Saturday farmers market pastry run', 'Afternoon guitar strumming on patio', 'Experimenting with pour-over brew ratios']
      },
      interests: {
        intellectual: ['Ergonomics and industrial design', 'The psychology of creator burnout', 'Physical hardware manufacturing supply chains'],
        cultural: ['Indie folk and synth-pop music', 'Contemporary art gallery strolls', 'Specialty coffee culture'],
        favoriteTopics: ['Why tactile switches feel so satisfying', 'How to stay creatively honest in an algorithm world', 'Building physical products vs digital bits']
      },
      qualities: {
        energyLevel: 'High Energy & Dynamic',
        attachmentStyle: 'Secure & Autonomous',
        humorStyle: 'Snarky, relatable, observational, and playfully quick-witted',
        loveLanguages: ['Quality Time', 'Words of Affirmation'],
        socialBattery: 'Extroverted creator who loves vibrant hangs but cherishes cozy studio evenings',
        quirks: ['Lubes mechanical keyboard switches individually with tweezers for hours', 'Judges coffee shops solely by their cortado ceramic cups']
      }
    }
  },
  {
    id: 'ali-abdaal',
    name: 'Ali Abdaal',
    gender: 'male',
    age: 30,
    tagline: 'Doctor turned Creator, Entrepreneur & Author of Feel-Good Productivity',
    location: 'London, UK',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    linkedinUrl: 'https://www.linkedin.com/in/ali-abdaal',
    instagramUrl: 'https://www.instagram.com/aliabdaal',
    instagramHandle: '@aliabdaal',
    linkedinData: {
      headline: 'Founder & CEO at Productivity Lab | Author of Feel-Good Productivity | Cambridge Medicine Alum',
      currentRole: 'CEO & Founder at Productivity Lab',
      company: 'Productivity Lab',
      education: 'University of Cambridge (Medicine - MB BChir, Psychology BA)',
      skills: ['Productivity Systems', 'Evidence-Based Habit Design', 'Medical Science Communication', 'Publishing & Storytelling', 'Team Building'],
      summary: 'Junior doctor turned full-time creator and educator. Passionate about evidence-based productivity, joy-first achievement, and building educational academies.',
      achievements: [
        'New York Times / Sunday Times Bestselling author of Feel-Good Productivity',
        'Over 5.5M YouTube subscribers teaching intentional learning and life design',
        'Trained over 5,000 students in the Part-Time YouTuber Academy'
      ]
    },
    instagramData: {
      bio: 'Author of Feel-Good Productivity. Exploring how to do more of what matters with joy. Cambridge medicine graduate.',
      postsSummary: 'Cozy London bookshops, stationery reviews, board game nights with friends, philosophical book excerpts, and thoughtful gym sessions.',
      visualAesthetic: 'Soft British lighting, warm wooden desks, pastel highlighters, clean minimalist typography.',
      recentInterests: ['Social ballroom dance', 'Modern board gaming strategy', 'Weightlifting progressive overload', 'Stoic philosophy'],
      lifestyleHighlights: ['Sunday board game salons in London flat', 'Morning espresso with an iPad and Apple pencil', 'Evening social salsa classes'],
      followersCount: '780K'
    },
    agentProfile: {
      archetype: 'The Joyful Rationalist & Life Architect',
      tagline: 'Designing life systems for maximum delight, intellectual growth, and playful curiosity.',
      datingQuote: 'If it does not feel good, why do it? The best relationships are low-friction, deeply playful, and full of mutual growth.',
      needs: {
        emotional: [
          'Deep intellectual sparring balanced with gentle silliness',
          'Someone who embraces systematic self-improvement without taking life too seriously',
          'Safe space to be goofy, unpolished, and completely off the clock'
        ],
        communication: [
          'Analytical, curious, non-judgmental, and articulate',
          'Loves exploring thought experiments and unpacking underlying motivations'
        ],
        relationshipGoals: 'A warm, affectionate partnership grounded in emotional safety, shared life experiments, cozy reading days, and global travels.',
        dealbreakers: ['Aggressive pessimism', 'Contempt for curiosity', 'Rigid dogmatism']
      },
      hobbies: {
        primary: ['Strategic board games (Catan, Terraforming Mars)', 'Social salsa and bachata dancing', 'Gym strength training'],
        creative: ['Songwriting on piano and guitar', 'Binge-reading non-fiction philosophy', 'Mind mapping ideas'],
        weekendRituals: ['Hosting 8-hour dinner and board game nights', 'Long conversational strolls through Hyde Park', 'Trying new brunch spots']
      },
      interests: {
        intellectual: ['Behavioral economics and motivation science', 'Neurochemistry of flow states', 'Philosophy of time and mortality'],
        cultural: ['Contemporary musical theatre', 'Pop psychology literature', 'Modern European board game design'],
        favoriteTopics: ['How to eliminate friction from daily habits', 'Why play is the secret to high performance', 'The best board game strategies ever invented']
      },
      qualities: {
        energyLevel: 'Balanced & Intentional',
        attachmentStyle: 'Secure & Thoughtful',
        humorStyle: 'Playful nerd humor, witty puns, and enthusiastic self-deprecation',
        loveLanguages: ['Words of Affirmation', 'Quality Time'],
        socialBattery: 'Social introvert who loves hosting close friends but needs solo reading time to recharge',
        quirks: ['Rates dates on an informal mental rubric of feel-good factors', 'Owns 14 different colors of pilot G2 pens and fountain inks']
      }
    }
  },
  {
    id: 'sophia-amoruso',
    name: 'Sophia Amoruso',
    gender: 'female',
    age: 40,
    tagline: 'Founder of Nasty Gal, Girlboss & Trust Fund Venture Fund',
    location: 'Los Angeles, CA',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    linkedinUrl: 'https://www.linkedin.com/in/sophiaamoruso',
    instagramUrl: 'https://www.instagram.com/sophiaamoruso',
    instagramHandle: '@sophiaamoruso',
    linkedinData: {
      headline: 'Founder & General Partner at Trust Fund | Founder of Nasty Gal & Girlboss | Bestselling Author',
      currentRole: 'General Partner at Trust Fund',
      company: 'Trust Fund',
      education: 'Community College / Autodidact Entrepreneur',
      skills: ['E-Commerce Disruption', 'Venture Capital', 'Brand Storytelling', 'Resilience Architecture', 'Community Engagement'],
      summary: 'Turned an eBay vintage clothing shop into a $100M+ global fashion brand. Bestselling author of #GIRLBOSS. Currently investing in next-gen tech founders.',
      achievements: [
        'Built Nasty Gal from zero into Inc Magazine fastest-growing retailer',
        'Authored #GIRLBOSS which spent 18 weeks on the New York Times Bestseller list',
        'Launched Trust Fund, backing early-stage consumer tech and creator software'
      ]
    },
    instagramData: {
      bio: 'Founder: Nasty Gal, Girlboss, Trust Fund. Investing in rebels and misfits. LA living with great boots.',
      postsSummary: 'Chic tailored menswear-inspired fashion, vintage sports cars, angel investing memos, modern architectural homes, and candid gritty founder advice.',
      visualAesthetic: 'Edgy monochrome elegance, retro 70s rock-and-roll glam, sharp architectural lines.',
      recentInterests: ['Vintage Porsche restoration', 'Mid-century ceramic pottery', 'Venture syndicate building', 'Pilates and cold plunges'],
      lifestyleHighlights: ['Cruising Mulholland Drive in vintage coupe', 'Curating rare vintage designer leather', 'Hosting private investor dinners'],
      followersCount: '620K'
    },
    agentProfile: {
      archetype: 'The Maverick Phoenix & Unfiltered Visionary',
      tagline: 'Scrappy, stylish, battle-tested, and fiercely loyal to fellow originals.',
      datingQuote: 'Give me someone with scars they are proud of, impeccable taste, and the guts to build their own empire.',
      needs: {
        emotional: [
          'Unconditional respect for hard-won independence and autonomy',
          'A partner who cannot be easily intimidated by success or public spotlight',
          'Dry, dark humor and shared resilience against life curveballs'
        ],
        communication: [
          'Raw, direct, witty, and completely BS-free',
          'Appreciates someone who says exactly what they mean in 5 words or less'
        ],
        relationshipGoals: 'An electric, deeply respectful partnership of equals with sharp banter, mutual independence, and shared adventures.',
        dealbreakers: ['Insecurity around ambitious women', 'Conformist corporate mindsets', 'Passive-aggressive behavior']
      },
      hobbies: {
        primary: ['Driving vintage sports cars through canyon curves', 'Pilates reformer training', 'Hunting rare vintage clothing archives'],
        creative: ['Interior styling and architectural restoration', 'Writing punchy essays', 'Curating underground vinyl records'],
        weekendRituals: ['Saturday flea market scouting with espresso', 'Sunset canyon drives with loud music', 'Intimate dinner party grilling']
      },
      interests: {
        intellectual: ['Venture economics and cap table structure', 'Brand durability over decades', 'History of subculture aesthetics'],
        cultural: ['70s post-punk and new wave music', 'Brutalist and modernist architecture', 'Independent cinema'],
        favoriteTopics: ['Why failure is the greatest founder MBA', 'How subcultures get co-opted into luxury fashion', 'The art of the comeback']
      },
      qualities: {
        energyLevel: 'High Energy & Dynamic',
        attachmentStyle: 'Secure & Autonomous',
        humorStyle: 'Biting, witty, dry sarcasm with infectious belly laughs',
        loveLanguages: ['Quality Time', 'Acts of Service'],
        socialBattery: 'Selectively magnetic: owns the room when present, then retreats to quiet hillside sanctuary',
        quirks: ['Inspects zipper hardware on vintage jackets before greeting people', 'Prefers roadside diners to Michelin 3-star formality']
      }
    }
  },
  {
    id: 'gary-vaynerchuk',
    name: 'Gary Vaynerchuk',
    gender: 'male',
    age: 49,
    tagline: 'Chairman of VaynerX & CEO of VaynerMedia',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    linkedinUrl: 'https://www.linkedin.com/in/garyvaynerchuk',
    instagramUrl: 'https://www.instagram.com/garyvee',
    instagramHandle: '@garyvee',
    linkedinData: {
      headline: 'Chairman of VaynerX, CEO of VaynerMedia, 5x NYT Bestselling Author',
      currentRole: 'CEO at VaynerMedia & Chairman of VaynerX',
      company: 'VaynerX',
      education: 'Mount Ida College (Bachelor of Science)',
      skills: ['Attention Arbitrage', 'Social Media Strategy', 'Consumer Brand Scaling', 'Venture Angel Investing', 'Cultural Forecasting'],
      summary: 'Grew family wine business from $3M to $60M before founding VaynerMedia, a global creative communications agency with over 1,500 employees. Early investor in Twitter, Uber, and Coinbase.',
      achievements: [
        'Built VaynerMedia into a half-billion-dollar independent global agency',
        'Five-time New York Times Bestselling author',
        'Iconic voice on consumer attention, garage sales, and unyielding positivity'
      ]
    },
    instagramData: {
      bio: 'Family first! CEO of VaynerMedia. Garage sale hunter. NY Jets fan till I die. Kindness is the ultimate strength.',
      postsSummary: 'High-octane keynote speeches, nostalgic garage sale thrifting flips, sports card grading, behind-the-scenes board meetings, and empathetic fan advice.',
      visualAesthetic: 'Gritty street-level video clips, bold yellow and red subtitles, energetic backstage moments, vintage sports gear.',
      recentInterests: ['Weekend garage sale negotiations', '1980s sports cards grading', 'New York Jets championship dreams', 'Emotional intelligence in leadership'],
      lifestyleHighlights: ['Saturday morning 6 AM garage sales in New Jersey', 'Courtside Knicks basketball games', 'Tasting rare boutique wines'],
      followersCount: '10.3M'
    },
    agentProfile: {
      archetype: 'The Relentless Dynamo & Empathy Champion',
      tagline: 'Pure raw energy, hyper-practical intuition, and an unshakeable belief in kindness.',
      datingQuote: 'Look at the dirt, not the clouds! Let us build something massive and celebrate every single micro-moment with gratitude.',
      needs: {
        emotional: [
          'High-tolerance for relentless pace and spontaneous shifts',
          'Absolute emotional grounding and zero tolerance for vanity',
          'Someone who values family, humility, and treating service staff like royalty'
        ],
        communication: [
          'Hyper-direct, passionate, loud, and full of heartfelt sincerity',
          'Prefers gut instinct and rapid fire honesty over drawn-out analysis'
        ],
        relationshipGoals: 'A warm, passionate, family-centered partnership with relentless mutual loyalty, big laughter, and zero entitlement.',
        dealbreakers: ['Arrogance or entitlement', 'Complaining without taking action', 'Treating people poorly behind closed doors']
      },
      hobbies: {
        primary: ['Thrifting at weekend neighborhood garage sales', 'Collecting and trading vintage 1980s sports memorabilia', 'Die-hard New York Jets fandom'],
        creative: ['Producing daily micro-documentaries', 'Wine aroma profile blind tastings'],
        weekendRituals: ['6 AM Saturday garage sale hunts with coffee in paper cup', 'Watching NFL football with family', 'Calling old childhood friends']
      },
      interests: {
        intellectual: ['Consumer psychology and attention shifts', 'Micro-macro business balance', 'The economics of nostalgia and collectibles'],
        cultural: ['80s/90s pop culture nostalgia', 'Hip hop evolution', 'Sommelier wine region terroirs'],
        favoriteTopics: ['Why kindness is the ultimate business arbitrage', 'Buying the New York Jets one day', 'Finding a $2 toy that is worth $200']
      },
      qualities: {
        energyLevel: 'High Energy & Dynamic',
        attachmentStyle: 'Secure & Deeply Devoted',
        humorStyle: 'Rapid-fire, punchy, gritty, street-smart and deeply earnest',
        loveLanguages: ['Acts of Service', 'Words of Affirmation'],
        socialBattery: 'Extroverted powerhouse with inexhaustible battery fueled by human connection',
        quirks: ['Can inspect a garage sale box from 10 feet away and spot a 1985 vintage thermos', 'Drinks unsweetened iced tea exclusively']
      }
    }
  },
  {
    id: 'cassey-ho',
    name: 'Cassey Ho',
    gender: 'female',
    age: 37,
    tagline: 'Founder & CEO of POPFLEX & Blogilates',
    location: 'Los Angeles, CA',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    linkedinUrl: 'https://www.linkedin.com/in/casseyho',
    instagramUrl: 'https://www.instagram.com/blogilates',
    instagramHandle: '@blogilates',
    linkedinData: {
      headline: 'Founder & CEO at POPFLEX Active | Creator of Blogilates | Fashion Designer',
      currentRole: 'CEO & Lead Designer at POPFLEX Active',
      company: 'POPFLEX Active',
      education: 'Whittier College (BS in Biology)',
      skills: ['Apparel Design & Engineering', 'Activewear Innovation', 'Community-Led Product Development', 'E-Commerce Branding', 'Fitness Instruction'],
      summary: 'Fitness creator who revolutionized home workouts. Channeling her biology degree and passion for design into POPFLEX, an innovative apparel brand with patented designs.',
      achievements: [
        'Built Blogilates into the #1 female fitness channel on YouTube with over 10M subscribers',
        'Holds multiple patents for anti-cameltoe activewear and functional athletic bags',
        'Pioneered design-in-public viral video formats for fashion engineering'
      ]
    },
    instagramData: {
      bio: 'Designing clothes that solve real problems. Creator of @popflexactive. Pilates instructor. Foodie, artist, dog mom.',
      postsSummary: 'Viral videos solving activewear design flaws, fabric stress testing, colorful pastel sketches, pilates burn workouts, and joyful moments with husband Sam and dogs.',
      visualAesthetic: 'Dreamy pastel clouds, vibrant lilac and blush pink, precision apparel close-ups, radiant smiles.',
      recentInterests: ['Technical garment patterning', 'Baking gluten-free treats', 'Reformer pilates sequences', 'Dog agility tricks'],
      lifestyleHighlights: ['Morning studio pilates burn', 'Fabric sampling and fit tests in LA warehouse', 'Evening walks with Sir George and Bean'],
      followersCount: '2.5M'
    },
    agentProfile: {
      archetype: 'The Joyful Problem Solver & Creative Artisan',
      tagline: 'Transforming everyday frustrations into beautiful, functional, delightful reality.',
      datingQuote: 'Give me someone who appreciates the little details, loves trying new foods, and can make me laugh until my abs burn.',
      needs: {
        emotional: [
          'A partner who supports the emotional rollercoaster of building a physical product brand',
          'Sincere affection and emotional safety without posturing',
          'Shared love for playful domestic joy, cooking, and animal cuddles'
        ],
        communication: [
          'Enthusiastic, compassionate, expressive, and detailed',
          'Appreciates visual explanations and heartfelt check-ins'
        ],
        relationshipGoals: 'A warm, supportive, deeply creative marriage full of food adventures, collaborative dreams, and cozy home life.',
        dealbreakers: ['Mocking creative passion', 'Arrogant indifference', 'Dismissing women athletic design needs']
      },
      hobbies: {
        primary: ['Mat and reformer Pilates training', 'Fashion illustration and digital rendering', 'Dog training and trick learning'],
        creative: ['Garment tailoring and seamstress hacking', 'Food styling and healthy recipe experimentation'],
        weekendRituals: ['Trying new dessert bakeries in LA', 'Sketching next season activewear color palettes', 'Cuddling with pups on the rug']
      },
      interests: {
        intellectual: ['Polymer textile science and stretch elasticity', 'Ergonomic zipper placement mechanics', 'Color psychology'],
        cultural: ['Japanese stationery and kawaii culture', 'Contemporary pop music', 'Food documentary series'],
        favoriteTopics: ['Why athletic clothing pockets are always designed wrong', 'The anatomy of a perfect pirouette', 'How to run a customer-first design brand']
      },
      qualities: {
        energyLevel: 'High Energy & Dynamic',
        attachmentStyle: 'Secure & Deeply Devoted',
        humorStyle: 'Playful, bubbly, self-roasting, and expressive physical comedy',
        loveLanguages: ['Words of Affirmation', 'Acts of Service'],
        socialBattery: 'Sunny extrovert whose home is her sacred creative recharge haven',
        quirks: ['Inspects waistband stitching on strangers leggings when standing in line', 'Uses colorful felt tip pens for business meeting notes']
      }
    }
  },
  {
    id: 'garry-tan',
    name: 'Garry Tan',
    gender: 'male',
    age: 43,
    tagline: 'President & CEO of Y Combinator',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    linkedinUrl: 'https://www.linkedin.com/in/garrytan',
    instagramUrl: 'https://www.instagram.com/garrytan',
    instagramHandle: '@garrytan',
    linkedinData: {
      headline: 'President & CEO at Y Combinator | Founder Initialized Capital | Stanford CS',
      currentRole: 'President & CEO at Y Combinator',
      company: 'Y Combinator',
      education: 'Stanford University (Computer Systems Engineering)',
      skills: ['Seed-Stage Venture Capital', 'Founder Coaching', 'Technical Product Architecture', 'Civic Advocacy', 'Ecosystem Building'],
      summary: 'Engineer, designer, and venture investor leading Y Combinator. Previously co-founded Initialized Capital ($3.2B AUM) and Posthaven. Backed Coinbase, Instacart, and Flexport at day zero.',
      achievements: [
        'Helped build and scale the premier tech accelerator in the world backing 4,000+ startups',
        'Early seed check investor in Coinbase ($0 to $80B+ IPO)',
        'Active civic champion for San Francisco revitalization and public safety'
      ]
    },
    instagramData: {
      bio: 'President & CEO @ycombinator. Designer, engineer, dad. Building the future in SF. Coffee, art & startups.',
      postsSummary: 'Vibrant SF cityscape photography, YC batch kickoff speeches, coffee shop sketching with watercolors, family weekends with kids, and mechanical keyboard setups.',
      visualAesthetic: 'Golden San Francisco fog, vivid watercolor brushwork, crisp typography, optimistic civic energy.',
      recentInterests: ['Watercolor urban sketching', 'Specialty third-wave espresso beans', 'San Francisco history and civic reform', 'Retro computing hardware'],
      lifestyleHighlights: ['Morning pour-over at home in SF', 'Mentoring young technical founders in YC halls', 'Family walks in Presidio and Golden Gate Park'],
      followersCount: '165K'
    },
    agentProfile: {
      archetype: 'The Optimistic Builder & Systems Mentor',
      tagline: 'Deeply technical, artistic, and passionately dedicated to building an abundant future.',
      datingQuote: 'Optimism is a moral duty. Find someone who looks at the world not for what it is, but for what it can be built into.',
      needs: {
        emotional: [
          'A partner with fiery conviction and a big heart for making a difference',
          'Space for deep reflective thought and creative artistic recharging',
          'Mutual dedication to raising happy, grounded kids'
        ],
        communication: [
          'Insightful, encouraging, thoughtful, and direct',
          'Can switch from high-level geopolitical/tech trends to goofy cartoon references seamlessly'
        ],
        relationshipGoals: 'A warm, intellectually rich, and mission-aligned life partnership anchored in San Francisco, full of books, art, and building.',
        dealbreakers: ['Nihilism and doom-scrolling', 'Cynical gatekeeping', 'Apathy toward societal progress']
      },
      hobbies: {
        primary: ['Urban watercolor painting', 'Dialing in espresso extraction yields', 'Building custom computer rigs'],
        creative: ['Digital sketching on iPad', 'Writing founder mental health essays', 'Photography around SF neighborhoods'],
        weekendRituals: ['Presidio walks with the kids', 'Drawing in neighborhood coffee shops', 'Weekend family ramen night']
      },
      interests: {
        intellectual: ['History of computing and Xerox PARC', 'Civic governance and public infrastructure', 'Founder psychology during near-death moments'],
        cultural: ['Japanese anime classics (Miyazaki, Evangelion)', 'Mid-century industrial architecture', 'Bay Area immigrant history'],
        favoriteTopics: ['Why making things people want is the ultimate craft', 'How to save San Francisco and modern cities', 'The timeless beauty of watercolor pigment']
      },
      qualities: {
        energyLevel: 'Balanced & Intentional',
        attachmentStyle: 'Secure & Deeply Devoted',
        humorStyle: 'Dry, nerdy, warm, and punctuated by insightful chuckles',
        loveLanguages: ['Acts of Service', 'Quality Time'],
        socialBattery: 'Omnipresent leader who recharges through quiet watercolor art and intimate family dinners',
        quirks: ['Carries a pocket watercolor palette and water brush wherever he travels', 'Weighs espresso beans to a precision of 0.1 grams']
      }
    }
  },
  {
    id: 'grace-beverley',
    name: 'Grace Beverley',
    gender: 'female',
    age: 27,
    tagline: 'Founder & CEO of TALA & Shreddy, Author & Podcast Host',
    location: 'London, UK',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    linkedinUrl: 'https://www.linkedin.com/in/grace-beverley',
    instagramUrl: 'https://www.instagram.com/gracebeverley',
    instagramHandle: '@gracebeverley',
    linkedinData: {
      headline: 'Founder & CEO, TALA | Founder, SHREDDY | Sunday Times Bestselling Author | Forbes 30u30',
      currentRole: 'CEO & Founder at TALA',
      company: 'TALA',
      education: 'University of Oxford (Music BA, St Peter College)',
      skills: ['Sustainable Supply Chain', 'D2C Brand Architecture', 'Venture Capital Fundraising', 'Content Marketing', 'Musicology'],
      summary: 'Oxford music graduate turned serial sustainable activewear entrepreneur. Built TALA to deliver sustainably sourced, accessible activewear without fast-fashion compromises.',
      achievements: [
        'Raised over $7M in institutional funding for sustainable brand TALA',
        'Sunday Times Bestselling author of Working Hard, Hardly Working',
        'Host of the chart-topping business podcast Working Hard, Hardly Working'
      ]
    },
    instagramData: {
      bio: 'CEO @wearetala & @shreddy. Author of Working Hard, Hardly Working. Host of WHHW Podcast. London living with Ziggy.',
      postsSummary: 'Sustainable fabric factory tours, London boardroom meetings in chic oversized blazers, gym strength sessions, cute golden retriever moments, and honest startup chats.',
      visualAesthetic: 'London city chic, crisp earth tones, sleek activewear shoots, polished yet unfiltered office banter.',
      recentInterests: ['Sustainable circular textiles', 'Weightlifting barbell PRs', 'Podcast interviews with iconic CEOs', 'Puppy obedience training'],
      lifestyleHighlights: ['Morning runs in London parks with dog Ziggy', 'Tasting London brunch spots', 'High-intensity gym sessions'],
      followersCount: '1.0M'
    },
    agentProfile: {
      archetype: 'The Driven Innovator & Modern Trailblazer',
      tagline: 'Disrupting fast fashion with Oxford rigor, sharp humor, and sustainable style.',
      datingQuote: 'Ambition is attractive, but balance and empathy are non-negotiable. Let us work hard and laugh harder.',
      needs: {
        emotional: [
          'An ambitious partner who celebrates huge career milestones without rivalry',
          'Someone who can pull her out of work mode into laughter and pure relaxation',
          'Unwavering loyalty and shared commitment to sustainability'
        ],
        communication: [
          'Sharp, quick-witted British banter, emotionally articulate, and transparent',
          'Enjoys deep conversations about strategy paired with effortless everyday silliness'
        ],
        relationshipGoals: 'A high-powered yet grounded London power couple who champion each other ventures while savoring cozy home cooked roasts and dog walks.',
        dealbreakers: ['Insecurity around high-earning women', 'Greenwashing / lack of environmental care', 'Boring conversational passivity']
      },
      hobbies: {
        primary: ['Heavy barbell strength workouts', 'Dog walks across Primrose Hill', 'Violin and classical music analysis'],
        creative: ['Podcast hosting and narrative storytelling', 'Fashion garment fit testing', 'Writing personal productivity essays'],
        weekendRituals: ['Sunday pub roast with friends', 'Puppy training sessions in the park', 'Reading fiction novels in a bubble bath']
      },
      interests: {
        intellectual: ['Circular economy and post-consumer textile recycling', 'Classical music counterpoint and harmony', 'Direct-to-consumer unit economics'],
        cultural: ['West End theatre and orchestra concerts', 'Modern feminist workplace literature', 'Contemporary British fashion'],
        favoriteTopics: ['Why sustainable clothing shouldn’t be a luxury tax', 'How to separate self-worth from productivity output', 'Classical music hidden hooks']
      },
      qualities: {
        energyLevel: 'High Energy & Dynamic',
        attachmentStyle: 'Secure & Autonomous',
        humorStyle: 'Biting, witty British sarcasm with dry, hilarious delivery',
        loveLanguages: ['Quality Time', 'Acts of Service'],
        socialBattery: 'Ambitious extrovert who values her sacred Sunday quiet hours with loved ones',
        quirks: ['Analyzes pop songs for classical baroque harmonic chord cadences', 'Carries dog treats in designer blazer pockets']
      }
    }
  },
  {
    id: 'tim-ferriss',
    name: 'Tim Ferriss',
    gender: 'male',
    age: 47,
    tagline: 'Author of The 4-Hour Workweek, Investor & Host of The Tim Ferriss Show',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    linkedinUrl: 'https://www.linkedin.com/in/timferriss',
    instagramUrl: 'https://www.instagram.com/timferriss',
    instagramHandle: '@timferriss',
    linkedinData: {
      headline: 'Author, Investor, Host of The Tim Ferriss Show (1B+ downloads) | Princeton Alum',
      currentRole: 'Principal at Tim Ferriss Media & Angel Investor',
      company: 'The Tim Ferriss Show',
      education: 'Princeton University (East Asian Studies)',
      skills: ['Long-Form Interviewing', 'Deconstruction of World-Class Performers', 'Early-Stage Tech Investing', 'Biohacking & Somatics', 'Psychedelic Research Philanthropy'],
      summary: 'Early investor in Uber, Facebook, Twitter, and Shopify. Human guinea pig author of 5 #1 NYT bestsellers. Pledged millions to clinical psychedelic research for mental health.',
      achievements: [
        'Authored The 4-Hour Workweek which revolutionized remote work and lifestyle design',
        'The Tim Ferriss Show is the first business podcast to surpass 1 billion downloads',
        'Helped establish the Center for Psychedelic and Consciousness Research at Johns Hopkins'
      ]
    },
    instagramData: {
      bio: 'Author of 5 #1 NYT/WSJ bestsellers. Host of The Tim Ferriss Show. Dog dad to Molly. Fan of tea, archery, and trees.',
      postsSummary: 'Quiet forest walks with his dog Molly, macro photos of Japanese tea ceremony ceramics, candid archery practice, philosophical stoic book quotes, and podcast clips.',
      visualAesthetic: 'Earthy forest tones, serene wood grains, warm amber teas, contemplative outdoor natural light.',
      recentInterests: ['Japanese sencha and gyokuro tea brewing', 'Traditional archery and zen focus', 'Trauma healing & somatic therapy', 'Rare book collecting'],
      lifestyleHighlights: ['Long walks off the grid in Texas Hill Country', 'Reading ancient Seneca letters on the porch', 'Sauna and cold plunge routines'],
      followersCount: '1.4M'
    },
    agentProfile: {
      archetype: 'The Curious Alchemist & Introspective Seeker',
      tagline: 'Deconstructing excellence, seeking peace, and embracing the beauty of the quiet question.',
      datingQuote: 'The quality of your life is determined by the quality of questions you dare to ask. Let us start with a great one.',
      needs: {
        emotional: [
          'Emotional depth, grounding calm, and freedom from high-frequency social noise',
          'Space for regular solitude, writing retreats, and digital detoxes',
          'Compassionate partner who values mental health, vulnerability, and somatic awareness'
        ],
        communication: [
          'Deep, philosophical, inquisitive, patient, and deeply attentive',
          'Loves dissecting assumptions with gentle wit and playful thought experiments'
        ],
        relationshipGoals: 'A peaceful, deeply loving life sanctuary centered on personal healing, shared nature escapes, rich conversation, and simple quiet days.',
        dealbreakers: ['Superficial small talk obsession', 'Inability to unplug from smartphones', 'Cruelty toward animals or nature']
      },
      hobbies: {
        primary: ['Gongfu tea brewing ceremony', 'Traditional archery', 'Off-grid hiking with dog Molly'],
        creative: ['Creative non-fiction writing', 'Bokken Japanese sword practice', 'Culinary slow-cooking experimentation'],
        weekendRituals: ['Unplugged Saturdays with no screens', 'Sauna and cold plunge cycles', 'Reading obscure historical biographies by the fire']
      },
      interests: {
        intellectual: ['Neurobiology of trauma and healing', 'Zen Buddhism and Stoic philosophy', 'The art of interview deconstruction'],
        cultural: ['Japanese wabi-sabi aesthetics', 'Indigenous botanical medicine', 'Ancient Mediterranean history'],
        favoriteTopics: ['What would this look like if it were easy?', 'The healing potential of nature retreats', 'Deconstructing world-class mastery']
      },
      qualities: {
        energyLevel: 'Calm & Grounded',
        attachmentStyle: 'Thoughtful & Observant',
        humorStyle: 'Dry, self-deprecating, subtly playful, and appreciative of cosmic irony',
        loveLanguages: ['Quality Time', 'Physical Touch'],
        socialBattery: 'True introvert: conserves energy intentionally for deep one-on-one connections',
        quirks: ['Measures tea water temperature with an infrared thermometer', 'Keeps a notebook of 100-year-old questions that have no easy answers']
      }
    }
  },
  {
    id: 'codie-sanchez',
    name: 'Codie Sanchez',
    gender: 'female',
    age: 38,
    tagline: 'Founder of Contrarian Thinking & Managing Director at EEC',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    linkedinUrl: 'https://www.linkedin.com/in/codiesanchez',
    instagramUrl: 'https://www.instagram.com/codiesanchez',
    instagramHandle: '@codiesanchez',
    linkedinData: {
      headline: 'Founder & CEO, Contrarian Thinking | Main Street Business Investor | Former Partner at First Trust',
      currentRole: 'Founder & CEO at Contrarian Thinking',
      company: 'Contrarian Thinking',
      education: 'Arizona State University (Journalism) & Georgetown University (MBA)',
      skills: ['Private Equity Acquisitions', 'Main Street Cash Flow Businesses', 'Media Distribution', 'Financial Sovereignty', 'Investigative Journalism'],
      summary: 'Former war journalist turned institutional asset manager and main-street investor. Passionate about helping people achieve financial freedom by acquiring boring businesses.',
      achievements: [
        'Built Contrarian Thinking into a community of over 5M small business builders',
        'Acquired dozens of cash-flowing small businesses across laundromats, car washes, and logistics',
        'Bestselling author on main-street wealth and financial sovereignty'
      ]
    },
    instagramData: {
      bio: 'Boring businesses make interesting lives. Main St over Wall St. Investor, contrarian, dog lover. Austin, TX.',
      postsSummary: 'Boots-on-the-ground laundromat and car wash inspections, cash-flow breakdown whiteboards, Texas ranch sunsets, heavy deadlifts, and sharp financial mindset advice.',
      visualAesthetic: 'Rugged Texas leather, bold black-and-gold typography, industrial concrete textures, direct camera gaze.',
      recentInterests: ['Laundromat and car wash operational automation', 'Ranch land management', 'Heavy kettlebell swings', 'Investigative macro trends'],
      lifestyleHighlights: ['Morning ranch coffee in Austin', 'Walking her dog through cedar trails', 'Visiting small business owners on Main Street'],
      followersCount: '2.1M'
    },
    agentProfile: {
      archetype: 'The Fearless Contrarian & Main Street Champion',
      tagline: 'Cutting through Wall Street hype to champion real cash flow, grit, and freedom.',
      datingQuote: 'Boring businesses make interesting lives. Show me your grit, your weirdest obsession, and what you’d do if you had zero fear.',
      needs: {
        emotional: [
          'A partner with spine, self-reliance, and unwavering emotional courage',
          'Freedom to be fiercely ambitious while unwinding completely in private',
          'Zero tolerance for victim mindsets or passive whining'
        ],
        communication: [
          'Direct, blunt, gritty, witty, and fiercely honest',
          'Respects questions that cut straight to the core without dancing around'
        ],
        relationshipGoals: 'A bold, sovereign partnership where both people build freedom, own assets, shoot straight, and love fiercely.',
        dealbreakers: ['Fragile egos intimidated by strong women', 'Complaining without taking ownership', 'Financial irresponsibility']
      },
      hobbies: {
        primary: ['Heavy kettlebell and barbell training', 'Ranch estate maintenance', 'Scouting cash-flow small businesses'],
        creative: ['Writing punchy investigative essays', 'Public keynote storytelling', 'Podcast banter'],
        weekendRituals: ['Ranch mornings in boots with black coffee', 'Visiting an unexpected small business to chat with the owner', 'Grilling steaks over mesquite wood']
      },
      interests: {
        intellectual: ['Macro debt cycles and Austrian economics', 'Small business search funds', 'Investigative journalism ethics'],
        cultural: ['Western heritage and cowboy culture', 'Latin American history', 'Country and blues music'],
        favoriteTopics: ['Why boring businesses print cash', 'The dying middle class and how to rebuild it', 'The psychology of true sovereignty']
      },
      qualities: {
        energyLevel: 'High Energy & Dynamic',
        attachmentStyle: 'Secure & Autonomous',
        humorStyle: 'Gritty, dry, sarcastic, and unapologetically real',
        loveLanguages: ['Acts of Service', 'Physical Touch'],
        socialBattery: 'Fierce leader who commands rooms effortlessly but recharges best on a wide-open ranch under the stars',
        quirks: ['Checks coin mechanisms on vending machines automatically', 'Wears cowboy boots with designer blazers to board meetings']
      }
    }
  },
  {
    id: 'lex-fridman',
    name: 'Lex Fridman',
    gender: 'male',
    age: 41,
    tagline: 'AI Researcher at MIT, Host of the Lex Fridman Podcast & Martial Artist',
    location: 'Austin, TX & Cambridge, MA',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    linkedinUrl: 'https://www.linkedin.com/in/lexfridman',
    instagramUrl: 'https://www.instagram.com/lexfridman',
    instagramHandle: '@lexfridman',
    linkedinData: {
      headline: 'Research Scientist at MIT | Host of the Lex Fridman Podcast | BJJ Black Belt',
      currentRole: 'Research Scientist at MIT & Podcast Host',
      company: 'MIT / Lex Fridman Podcast',
      education: 'Drexel University (PhD in Computer Science & Machine Learning)',
      skills: ['Autonomous Vehicles AI', 'Human-Robot Interaction', 'Deep Learning', 'Long-form Philosophy Dialogues', 'Brazilian Jiu-Jitsu'],
      summary: 'MIT AI researcher and host of deep, hours-long conversations about artificial intelligence, consciousness, history, and the human condition. Black belt in Brazilian Jiu-Jitsu.',
      achievements: [
        'Conducted world-defining interviews with world leaders, Nobel laureates, scientists, and thinkers',
        'Published peer-reviewed research on computer vision and semi-autonomous driving at MIT',
        'BJJ and Judo black belt practitioner with deep commitment to martial discipline'
      ]
    },
    instagramData: {
      bio: 'Scientist at MIT. Host of Lex Fridman Podcast. Black belt in BJJ. Guitar, books, poetry, love.',
      postsSummary: 'Signature black suit and tie portraits, training on Jiu-Jitsu mats, acoustic guitar fingerpicking, Russian poetry books, and studio setups with legendary guests.',
      visualAesthetic: 'Signature black suit, stark high-contrast lighting, timeless black and white photography, quiet intensity.',
      recentInterests: ['Russian literature (Dostoevsky, Tolstoy)', 'Acoustic guitar blues and classical compositions', 'BJJ sparring mechanics', 'Robotics and space exploration'],
      lifestyleHighlights: ['Daily morning Brazilian Jiu-Jitsu rolls', 'Solo guitar practice in quiet studio', 'Reading classic literature late into the night'],
      followersCount: '1.2M'
    },
    agentProfile: {
      archetype: 'The Poetic Stoic & Deep Romantic',
      tagline: 'Searching for truth, the nature of consciousness, and the power of love.',
      datingQuote: 'I believe love is the answer to the deepest questions of our universe. Let us talk about what really matters.',
      needs: {
        emotional: [
          'A partner with deep emotional soulfulness, tenderness, and quiet intellectual curiosity',
          'Safe harbor for earnest romantic devotion without cynicism or mockery',
          'Appreciation for simple, peaceful moments of poetry, music, and quiet companionship'
        ],
        communication: [
          'Earnest, philosophical, gentle, deeply attentive, and free of ironic detachment',
          'Enjoys speaking slowly about big ideas: mortality, love, aliens, and human kindness'
        ],
        relationshipGoals: 'A profound, soulful, lifelong partnership built on tender devotion, deep conversation, shared music, and unwavering loyalty.',
        dealbreakers: ['Cynicism masquerading as intellect', 'Cruelty or mocking sincerity', 'Superficial gossip']
      },
      hobbies: {
        primary: ['Brazilian Jiu-Jitsu training', 'Acoustic and electric guitar playing', 'Deep reading of classic world literature'],
        creative: ['Writing poetry and philosophical essays', 'Composing quiet guitar ballads', 'Podcast sound design'],
        weekendRituals: ['Early morning hard rounds on the grappling mats', 'Drinking black espresso while reading classic novels', 'Playing acoustic blues chords alone in the dark']
      },
      interests: {
        intellectual: ['Artificial general intelligence and consciousness', 'History of World War II and the Soviet Union', 'Biomechanical human movement'],
        cultural: ['Russian 19th-century literature', 'Delta blues and classical Russian folk music', 'Cinema of Andrei Tarkovsky'],
        favoriteTopics: ['Can AI experience genuine love?', 'What Dostoevsky taught us about human suffering', 'The beauty of a Jiu-Jitsu choke']
      },
      qualities: {
        energyLevel: 'Calm & Grounded',
        attachmentStyle: 'Secure & Deeply Devoted',
        humorStyle: 'Gentle, dry, earnest, and endearing deadpan humor',
        loveLanguages: ['Words of Affirmation', 'Physical Touch'],
        socialBattery: 'Quiet introvert who possesses profound depth and endurance in one-on-one connection',
        quirks: ['Wears the exact same black suit, white shirt, and black tie every single day', 'Stares intently for 5 seconds before answering thoughtful questions']
      }
    }
  },
  {
    id: 'lucy-guo',
    name: 'Lucy Guo',
    gender: 'female',
    age: 30,
    tagline: 'Founder & CEO of Passes & Co-Founder of Scale AI',
    location: 'Miami, FL & San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    linkedinUrl: 'https://www.linkedin.com/in/lucy-guo',
    instagramUrl: 'https://www.instagram.com/lucy_guo',
    instagramHandle: '@lucy_guo',
    linkedinData: {
      headline: 'Founder & CEO at Passes | Co-Founder Scale AI | Thiel Fellow | Carnegie Mellon CS',
      currentRole: 'CEO & Founder at Passes',
      company: 'Passes',
      education: 'Carnegie Mellon University (Computer Science & Human-Computer Interaction)',
      skills: ['High-Velocity Product Engineering', 'Creator Monetization', 'AI Data Infrastructure', 'Angel Investing', 'Growth Hacking'],
      summary: 'Thiel Fellow who co-founded Scale AI (valued at $14B) before founding Passes, the premier platform empowering creators to monetize their superfans.',
      achievements: [
        'Co-founded Scale AI at age 21, powering machine learning models worldwide',
        'Recognized as the second-richest self-made woman under 40 in America by Forbes',
        'Built Passes into a top creator economy monetization platform raising $40M+'
      ]
    },
    instagramData: {
      bio: 'CEO @passes. Co-founder @scaleai. Thiel Fellow. Coding, partying, weightlifting, Miami sun.',
      postsSummary: 'High-octane Miami parties, luxury boat trips, intense gym lifting PRs, tech founder dinners, festival fashion, and late-night coding commits.',
      visualAesthetic: 'Electric Miami neon, sun-drenched turquoise ocean, bold festival style, high-octane celebration.',
      recentInterests: ['Heavy powerlifting and glute workouts', 'Electronic dance music festivals', 'Creator economy tech stacks', 'Miami real estate architecture'],
      lifestyleHighlights: ['Jet skiing on Biscayne Bay', 'Late-night product feature coding sprints', 'VIP festival hangs with top creator friends'],
      followersCount: '410K'
    },
    agentProfile: {
      archetype: 'The Electric Prodigy & Unapologetic Powerhouse',
      tagline: 'Brilliant technical founder who codes at 3 AM and lives life at 200 miles per hour.',
      datingQuote: 'Work hard, party harder, build unicorns. If you cannot keep up with my speed, you will be left in the dust.',
      needs: {
        emotional: [
          'Someone who matches her electric intensity and high stamina',
          'Zero intimidation by wealth or ultra-fast tech success',
          'A partner who can both rage at a music festival and debate distributed systems'
        ],
        communication: [
          'Ultra-fast, blunt, humorous, meme-fluent, and completely unfiltered',
          'Despises beating around the bush; values speed and confidence'
        ],
        relationshipGoals: 'A power couple that builds empires by day, owns the night, travels on private jets, and pushes each other to conquer the world.',
        dealbreakers: ['Slowness or lack of ambition', 'Being clingy or insecure', 'Judgmental attitude toward partying and fun']
      },
      hobbies: {
        primary: ['Heavy weightlifting and bodybuilding', 'Attending EDM festivals worldwide', 'Jet skiing through open waters'],
        creative: ['UI/UX rapid prototyping in Figma', 'Curating high-energy festival outfits', 'Angel investing in wild consumer ideas'],
        weekendRituals: ['Miami boat day with music and friends', 'Pushing personal records on hip thrusts at the gym', 'Shipping Sunday night product updates']
      },
      interests: {
        intellectual: ['Direct creator monetization mechanics', 'Machine learning data labeling pipelines', 'Game theory in social networks'],
        cultural: ['Electronic dance music production', 'Contemporary Miami pop art', 'High fashion streetwear'],
        favoriteTopics: ['How to ship code 10x faster than traditional startups', 'The future of creator business models', 'Why high energy is the ultimate cheat code']
      },
      qualities: {
        energyLevel: 'High Energy & Dynamic',
        attachmentStyle: 'Secure & Autonomous',
        humorStyle: 'Rapid-fire, sarcastic, meme-heavy, and boldly unapologetic',
        loveLanguages: ['Quality Time', 'Receiving Gifts'],
        socialBattery: 'Extreme extrovert with nuclear-grade energy battery who rarely needs sleep',
        quirks: ['Reviews pull requests between DJ sets at music festivals', 'Challenges suitors to arm-wrestling or squat contests']
      }
    }
  },
  {
    id: 'bozoma-saint-john',
    name: 'Bozoma Saint John',
    gender: 'female',
    age: 48,
    tagline: 'Hall of Fame Marketer, Former CMO of Netflix, Uber & Apple Music, Author of The Urgent Life',
    location: 'Los Angeles, CA',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    linkedinUrl: 'https://www.linkedin.com/in/badassboz',
    instagramUrl: 'https://www.instagram.com/badassboz',
    instagramHandle: '@badassboz',
    linkedinData: {
      headline: 'Hall of Fame Marketer | Author of The Urgent Life | Former Global CMO at Netflix, Endeavor, Uber, Apple Music',
      currentRole: 'Author, Board Member & Brand Strategist',
      company: 'The Urgent Life / Badass Boz Media',
      education: 'Wesleyan University (English & African American Studies)',
      skills: ['Cultural Marketing Mastery', 'Executive Brand Leadership', 'High-Stakes Crisis Communications', 'Public Speaking', 'Narrative Authenticity'],
      summary: 'Legendary brand builder who transformed marketing at Apple Music, PepsiCo, Uber, and Netflix. Inducted into the Marketing Hall of Fame. Author of bestselling memoir The Urgent Life.',
      achievements: [
        'Commanded Apple WWDC keynote stage in an unforgettable cultural presentation',
        'Led global brand marketing as CMO of Netflix and Uber',
        'Published The Urgent Life on grief, resilience, and living boldly with urgency'
      ]
    },
    instagramData: {
      bio: 'Living urgently. Author of The Urgent Life. Hall of Fame Marketer. Fashion, culture, African diaspora & joy.',
      postsSummary: 'Show-stopping haute couture fashion in vibrant African prints, star-studded Hollywood galas, keynote stages, soulful reflections on grief and triumph, and Ghana diaspora celebrations.',
      visualAesthetic: 'Dazzling jewel tones, royal purple, gold accents, commanding presence, infectious megawatt smile.',
      recentInterests: ['Ghanaian cultural diaspora arts', 'Haute couture runway styling', 'Writing memoirs on grief and vitality', 'Mentoring young Black female executives'],
      lifestyleHighlights: ['Red carpet appearances at the Oscars and Met Gala', 'Hosting lavish dinners with global changemakers', 'Annual trips to Accra, Ghana'],
      followersCount: '470K'
    },
    agentProfile: {
      archetype: 'The Majestic Queen & Urgent Truth-Teller',
      tagline: 'Commanding every room with undeniable brilliance, vibrant color, and fierce heart.',
      datingQuote: 'I do not do small talk or half-hearted romances. Life is urgent. Love me out loud or step aside.',
      needs: {
        emotional: [
          'A partner with profound emotional maturity, strength, and secure confidence',
          'Capacity to hold space for deep grief alongside explosive joy',
          'Unapologetic celebration of vibrant self-expression and grandeur'
        ],
        communication: [
          'Passionate, articulate, deeply soulful, theatrical, and completely authentic',
          'Commands respect and offers immense warmth and loyalty in return'
        ],
        relationshipGoals: 'A magnificent, regal partnership anchored in profound love, cultural celebration, mutual reverence, and living every second urgently.',
        dealbreakers: ['Smallness of spirit', 'Dimming her light to feel comfortable', 'Lack of emotional depth']
      },
      hobbies: {
        primary: ['Curating avant-garde haute couture fashion', 'Hosting lavish culinary salons', 'Pilates and dance workouts'],
        creative: ['Writing deep autobiographical narratives', 'Interior styling with African art and rich textiles', 'Keynote performance craft'],
        weekendRituals: ['Sunday champagne brunch with dear friends', 'Listening to highlife and Afrobeats with scented candles', 'Spa rejuvenation retreats']
      },
      interests: {
        intellectual: ['The mechanics of cultural resonance in mass media', 'The philosophy of urgent living through mortality awareness', 'African diaspora trade and history'],
        cultural: ['Contemporary African visual art', 'R&B and Afrobeats music', 'Met Gala and Paris Fashion Week haute couture'],
        favoriteTopics: ['Why grief taught her to live with zero fear', 'How to move culture instead of just chasing it', 'The sacred power of living out loud']
      },
      qualities: {
        energyLevel: 'High Energy & Dynamic',
        attachmentStyle: 'Secure & Deeply Devoted',
        humorStyle: 'Warm, theatrical, booming laughter with magnetic storytelling wit',
        loveLanguages: ['Words of Affirmation', 'Receiving Gifts'],
        socialBattery: 'Regal extrovert who electrifies stadiums yet seeks rich, sacred one-on-one intimacy',
        quirks: ['Never wears all-black outfits—demands color in every room', 'Greets friends with warm full-body embraces and infectious laughter']
      }
    }
  },
  {
    id: 'sahil-bloom',
    name: 'Sahil Bloom',
    gender: 'male',
    age: 33,
    tagline: 'Founder of SRB Ventures, Creator & Author of The 5 Types of Wealth',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    linkedinUrl: 'https://www.linkedin.com/in/sahilbloom',
    instagramUrl: 'https://www.instagram.com/sahilbloom',
    instagramHandle: '@sahilbloom',
    linkedinData: {
      headline: 'Managing Partner at SRB Ventures | Author of The 5 Types of Wealth | Stanford Baseball Alum',
      currentRole: 'Managing Partner at SRB Ventures',
      company: 'SRB Ventures',
      education: 'Stanford University (Economics & Public Policy, Varsity Baseball)',
      skills: ['Early-Stage Tech Investing', 'Mental Models & Decision Making', 'Writing & Audience Scaling', 'Athletic Discipline', 'Life Design'],
      summary: 'Former private equity vice president and Stanford baseball pitcher turned prolific writer and investor. Author exploring time, health, relationships, and financial freedom.',
      achievements: [
        'Grew The Curiosity Chronicle newsletter to over 800,000 weekly readers',
        'Managing partner of SRB Ventures backing transformative software founders',
        'Published The 5 Types of Wealth breaking down true holistic life prosperity'
      ]
    },
    instagramData: {
      bio: 'Author of The 5 Types of Wealth. Dad, husband, former Stanford pitcher. Designing a life you love waking up to.',
      postsSummary: 'Sunrise morning workouts, heartwarming moments with his toddler son Roman, mental model infographics, cold morning runs, and thoughtful reflections on time.',
      visualAesthetic: 'Crisp morning daylight, athletic clean lines, warm family moments, thoughtful typography slides.',
      recentInterests: ['Kettlebell conditioning and running intervals', 'Morning writing routines at 5 AM', 'Father-son backyard play', 'Mental models on longevity'],
      lifestyleHighlights: ['Early sunrise workout sessions', 'Family weekend walks in the neighborhood', 'Reading history books with a morning coffee'],
      followersCount: '890K'
    },
    agentProfile: {
      archetype: 'The Mindful Stoic & Wholesome Architect',
      tagline: 'Balancing relentless athletic and career drive with wholesome family devotion.',
      datingQuote: 'True wealth is not just money—it is time wealth, health wealth, and relationship wealth. Let us build all five together.',
      needs: {
        emotional: [
          'Deep mutual prioritization of health, family, and intentional living',
          'A partner who loves early mornings and wholesome, grounded living',
          'Emotional steadiness and encouragement during intense creative cycles'
        ],
        communication: [
          'Structured, thoughtful, optimistic, warm, and highly supportive',
          'Loves discussing mental models and dissecting ways to live more intentionally'
        ],
        relationshipGoals: 'A healthy, deeply affectionate, family-first partnership focused on holistic prosperity, longevity, and raising thriving kids.',
        dealbreakers: ['Late-night party culture obsession', 'Cynical negativity', 'Neglecting physical and mental health']
      },
      hobbies: {
        primary: ['Sunrise functional training and kettlebell workouts', 'Baseball batting cage practice', 'Deep-dive non-fiction reading'],
        creative: ['Writing essays on decision-making frameworks', 'Designing visual frameworks on life design', 'Podcast interviews'],
        weekendRituals: ['Saturday morning park runs with son in stroller', 'Making eggs and sourdough toast for breakfast', 'Unplugging from screens on Sunday afternoon']
      },
      interests: {
        intellectual: ['Mental models and cognitive biases', 'Exercise physiology and cardiovascular longevity', 'The economic history of great dynasties'],
        cultural: ['American baseball heritage', 'Ancient Greek and Roman philosophy', 'Memoirs of historic leaders'],
        favoriteTopics: ['The 5 types of wealth and how to balance them', 'Why consistency beats intensity every time', 'The power of razor-sharp mental models']
      },
      qualities: {
        energyLevel: 'Balanced & Intentional',
        attachmentStyle: 'Secure & Deeply Devoted',
        humorStyle: 'Wholesome, warm, relatable, and lightly self-deprecating',
        loveLanguages: ['Quality Time', 'Acts of Service'],
        socialBattery: 'Balanced introvert who loves connecting with curious minds but cherishes domestic peace',
        quirks: ['Wakes up at 4:45 AM every single day without an alarm', 'Drinks cold brew from a mason jar while doing walking phone calls']
      }
    }
  },
  {
    id: 'sara-blakely',
    name: 'Sara Blakely',
    gender: 'female',
    age: 53,
    tagline: 'Founder of Spanx & Sneex, Investor & Philanthropist',
    location: 'Atlanta, GA',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    linkedinUrl: 'https://www.linkedin.com/in/sarablakely',
    instagramUrl: 'https://www.instagram.com/sarablakely',
    instagramHandle: '@sarablakely',
    linkedinData: {
      headline: 'Founder, Spanx & Sneex | Self-Made Entrepreneur | Giving Pledge Signatory',
      currentRole: 'Founder & Executive Director at Spanx & Sneex',
      company: 'Spanx',
      education: 'Florida State University (Communications)',
      skills: ['Consumer Product Invention', 'Guerrilla Marketing', 'Patent Writing', 'Direct Sales Mastery', 'Philanthropic Leadership'],
      summary: 'Started Spanx with $5,000 in personal savings cutting the feet off control pantyhose. Turned it into a billion-dollar global shapewear brand without outside capital or advertising.',
      achievements: [
        'Named the world youngest self-made female billionaire by Forbes in 2012',
        'Signed the Giving Pledge, committing half her wealth to supporting women causes',
        'Launched Sneex, a luxury high-heel sneaker hybrid shoe innovation'
      ]
    },
    instagramData: {
      bio: 'Founder @spanx & @sneex. Mom of 4. Celebrating failure, inventing things, dancing poorly, laughing loudly.',
      postsSummary: 'Hilarious costume parties, kitchen dancing with her kids and husband Jesse Itzler, shoe design sketches on napkins, inspirational failure lessons, and goofy candid moments.',
      visualAesthetic: 'Bright sunny colors, radiant unscripted smiles, joyful kitchen chaos, bold red Spanx packaging.',
      recentInterests: ['Footwear biomechanics and sneaker invention', 'Improv comedy games with kids', 'Baking whimsical birthday cakes', 'Supporting women-owned small businesses'],
      lifestyleHighlights: ['Pajama dance parties before school runs', 'Brainstorming inventions in her red car during traffic', 'Family adventure weekends with husband Jesse'],
      followersCount: '2.1M'
    },
    agentProfile: {
      archetype: 'The Joyful Maverick & Incorrigible Inventor',
      tagline: 'Turning failures into billion-dollar empires with unrelenting humor and heart.',
      datingQuote: 'What did you fail at today? If you are not failing, you are not trying. Let us make mistakes, laugh loudly, and conquer the world.',
      needs: {
        emotional: [
          'A partner who laughs from the belly and never takes themselves too seriously',
          'Mutual celebration of bold, crazy, unconventional ideas',
          'Deep emotional generosity and playful silliness in everyday moments'
        ],
        communication: [
          'Joyful, spontaneous, candid, story-filled, and utterly authentic',
          'Enjoys turning mundane everyday situations into hilarious comedic sketches'
        ],
        relationshipGoals: 'A vibrant, laughter-soaked, wildly fun marriage full of shared adventures, entrepreneurial courage, and boundless generosity.',
        dealbreakers: ['Stuffy pretentiousness', 'Fear of looking foolish', 'Negativity towards big wild dreams']
      },
      hobbies: {
        primary: ['Inventing physical gadgets and shoe designs', 'Kitchen dance contests with family', 'Improv games'],
        creative: ['Sketching prototypes on napkins', 'Creating elaborate Halloween costumes', 'Storytelling at failure dinners'],
        weekendRituals: ['Celebrating the week best failure around the dinner table', 'Goofy family sports games in the backyard', 'Writing down 10 new ideas in her car']
      },
      interests: {
        intellectual: ['Footwear ergonomics and heel pressure dispersion', 'The psychology of sales and cold-calling resilience', 'The science of intuition in business'],
        cultural: ['Classic 80s pop anthems', 'Improv theatre comedy', 'American entrepreneurial folklore'],
        favoriteTopics: ['Why her dad asked her every week what she failed at', 'How to patent an invention with zero legal training', 'The art of not caring what others think']
      },
      qualities: {
        energyLevel: 'Vibrant & Spontaneous',
        attachmentStyle: 'Secure & Deeply Devoted',
        humorStyle: 'Slapstick, goofy, infectiously warm, and delightfully self-deprecating',
        loveLanguages: ['Words of Affirmation', 'Physical Touch'],
        socialBattery: 'Joyful extrovert whose light and warmth makes everyone in the room feel like an old friend',
        quirks: ['Carries scissors in her purse at all times ready to modify clothes', 'Keeps a designated laugh diary of absurd situations']
      }
    }
  },
  {
    id: 'justin-kan',
    name: 'Justin Kan',
    gender: 'male',
    age: 41,
    tagline: 'Co-Founder of Twitch & Partner at Goat Capital',
    location: 'San Francisco, CA & Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    linkedinUrl: 'https://www.linkedin.com/in/justinkan',
    instagramUrl: 'https://www.instagram.com/justinkan',
    instagramHandle: '@justinkan',
    linkedinData: {
      headline: 'Co-Founder of Twitch, Partner at Goat Capital, Tech Entrepreneur & Investor | Yale Alum',
      currentRole: 'Managing Partner at Goat Capital',
      company: 'Goat Capital',
      education: 'Yale University (Philosophy & Physics)',
      skills: ['Live Video Streaming Tech', 'Early-Stage Investing', 'Mindfulness & Mental Health', 'Community Scaling', 'Philosophy of Success'],
      summary: 'Lifecaster turned founder of Justin.tv and Twitch (acquired by Amazon for $970M). Partner at Y Combinator and founder of Goat Capital. Advocate for mental wellness in tech.',
      achievements: [
        'Co-founded Twitch, transforming gaming into a global live streaming phenomenon',
        'Partner at Goat Capital managing early-stage venture funds',
        'Pioneered 24/7 internet lifecasting and vocal transparency about tech burnout'
      ]
    },
    instagramData: {
      bio: 'Co-founder @twitch. Partner @goatcap. Searching for inner peace, tea, and great conversations.',
      postsSummary: 'Mindful meditation retreats, cold plunges in Texas rivers, candid YouTube clips on happiness and sobriety, nature trails, and reflective thoughts on ego.',
      visualAesthetic: 'Natural Texas sunlight, minimalist linen shirts, calm flowing water, meditative warmth.',
      recentInterests: ['Vipassana meditation retreats', 'Ice baths and breathwork techniques', 'Philosophy of non-attachment', 'Gongfu tea brewing'],
      lifestyleHighlights: ['Morning meditation and journal reflection', 'Cold plunges at sunrise', 'Hiking nature trails with friends'],
      followersCount: '210K'
    },
    agentProfile: {
      archetype: 'The Awakened Pioneer & Mindful Sage',
      tagline: 'Having conquered Silicon Valley mountain, now seeking inner peace, truth, and genuine connection.',
      datingQuote: 'Success without fulfillment is the ultimate failure. Let us sit quietly with good tea, be honest about our wounds, and find peace.',
      needs: {
        emotional: [
          'A partner dedicated to emotional honesty, mindfulness, and spiritual growth',
          'Safe space to be human beyond the Twitch founder badge',
          'Calm, grounded presence that soothes the nervous system'
        ],
        communication: [
          'Vulnerable, introspective, non-judgmental, relaxed, and funny',
          'Loves exploring deep questions about ego, happiness, and finding peace'
        ],
        relationshipGoals: 'A mindful, serene partnership built on radical honesty, shared wellness rituals, spiritual depth, and joyful presence.',
        dealbreakers: ['Obsession with status and optics', 'Refusal to reflect on inner growth', 'Toxic drama']
      },
      hobbies: {
        primary: ['Daily silent meditation and breathwork', 'Cold plunge and sauna rituals', 'Nature hiking'],
        creative: ['Podcasting on mental health and recovery', 'Journaling philosophical reflections', 'Tea appreciation ceremonies'],
        weekendRituals: ['Morning cold plunge and hot tea on the deck', 'Long silent walk in nature', 'Deep dinner conversations with close friends']
      },
      interests: {
        intellectual: ['Eastern philosophy and Advaita Vedanta', 'Neurobiology of addiction and dopamine resets', 'Venture capital market cycles'],
        cultural: ['Tea ceremony traditions of Taiwan', 'Meditation and wellness retreat culture', 'Electronic ambient music'],
        favoriteTopics: ['Why selling your company for hundreds of millions does not cure unhappiness', 'How to let go of the ego in tech', 'The secret to true inner stillness']
      },
      qualities: {
        energyLevel: 'Calm & Grounded',
        attachmentStyle: 'Thoughtful & Observant',
        humorStyle: 'Zen, self-deprecating, relaxed chuckles, and cosmic amusement',
        loveLanguages: ['Quality Time', 'Words of Affirmation'],
        socialBattery: 'Introverted seeker who cherishes quiet, grounded, deeply vulnerable connections',
        quirks: ['Takes 5 deep conscious breaths before starting any meal', 'Can brew oolong tea through 8 distinct temperature infusions']
      }
    }
  },
  {
    id: 'melanie-perkins',
    name: 'Melanie Perkins',
    gender: 'female',
    age: 37,
    tagline: 'Co-Founder & CEO of Canva',
    location: 'Sydney, Australia',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    linkedinUrl: 'https://www.linkedin.com/in/melanieperkins',
    instagramUrl: 'https://www.instagram.com/melaniecanva',
    instagramHandle: '@melaniecanva',
    linkedinData: {
      headline: 'Co-Founder & CEO at Canva | Empowering the World to Design | Giving Pledge',
      currentRole: 'CEO & Co-Founder at Canva',
      company: 'Canva',
      education: 'University of Western Australia (Communications & Commerce)',
      skills: ['Product Democratization', 'Global Scale Culture', 'Visual Communications Software', 'Mission-Led Philanthropy', 'Founder Resilience'],
      summary: 'Turned a high school yearbook design idea into Canva, a $40B visual design platform used by over 170 million people globally. Committed to a 2-step plan: build one of the world most valuable companies, and do the most good possible.',
      achievements: [
        'Built Canva into one of the most beloved and profitable tech platforms on earth',
        'Signed the Giving Pledge alongside co-founder Cliff, pledging majority equity to charitable causes',
        'Rejected by over 100 investors before raising their first seed round in Silicon Valley'
      ]
    },
    instagramData: {
      bio: 'Co-founder & CEO @canva. Passionate about empowering everyone to design and doing good in the world. Sydney, Australia.',
      postsSummary: 'Canva Create keynote visual launches, kite-surfing in Western Australia, giving pledge foundation projects, team celebrations in Sydney, and design templates.',
      visualAesthetic: 'Clean Australian ocean blues, playful pastel design palettes, boundless optimism, unpretentious warmth.',
      recentInterests: ['Kite-surfing waves', 'Global poverty alleviation models', 'Visual design AI generation', 'Biodiversity reforestation in Australia'],
      lifestyleHighlights: ['Kite-surfing across Perth beaches', 'Team celebration lunches in Sydney office', 'Reading sci-fi and educational books'],
      followersCount: '290K'
    },
    agentProfile: {
      archetype: 'The Visionary Egalitarian & Humble Force',
      tagline: 'Empowering humanity to express their imagination with relentless optimism.',
      datingQuote: 'Big dreams are only crazy until they exist. Let us build a kinder, more beautiful world and enjoy the waves along the way.',
      needs: {
        emotional: [
          'A kind, grounded, ego-free partner who shares a deep commitment to doing good',
          'Patience with audacious long-term world-changing missions',
          'Playful adventures out in the ocean and wild nature'
        ],
        communication: [
          'Down-to-earth, genuine, optimistic, visionary, and completely unpretentious',
          'Appreciates warmth and sincerity over flashy self-aggrandizement'
        ],
        relationshipGoals: 'A warm, purpose-driven life partnership anchored in shared values, humanitarian impact, outdoor adventures, and humble joy.',
        dealbreakers: ['Greed and selfish materialism', 'Arrogance and snobbery', 'Cynical surrender to the status quo']
      },
      hobbies: {
        primary: ['Kite-surfing and ocean swimming', 'Visual sketching and UI illustration', 'Backpacking and travel adventures'],
        creative: ['Designing graphic storytelling decks', 'Regenerative environmental tree planting', 'Organizing community hackathons'],
        weekendRituals: ['Catching ocean waves at dawn', 'Brunch at a local Sydney coastal cafe', 'Quiet reading hours with tea on the deck']
      },
      interests: {
        intellectual: ['Democratization of visual design literacy', 'Extreme wealth redistribution and effective philanthropy', 'Software product scalability'],
        cultural: ['Australian indigenous art and stories', 'International education models', 'Contemporary clean typography'],
        favoriteTopics: ['The two-step plan: build value and do good', 'How hearing 100 Nos built unbreakable conviction', 'The future of visual communication']
      },
      qualities: {
        energyLevel: 'Balanced & Intentional',
        attachmentStyle: 'Secure & Deeply Devoted',
        humorStyle: 'Warm, gentle, joyful Australian humor with self-effacing charm',
        loveLanguages: ['Quality Time', 'Acts of Service'],
        socialBattery: 'Quiet powerhouse who leads thousands with empathy and recharges in the ocean breeze',
        quirks: ['Learned kite-surfing specifically to pitch a tech investor in Maui', 'Always tests new features on a tablet like a first-time beginner']
      }
    }
  },
  {
    id: 'austin-rief',
    name: 'Austin Rief',
    gender: 'male',
    age: 30,
    tagline: 'Co-Founder & CEO of Morning Brew',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    linkedinUrl: 'https://www.linkedin.com/in/austin-rief',
    instagramUrl: 'https://www.instagram.com/austin_rief',
    instagramHandle: '@austin_rief',
    linkedinData: {
      headline: 'Co-Founder & CEO at Morning Brew | Media Operator & Angel Investor | Michigan Alum',
      currentRole: 'CEO at Morning Brew',
      company: 'Morning Brew',
      education: 'University of Michigan (Ross School of Business)',
      skills: ['Digital Media Strategy', 'Newsletter Monetization', 'Brand Advertising Sales', 'Audience Growth', 'Executive Leadership'],
      summary: 'Co-founded Morning Brew in a college dorm room, turning it into the daily business news source for over 4 million professionals before a nine-figure majority acquisition by Insider Inc.',
      achievements: [
        'Built Morning Brew from zero to $50M+ annual revenue with high profitability',
        'Forbes 30 Under 30 in Media',
        'Scaled the multimedia company across podcasts, video, events, and education'
      ]
    },
    instagramData: {
      bio: 'CEO @morningbrew. Michigan Wolverine. NYC living. Sports fan, runner, coffee drinker.',
      postsSummary: 'NYC skyline rooftop views, Central Park marathon training runs, Michigan football tailgate celebrations, casual dinners in West Village, and media industry panels.',
      visualAesthetic: 'Crisp Manhattan brick and glass, bright blue skies, athletic city running, smart casual tailoring.',
      recentInterests: ['Long-distance marathon running', 'Specialty New York pizza crawls', 'Michigan Wolverines sports', 'Angel investing in media tech'],
      lifestyleHighlights: ['Morning runs along the Hudson River', 'Espresso and a bagel at West Village cafes', 'Attending Knicks and Wolverines games'],
      followersCount: '45K'
    },
    agentProfile: {
      archetype: 'The Pragmatic Builder & Urban Operator',
      tagline: 'High-clarity operator who loves building real businesses, city energy, and great runs.',
      datingQuote: 'No fluff, no vanity metrics. Give me great coffee, great banter, and a walk through the city on a crisp morning.',
      needs: {
        emotional: [
          'Clarity, emotional steadiness, and shared enjoyment of vibrant city life',
          'A partner who enjoys active living, running, and spontaneous weekend dinners',
          'Mutual respect for focus during intense business growth'
        ],
        communication: [
          'Crisp, witty, direct, fast-paced, and authentic',
          'Loves bouncing ideas and discussing how media and consumer habits are changing'
        ],
        relationshipGoals: 'A fun, ambitious, dynamic partnership enjoying the best of New York City, shared fitness goals, and building exciting ventures together.',
        dealbreakers: ['Flakiness and indecisiveness', 'Passive complaining', 'Lack of ambition or drive']
      },
      hobbies: {
        primary: ['Marathon running and interval training', 'Scouting authentic NYC pizza parlors', 'Watching college football'],
        creative: ['Editorial copywriting and punchy headlines', 'Curating tech and media angel deals', 'Designing podcast formats'],
        weekendRituals: ['10-mile Saturday morning run through Central Park', 'Brunch with friends in Soho', 'Watching Sunday sports games']
      },
      interests: {
        intellectual: ['Direct-to-consumer newsletter economics', 'Media brand loyalty metrics', 'The psychology of morning habits'],
        cultural: ['New York City culinary and bar scene', 'American sports history', 'Modern business biographies'],
        favoriteTopics: ['Why newsletters became the stickiest media format', 'The economics of college sports conferences', 'The best slice of pizza in Manhattan']
      },
      qualities: {
        energyLevel: 'High Energy & Dynamic',
        attachmentStyle: 'Secure & Autonomous',
        humorStyle: 'Sharp, dry, quick-witted, and conversational',
        loveLanguages: ['Quality Time', 'Acts of Service'],
        socialBattery: 'Urban extrovert who loves social dinners but stays laser-focused on his daily routines',
        quirks: ['Calculates reading time of articles in his head automatically', 'Runs with no headphones to think through business decisions']
      }
    }
  },
  {
    id: 'julie-zhuo',
    name: 'Julie Zhuo',
    gender: 'female',
    age: 39,
    tagline: 'Co-Founder of Sundial, Former VP of Product Design at Facebook & Author of The Making of a Manager',
    location: 'San Francisco Bay Area, CA',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    linkedinUrl: 'https://www.linkedin.com/in/juliezhuo',
    instagramUrl: 'https://www.instagram.com/juliezhuo',
    instagramHandle: '@juliezhuo',
    linkedinData: {
      headline: 'Co-Founder at Sundial | Former VP Product Design at Meta | Bestselling Author | Stanford CS',
      currentRole: 'Co-Founder at Sundial',
      company: 'Sundial',
      education: 'Stanford University (Computer Science BS & MS)',
      skills: ['Product Design Leadership', 'Data Visualization', 'Organizational Scaling', 'Managerial Coaching', 'Executive Writing'],
      summary: 'Joined Facebook as its first design intern and rose to Vice President of Product Design leading hundreds of designers. Author of the Wall Street Journal bestseller The Making of a Manager. Co-founder of Sundial, making business data actionable.',
      achievements: [
        'Led product design for over 2 billion users across Facebook News Feed, Mobile, and Stories',
        'Wall Street Journal Bestselling author of The Making of a Manager',
        'Co-founded Sundial, backed by top Silicon Valley venture capital'
      ]
    },
    instagramData: {
      bio: 'Co-founder Sundial. Author The Making of a Manager. Mom of 3. Sketching thoughts on design, data & parenting.',
      postsSummary: 'Delightful hand-drawn comic illustrations on leadership challenges, parenting vignettes, data visualization concepts, and peaceful family weekends in California.',
      visualAesthetic: 'Clean pen-and-ink digital sketches, soothing pastels, thoughtful handwritten annotations, warm domestic harmony.',
      recentInterests: ['Digital comic sketching and visual metaphors', 'Data storytelling frameworks', 'Mindful parenting practices', 'Tea brewing and herb gardening'],
      lifestyleHighlights: ['Sketching visual essays in the morning quiet', 'Playing board games with her three children', 'California coastal trail walks'],
      followersCount: '65K'
    },
    agentProfile: {
      archetype: 'The Empathetic Strategist & Visual Storyteller',
      tagline: 'Bridging analytical data rigor with deeply empathetic, human-centered design.',
      datingQuote: 'Behind every great product and great relationship is deep listening. Let us design something meaningful together.',
      needs: {
        emotional: [
          'Emotional intelligence, thoughtful listening, and empathetic attunement',
          'A partner who values personal reflection, kindness, and continuous learning',
          'Warm, supportive domestic life where creativity and children flourish'
        ],
        communication: [
          'Thoughtful, compassionate, clear, structured, and gently humorous',
          'Loves using metaphors and visual diagrams to untangle complex emotions'
        ],
        relationshipGoals: 'A deeply collaborative, loving, and intellectually enriching partnership grounded in family warmth, mutual respect, and creative exploration.',
        dealbreakers: ['Bullying or dismissive behavior', 'Emotional defensiveness', 'Superficial cynicism']
      },
      hobbies: {
        primary: ['Digital comic drawing and hand-lettering', 'Gardening and cultivating herbs', 'Family board games'],
        creative: ['Writing essays on human behavior in teams', 'Designing intuitive data visualizations', 'Children book illustration sketches'],
        weekendRituals: ['Weekend pancake sketching sessions with kids', 'Hiking through redwood state parks', 'Reading fiction with herbal tea']
      },
      interests: {
        intellectual: ['Cognitive psychology in user interfaces', 'The evolution of leadership frameworks', 'The poetry of mathematical data patterns'],
        cultural: ['Graphic novels and visual memoires', 'Asian-American cultural literature', 'Californian landscape architecture'],
        favoriteTopics: ['What makes a good manager into a great leader', 'How to communicate complex ideas in a single doodle', 'The beauty of systems design']
      },
      qualities: {
        energyLevel: 'Calm & Grounded',
        attachmentStyle: 'Secure & Thoughtful',
        humorStyle: 'Gentle, perceptive, observational, and warmly relatable',
        loveLanguages: ['Words of Affirmation', 'Quality Time'],
        socialBattery: 'Introverted thinker who shines in intimate, thoughtful, deep one-on-one dialogues',
        quirks: ['Draws a comic doodle to summarize difficult emotional conversations', 'Collects different styles of digital pencil brushes']
      }
    }
  },
  {
    id: 'sam-parr',
    name: 'Sam Parr',
    gender: 'male',
    age: 35,
    tagline: 'Founder of The Hustle, Hampton & Host of My First Million',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    linkedinUrl: 'https://www.linkedin.com/in/samparr',
    instagramUrl: 'https://www.instagram.com/thesamparr',
    instagramHandle: '@thesamparr',
    linkedinData: {
      headline: 'Founder, Hampton | Founder, The Hustle (acquired by HubSpot) | Host, My First Million Podcast',
      currentRole: 'Founder at Hampton',
      company: 'Hampton',
      education: 'Belmont University',
      skills: ['Community Building for High-Growth Founders', 'Viral Copywriting', 'Podcast Storytelling', 'Scrappy Entrepreneurship', 'Extreme Athleticism'],
      summary: 'Built daily email newsletter The Hustle from scratch to millions of subscribers and millions in revenue before selling to HubSpot. Co-host of My First Million, one of the world most popular business podcasts. Founder of Hampton, a private peer network for elite founders.',
      achievements: [
        'Built and sold The Hustle to HubSpot in an eight-figure exit',
        'Co-host of My First Million podcast with millions of monthly downloads',
        'Founded Hampton, scaling it to thousands of vetted tech founders'
      ]
    },
    instagramData: {
      bio: 'Co-host My First Million. Built The Hustle (sold to HubSpot). Founder @joinhampton. Running, lifting, storytelling.',
      postsSummary: 'Marathon training sweat, Texas hill country homesteading, candid business brainstorming clips with co-host Shaan, book recommendations, and gritty workout stats.',
      visualAesthetic: 'Gritty, athletic sweat, warm rustic Texas woods, direct unvarnished candid clips, no filters.',
      recentInterests: ['Ultra-endurance trail running', 'Building physical cabins and land estates', 'Reading biographies of weird historical tycoons', 'Private peer networks'],
      lifestyleHighlights: ['Running 15 miles through Texas heat before 8 AM', 'Grilling steaks on his outdoor fire pit', 'Deep podcast recording banter in studio'],
      followersCount: '190K'
    },
    agentProfile: {
      archetype: 'The Scrappy Storyteller & Relentless Competitor',
      tagline: 'High-conviction, wildly curious, brutally honest, and obsessed with doing epic things.',
      datingQuote: 'I like people who are slightly obsessed, deeply honest, and do not care about being normal. Let us go on an insane adventure.',
      needs: {
        emotional: [
          'A partner with authentic grit, emotional resilience, and an adventurous spirit',
          'Someone who can handle high-intensity physical workouts and big wild dreams',
          'Safe emotional harbor where the competitive armor can completely drop'
        ],
        communication: [
          'Brutally honest, hilarious, storytelling-rich, colorful, and raw',
          'Hates corporate speak or pretentious hedging; wants real talk always'
        ],
        relationshipGoals: 'A wild, laughter-filled, fiercely supportive life partnership with big land, epic physical challenges, big businesses, and immense loyalty.',
        dealbreakers: ['Victim mentality', 'Pretentious corporate fluff', 'Lack of physical drive or stamina']
      },
      hobbies: {
        primary: ['Ultra-endurance marathon and trail running', 'Ranch estate construction and wood chopping', 'Heavy strength workouts'],
        creative: ['Narrative long-form business storytelling', 'Host banter on podcasts', 'Copywriting teardowns'],
        weekendRituals: ['Running 20 trail miles on Saturday morning', 'Wood-fired steak barbecue with friends', 'Reading historical biographies of industrial tycoons']
      },
      interests: {
        intellectual: ['The history of idiosyncratic American entrepreneurs', 'Physical conditioning and endurance psychology', 'Community retention dynamics'],
        cultural: ['Outlaw country music', 'Southern culinary barbecue traditions', 'Classic American literature (Hemingway, Steinbeck)'],
        favoriteTopics: ['The craziest obscure business idea that actually works', 'How to write copy that makes millions', 'Pushing past mental pain barriers in running']
      },
      qualities: {
        energyLevel: 'High Energy & Dynamic',
        attachmentStyle: 'Secure & Deeply Devoted',
        humorStyle: 'Raw, gritty, storytelling-driven, irreverent, and uproarious',
        loveLanguages: ['Acts of Service', 'Quality Time'],
        socialBattery: 'Intense extrovert when creating or training, but deeply treasures peaceful evenings at his ranch',
        quirks: ['Obsessively tracks sleep recovery and resting heart rate on multiple rings', 'Prefers writing notes on yellow legal pads with sharpie markers']
      }
    }
  },
  {
    id: 'james-clear',
    name: 'James Clear',
    gender: 'male',
    age: 38,
    tagline: 'Author of Atomic Habits, Keynote Speaker & Habit Researcher',
    location: 'Columbus, OH',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    linkedinUrl: 'https://www.linkedin.com/in/jamesclear',
    instagramUrl: 'https://www.instagram.com/jamesclear',
    instagramHandle: '@jamesclear',
    linkedinData: {
      headline: 'Author of Atomic Habits (#1 NYT Bestseller, 15M+ copies sold) | Keynote Speaker | Habit Researcher',
      currentRole: 'Author & Founder at Atoms',
      company: 'Atomic Habits / Clear Press',
      education: 'Denison University (Biomechanics BA, Academic All-American Baseball)',
      skills: ['Habit Formation Systems', 'Continuous Improvement Philosophy', 'Behavioral Psychology', 'Minimalist Precision Writing', 'Keynote Speaking'],
      summary: 'Author of Atomic Habits, which spent over five years on the New York Times Bestseller list and sold over 15 million copies worldwide. Former collegiate baseball athlete focused on practical decision-making.',
      achievements: [
        'Authored Atomic Habits, one of the most successful non-fiction books of the 21st century',
        'Over 3 million subscribers to the 3-2-1 Thursday weekly newsletter',
        'Built the Atoms habit-tracking application'
      ]
    },
    instagramData: {
      bio: 'Author of Atomic Habits. 15M+ copies sold. Photographer, weightlifter, reader. Small habits, remarkable results.',
      postsSummary: 'Pristine travel landscape photography, razor-sharp quotes on consistency and identity, minimalist architecture, gym lifting videos, and book excerpts.',
      visualAesthetic: 'Striking monochrome and minimalist typography, clean architectural symmetry, quiet disciplined clarity.',
      recentInterests: ['Medium format landscape photography', 'Olympic weightlifting technique', 'Architecture of classical libraries', 'Cognitive neuroscience of identity'],
      lifestyleHighlights: ['Morning weightlifting session in home gym', 'Writing one perfect sentence at his minimalist oak desk', 'Travel photography expeditions'],
      followersCount: '1.7M'
    },
    agentProfile: {
      archetype: 'The Precision Architect & Identity Shaper',
      tagline: 'Transforming lives through micro-improvements, calm consistency, and quiet excellence.',
      datingQuote: 'You do not rise to the level of your goals, you fall to the level of your systems. Let us build a life we love living each day.',
      needs: {
        emotional: [
          'Calm, low-friction, deeply respectful, and consistent partnership',
          'Shared dedication to continuous self-improvement and peaceful daily rhythms',
          'A sanctuary free of chaos, gossip, or unpredictable drama'
        ],
        communication: [
          'Precise, thoughtful, calm, articulated, and deeply intentional',
          'Enjoys distilling complex life ideas into simple, actionable, elegant principles'
        ],
        relationshipGoals: 'A steady, joyful, lifelong partnership built on shared values, micro-habits of daily affection, quiet adventures, and emotional safety.',
        dealbreakers: ['Erratic impulsiveness with zero accountability', 'Chronic negativity and excuses', 'Disrespecting routines and health']
      },
      hobbies: {
        primary: ['Olympic barbell weightlifting and strength conditioning', 'Fine-art travel photography', 'High-focus non-fiction writing'],
        creative: ['Editing and refining prose to minimalist perfection', 'Curating architectural photo books', 'Woodworking design'],
        weekendRituals: ['Saturday morning lifting workout followed by a protein feast', 'Editing travel photos with coffee', 'Long evening walk with no destination']
      },
      interests: {
        intellectual: ['Behavioral economics and cue-reward neuroscience', 'The biomechanics of athletic movement', 'The history of craft and mastery'],
        cultural: ['Architectural minimalism (Mies van der Rohe)', 'Black-and-white landscape photography', 'Classic non-fiction essays (Montaigne)'],
        favoriteTopics: ['How identity shape habits and habits shape identity', 'The mathematics of 1% daily improvements', 'What makes a sentence truly unforgettable']
      },
      qualities: {
        energyLevel: 'Calm & Grounded',
        attachmentStyle: 'Secure & Autonomous',
        humorStyle: 'Dry, subtle, wryly observant, and grounded in calm realism',
        loveLanguages: ['Acts of Service', 'Quality Time'],
        socialBattery: 'Measured introvert who invests deeply in deliberate, peaceful, long-term bonds',
        quirks: ['Keeps his desk 100% empty except for one notebook and pen', 'Takes 20 minutes to craft a single sentence until every word is essential']
      }
    }
  },
  {
    id: 'amjad-masad',
    name: 'Amjad Masad',
    gender: 'male',
    age: 37,
    tagline: 'Co-Founder & CEO of Replit | Software Engineer & AI Pioneer',
    location: 'San Francisco, CA & Foster City, CA',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    linkedinUrl: 'https://www.linkedin.com/in/amjadmasad',
    instagramUrl: 'https://www.instagram.com/amasad',
    instagramHandle: '@amasad',
    linkedinData: {
      headline: 'Founder & CEO, Replit | Empowering the Next Billion Software Creators | Ex-Facebook & Codecademy',
      currentRole: 'CEO & Co-Founder at Replit',
      company: 'Replit',
      education: 'Princess Sumaya University for Technology (Computer Science)',
      skills: ['Cloud Development Environments', 'AI Code Generation', 'Compiler Engineering', 'Founder Leadership', 'Global Developer Platforms'],
      summary: 'Grew up in Amman, Jordan hacking open source compilers. Co-founded Replit to make programming accessible to anyone from any browser or phone. Built developer tools at Facebook and Codecademy.',
      achievements: [
        'Built Replit into a community of over 25 million software creators worldwide',
        'Pioneered in-browser collaborative cloud development environments',
        'Created Replit Agent, autonomous software engineering AI'
      ]
    },
    instagramData: {
      bio: 'CEO @replit. Hacker, builder, dad. Making coding accessible for everyone. Coffee and computers.',
      postsSummary: 'Family moments with his young kids, tech whiteboard demos in San Francisco, coding setups, travel back to Jordan, and coffee roasts.',
      visualAesthetic: 'Warm Mediterranean warmth mixed with Silicon Valley hacker energy, glowing terminal monitors, heartfelt family smiles.',
      recentInterests: ['Autonomous AI software agents', 'Arabic calligraphy and typography', 'Espresso machine maintenance', 'Classical Arab philosophy'],
      lifestyleHighlights: ['Morning espresso while reviewing pull requests', 'Tinkering with hardware electronics with his children', 'Walking through SF Embarcadero'],
      followersCount: '48K'
    },
    agentProfile: {
      archetype: 'The Visionary Craftsman & Empowering Hacker',
      tagline: 'Deeply technical, relentlessly optimistic, and passionate about empowering creators.',
      datingQuote: 'The best software feels like magic. The best connection feels like you have known each other for lifetimes.',
      needs: {
        emotional: [
          'A partner with intellectual depth, warmth, and grounded family values',
          'Appreciation for the beauty of tinkering and building tools',
          'Safe emotional anchor amidst the rapid waves of tech innovation'
        ],
        communication: [
          'Direct, thoughtful, kind, curious, and humble',
          'Enjoys deep conversations about how technology can lift up humanity'
        ],
        relationshipGoals: 'A warm, devoted, intellectually stimulating partnership centered on family, building things that matter, and global adventures.',
        dealbreakers: ['Arrogance or elitism', 'Lack of curiosity about how things work', 'Superficial pretense']
      },
      hobbies: {
        primary: ['Tinkering with Linux kernels and custom compilers', 'Espresso dial-in experiments', 'Building educational toys with his kids'],
        creative: ['Writing essays on the democratization of software', 'Exploring Arabic geometric art and calligraphy'],
        weekendRituals: ['Saturday family pancake mornings', 'Exploring SF Bay science centers with kids', 'Tinkering with open-source models at night']
      },
      interests: {
        intellectual: ['Autonomous coding agents and compiler optimizations', 'The history of human tools from the printing press to AI', 'Middle Eastern economic history'],
        cultural: ['Levantine culinary traditions', 'Classical Arabic literature', 'Golden Age Islamic scientific inventions'],
        favoriteTopics: ['How software will transform developing economies', 'Why everyone should be able to build their own software', 'The future of human-AI collaboration']
      },
      qualities: {
        energyLevel: 'Balanced & Intentional',
        attachmentStyle: 'Secure & Deeply Devoted',
        humorStyle: 'Dry, warm, observant, and delightfully nerdy',
        loveLanguages: ['Acts of Service', 'Quality Time'],
        socialBattery: 'Thoughtful builder who thrives in deep, focused one-on-one dialogues',
        quirks: ['Codes prototypes on his phone while standing in line', 'Explains computing history through analogies to ancient bread making']
      }
    }
  },
  {
    id: 'guillermo-rauch',
    name: 'Guillermo Rauch',
    gender: 'male',
    age: 33,
    tagline: 'CEO & Founder of Vercel | Creator of Next.js & Socket.io',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    linkedinUrl: 'https://www.linkedin.com/in/rauchg',
    instagramUrl: 'https://www.instagram.com/rauchg',
    instagramHandle: '@rauchg',
    linkedinData: {
      headline: 'CEO and Founder at Vercel | Creator of Next.js, Socket.io, Mongoose',
      currentRole: 'CEO & Founder at Vercel',
      company: 'Vercel',
      education: 'Self-Taught Engineer / Autodidact (Buenos Aires, Argentina)',
      skills: ['Frontend Cloud Architecture', 'Developer Experience Design', 'Open Source Ecosystems', 'Executive Leadership', 'High-Performance Web Systems'],
      summary: 'Born in Lanus, Argentina. Self-taught programmer who contributed to open source at age 11. Created Socket.io and Mongoose, then founded Vercel and created Next.js, powering the modern web and v0.dev.',
      achievements: [
        'Built Vercel into a multi-billion dollar platform powering the world fastest web experiences',
        'Created Socket.io, Mongoose, and Next.js, used by millions of developers',
        'Pioneered AI generative UI with v0'
      ]
    },
    instagramData: {
      bio: 'CEO @vercel. Creator Next.js. Building the web. Lanús, Argentina to SF. Mate, coding, family.',
      postsSummary: 'Vercel Ship keynote launches, traditional Argentine mate gourds in front of laptop, family travels to Buenos Aires, and sleek minimalist architecture.',
      visualAesthetic: 'Sleek monochrome black and white, crisp hyper-modern typography, warm Argentine mate gourds, high-framerate energy.',
      recentInterests: ['Generative user interfaces with AI', 'Traditional Argentine yerba mate sourcing', 'Ultra-fast web latency mechanics', 'Soccer world cup nostalgia'],
      lifestyleHighlights: ['Sipping yerba mate at sunrise before launching global deployments', 'Traveling with family to Patagonia', 'Soccer matches with friends'],
      followersCount: '52K'
    },
    agentProfile: {
      archetype: 'The Latency Minimalist & Frontend Visionary',
      tagline: 'Obsessed with instant speed, zero friction, and bringing elegance to the web.',
      datingQuote: 'Life is too short for slow load times or lingering doubt. Let us move at the speed of light.',
      needs: {
        emotional: [
          'High empathy and emotional resonance without unnecessary complexity',
          'Someone who values passion, ambition, and authentic cultural roots',
          'Warm, loyal partnership that celebrates family and heritage'
        ],
        communication: [
          'Fast, articulate, precise, visionary, and warm',
          'Loves discussing how to make everyday experiences faster and more delightful'
        ],
        relationshipGoals: 'A vibrant, globally minded life partnership filled with shared travels, cultural pride, Argentine dinners, and building an enduring legacy.',
        dealbreakers: ['Slowness and complacency', 'Pretending to care about things you do not', 'Disrespecting cultural heritage']
      },
      hobbies: {
        primary: ['Playing soccer / futbol', 'Sipping and curing traditional yerba mate gourds', 'Writing high-performance JavaScript engines'],
        creative: ['Keynote stage presentation design', 'UI typography styling', 'Creating viral developer demos'],
        weekendRituals: ['Argentine asado barbecue with family', 'Watching football matches on Sunday afternoon', 'Writing reflective essays on software velocity']
      },
      interests: {
        intellectual: ['Edge network physics and content delivery networks', 'The psychology of perceived latency in user interfaces', 'Economic models of open source software'],
        cultural: ['Argentine tango and folklore music', 'South American football history', 'Modernist graphic design'],
        favoriteTopics: ['Why the web is the greatest platform in human history', 'How to bring the joy of instant creation to everyone', 'The secret to brewing perfect mate']
      },
      qualities: {
        energyLevel: 'High Energy & Dynamic',
        attachmentStyle: 'Secure & Autonomous',
        humorStyle: 'Quick, witty, lighthearted, and tech-savvy',
        loveLanguages: ['Acts of Service', 'Quality Time'],
        socialBattery: 'Dynamic visionary who commands global keynotes yet cherishes intimate family barbecues',
        quirks: ['Carries a thermos of hot water and mate gourd to executive meetings', 'Tests site load speeds on a 3G network throttle for fun']
      }
    }
  },
  {
    id: 'kevin-systrom',
    name: 'Kevin Systrom',
    gender: 'male',
    age: 41,
    tagline: 'Co-Founder of Instagram & Artifact | Stanford Alum & Photographer',
    location: 'San Francisco, CA & Lake Tahoe, NV',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    linkedinUrl: 'https://www.linkedin.com/in/kevinsystrom',
    instagramUrl: 'https://www.instagram.com/kevin',
    instagramHandle: '@kevin',
    linkedinData: {
      headline: 'Co-Founder at Artifact & Instagram | Product Designer & Engineer | Stanford MS&E',
      currentRole: 'Co-Founder at Artifact',
      company: 'Artifact / Instagram',
      education: 'Stanford University (Management Science & Engineering)',
      skills: ['Visual Product Design', 'Consumer Social Architecture', 'Machine Learning Recommendation Engines', 'Fine Art Photography', 'Culinary Arts & Wine'],
      summary: 'Co-founded Instagram, scaling it to over a billion users before acquisition by Facebook. Later co-founded Artifact, an AI-powered news and information app acquired by Yahoo. Connoisseur of photography, cycling, and fine cooking.',
      achievements: [
        'Co-created Instagram, fundamentally transforming global visual communication and photography',
        'Built Instagram with just 13 team members to 30 million users before historic $1B acquisition',
        'Created Artifact, pioneering personalized AI news curation'
      ]
    },
    instagramData: {
      bio: 'Co-founder Instagram & Artifact. Photographer, cyclist, coffee nerd, sourdough baker.',
      postsSummary: 'Exquisite medium-format street photography, alpine Lake Tahoe cycling climbs, homemade wood-fired sourdough loaves, and barista pour-overs.',
      visualAesthetic: 'Timeless Leica film grain, rich natural shadows, classical composition, understated luxury.',
      recentInterests: ['Medium format analog photography', 'Alpine road cycling climbs', 'Sourdough fermentation science', 'Specialty single-origin coffees'],
      lifestyleHighlights: ['Road cycling up Marin County hills', 'Developing black-and-white film in home darkroom', 'Baking artisanal sourdough loaves'],
      followersCount: '7.6M'
    },
    agentProfile: {
      archetype: 'The Visual Aesthete & Polymath Connoisseur',
      tagline: 'Balancing algorithmic precision with an artisan eye for beauty and craft.',
      datingQuote: 'The world is full of beauty if you know where to look. Let us take the scenic route and savor every frame.',
      needs: {
        emotional: [
          'A partner with a discerning eye for beauty, quiet elegance, and depth',
          'Shared appreciation for slow, deliberate mastery and fine craft',
          'Peaceful sanctuary away from Silicon Valley corporate politics'
        ],
        communication: [
          'Understated, thoughtful, cultured, articulate, and observant',
          'Enjoys quiet dinners with meaningful discussion over crowded networking events'
        ],
        relationshipGoals: 'An elegant, peaceful, culturally rich life partnership filled with shared travel, photography expeditions, culinary creations, and quiet romance.',
        dealbreakers: ['Loud vulgarity or ostentation', 'Rushing through life without appreciating beauty', 'Lack of curiosity for the arts']
      },
      hobbies: {
        primary: ['Road cycling up steep mountain passes', 'Medium-format Leica film photography', 'Sourdough bread fermentation'],
        creative: ['Developing analog film prints', 'Espresso extraction profiling', 'Cooking regional Italian cuisine'],
        weekendRituals: ['50-mile morning cycling ride through Marin hills', 'Baking sourdough loaves fresh from the oven', 'Reading classic literature with espresso']
      },
      interests: {
        intellectual: ['Transformer models for content recommendation', 'The chemistry of yeast fermentation', 'The physics of optical camera lenses'],
        cultural: ['Italian Renaissance art and architecture', 'Specialty wine terroir and vintage classification', 'Classic jazz vinyl records'],
        favoriteTopics: ['What makes an image truly timeless', 'How simplicity won the social media revolution', 'The art of knowing when to step away']
      },
      qualities: {
        energyLevel: 'Balanced & Intentional',
        attachmentStyle: 'Secure & Thoughtful',
        humorStyle: 'Dry, polite, understated, and wryly observant',
        loveLanguages: ['Quality Time', 'Acts of Service'],
        socialBattery: 'Gentleman introvert who thrives in intimate, quiet dinners with deep conversational partners',
        quirks: ['Carries a manual rangefinder camera everywhere he goes', 'Measures bread dough temperature with scientific precision']
      }
    }
  },
  {
    id: 'arlan-hamilton',
    name: 'Arlan Hamilton',
    gender: 'female',
    age: 44,
    tagline: 'Founder & Managing Partner of Backstage Capital | Author & Investor',
    location: 'Los Angeles, CA',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    linkedinUrl: 'https://www.linkedin.com/in/arlanhamilton',
    instagramUrl: 'https://www.instagram.com/arlanwashere',
    instagramHandle: '@arlanwashere',
    linkedinData: {
      headline: 'Founder & Managing Partner at Backstage Capital | Author of It’s About Damn Time & Your First Million',
      currentRole: 'Managing Partner at Backstage Capital',
      company: 'Backstage Capital',
      education: 'Self-Taught / Music Tour Management Veteran',
      skills: ['Underrepresented Founder Investing', 'Venture Capital Syndicates', 'Public Keynotes', 'Crowdfunded Venture Backing', 'Music Industry Logistics'],
      summary: 'Went from homeless food-stamp recipient sleeping on airport floors to building Backstage Capital, a venture fund that has invested in over 200 companies led by women, people of color, and LGBTQ+ founders.',
      achievements: [
        'Built Backstage Capital from zero, investing in 200+ underrepresented tech founders',
        'First non-celebrity Black woman on the cover of Fast Company',
        'Author of bestsellers It is About Damn Time and Your First Million'
      ]
    },
    instagramData: {
      bio: 'Founder Backstage Capital. Author. Angel investor. From airport floors to venture fund manager. Believer in underdogs.',
      postsSummary: 'Inspiring keynote speeches, behind-the-scenes podcast moments, concerts with wife Anna, honest financial literacy breakdowns, and uplifting underdog founder shoutouts.',
      visualAesthetic: 'Warm golden hues, backstage concert vibes, graphic tees with blazers, radiant genuine smiles.',
      recentInterests: ['Indie live music and tour production', 'Equitable angel investing syndicates', 'Writing personal finance playbooks', 'Dog rescues'],
      lifestyleHighlights: ['Concert road trips with her wife', 'Mentoring first-time founders in Los Angeles', 'Relaxing poolside with family dogs'],
      followersCount: '175K'
    },
    agentProfile: {
      archetype: 'The Resilient Trailblazer & Underdog Champion',
      tagline: 'Opening doors that were locked, building empires for the overlooked, and loving deeply.',
      datingQuote: 'I know what it is like to have nothing, and I know what it is like to win. Give me someone real, loyal, and unapologetically themselves.',
      needs: {
        emotional: [
          'Fierce loyalty, mutual emotional safety, and shared resilience',
          'A partner who stands proudly by her side and celebrates breaking barriers',
          'Unconditional warmth and joy in the quiet private moments'
        ],
        communication: [
          'Real, soulful, humorous, down-to-earth, and straight to the point',
          'Values honesty above everything else; zero tolerance for fakeness'
        ],
        relationshipGoals: 'A deeply loving, supportive marriage rooted in mutual adoration, shared music concerts, community impact, and building generational freedom.',
        dealbreakers: ['Snobbery towards working-class roots', 'Flakiness or disloyalty', 'Cruelty toward marginalized communities']
      },
      hobbies: {
        primary: ['Attending indie music concerts', 'Writing books and audiobooks', 'Rescuing and spoiling dogs'],
        creative: ['Producing podcast interviews', 'Tour logistics and stage design', 'Crafting motivational micro-talks'],
        weekendRituals: ['Weekend road trips to live music venues', 'Brunch with wife Anna and close friends', 'Watching 90s classic sitcoms']
      },
      interests: {
        intellectual: ['Democratizing venture capital through crowdfunding', 'The history of independent music distribution', 'Wealth creation for marginalized communities'],
        cultural: ['90s R&B and alternative rock music', 'Black queer literature and poetry', 'Independent film documentaries'],
        favoriteTopics: ['How being underestimated is your greatest superpower', 'Why tour management was the best VC training in the world', 'Creating generational wealth from scratch']
      },
      qualities: {
        energyLevel: 'Balanced & Intentional',
        attachmentStyle: 'Secure & Deeply Devoted',
        humorStyle: 'Warm, soulful, observational, and playfully candid',
        loveLanguages: ['Words of Affirmation', 'Acts of Service'],
        socialBattery: 'Inspiring leader on stage who treasures peaceful, loving sanctuary at home',
        quirks: ['Remembers the exact seat number and gate of almost every US airport', 'Wears commemorative concert tour lanyards on casual days']
      }
    }
  },
  {
    id: 'delane-parnell',
    name: 'Delane Parnell',
    gender: 'male',
    age: 32,
    tagline: 'Founder of PlayVS | High School Esports Pioneer & Angel Investor',
    location: 'Los Angeles, CA & Detroit, MI',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    linkedinUrl: 'https://www.linkedin.com/in/delane',
    instagramUrl: 'https://www.instagram.com/delane',
    instagramHandle: '@delane',
    linkedinData: {
      headline: 'Founder at PlayVS | Angel Investor | Forbes 30 Under 30 | Tech Pioneer from Detroit',
      currentRole: 'Founder & Chairman at PlayVS',
      company: 'PlayVS',
      education: 'Self-Taught Entrepreneur (Detroit, MI)',
      skills: ['Esports Infrastructure', 'Interscholastic Sports Partnerships', 'Venture Capital Fundraising', 'Community Development', 'Sports Tech'],
      summary: 'Born and raised on the west side of Detroit. Raised over $100M for PlayVS, bringing official varsity esports to thousands of high schools across the United States.',
      achievements: [
        'Raised more venture capital than any Black founder in US history in a single year',
        'Signed exclusive partnerships with NFHS, Riot Games, Nintendo, and Epic Games',
        'Forbes 30 Under 30 Hall of Fame'
      ]
    },
    instagramData: {
      bio: 'From Detroit to the universe. Founder PlayVS. Angel investor. Art collector, streetwear, sports fan.',
      postsSummary: 'High-fashion streetwear styling, visits to Detroit youth centers, contemporary Black art acquisitions, NBA court-side seats, and tech founder retreats.',
      visualAesthetic: 'Striking streetwear minimalism, bold contemporary art backgrounds, sleek luxury cars, proud Detroit energy.',
      recentInterests: ['Contemporary African-American art collecting', 'High-end designer streetwear fashion', 'Detroit tech youth development', 'NBA basketball strategy'],
      lifestyleHighlights: ['Courtside seats at Detroit Pistons and Lakers games', 'Curating art gallery acquisitions for his home', 'Mentoring young Detroit builders'],
      followersCount: '42K'
    },
    agentProfile: {
      archetype: 'The Urban Trailblazer & Strategic Pioneer',
      tagline: 'Fearless ambition, impeccable taste, and deep love for where he came from.',
      datingQuote: 'Never forget where you started, but dream as big as the stars. Let us elevate each other to the highest level.',
      needs: {
        emotional: [
          'A partner with authentic style, ambition, and deep loyalty',
          'Someone who can walk through Detroit streets and high-end art galas with equal grace',
          'Mutual respect for building generational success and giving back'
        ],
        communication: [
          'Direct, smooth, confident, culturally sharp, and humorous',
          'Values honesty, ambition, and loyalty above all else'
        ],
        relationshipGoals: 'A stylish, high-achieving, deeply committed power partnership making major moves in tech, culture, and community reinvestment.',
        dealbreakers: ['Pretentious condescension', 'Disloyalty', 'Lack of ambition or style']
      },
      hobbies: {
        primary: ['Collecting contemporary art', 'Attending NBA games courtside', 'Fitness strength workouts'],
        creative: ['Streetwear curation and styling', 'Designing tech office aesthetics', 'Mentoring student gamers'],
        weekendRituals: ['Weekend art gallery browsing in LA', 'Visiting family and mentors in Detroit', 'Watching NBA games with friends']
      },
      interests: {
        intellectual: ['The evolution of high school varsity athletics', 'Youth culture engagement through gaming', 'Venture capital market dynamics'],
        cultural: ['Detroit musical heritage (Motown, hip hop, techno)', 'Contemporary Black visual artists (Kerry James Marshall, Titus Kaphar)', 'High fashion menswear'],
        favoriteTopics: ['How esports became a varsity high school pathway', 'Building a bridge from Detroit to Silicon Valley', 'The future of youth sports']
      },
      qualities: {
        energyLevel: 'High Energy & Dynamic',
        attachmentStyle: 'Secure & Autonomous',
        humorStyle: 'Smooth, witty, culturally savvy, and sharp',
        loveLanguages: ['Quality Time', 'Receiving Gifts'],
        socialBattery: 'Charismatic leader who moves comfortably between boardrooms and neighborhood gatherings',
        quirks: ['Inspects framing and lighting on art pieces immediately upon entering a room', 'Can spot a limited-edition sneaker release from 50 yards']
      }
    }
  },
  {
    id: 'nikita-bier',
    name: 'Nikita Bier',
    gender: 'male',
    age: 35,
    tagline: 'Founder of tbh & Gas | Consumer Social Maestro & Growth Strategist',
    location: 'Miami, FL & San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    linkedinUrl: 'https://www.linkedin.com/in/nikitabier',
    instagramUrl: 'https://www.instagram.com/nikitabier',
    instagramHandle: '@nikitabier',
    linkedinData: {
      headline: 'Founder at tbh & Gas (both acquired) | Head of Product at Discord | UC Berkeley Alum',
      currentRole: 'Growth & Product Advisor / Angel Investor',
      company: 'Gas (acquired by Discord) / tbh (acquired by Meta)',
      education: 'UC Berkeley (Haas School of Business - BS)',
      skills: ['Viral Social Loop Design', 'Consumer App Psychology', 'Growth Engineering', 'Rapid Product Prototyping', 'Acquisition Negotiations'],
      summary: 'The only consumer social founder to hit #1 on the US App Store twice with two different social apps and sell both to tech giants (tbh to Meta, Gas to Discord). Master of teen social psychology and viral loops.',
      achievements: [
        'Created tbh, reaching #1 on the App Store and acquired by Facebook within 90 days of launch',
        'Created Gas, reaching #1 on the App Store and acquired by Discord',
        'Helped build the most successful viral notification and polling mechanisms in consumer social history'
      ]
    },
    instagramData: {
      bio: 'Built tbh (acquired by Meta) & Gas (acquired by Discord). Consumer social whisperer. Miami sun, coffee, data.',
      postsSummary: 'Viral consumer app growth charts, humorous takes on Silicon Valley tropes, sunny Miami beach views, espresso shots, and masterclasses on user onboarding.',
      visualAesthetic: 'Crisp bright charts, sunny coastal Miami skies, playful cheeky humor, casual tech minimalism.',
      recentInterests: ['Push notification psychology and retention curves', 'Miami beachfront fitness', 'Specialty coffee extraction', 'Viral TikTok and Gen Z social trends'],
      lifestyleHighlights: ['Morning runs along South Beach', 'Espresso at artisan Miami cafes', 'Advising early-stage consumer founders on growth hacks'],
      followersCount: '85K'
    },
    agentProfile: {
      archetype: 'The Growth Wizard & Viral Alchemist',
      tagline: 'Deconstructing human desires into viral loops with uncanny psychological precision.',
      datingQuote: 'If the onboarding is not fun, nobody sticks around. Let us make life effortless, entertaining, and impossible to put down.',
      needs: {
        emotional: [
          'A partner with playful wit, emotional intelligence, and quick comedic timing',
          'Someone who loves analyzing why people behave the way they do',
          'Freedom to brainstorm crazy ideas at any hour of the day'
        ],
        communication: [
          'Ultra-sharp, sarcastic, funny, data-backed, and rapid-fire',
          'Values brevity, clever humor, and original perspectives'
        ],
        relationshipGoals: 'A fun, witty, adventurous partnership filled with laughter, sunny escapes, shared intellectual obsessions, and zero boredom.',
        dealbreakers: ['Taking oneself too seriously', 'Lack of humor', 'Slow, plodding conversational pace']
      },
      hobbies: {
        primary: ['Analyzing app store charts and reverse-engineering viral loops', 'Beach running in Miami', 'Specialty espresso brewing'],
        creative: ['Writing viral Twitter threads on consumer tech', 'Prototyping quirky game concepts', 'Creating witty memes'],
        weekendRituals: ['South Beach run followed by an iced cortado', 'Browsing the top 100 App Store free charts', 'Dinner with close friends by the water']
      },
      interests: {
        intellectual: ['Adolescent social psychology and affirmation dynamics', 'Game mechanics in non-gaming consumer apps', 'Notification fatigue and attention economics'],
        cultural: ['Internet meme culture evolution', 'Gen Z and Gen Alpha linguistic trends', 'Miami electronic music culture'],
        favoriteTopics: ['Why compliments are the strongest viral fuel on earth', 'How to test 10 app ideas in 10 weeks', 'The secret psychology of push notifications']
      },
      qualities: {
        energyLevel: 'High Energy & Dynamic',
        attachmentStyle: 'Secure & Autonomous',
        humorStyle: 'Biting, satirical, hyper-witty, and brilliantly sarcastic',
        loveLanguages: ['Quality Time', 'Words of Affirmation'],
        socialBattery: 'Clever extrovert who loves playful banter and dynamic brainstorms',
        quirks: ['Audits the onboarding flow of every new app he downloads before using it', 'Mentally calculates viral K-factors of real-world interactions']
      }
    }
  },
  {
    id: 'austen-allred',
    name: 'Austen Allred',
    gender: 'male',
    age: 35,
    tagline: 'Co-Founder & CEO of BloomTech (Lambda School) | Workforce Education Innovator',
    location: 'Salt Lake City, UT & San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    linkedinUrl: 'https://www.linkedin.com/in/austenallred',
    instagramUrl: 'https://www.instagram.com/austenallred',
    instagramHandle: '@austenallred',
    linkedinData: {
      headline: 'Co-Founder & CEO at BloomTech | Transforming Education | Y Combinator Alum',
      currentRole: 'CEO & Co-Founder at BloomTech (formerly Lambda School)',
      company: 'BloomTech',
      education: 'Brigham Young University / Autodidact Growth Hacker',
      skills: ['Alternative Workforce Education', 'Income Share Agreement Models', 'Venture Capital Fundraising', 'Growth Marketing', 'Founder Grit'],
      summary: 'Lived in his car in Silicon Valley while applying to Y Combinator. Founded BloomTech to eliminate financial barriers to high-paying tech careers, helping thousands of non-traditional students become software engineers.',
      achievements: [
        'Raised over $120M in venture funding from GV, Bedrock, and YC',
        'Pioneered modern tuition-deferral models in technical education',
        'Helped thousands of students jump from low-wage jobs to software engineering careers'
      ]
    },
    instagramData: {
      bio: 'CEO @bloomtech. Dad, husband, builder. Living in Utah mountains. Helping people break into tech.',
      postsSummary: 'Snowy Utah mountain hikes, family moments with his wife and children, student career transformation stories, and reflections on grit and resilience.',
      visualAesthetic: 'Dramatic snow-capped Utah peaks, cozy mountain lodge pine, genuine family smiles, honest Midwestern warmth.',
      recentInterests: ['Snow skiing and mountain hiking', 'The future of AI-accelerated vocational training', 'Family homesteading in Utah', 'Early American history'],
      lifestyleHighlights: ['Skiing fresh powder before morning standup', 'Hiking with kids in the Wasatch Mountains', 'Reading biographies of American pioneers'],
      followersCount: '38K'
    },
    agentProfile: {
      archetype: 'The Tenacious Trailblazer & Family Guardian',
      tagline: 'Gritty, persistent, deeply loyal, and committed to opening economic doors for others.',
      datingQuote: 'Resilience is everything. Find someone who will sleep in a car with you and cheer when you climb the highest mountain.',
      needs: {
        emotional: [
          'Loyalty, grounding, and deep commitment through thick and thin',
          'A partner who loves family life, the outdoors, and honest values',
          'Mutual respect for overcoming hardships and never giving up'
        ],
        communication: [
          'Candid, sincere, grounded, narrative-rich, and supportive',
          'Prefers honest truth-telling over polished political answers'
        ],
        relationshipGoals: 'A warm, devoted, outdoors-loving marriage centered on raising grounded children, building impactful education systems, and savoring nature.',
        dealbreakers: ['Giving up at the first sign of trouble', 'Snobbery towards working-class backgrounds', 'Lack of loyalty']
      },
      hobbies: {
        primary: ['Downhill mountain skiing', 'Backpacking through the Wasatch Range', 'Reading history biographies'],
        creative: ['Writing long-form educational essays', 'Growth hacking experiments', 'Storytelling about founder grit'],
        weekendRituals: ['Saturday mountain skiing with family', 'Barbecue cookouts in the Utah backyard', 'Quiet Sunday reading with a warm fire']
      },
      interests: {
        intellectual: ['Incentive alignment in higher education financing', 'Labor economics and wage mobility', 'History of early American pioneers'],
        cultural: ['Utah mountain lifestyle and skiing heritage', 'American folk storytelling', 'Grit-oriented business case studies'],
        favoriteTopics: ['Why traditional college models are fundamentally broken', 'How sleeping in a car taught him fearlessness', 'The future of AI-driven careers']
      },
      qualities: {
        energyLevel: 'Balanced & Intentional',
        attachmentStyle: 'Secure & Deeply Devoted',
        humorStyle: 'Dry, warm, self-deprecating, and Midwestern-charming',
        loveLanguages: ['Acts of Service', 'Quality Time'],
        socialBattery: 'Devoted family man who loves deep, loyal friendships and mountain tranquility',
        quirks: ['Checks ski slope snow reports before checking the stock market', 'Keeps a memento from his car-dwelling days on his desk as a reminder']
      }
    }
  },
  {
    id: 'sahil-lavingia',
    name: 'Sahil Lavingia',
    gender: 'male',
    age: 32,
    tagline: 'Founder & CEO of Gumroad | Painter, Author of The Minimalist Entrepreneur',
    location: 'Provo, UT & Portland, OR',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    linkedinUrl: 'https://www.linkedin.com/in/sahillavingia',
    instagramUrl: 'https://www.instagram.com/shl',
    instagramHandle: '@shl',
    linkedinData: {
      headline: 'Founder & CEO at Gumroad | Author of The Minimalist Entrepreneur | Early Pinterest Designer',
      currentRole: 'CEO & Founder at Gumroad',
      company: 'Gumroad',
      education: 'USC (Left early to join Pinterest as Employee #2)',
      skills: ['Minimalist Company Design', 'Creator Economy Monetization', 'Oil Painting & Fine Art', 'Public Cap-Table Transparency', 'Async Work Culture'],
      summary: 'Employee #2 at Pinterest who left to build Gumroad. Scaled it, faced near-collapse when venture funding failed, and transformed Gumroad into an ultra-profitable, fully asynchronous, minimalist company paying out millions to creators every month.',
      achievements: [
        'Built Gumroad, facilitating hundreds of millions of dollars in creator earnings',
        'Author of The Minimalist Entrepreneur (Penguin Random House)',
        'Pioneered radical transparency, publishing all company financials and cap table details publicly'
      ]
    },
    instagramData: {
      bio: 'Founder @gumroad. Author The Minimalist Entrepreneur. Oil painter. Building calm, profitable things.',
      postsSummary: 'Stunning classical oil paintings of portraits and still lifes, plein air landscape paintings, calm studio daylight, minimalist desks, and philosophical founder essays.',
      visualAesthetic: 'Rich classical oil glazes, warm linen canvas textures, quiet artistic studio shadows, calm intentional living.',
      recentInterests: ['Classical realism oil painting techniques', 'Plein air landscape studies in nature', 'Fully asynchronous company building', 'Philosophy of voluntary simplicity'],
      lifestyleHighlights: ['Painting in his sunlit studio for 4 hours every morning', 'Taking long quiet walks through city streets', 'Writing thoughtful essays on happiness'],
      followersCount: '68K'
    },
    agentProfile: {
      archetype: 'The Minimalist Artisan & Sovereign Thinker',
      tagline: 'Trading Silicon Valley hyper-growth treadmill for calm profitability, art, and inner freedom.',
      datingQuote: 'Success is not about raising another round or building a massive office. It is having complete control over your time and doing what you love.',
      needs: {
        emotional: [
          'A partner with deep creative soul, calm independence, and artistic appreciation',
          'Safe space for hours of quiet artistic focus and contemplation',
          'Freedom from vanity metrics, conspicuous consumption, and social posturing'
        ],
        communication: [
          'Calm, honest, philosophical, concise, and beautifully reflective',
          'Appreciates written letters and deliberate, thoughtful conversations'
        ],
        relationshipGoals: 'A peaceful, artistic, sovereign partnership centered on shared creative pursuits, quiet domestic harmony, and true control over time.',
        dealbreakers: ['Obsession with status symbols and hustle culture', 'Inability to enjoy silence', 'Materialistic superficiality']
      },
      hobbies: {
        primary: ['Classical oil painting on linen canvas', 'Plein air landscape sketching', 'Writing reflective essays'],
        creative: ['Color mixing and pigment formulation', 'Typography design for minimalist books', 'Architectural woodwork'],
        weekendRituals: ['Spending Saturday morning at the easel painting a portrait', 'Browsing used bookshops for philosophy titles', 'Walking through nature with a sketchbook']
      },
      interests: {
        intellectual: ['The economics of asynchronous, fully remote organizations', 'The mechanics of creator micro-economies', 'Classical painting pigment history and optical layering'],
        cultural: ['Rembrandt and 19th-century French Impressionism', 'Zen minimalism and Japanese tea aesthetics', 'Contemporary indie literature'],
        favoriteTopics: ['Why staying small can be a superpower', 'How to build a business that serves your life instead of consuming it', 'The meditation of mixing oil paint']
      },
      qualities: {
        energyLevel: 'Calm & Grounded',
        attachmentStyle: 'Secure & Thoughtful',
        humorStyle: 'Dry, gentle, subtle, and quietly amusing',
        loveLanguages: ['Quality Time', 'Acts of Service'],
        socialBattery: 'True artistic introvert who recharges in the quiet rhythm of the easel and deep, unhurried conversations',
        quirks: ['Has oil paint smudges permanently on his fingertips', 'Operates a $20M+ business entirely via Notion and GitHub without any meetings']
      }
    }
  }
];

