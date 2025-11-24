import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  subtitle?: string;
  description: string;
  highlights: string[];
  tech: string[];
  link?: string;
}

export function ProjectCard({
  title,
  subtitle,
  description,
  highlights,
  tech,
  link
}: ProjectCardProps) {
  return (
    <article className="gradient-border mb-6 bg-slate-900/50 p-5 text-slate-50 shadow-soft dark:bg-slate-900/70">
      <header className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          {subtitle && (
            <p className="mt-0.5 text-xs text-slate-300">{subtitle}</p>
          )}
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-brand-light hover:underline"
          >
            View repo
            <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </header>
      <p className="mt-3 text-base text-slate-200">{description}</p>

<ul className="mt-4 space-y-2 text-base text-slate-200/90">

        {highlights.map((h) => (
          <li key={h} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-light/80" />
            <span>{h}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2 text-[10px] font-medium uppercase tracking-wide">
        {tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2 py-1 text-emerald-100"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}
