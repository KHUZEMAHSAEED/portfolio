import ThemeToggle from '@/components/ThemeToggle';
import {
  certifications,
  education,
  experiences,
  featuredProjects,
  highlights,
  profile,
  skills,
  websiteProjects,
} from '@/lib/data';

function Icon({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/25">{children}</span>;
}

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="absolute inset-0 -z-10 bg-hero-grid bg-[size:42px_42px]" />
      <div className="absolute left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl dark:bg-cyan-500/10" />

      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/75 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/75">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#home" className="text-lg font-black tracking-tight text-slate-950 dark:text-white">
            Khuzemah<span className="text-blue-600">.</span>
          </a>
          <div className="hidden items-center gap-6 text-sm font-semibold text-slate-600 dark:text-slate-300 md:flex">
            <a href="#experience" className="hover:text-blue-600">Experience</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#skills" className="hover:text-blue-600">Skills</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>
          <ThemeToggle />
        </nav>
      </header>

      <section id="home" className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 dark:border-blue-900 dark:bg-blue-950/60 dark:text-blue-300">
            Available for Laravel, API Integration & Automation Projects
          </div>
          <h1 className="text-5xl font-black leading-tight tracking-tight text-slate-950 dark:text-white md:text-7xl">
            Building fast, scalable & automated web systems.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-700">
              Hire Me
            </a>
            <a href="#projects" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-white">
              View Projects
            </a>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4">
            {['5+ Years', 'Laravel Expert', 'Bitrix24', 'Automation'].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white/70 p-4 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
                <p className="font-black text-slate-950 dark:text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="card self-center p-8">
          <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-[2rem] bg-gradient-to-br from-blue-600 to-cyan-400 text-4xl font-black text-white shadow-glow">
            KS
          </div>
          <h2 className="text-center text-2xl font-black text-slate-950 dark:text-white">{profile.name}</h2>
          <p className="mt-2 text-center font-semibold text-blue-600 dark:text-blue-400">{profile.role}</p>
          <div className="mt-8 space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <p>📍 {profile.location}</p>
            <p>✉️ {profile.email}</p>
            <p>📞 {profile.phone}</p>
            <p>🔗 linkedin.com/in/khuzemah-saeed</p>
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="grid gap-4 md:grid-cols-4">
          {highlights.map((item) => (
            <div key={item} className="card">
              <Icon>✓</Icon>
              <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-5 py-16">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="font-bold uppercase tracking-[0.25em] text-blue-600">Career</p>
            <h2 className="section-title mt-2">Experience Timeline</h2>
          </div>
        </div>
        <div className="space-y-6">
          {experiences.map((exp) => (
            <article key={exp.company} className="card">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div>
                  <h3 className="text-2xl font-black text-slate-950 dark:text-white">{exp.title}</h3>
                  <p className="mt-1 font-bold text-blue-600 dark:text-blue-400">{exp.company}</p>
                </div>
                <div className="rounded-2xl bg-slate-100 px-4 py-3 text-sm font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  {exp.period} • {exp.location}
                </div>
              </div>
              <ul className="mt-6 grid gap-3 md:grid-cols-2">
                {exp.points.map((point) => (
                  <li key={point} className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600 dark:bg-slate-800/60 dark:text-slate-300">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-5 py-16">
        <p className="font-bold uppercase tracking-[0.25em] text-blue-600">Portfolio</p>
        <h2 className="section-title mt-2">Featured Projects</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <article key={project.title} className="card">
              <p className="mb-3 text-sm font-bold text-blue-600 dark:text-blue-400">{project.type}</p>
              <h3 className="text-2xl font-black text-slate-950 dark:text-white">{project.title}</h3>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <p className="font-bold uppercase tracking-[0.25em] text-blue-600">Work Samples</p>
        <h2 className="section-title mt-2">Website Projects</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {Object.entries(websiteProjects).map(([category, sites]) => (
            <div key={category} className="card">
              <h3 className="text-xl font-black text-slate-950 dark:text-white">{category}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {sites.map((site) => (
                  <span key={site} className="pill">{site}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-5 py-16">
        <p className="font-bold uppercase tracking-[0.25em] text-blue-600">Stack</p>
        <h2 className="section-title mt-2">Technical Skills</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="card">
              <h3 className="text-xl font-black text-slate-950 dark:text-white">{group}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {items.map((item) => <span key={item} className="pill">{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-16 lg:grid-cols-2">
        <div className="card">
          <p className="font-bold uppercase tracking-[0.25em] text-blue-600">Learning</p>
          <h2 className="section-title mt-2">Certifications</h2>
          <ul className="mt-6 space-y-3">
            {certifications.map((cert) => (
              <li key={cert} className="rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-700 dark:bg-slate-800/70 dark:text-slate-200">🎓 {cert}</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <p className="font-bold uppercase tracking-[0.25em] text-blue-600">Education</p>
          <h2 className="section-title mt-2">Academic Background</h2>
          <ul className="mt-6 space-y-3">
            {education.map((item) => (
              <li key={item} className="rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-700 dark:bg-slate-800/70 dark:text-slate-200">📘 {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-20">
        <div className="rounded-[2rem] bg-gradient-to-br from-blue-600 to-cyan-500 p-8 text-white shadow-glow md:p-12">
          <h2 className="text-4xl font-black md:text-5xl">Have a project in mind?</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-blue-50">
            I can help with Laravel applications, Bitrix24 integrations, data migration, API development, WordPress optimization, and eCommerce automation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="rounded-full bg-white px-6 py-3 text-sm font-black text-blue-700 transition hover:-translate-y-0.5 hover:shadow-lg">
              Email Me
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-white/40 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/10">
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-5 py-8 text-center text-sm font-semibold text-slate-500 dark:border-slate-800 dark:text-slate-400">
        © {new Date().getFullYear()} Khuzemah Saeed. Built with Next.js and Tailwind CSS.
      </footer>
    </main>
  );
}
