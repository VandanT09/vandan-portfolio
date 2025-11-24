interface ExperienceCardProps {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export function ExperienceCard({
  role,
  company,
  location,
  period,
  bullets
}: ExperienceCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/70">
  <header className="flex flex-wrap items-baseline justify-between gap-2">
    <div>
      <h3 className="text-base font-semibold">{role}</h3>
      <p className="text-base text-slate-500 dark:text-slate-400">
        {company} • {location}
      </p>
    </div>
    <p className="text-sm text-slate-500 dark:text-slate-400">{period}</p>
  </header>

  <ul className="mt-4 space-y-2 text-base text-slate-600 dark:text-slate-300">
    {bullets.map((b) => (
      <li key={b} className="flex items-start gap-3">
  <span className="mt-1.5 h-2 w-2 rounded-full bg-brand/80 flex-shrink-0"></span>
  <span className="leading-relaxed">{b}</span>
</li>

    ))}
  </ul>
</article>

  );
}
