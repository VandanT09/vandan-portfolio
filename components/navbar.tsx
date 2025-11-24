"use client";

import { ThemeToggle } from "./theme-toggle";

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-slate-50/80 backdrop-blur-xl shadow-sm dark:border-slate-800 dark:bg-slate-950/80">
      <div className="section-wrapper flex h-14 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
  <img 
    src="/profile.jpg" 
    alt="Vandan Profile" 
    className="h-7 w-7 rounded-full object-cover border border-slate-300 dark:border-slate-700"
  />
  
  <span className="text-sm sm:text-base font-semibold tracking-wide text-slate-700 dark:text-slate-200">
  VANDAN
</span>
</a>


        <nav className="hidden items-center gap-5 text-sm sm:text-base
 font-medium text-slate-600 dark:text-slate-300 sm:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-brand-light"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/VandanThakarCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-slate-900 px-3 py-1.5 text-sm sm:text-base
 font-medium text-slate-50 shadow-sm hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-950 dark:hover:bg-slate-200 sm:inline-block"
          >
            Resume
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
