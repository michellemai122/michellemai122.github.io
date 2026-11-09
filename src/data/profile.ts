export const profile = {
  name: 'Michelle Mai',
  headline: 'I build AI products, and the circuits underneath.',
  intro:
    'Electrical engineering student at Columbia (CS minor, May 2027). I ship LLM agents, data pipelines and full-stack apps, and I spend my lab hours with oscilloscopes, op-amps and MATLAB.',
  resume: '/Michelle-Mai-Resume.pdf',
  links: {
    email: 'michelle.mai.3202@gmail.com',
    github: 'https://github.com/michellemai122',
    linkedin: 'https://www.linkedin.com/in/michellehmai',
    substack: 'https://michellehoangmai.substack.com',
  },
  /** short readout shown beside the hero */
  status: [
    { k: 'looking for', v: 'New-grad roles starting summer 2027 in software, AI, product or forward-deployed engineering, building products on the latest AI' },
    { k: 'building', v: 'Gable, AI home search for NYC' },
    { k: 'writing', v: 'Product teardowns on Substack' },
  ],
  about: [
    'I’m an electrical engineering student at Columbia with a minor in computer science, graduating in May 2027. I like building things end to end, from an op-amp on a breadboard to an LLM agent running in production.',
    'Over the last two summers I built LLM agents at Highroads AI, shipped features in a production React app at CharacterQuilt, and built an AI root-cause analysis tool and a RAG search system at PDI Technologies. I also TA’d Columbia’s CS Design & Innovation Lab. Right now I’m co-building Gable, an AI home search for New York, in Columbia Startup Studio.',
    'Mentorship and community building matter a lot to me. I mentor students, and I help run SHPE’s mentor-mentee program, which pairs underclassmen with mentors for academic and career guidance. As co-president of ALPFA Columbia, I organized Pa’lante, a Hispanic Heritage Month showcase that welcomed 108 students, most of them first-years, into Columbia’s Hispanic community. For me it’s about making sure the students coming after me have someone in their corner.',
    'I also write about how products compete in the age of AI.',
  ],
}

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'SQL', 'VHDL', 'MATLAB'] },
  { group: 'AI', items: ['LLM agents', 'Evaluation loops', 'DSPy', 'RAG', 'Embeddings', 'FAISS'] },
  { group: 'Web & cloud', items: ['React', 'Next.js', 'Tailwind', 'Flask', 'Supabase', 'Azure Functions', 'Vercel', 'Git'] },
  { group: 'Hardware', items: ['Oscilloscopes', 'LTspice', 'Xilinx FPGAs', 'Op-amp & MOSFET design', 'Breadboarding'] },
  { group: 'Product', items: ['User research', 'Roadmapping', 'Figma', 'Agile', 'Design thinking'] },
]

export type Post ={ title: string; date: string; href: string; blurb: string }

export const posts: Post[] = [
  {
    title: 'Product: Chegg',
    date: 'Sep 2026',
    href: 'https://michellehoangmai.substack.com/p/product-chegg',
    blurb: 'Why Chegg’s decline wasn’t a surprise, and what AI-era alternatives could have kept its most loyal users.',
  },
  {
    title: 'Product: Notion’s Tabs',
    date: 'Jul 2026',
    href: 'https://michellehoangmai.substack.com/p/product-notions-tabs',
    blurb: 'A first-principles look at Notion’s New Tab Chrome extension, written from a college student’s point of view.',
  },
]

export type Job = {
  org: string
  role: string
  when: string
  /** the problem or reason the work existed */
  why: string
  /** what I built, technically */
  built: string[]
  /** what changed because of it */
  impact: string
}

export const experience: Job[] = [
  {
    org: 'CharacterQuilt',
    role: 'Software Development Intern',
    when: 'Jul – Sep 2026',
    why: 'An early-stage AI product where the co-founder’s design feedback needed to become shipped features, and the team’s AI agent chat had grown hard to follow.',
    built: [
      'Shipped features in the production React/TypeScript app: live previews of AI-generated assets, a reorganized task workspace and a voice-review flow.',
      'Redesigned the AI agent chat panel around “delete more than you add”: separate chat histories, a newest-first chat switcher, one-line run summaries and a reasoning log without repeated lines.',
      'Built the data architecture for an autonomous support workflow that stores customer and product context for the AI assistant.',
    ],
    impact: 'The workspace redesign merged into production, and the AI assistant can answer customer product questions while the team is offline.',
  },
  {
    org: 'Highroads AI',
    role: 'AI Engineering Intern',
    when: 'Jun – Jul 2026',
    why: 'Reviewing a CLO deal meant reading long, unstructured documents by hand, which took hours per deal.',
    built: [
      'Built autonomous LLM agents in Python that run the end-to-end CLO deal workflow and extract structured deal data from unstructured documents.',
      'Designed evaluation loops that score agent output against ground-truth deal data, and iterated on DSPy-optimized prompts to raise accuracy.',
    ],
    impact: 'Eliminated hours of manual review per deal; presented the results to both co-founders.',
  },
  {
    org: 'Columbia University',
    role: 'TA, CS Design & Innovation Lab',
    when: 'Jan – May 2026',
    why: 'Student teams building a product for the first time needed someone to guide them from idea to working prototype.',
    built: [
      'Directed 5–8 cross-functional teams through the full product lifecycle using agile and design thinking.',
      'Coached teams on product strategy, technical implementation and narrative framing.',
    ],
    impact: 'Teams improved the usability of their products and how they presented them.',
  },
  {
    org: 'PDI Technologies',
    role: 'Software Developer Intern',
    when: 'Jun – Jul 2025',
    why: 'Engineers spent too long tracing the root cause of operational issues across scattered internal data.',
    built: [
      'Led an AI-powered root-cause analysis product across 4 engineering teams, from requirements and roadmap to a demo for ~50 executives.',
      'Architected and deployed a RAG semantic search system (Python, Azure Functions, OpenAI embeddings, FAISS) over internal datasets for a 20+ person operations team.',
    ],
    impact: 'Cut investigation time by 95% and drove $2.88M in annual operational value.',
  },
  {
    org: 'ERA (Entrepreneurs Roundtable Accelerator)',
    role: 'Product Manager Intern',
    when: 'Jan – May 2025',
    why: 'Three early-stage startups (ClaiAI, Roz, Overwatch Health) needed help deciding what to build and who to build it for.',
    built: [
      'Advised on product strategy, UX and growth.',
      'Synthesized user research and data into customer personas.',
    ],
    impact: 'Shaped product direction and go-to-market decisions, and drove improvements in acquisition, retention and revenue forecasting.',
  },
]
