import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
}

export function Section({ id, title, eyebrow, children }: SectionProps) {
  return (
    <section id={id} className="py-14 sm:py-20">
      <div className="section-wrapper">
        <header className="mb-8">
  {eyebrow && (
    <p className="text-sm font-semibold uppercase tracking-[0.25em]">
      {eyebrow}
    </p>
  )}
  <h2 className="mt-2 text-3xl sm:text-4xl font-semibold">
    {title}
  </h2>
</header>

        {children}
      </div>
    </section>
  );
}
