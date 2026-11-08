export const profile = {
  name: 'Michelle Mai',
  headline: 'I build AI products, and the circuits underneath.',
  intro:
    'Electrical engineering student at Columbia (CS minor, May 2027). I ship LLM agents, data pipelines and full-stack apps, and I spend my lab hours with oscilloscopes, op-amps and MATLAB.',
  location: 'New York, NY',
  links: {
    email: 'michelle.mai.3202@gmail.com',
    github: 'https://github.com/michellemai122',
    linkedin: 'https://www.linkedin.com/in/michellehmai',
    substack: 'https://michellehoangmai.substack.com',
  },
}

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
