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
    { k: 'studying', v: 'EE + CS @ Columbia, May 2027' },
    { k: 'building', v: 'Gable, AI home search for NYC' },
    { k: 'writing', v: 'Product teardowns on Substack' },
    { k: 'looking for', v: 'New-grad SWE, AI & forward-deployed roles' },
  ],
  about: [
    'I’m an electrical engineering student at Columbia with a minor in computer science, graduating in May 2027. I like building things end to end, from an op-amp on a breadboard to an LLM agent running in production.',
    'Over the last two summers I built LLM agents at Highroads AI, shipped features in a production React app at CharacterQuilt, and built an AI root-cause analysis tool and a RAG search system at PDI Technologies. I also TA’d Columbia’s CS Design & Innovation Lab. Right now I’m co-building Gable, an AI home search for New York, in Columbia Startup Studio.',
    'Outside of class I’m co-president of ALPFA Columbia, help run professional development for SHPE, and write about how products compete in the age of AI.',
  ],
}

export type Post = { title: string; date: string; href: string; blurb: string }

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

export type Job = { org: string; role: string; when: string; note: string }

export const experience: Job[] = [
  {
    org: 'CharacterQuilt',
    role: 'Software Development Intern',
    when: 'Jul – Sep 2026',
    note: '7 merged PRs in a production React/TypeScript app; redesigned the AI agent chat panel.',
  },
  {
    org: 'Highroads AI',
    role: 'AI Engineering Intern',
    when: 'Jun – Jul 2026',
    note: 'LLM agents that extract structured CLO deal data, with eval loops and DSPy-optimized prompts.',
  },
  {
    org: 'Columbia University',
    role: 'TA, CS Design & Innovation Lab',
    when: 'Jan – May 2026',
    note: 'Guided 5–8 student teams through the full product lifecycle.',
  },
  {
    org: 'PDI Technologies',
    role: 'Software Developer Intern',
    when: 'Jun – Jul 2025',
    note: 'AI root-cause analysis tool and a RAG semantic search system (Azure Functions, FAISS).',
  },
  {
    org: 'ERA',
    role: 'Product Manager Intern',
    when: 'Jan – May 2025',
    note: 'Product strategy for three early-stage startups.',
  },
]
