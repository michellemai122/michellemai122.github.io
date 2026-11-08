export type Category = 'software' | 'electrical' | 'startup'
export type PatternKind = 'map' | 'grid' | 'flow' | 'wave' | 'circuit' | 'radial' | 'iso'

export type Project = {
  slug: string
  title: string
  tagline: string
  category: Category
  featured?: boolean
  year: string
  role: string
  status?: string
  stack: string[]
  problem: string
  built: string[]
  result?: string
  credit?: string
  links: { label: string; href: string }[]
  pattern: PatternKind
  /** optional screenshot in /public, used on the card and the project page */
  image?: string
  /** optional diagram or plot shown only on the project page (fit whole, not cropped) */
  figure?: string
}

export const categoryLabel: Record<Category, string> = {
  software: 'Software & AI',
  electrical: 'Electrical',
  startup: 'Startup',
}

export const projects: Project[] = [
  {
    slug: 'gable',
    title: 'Gable',
    tagline: 'AI home search for New York. Tell it the place you want.',
    category: 'startup',
    featured: true,
    year: '2026',
    role: 'Co-founder, product & engineering',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'MapLibre', 'Vercel'],
    problem:
      'Apartment hunting in NYC means scrolling dozens of listings that may not be real or may already be gone. People know what they want ("sunny one-bedroom near the 1 train under $3k") but search tools make them translate it into filters.',
    built: [
      'A chat-first search: describe the place in your own words, refine in a chat panel, and see matching listing cards side by side.',
      'A stylized 3D city map for saved homes, with subway stops shown as train bullets and pins that cluster when you zoom out.',
      'The waitlist signup on Supabase and the demand strategy we used to validate the idea in Columbia Startup Studio.',
    ],
    result: 'Live MVP built in Columbia Startup Studio (Fall 2026).',
    credit: 'Team project with Lookman Mustapha and Sam Hearst.',
    links: [{ label: 'Live site', href: 'https://gable-one.vercel.app' }],
    pattern: 'map',
    image: '/shots/gable.jpg',
  },
  {
    slug: 'job-market-tracker',
    title: 'Job Market Tracker',
    tagline: 'Polls 57 companies every 10 minutes and finds new-grad roles before the job boards do.',
    category: 'software',
    featured: true,
    year: '2026',
    role: 'Solo',
    stack: ['Python', 'Greenhouse / Lever / Ashby APIs', 'Google Sheets API', 'launchd'],
    problem:
      'New-grad roles fill fast, and aggregators lag by days. I wanted every relevant posting from the companies I care about, the moment it goes up, and nothing that has already closed.',
    built: [
      'A discovery step that probes each company for a public Greenhouse, Lever, Ashby or SmartRecruiters feed and saves the one that works.',
      'A poller that fetches ~13,000 live postings in parallel, filters by level, role and US location, and dedupes on URL so each role is reported once.',
      'An append-only Google Sheets sync that never overwrites what I typed by hand, plus a pruner that deletes a row only on positive evidence the posting closed.',
      'A watchdog after a six-day silent outage: a socket with no timeout hung the sync, so every step now has a hard time cap and logs when it trips.',
    ],
    result: 'First prune removed 725 of 1,712 stale rows. Runs unattended on my laptop.',
    links: [{ label: 'GitHub', href: 'https://github.com/michellemai122/job-market-tracker' }],
    pattern: 'grid',
  },
  {
    slug: 'relay',
    title: 'Relay',
    tagline: 'An AI customer-success copilot that explains churn risk and drafts the fix, behind human approval.',
    category: 'software',
    featured: true,
    year: '2026',
    role: 'Solo',
    stack: ['Next.js', 'FastAPI', 'Pydantic', 'Multi-agent orchestration'],
    problem:
      'Customer-success managers learn an account is in trouble too late. Usage, sentiment, support tickets and renewal dates live in different tools, and health scores say what changed but not why.',
    built: [
      'An orchestrator that runs four specialists: data analysis (deterministic, no LLM arithmetic), churn reasoning, action recommendation and outreach drafting.',
      'Every churn driver cites the evidence it came from, and emails and tasks only run after explicit human approval.',
      'Model routing: a small model for routine work, escalating to a larger reasoning model only for low-health or multi-source cases.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/michellemai122/relay-ai-customer-success-copilot' }],
    pattern: 'flow',
  },
  {
    slug: 'leaveby',
    title: 'LeaveBy',
    tagline: 'Never be late in NYC: its own arrival-prediction model plus an agent that moves your leave-by alarm.',
    category: 'software',
    featured: true,
    year: '2026',
    role: 'Solo',
    status: 'In progress',
    stack: ['Python', 'MTA GTFS-realtime', 'Pydantic AI', 'LangGraph', 'Web Push'],
    problem:
      'Transit apps show the scheduled arrival, not when the train will actually show up. The time you need to leave changes as delays happen, and nothing tells you.',
    built: [
      'Planned: a live map of every subway train and bus, fed by MTA real-time data.',
      'Planned: an arrival-prediction model trained on accumulated feed history, with a public accuracy scoreboard.',
      'Planned: an agent that sets a leave-by alarm and moves it as conditions change.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/michellemai122/leaveby' }],
    pattern: 'map',
  },
  {
    slug: 'consumer-signal',
    title: 'ConsumerSignal',
    tagline: 'Ranks 25 consumer/AI startups by a 0–100 momentum score from live search and news signals.',
    category: 'software',
    year: '2026',
    role: 'Solo',
    stack: ['Python', 'SQLite', 'Flask', 'REST APIs'],
    problem: 'Which consumer startups are gaining momentum right now, before they show up on the big trackers?',
    built: [
      'A pipeline that pulls search and news signals into SQLite.',
      'A scoring layer that normalizes signals into one comparable Momentum Score.',
      'A Flask API and single-page dashboard.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/michellemai122/ConsumerSignal' }],
    pattern: 'radial',
  },
  {
    slug: 'exercise-checker',
    title: 'Squat Form Checker',
    tagline: 'Upload a squat video; pose estimation measures your knee angle and tells you if your form is good.',
    category: 'software',
    year: '2026',
    role: 'Solo',
    stack: ['Python', 'MediaPipe', 'OpenCV', 'Beam', 'Streamlit'],
    problem: 'Checking your own workout form is hard, and asking someone to watch you is awkward.',
    built: [
      'A Streamlit app that sends the video to a Beam serverless endpoint.',
      'MediaPipe finds hip, knee and ankle each frame; the app computes the lowest knee angle and returns feedback.',
      'The pose model loads once when the container starts and the container stays warm, so repeat checks are fast.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/michellemai122/personal-exercise-checker-with-beam-' }],
    pattern: 'iso',
  },
  {
    slug: 'alpfa-columbia',
    title: 'ALPFA Columbia Website',
    tagline: 'The chapter site I built as co-president, ported from our Canva prototype.',
    category: 'software',
    year: '2026',
    role: 'Solo',
    stack: ['React', 'TypeScript', 'Vite', 'React Router', 'GitHub Pages'],
    problem: 'Our chapter needed a real home for events, the team and sponsors that officers can update without a developer.',
    built: [
      'Seven pages (Home, About, Programs, Convention, Events, Team, Sponsors).',
      'All content (team roster, events, FAQ, links) lives in small data files, so future officers can edit it.',
    ],
    links: [
      { label: 'Live site', href: 'https://michellemai122.github.io/alpfa-columbia-website/' },
      { label: 'GitHub', href: 'https://github.com/michellemai122/alpfa-columbia-website' },
    ],
    pattern: 'grid',
    image: '/shots/alpfa.jpg',
  },
]
