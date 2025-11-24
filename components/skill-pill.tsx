interface SkillPillProps {
  label: string;
}

export function SkillPill({ label }: SkillPillProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-700/70 dark:bg-slate-900/60 dark:text-slate-200">
  {label}
</span>

  );
}
