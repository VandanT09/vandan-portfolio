"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/section";
import { SkillPill } from "@/components/skill-pill";
import { ExperienceCard } from "@/components/experience-card";
import { ProjectCard } from "@/components/project-card";
import { Mail, Github, Linkedin } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import ProfileShowcase from "@/components/ProfileShowcase";


const LANGUAGES = [
  "Python",
  "SQL (PostgreSQL)",
  "SQL (MySQL)",
  "C/C++",
  "HTML/CSS"
];

const DATA_LIBS = [
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Seaborn",
  "Scikit-learn"
];

const BI_TOOLS = ["Power BI", "Tableau", "Advanced Excel (PQ, VBA, Pivots)"];

const OTHER_TOOLS = ["Git", "GitHub", "Bash"];

export default function Home() {
  return (
    <main id="top" className="pb-20 pt-10 sm:pt-14">
      {/* HERO */}
      <section className="section-wrapper flex flex-col items-start gap-8 pt-4 sm:flex-row sm:items-center sm:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-light">
            Data Analyst • Financial Analytics • ML
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl leading-tight w-full">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Vandan Thakar
            </span>
            .
          </h1>
          <TypeAnimation
  sequence={[
    "I'm a Data Analyst", 2000,
    "I'm a ML Enthusiast", 2000,
    "I'm a Financial Analytics Learner", 2000,
    "I'm a Python & SQL Specialist", 2000,
    "I'm a BI Dashboard Expert", 2000,
  ]}
  wrapper="span"
  speed={55}
  deletionSpeed={60}
  repeat={Infinity}
  className="
      mt-4 
      mb-16 
      block 
      text-3xl 
      sm:text-4xl 
      lg:text-5xl 
      font-semibold 
      tracking-tight
      text-slate-500 
      dark:text-slate-300
  "
/>


          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="/VandanThakarCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm sm:text-base font-semibold ..."
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm sm:text-base"
            >
              View Projects
            </a>
          </div>

          <div className="mt-6 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
              <span>Open to internships & analyst roles</span>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4 text-base text-slate-600 dark:text-slate-300">

  {/* Email */}
  <a
  href="mailto:vandanthakar13@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-1 hover:text-brand-light"
>
  <Mail className="h-5 w-5" />
  <span>Email</span>
</a>


  {/* GitHub */}
  <a
    href="https://github.com/VandanT09"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1 hover:text-brand-light"
  >
    <Github className="h-5 w-5" />
    <span>GitHub</span>
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/vandan-thakar-a19453271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1 hover:text-brand-light"
  >
    <Linkedin className="h-5 w-5" />
    <span>LinkedIn</span>
  </a>

</div>

        </motion.div>
        <div className="mt-10 sm:mt-0">
  <ProfileShowcase />
</div>
      </section>

      {/* ABOUT */}
      <Section id="about" title="About" eyebrow="Background">
        <div className="grid gap-6 sm:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
  I’m a Final Year Computer Engineering student from DJSCE with a growing passion for
  <span className="font-medium"> data analytics, financial insights, and predictive modelling</span>. 
  My journey started with core programming, but over time I realized I enjoy working with data—cleaning it, 
  analysing patterns, and turning numbers into meaningful decisions.
  <br /><br />
  I now focus on building analytical solutions using <span className="font-medium">Python, SQL, Power BI, 
  and machine learning fundamentals</span>. My interests lie in <span className="font-medium">
  credit risk, customer behaviour, dashboards, and data-driven business decisions</span>, and I’m actively 
  building projects to strengthen my practical understanding of these areas.
</p>

        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" title="Skills" eyebrow="What I work with">
        <div className="grid gap-6 md:grid-cols-2">
          <SkillBlock title="Languages" items={LANGUAGES} />
          <SkillBlock title="Data & ML" items={DATA_LIBS} />
          <SkillBlock title="BI & Analytics" items={BI_TOOLS} />
          <SkillBlock title="Tools" items={OTHER_TOOLS} />
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section
        id="experience"
        title="Experience"
        eyebrow="Industry exposure"
      >
        <ExperienceCard
          role="Data Analyst Intern — Financial Data Analytics"
          company="Quantissential"
          location="Mumbai, India"
          period="Nov 2025 – Present"
          bullets={[
            "Extract and clean CRISIL & CARE financial PDFs into structured datasets using Python and Excel automation.",
            "Build transformation pipelines to aggregate yearly default, transition, and rating movement statistics.",
            "Collaborate with senior analysts to design end-to-end credit risk data workflows and reporting automation."
          ]}
        />
      </Section>

      {/* PROJECTS */}
      <Section
        id="projects"
        title="Projects"
        eyebrow="Selected work"
      >
        <div className="space-y-5">
          <ProjectCard
            title="Credit Risk Modelling System"
            subtitle="Python • Scikit-learn • Excel • Power BI"
            description="End-to-end credit risk modelling pipeline to estimate probability of default (PD) and visualize portfolio risk."
            highlights={[
              "Built PD models using logistic regression and survival analysis.",
              "Engineered credit risk features and implemented LGD/EAD estimation frameworks.",
              "Designed Power BI dashboards showing portfolio risk, exposure patterns, and rating migrations."
            ]}
            tech={["Python", "Scikit-learn", "Pandas", "Power BI", "Excel"]}
          />
          <ProjectCard
            title="AI-based Customer Lifetime Value Prediction"
            subtitle="Python • Scikit-learn • Pandas"
            description="Model to estimate long-term customer lifetime value for better targeting and retention decisions."
            highlights={[
              "Derived RFM features and additional behavioural attributes from transaction data.",
              "Trained regression and deep-learning models to predict CLTV.",
              "Performed customer segmentation with K-Means to identify high-value cohorts and retention opportunities."
            ]}
            tech={["Python", "Pandas", "Scikit-learn", "K-Means", "ML"]}
          />
          <ProjectCard
            title="AI-powered Anomaly Detection System"
            subtitle="Python • Autoencoders • SQL"
            description="System to detect unusual patterns in behavioural or transactional data for early risk and fraud insights."
            highlights={[
              "Implemented Isolation Forest and Autoencoder-based models for anomaly detection.",
              "Built SQL pipelines to preprocess and join large behavioural datasets.",
              "Generated alert outputs and visual insights to support early detection of suspicious activities."
            ]}
            tech={["Python", "Autoencoders", "Isolation Forest", "SQL"]}
          />
        </div>
      </Section>

      {/* CERTIFICATIONS */}
      <Section
        id="certifications"
        title="Certifications"
        eyebrow="Structured learning"
      >
        <ul className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          <li>• IBM Intermediate Course: Data Analysis with Python</li>
          <li>• Power BI for Beginners</li>
          <li>
            • Tata Group – Data Visualisation: Empowering Business with
            Effective Insights (Forage)
          </li>
          <li>
            • Tata Group – GenAI Powered Data Analytics (Forage)
          </li>
          <li>
            • Deloitte Australia – Data Analytics Job Simulation (Forage)
          </li>
        </ul>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact" eyebrow="Let’s work together">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            If you&apos;re looking for someone who can own data pipelines, build
            well-documented models, and communicate insights clearly, I&apos;d
            love to connect. I&apos;m especially interested in{" "}
            <span className="font-medium">
              data analyst and risk/analytics roles
            </span>{" "}
            in finance and product-focused teams.
          </p>
          <div className="space-y-3 rounded-2xl border border-slate-200/70 bg-white/70 p-4 text-sm shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
            <p className="font-semibold text-slate-800 dark:text-slate-100">
              Say hello
            </p>
            <div className="space-y-2 text-slate-600 dark:text-slate-300">
              <a
                href="mailto:vandanthakar13@gmail.com"
                className="flex items-center gap-2 hover:text-brand-light"
              >
                <Mail className="h-4 w-4" />
                <span>vandanthakar13@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/vandan-thakar-a19453271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-brand-light"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href="https://github.com/VandanT09"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-brand-light"
              >
                <Github className="h-4 w-4" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}

function SkillBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
        {title}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <SkillPill key={item} label={item} />
        ))}
      </div>
    </div>
  );
}
