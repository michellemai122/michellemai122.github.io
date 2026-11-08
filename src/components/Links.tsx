import { profile } from '../data/profile'
import { Icon, type IconName } from './Icon'

const items: { label: string; href: string; icon: IconName }[] = [
  { label: 'GitHub', href: profile.links.github, icon: 'github' },
  { label: 'LinkedIn', href: profile.links.linkedin, icon: 'linkedin' },
  { label: 'Substack', href: profile.links.substack, icon: 'substack' },
  { label: 'Email', href: `mailto:${profile.links.email}`, icon: 'mail' },
]

/** Resume button + social links. `compact` shows icons only (top bar). */
export function Links({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? 'links links-compact' : 'links'}>
      <a className="btn btn-accent" href={profile.resume} target="_blank" rel="noreferrer">
        <Icon name="doc" />
        <span>Resume</span>
      </a>
      {items.map((it) => (
        <a
          key={it.label}
          className="btn"
          href={it.href}
          target={it.icon === 'mail' ? undefined : '_blank'}
          rel="noreferrer"
          aria-label={it.label}
          title={compact ? it.label : undefined}
        >
          <Icon name={it.icon} />
          {!compact && <span>{it.label}</span>}
        </a>
      ))}
    </div>
  )
}
