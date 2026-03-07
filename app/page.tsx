"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Project = {
  name: string;
  description: string;
  technologies: string[];
  image: string;
  liveDemo: string;
  github: string;
};

type TerminalLine = {
  command: string;
  output: string;
};

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "JavaScript / TypeScript", "HTML / CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "REST API Development"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "Prisma ORM"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Vercel", "Clerk Authentication"],
  },
];

const projects: Project[] = [
  {
    name: "eCommerce Platform",
    description:
      "Built with Next.js, PostgreSQL, Prisma, and Tailwind CSS. Includes authentication, payments, order tracking, and an admin dashboard.",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    image: "/projects/ss.png",
    liveDemo: "https://grocstyle.vercel.app/",
    github: "https://github.com/georgekarugu/grocstyle",
  },
  {
    name: "Inventory Management System",
    description:
      "Built with React, Node.js, Express, and MongoDB. Includes product tracking, CRUD workflows, and dashboard analytics.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    image: "/projects/inventory.svg",
    liveDemo: "https://example.com/inventory",
    github: "https://github.com/georgekarugu/inventory-management",
  },
  {
    name: "School Management System",
    description:
      "Uses Clerk authentication with a custom backend API to manage students, teachers, and parents in one unified platform.",
    technologies: ["Next.js", "Clerk", "Custom API", "PostgreSQL"],
    image: "/projects/school.svg",
    liveDemo: "https://example.com/school",
    github: "https://github.com/georgekarugu/school-management-system",
  },
  {
    name: "Notification Service Backend",
    description:
      "Built using Node.js, PostgreSQL, and Prisma to orchestrate event-driven notification workflows with delivery tracking.",
    technologies: ["Node.js", "PostgreSQL", "Prisma", "Queues"],
    image: "/projects/notification.svg",
    liveDemo: "https://example.com/notification-service",
    github: "https://github.com/georgekarugu/notification-service",
  },
];

const blogPosts = [
  {
    title: "Building an eCommerce Website with Next.js",
    excerpt:
      "A practical walkthrough for structuring product pages, checkout flows, and admin tools in a production-ready Next.js app.",
    date: "Jan 12, 2026",
    link: "#",
  },
  {
    title: "Understanding Prisma ORM in Real Projects",
    excerpt:
      "How to model scalable relational data, run migrations safely, and avoid common pitfalls with Prisma in teams.",
    date: "Dec 3, 2025",
    link: "#",
  },
  {
    title: "Integrating M-Pesa STK Push with Node.js",
    excerpt:
      "Implementing secure STK push flows, callback handling, and transaction reconciliation for modern fintech products.",
    date: "Oct 28, 2025",
    link: "#",
  },
];

const terminalOutputs: Record<string, string> = {
  help: "Available commands: whoami, skills, projects, stack, clear",
  whoami:
    "George Karugu | Full Stack Developer focused on scalable applications, clean APIs, and modern product experiences.",
  skills:
    "Frontend: React, Next.js, Tailwind, TypeScript | Backend: Node.js, Express | DB: PostgreSQL, MongoDB, Prisma",
  projects:
    "eCommerce Platform, Inventory Management System, School Management System, Notification Service Backend",
  stack: "Next.js + TypeScript + Tailwind CSS + Framer Motion + Node.js + PostgreSQL",
};

const sectionReveal = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-accent">{eyebrow}</p>
      <h2 className="text-3xl font-bold leading-tight text-text md:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
    </div>
  );
}

