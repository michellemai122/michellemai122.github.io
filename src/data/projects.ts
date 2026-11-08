export type Category = 'software' | 'electrical'

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
  /** short mono lines shown on a scope-style panel when there is no image */
  readout?: string[]
  /** small label on the card, e.g. Columbia Startup Studio */
  badge?: string
  /** 'contain' for diagrams that must not be cropped */
  imageFit?: 'cover' | 'contain'
  /** optional screenshot in /public, used on the card and the project page */
  image?: string
  /** optional diagram or plot shown only on the project page (fit whole, not cropped) */
  figure?: string
  /** optional photo shown under the figure on the project page */
  photo?: string
  photoAlt?: string
}

export const categoryLabel: Record<Category, string> = {
  software: 'Software & AI',
  electrical: 'Electrical',
}

export const projects: Project[] = [
  {
    slug: 'gable',
    title: 'Gable',
    tagline: 'AI home search for New York. Tell it the place you want.',
    category: 'software',
    featured: true,
    badge: 'Columbia Startup Studio',
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
    links: [{ label: 'Live site', href: 'https://www.gable.fit' }],
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
    readout: ['57 companies', '~13,000 live postings', 'polled every 10 min', '725 stale rows pruned'],
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
    image: '/shots/consumersignal.jpg',
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
    image: '/shots/alpfa.jpg',
  },
]