export default function Home() {
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      command: "help",
      output: terminalOutputs.help,
    },
  ]);

  const onTerminalSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = command.trim().toLowerCase();
    if (!value) {
      return;
    }

    if (value === "clear") {
      setHistory([]);
      setCommand("");
      return;
    }

    const output = terminalOutputs[value] ?? "Command not found. Use `help` to see available commands.";
    setHistory((prev) => [...prev, { command: value, output }]);
    setCommand("");
  };

  return (
    <main className="relative overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-grid hero-grid opacity-50" />
      <header className="sticky top-0 z-50 border-b border-line/60 bg-base/70 backdrop-blur-xl">
        <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link href="#home" className="text-xl font-bold tracking-tight text-text">
            George<span className="text-accent">.dev</span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted transition hover:text-text"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="#contact"
            className="rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent transition hover:shadow-glow"
          >
            Collaborate
          </Link>
        </div>
        <div className="border-t border-line/40 md:hidden">
          <div className="mx-auto flex max-w-6xl gap-4 overflow-x-auto px-5 py-3 text-sm [scrollbar-width:none] sm:px-8">
            {navLinks.map((link) => (
              <Link key={`mobile-${link.href}`} href={link.href} className="shrink-0 text-muted transition hover:text-text">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <section id="home" className="mx-auto max-w-6xl px-5 pb-24 pt-16 sm:px-8 lg:pb-28 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-7"
          >
            <p className="inline-flex items-center rounded-full border border-line bg-panelAlt px-4 py-2 text-sm text-muted">
              Full Stack Engineer | Nairobi + Remote
            </p>
            <div>
              <p className="mb-4 text-base uppercase tracking-[0.24em] text-accent">George Karugu</p>
              <h1 className="max-w-xl text-4xl font-bold leading-tight text-text md:text-6xl">
                Full Stack Developer building fast, scalable digital products.
              </h1>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-muted">
              I build scalable web applications and modern digital products with strong backend systems,
              polished user interfaces, and reliable cloud-ready architecture.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#projects"
                className="rounded-full bg-accent px-6 py-3 text-sm font-bold text-base transition hover:-translate-y-0.5 hover:brightness-110"
              >
                View Projects
              </Link>
              <Link
                href="#contact"
                className="rounded-full border border-line bg-panel px-6 py-3 text-sm font-semibold text-text transition hover:border-accent/60 hover:text-accent"
              >
                Contact Me
              </Link>
              <Link
                href="https://github.com/georgekarugu"
                target="_blank"
                className="rounded-full border border-line bg-panel px-6 py-3 text-sm font-semibold text-text transition hover:border-accentWarm/60 hover:text-accentWarm"
              >
                GitHub
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-panel via-panelAlt to-[#0a121b] p-6 shadow-glow">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
              <div className="absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-accentWarm/20 blur-3xl" />
              <div className="relative space-y-5">
                <div className="flex items-center justify-between rounded-2xl border border-line bg-base/60 p-4">
                  <div>
                    <p className="text-sm text-muted">Current Focus</p>
                    <p className="mt-1 font-semibold text-text">Scalable Full Stack Platforms</p>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 text-lg font-bold text-accent">
                    GK
                  </div>
                </div>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-2xl border border-line bg-base/70 p-4"
                >
                  <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-accentWarm">live-code.ts</p>
                  <pre className="overflow-x-auto text-sm leading-relaxed text-muted">
                    <code>{`const developer = {
  name: "George Karugu",
  role: "Full Stack Developer",
  stack: ["Next.js", "Node.js", "PostgreSQL"],
};`}</code>
                  </pre>
                </motion.div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-line bg-base/60 p-3">
                    <p className="text-xs text-muted">Backend</p>
                    <p className="mt-1 text-sm font-semibold text-text">API & Architecture</p>
                  </div>
                  <div className="rounded-xl border border-line bg-base/60 p-3">
                    <p className="text-xs text-muted">Frontend</p>
                    <p className="mt-1 text-sm font-semibold text-text">UX & Motion UI</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section
        id="about"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mx-auto max-w-6xl px-5 py-20 sm:px-8"
      >
        <SectionTitle
          eyebrow="About"
          title="Engineering modern products from backend logic to polished interfaces."
          description="I am a full stack developer who specializes in building modern web applications using React, Next.js, Node.js, and PostgreSQL."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Scalable backend systems",
            "Clean APIs and maintainable architecture",
            "Intuitive user interfaces",
            "AI-powered platforms and workflows",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-line bg-panel/60 p-5 text-muted">
              {item}
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="skills"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-6xl px-5 py-20 sm:px-8"
      >
        <SectionTitle
          eyebrow="Skills"
          title="Technologies I use to build reliable and scalable products."
          description="My stack covers frontend experiences, robust backend services, production databases, and deployment workflows."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {skills.map((group) => (
            <motion.article
              key={group.category}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="rounded-2xl border border-line bg-panel p-6"
            >
              <h3 className="text-xl font-semibold text-text">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line bg-panelAlt px-3 py-1.5 text-sm font-medium text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="projects"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-6xl px-5 py-20 sm:px-8"
      >
        <SectionTitle
          eyebrow="Projects"
          title="Selected work across full stack systems and product platforms."
          description="Each project demonstrates practical engineering decisions, strong architecture, and an emphasis on maintainable user-facing outcomes."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <motion.article
              key={project.name}
              whileHover={{ y: -8, transition: { duration: 0.22 } }}
              className="group overflow-hidden rounded-2xl border border-line bg-panel"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-4 p-6">
                <h3 className="text-xl font-semibold text-text">{project.name}</h3>
                <p className="text-sm leading-relaxed text-muted">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-1">
                  <Link
                    href={project.liveDemo}
                    target="_blank"
                    className="rounded-full border border-line bg-panelAlt px-4 py-2 text-sm font-medium text-text transition hover:border-accent hover:text-accent"
                  >
                    Live Demo
                  </Link>
                  <Link
                    href={project.github}
                    target="_blank"
                    className="rounded-full border border-line bg-panelAlt px-4 py-2 text-sm font-medium text-text transition hover:border-accentWarm hover:text-accentWarm"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="github"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-6xl px-5 py-20 sm:px-8"
      >
        <SectionTitle
          eyebrow="GitHub Activity"
          title="Consistent development and active contribution history."
          description="Public activity and contribution charts provide a transparent view of build consistency and technical output."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          <article className="rounded-2xl border border-line bg-panel p-5 lg:col-span-2">
            <Image
              src="https://camo.githubusercontent.com/571e61b525d53b90987397b3e459de78d026281642dfc249b937822ffa6882d4/68747470733a2f2f6e69727a616b2d73747265616b2d73746174732e76657263656c2e6170702f3f757365723d67656f7267656b6172756775267468656d653d6461726b26686964655f626f726465723d66616c7365"
              alt="GitHub statistics"
              width={920}
              height={360}
              className="w-full rounded-xl"
              unoptimized
            />
          </article>
          <article className="rounded-2xl border border-line bg-panel p-5">
            <Image
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=georgekarugu&layout=compact&hide_border=true&bg_color=00000000&title_color=2dd4bf&text_color=e8f2ff"
              alt="Top languages"
              width={420}
              height={360}
              className="w-full rounded-xl"
              unoptimized
            />
          </article>
          <article className="rounded-2xl border border-line bg-panel p-5 lg:col-span-3">
            <Image
              src="https://ghchart.rshah.org/2dd4bf/georgekarugu"
              alt="GitHub contribution activity"
              width={980}
              height={220}
              className="w-full rounded-xl border border-line/70 bg-[#070b10] p-3"
              unoptimized
            />
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-muted">Follow development activity and repositories on GitHub.</p>
              <Link
                href="https://github.com/georgekarugu"
                target="_blank"
                className="rounded-full border border-line bg-panelAlt px-4 py-2 text-sm font-semibold text-text transition hover:border-accent hover:text-accent"
              >
                View GitHub Profile
              </Link>
            </div>
          </article>
        </div>
      </motion.section>

      <motion.section
        id="blog"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-6xl px-5 py-20 sm:px-8"
      >
        <SectionTitle
          eyebrow="Blog"
          title="Technical writing on real-world full stack development."
          description="Practical articles focused on architecture decisions, implementation details, and lessons from shipping production software."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {blogPosts.map((post) => (
            <motion.article
              key={post.title}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="flex h-full flex-col rounded-2xl border border-line bg-panel p-6"
            >
              <p className="mb-3 text-xs uppercase tracking-[0.14em] text-accentWarm">{post.date}</p>
              <h3 className="text-xl font-semibold text-text">{post.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
              <Link href={post.link} className="mt-5 text-sm font-semibold text-accent transition hover:text-accentWarm">
                Read Article
              </Link>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-6xl px-5 py-20 sm:px-8"
      >
        <SectionTitle
          eyebrow="Terminal"
          title="Interactive mini terminal."
          description="Type commands like whoami, skills, projects, stack, help, or clear."
        />
        <div className="overflow-hidden rounded-2xl border border-line bg-[#070d13]">
          <div className="flex items-center gap-2 border-b border-line px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
            <p className="ml-2 font-mono text-xs uppercase tracking-[0.2em] text-muted">portfolio-terminal</p>
          </div>
          <div className="space-y-2 px-4 py-5 font-mono text-sm">
            {history.map((line, index) => (
              <div key={`${line.command}-${index}`} className="space-y-1">
                <p className="text-accent">
                  <span className="text-muted">guest@george:~$ </span>
                  {line.command}
                </p>
                <p className="text-muted">{line.output}</p>
              </div>
            ))}
            <form onSubmit={onTerminalSubmit} className="flex items-center gap-2">
              <label htmlFor="terminal-input" className="text-muted">
                guest@george:~$
              </label>
              <input
                id="terminal-input"
                value={command}
                onChange={(event) => setCommand(event.target.value)}
                autoComplete="off"
                className="flex-1 bg-transparent text-text outline-none placeholder:text-muted/60"
                placeholder="type a command..."
              />
            </form>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-6xl px-5 pb-24 pt-20 sm:px-8"
      >
        <SectionTitle
          eyebrow="Contact"
          title="Let's collaborate on modern web products."
          description="Open to freelance projects, product collaborations, and engineering roles where architecture, performance, and user experience matter."
        />
        <div className="grid gap-6 lg:grid-cols-5">
          <aside className="space-y-3 lg:col-span-2">
            {[
              { label: "Email", value: "georgekarugu.dev@gmail.com", href: "mailto:georgekarugu.dev@gmail.com" },
              { label: "GitHub", value: "github.com/georgekarugu", href: "https://github.com/georgekarugu" },
              { label: "LinkedIn", value: "linkedin.com/in/georgekarugu", href: "https://linkedin.com/in/georgekarugu" },
            ].map((contact) => (
              <Link
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                className="block rounded-2xl border border-line bg-panel p-5 transition hover:border-accent/60"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-muted">{contact.label}</p>
                <p className="mt-1 text-sm font-semibold text-text">{contact.value}</p>
              </Link>
            ))}
          </aside>
          <form className="space-y-4 rounded-2xl border border-line bg-panel p-6 lg:col-span-3">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="rounded-xl border border-line bg-panelAlt px-4 py-3 text-sm text-text outline-none transition placeholder:text-muted/70 focus:border-accent/70"
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="rounded-xl border border-line bg-panelAlt px-4 py-3 text-sm text-text outline-none transition placeholder:text-muted/70 focus:border-accent/70"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Project subject"
              className="w-full rounded-xl border border-line bg-panelAlt px-4 py-3 text-sm text-text outline-none transition placeholder:text-muted/70 focus:border-accent/70"
            />
            <textarea
              name="message"
              rows={6}
              placeholder="Tell me about your project..."
              className="w-full resize-none rounded-xl border border-line bg-panelAlt px-4 py-3 text-sm text-text outline-none transition placeholder:text-muted/70 focus:border-accent/70"
            />
            <button
              type="submit"
              className="rounded-full bg-accent px-6 py-3 text-sm font-bold text-base transition hover:-translate-y-0.5 hover:brightness-110"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.section>

      <footer className="border-t border-line/60 py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 text-sm text-muted sm:px-8">
          <p>(c) {new Date().getFullYear()} George Karugu. Full Stack Developer.</p>
          <p>Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.</p>
        </div>
      </footer>
    </main>
  );
}

