import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUp,
  Award,
  Bolt,
  Check,
  Cloud,
  Code2,
  Copy,
  Cpu,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MonitorSmartphone,
  Send,
  Server,
  Share2,
  Terminal,
  UserRound,
  Wrench,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Chen — Full Stack & Systems Engineer" },
      { name: "description", content: "Portfolio of Alex Chen, a full-stack and systems engineer building scalable software and thoughtful web experiences." },
      { property: "og:title", content: "Alex Chen — Full Stack & Systems Engineer" },
      { property: "og:description", content: "Scalable systems, high-fidelity interfaces, and production engineering projects." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const projects = [
  {
    name: "HyperScale",
    category: "Systems & APIs",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDw5kLHlFPsDlpatmFw5P3tdRjqE1WIJ_3LuVwAS70jWnRwxPfyextJVbeaPIQTHIfToVWChHPLAhNvH_1HYJ6rKnEtlcW-xFc3kW1ZoSCFLViR7h1F75kTo3VvCWBOqw4hYwyg9kz4bFf4065u30xqfxU8JJ_89nP4D2wccxrkyTmY48F93jI_XDbl18u3vyCdJbxMJx_YK8beLfwH9ic86hR93hM2-l8inUdhAyTTSon4p6oYDrZ81A",
    alt: "Dark distributed systems telemetry dashboard",
    badge: "Sub-10ms Dispatch",
    description: "Distributed Task Queue & Event Pipeline. Features concurrent job ingestion, sub-10ms worker dispatch, and real-time operational analytics dashboard with live throughput charts.",
    tech: ["React", "Next.js", "Go", "Redis", "Tailwind CSS"],
    stat: "Throughput: 140k req/min",
    result: "p95 < 8.4ms",
    tone: "cyan",
  },
  {
    name: "DevPulse",
    category: "Full-Stack",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIq_Lo6-hidjdX4IM0fJ4O9HqsidziefroZOWZzspx88li1j66BuHEVM6NoYZf_zAViiGr6Nsma3e-TohlsuAdCy_TADMPxv5e5-AyKsqeMhJ53rA9w-GTz45VOjjUy-2BSlXhm_9YDvEBLXwwZ5vg_uA-Lb2glLrD_RD-cmFitX-hFt9_AzjPpq_fxI4DY8ApwZ7yKhi7h9sbIF9PeUnxPzSlVi2FEAG8GW2_5sfIgHRPT77HkktgIQ",
    alt: "Collaborative code review workspace",
    badge: "10k+ Community Users",
    description: "Collaborative Code Review & Pair Programming Workspace. Includes low-latency multi-cursor synchronized editing, embedded voice channels, and Git commit graph diffing.",
    tech: ["React.js", "WebSockets", "TypeScript", "WebRTC", "Tailwind"],
    stat: "Sync Latency: < 22ms",
    result: "99.98% Socket Stability",
    tone: "violet",
  },
  {
    name: "NeuroScribe",
    category: "AI / ML Tools",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDADzvn_SukxaWWa0h015xBwct11wlhWobFsPO4LlHA7w1DkXgkjn55UD5XchSCo1zqbw_QxNLe81k0cmpdE6713NeX_vYVSVBnLzQhgt-hbYeTGv0rdl8pZgeZvkb-DJhUZjaUTISSD-Xb7djJsOFzCxgy44wEaNl-3pgUFwhxgXw0hyeWw1VeevtHOtIx-1xWliXOarEMDhy8foQJP-6AHGaN8Pevl40FYZ2dbgStwONiE7nWCA8LyA",
    alt: "AI documentation and API generator interface",
    badge: "OpenAPI 3.1 Compliant",
    description: "AI Documentation & API Spec Generator. Parses repository AST structures and endpoint definitions to create interactive developer portals with automated SDK generation.",
    tech: ["React", "Python", "FastAPI", "OpenAI SDK", "Tailwind CSS"],
    stat: "Doc Gen Speed: < 4.2s",
    result: "AST Accuracy: 99.4%",
    tone: "violet",
  },
  {
    name: "Zenith Canvas",
    category: "Full-Stack",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpxxabFgYhJTiQmj5au_EBZj3YalDlFUC2_Mkkouxj5W54H85johTMtTttc-HzdpHYlrN-YBrfWjywg_PXZe9dl4a3ogBE-vsJW1LSpzMaHIw67IDVeCewTUXEXkRfkgsImJw5pAvPauCAJjAmq4lFOnFZhZrszQsOnP85BOUXwSKgN6EveF263SC73rcOj8gadmIQp7PITO6Y0WppDyHQC3CkO3cb1a9cxznuLDENUc6zFGJX40pFEg",
    alt: "High performance vector graphics canvas tool",
    badge: "60 FPS @ 50k Nodes",
    description: "Real-Time Vector Graphic Engine rendered on Canvas API powered by WebAssembly. Supports real-time boolean operations, custom shader filters, and collaborative state broadcast.",
    tech: ["Canvas API", "React.js", "WebAssembly", "Tailwind"],
    stat: "Render benchmark: 16.6ms",
    result: "Rust/Wasm Engine",
    tone: "cyan",
  },
];

const skillGroups = [
  { title: "Frontend", icon: MonitorSmartphone, skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux / Zustand", "HTML5 / CSS3", "WebGL basics"] },
  { title: "Backend", icon: Server, skills: ["Node.js", "Go (Golang)", "Python", "PostgreSQL", "Redis", "GraphQL & REST", "WebSockets"] },
  { title: "DevOps", icon: Cloud, skills: ["Docker", "Kubernetes", "AWS (S3/EC2/Lambda)", "GitHub Actions", "Linux CLI", "Vercel & Cloudflare"] },
  { title: "Methodologies", icon: Wrench, skills: ["Git & Trunk-based", "Jest & Vitest", "System Design", "Figma", "Agile / Scrum", "Benchmarking"] },
];

const nav = ["About", "Projects", "Skills", "Contact"];

function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleProjects = useMemo(() => filter === "All" ? projects : projects.filter((project) => project.category === filter), [filter]);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("alex.chen.dev@example.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6">
          <div className="flex items-center gap-3">
            <a href="#top" className="font-mono text-lg font-bold transition-colors hover:text-primary"><span className="text-secondary">&gt;_</span> alex.dev</a>
            <div className="hidden items-center gap-2 rounded-full border border-border bg-card px-2.5 py-1 sm:flex">
              <span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-secondary opacity-70" /><span className="relative inline-flex size-2 rounded-full bg-secondary" /></span>
              <span className="font-mono text-[11px] font-semibold text-secondary">Available for Opportunities</span>
            </div>
          </div>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="font-mono text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground">{item}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <a href="#contact" aria-label="Send a message" className="hidden rounded-md p-2 text-muted-foreground transition-colors hover:text-primary lg:block"><Send className="size-4" /></a>
            <Button asChild variant="outline" size="sm"><a href="mailto:alex.chen.dev@example.com">Resume <ArrowRight className="size-3.5" /></a></Button>
            <Button variant="ghost" size="icon" aria-label="Toggle menu" className="md:hidden" onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X /> : <Menu />}</Button>
          </div>
        </div>
        {menuOpen && <nav className="border-t border-border bg-background px-5 py-4 md:hidden">{nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="block py-2 font-mono text-sm text-muted-foreground">{item}</a>)}</nav>}
      </header>

      <main id="top" className="dot-grid pt-16">
        <section className="mx-auto flex min-h-[670px] max-w-5xl flex-col items-center justify-center px-5 py-20 text-center sm:px-6">
          <div className="eyebrow"><Cpu className="size-3.5 text-secondary" /> SYSTEMS & FULL-STACK ARCHITECT <span className="text-muted-foreground">/ B.S. CS 2025</span></div>
          <h1 className="mt-8 max-w-4xl text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">Building <span className="text-shine">scalable systems</span> &amp; delightful web experiences.</h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">Aspiring Full-Stack Software Engineer with expertise in React, TypeScript, Node.js, and Distributed Systems. Passionate about deterministic latency, clean code architecture, and high-fidelity UX.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="h-12"><a href="#projects">Explore Projects <ArrowRight /></a></Button>
            <Button asChild variant="outline" size="lg" className="h-12"><a href="#contact"><Mail className="text-secondary" /> Get in Touch</a></Button>
            <div className="hidden items-center gap-2 pl-2 font-mono text-[11px] text-muted-foreground sm:flex"><kbd className="rounded border border-border bg-card px-2 py-1 text-foreground">⌘K</kbd> command palette</div>
          </div>
          <div className="mt-16 grid w-full max-w-2xl grid-cols-3 gap-3 border-t border-border/60 pt-9 sm:gap-10">
            {[["12+", "Shipped Projects"], ["450+", "GitHub Commits"], ["99.9%", "Target Uptime"]].map(([value, label]) => <div key={label}><p className="text-2xl font-bold sm:text-4xl">{value}</p><p className="mt-1 font-mono text-[10px] text-muted-foreground sm:text-xs">{label}</p></div>)}
          </div>
        </section>

        <Section id="about" icon={UserRound} kicker="DISCIPLINE & BACKGROUND" title="Architecting resilient software from first principles.">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="space-y-5 text-[15px] leading-7 text-muted-foreground lg:col-span-7">
              <p>Hello! I am <strong className="text-foreground">Alex Chen</strong>, a software engineer with deep curiosity for how large-scale computer systems function under high pressure. I bridge low-latency backend architectures with crisp, tactile user interfaces.</p>
              <p>My philosophy revolves around <span className="text-primary">extreme software clarity</span>: deterministic data flows, micro-optimized rendering cycles, and zero unnecessary runtime bloat. Whether compiling WebAssembly modules or orchestrating event pipelines across Redis clusters, I strive for deterministic speed.</p>
              <p>When not optimizing render trees or tuning distributed locks, you can find me contributing to open-source developer tooling, exploring mechanical keyboards, or mentoring junior collegiate developers in algorithms.</p>
              <div className="flex flex-wrap gap-2 pt-2">{["Systems Architecture", "TypeScript Strictness", "Event-Driven Design", "Human-Centric UX"].map((item) => <span className="pill" key={item}>{item}</span>)}</div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5">
              <InfoCard icon={GraduationCap} title="Education" lines={["B.S. in Computer Science", "Senior Year • 3.9 GPA", "Dean's Honor List, Algorithms TA"]} />
              <InfoCard icon={Bolt} title="Current Focus" lines={["Distributed Systems", "High-concurrency APIs", "LLM Tooling & Agent Workflows"]} accent />
              <div className="panel p-5 sm:col-span-2"><div className="flex items-center gap-2"><Award className="size-5 text-tertiary" /><h3 className="text-lg font-semibold">Experience & Leadership</h3></div><div className="mt-4 flex justify-between gap-4 text-sm"><strong>Software Engineering Intern</strong><span className="font-mono text-xs text-muted-foreground">Summer 2024</span></div><p className="mt-2 text-sm text-muted-foreground">Built real-time telemetry pipelines reducing metric ingestion delay by 43%.</p><p className="mt-3 font-mono text-xs text-secondary">🏆 CalHacks Finalist &nbsp; • &nbsp; 🚀 5+ OSS Repos Contributed</p></div>
            </div>
          </div>
        </Section>

        <Section id="projects" icon={Terminal} kicker="PRODUCTION BUILDS & ARCHITECTURES" title="Featured Engineering Projects" side={<div className="flex flex-wrap rounded-lg border border-border bg-card p-1">{["All", "Full-Stack", "AI / ML Tools", "Systems & APIs"].map((item) => <Button key={item} size="sm" variant={filter === item ? "secondary" : "ghost"} onClick={() => setFilter(item)} className="h-7 px-3 font-mono text-[11px]">{item}</Button>)}</div>}>
          <div className="grid gap-7 md:grid-cols-2">{visibleProjects.map((project) => <ProjectCard key={project.name} {...project} />)}</div>
        </Section>

        <Section id="skills" icon={Layers3} kicker="SYSTEM ARCHITECTURE & STACK" title="Technical Skills & Competencies" description="Comprehensive arsenal of languages, frameworks, systems software, and infrastructure tools honed through commercial projects and open-source systems.">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{skillGroups.map(({ title, icon: Icon, skills }) => <div key={title} className="panel p-6"><div className="flex items-center gap-3"><span className="rounded-md bg-accent p-2 text-primary"><Icon className="size-5" /></span><h3 className="text-lg font-semibold">{title}</h3></div><div className="mt-5 flex flex-wrap gap-2">{skills.map((skill) => <span className="pill" key={skill}>{skill}</span>)}</div></div>)}</div>
        </Section>

        <Section id="contact" icon={Mail} kicker="GET IN TOUCH" title="Let's build something exceptional together." description="I am currently open to full-time Software Engineer positions, distributed systems roles, and high-impact internships. If you have an exciting technical challenge or would like to discuss engineering, let's talk.">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-5">
              <div><p className="font-mono text-xs text-muted-foreground">Direct Email</p><button onClick={copyEmail} className="mt-2 flex items-center gap-3 text-left text-lg font-semibold transition-colors hover:text-secondary">alex.chen.dev@example.com {copied ? <Check className="size-4 text-secondary" /> : <Copy className="size-4 text-muted-foreground" />}</button>{copied && <p className="mt-1 font-mono text-xs text-secondary">Copied!</p>}</div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground"><MapPin className="size-4 text-primary" /> San Francisco, CA / Remote</div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground"><Bolt className="size-4 text-secondary" /> Response time: &lt; 24 hours</div>
              <div className="flex gap-2 pt-4">{[[Github, "GitHub"], [Share2, "LinkedIn"], [Send, "Twitter / X"]].map(([Icon, label]) => { const SocialIcon = Icon as typeof Github; return <Button key={label as string} variant="outline" size="icon" aria-label={label as string}><SocialIcon /></Button>; })}</div>
            </div>
            <form className="panel grid gap-4 p-6" onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
              <div className="grid gap-4 sm:grid-cols-2"><Field label="Your Name" type="text" /><Field label="Email Address" type="email" /></div>
              <Field label="Subject" type="text" />
              <label className="grid gap-2 font-mono text-xs text-muted-foreground">Message<textarea required rows={5} className="rounded-md border border-input bg-background px-3 py-2 font-sans text-sm text-foreground outline-none transition-colors focus:border-primary" /></label>
              <Button type="submit" className="h-11">{sent ? <><Check /> Message Sent</> : <>Send Message <Send /></>}</Button>
              <div className="flex justify-between font-mono text-[10px] text-muted-foreground"><span>⚡ Encrypted endpoint</span><span>Zero spam guarantee</span></div>
            </form>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border bg-card/40"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-8 sm:flex-row"><div><p className="font-mono font-bold"><span className="text-secondary">&gt;_</span> alex.dev</p><p className="mt-1 text-xs text-muted-foreground">© 2025 Alex Chen. Architected with precision.</p></div><div className="flex items-center gap-5 font-mono text-xs text-muted-foreground"><a href="#projects">Projects</a><a href="#contact">Contact</a><a href="#top" aria-label="Back to top" className="rounded-md border border-border p-2 text-foreground"><ArrowUp className="size-4" /></a></div></div></footer>
    </div>
  );
}

function Section({ id, icon: Icon, kicker, title, description, side, children }: { id: string; icon: typeof Cpu; kicker: string; title: string; description?: string; side?: React.ReactNode; children: React.ReactNode }) {
  return <section id={id} className="scroll-mt-16 border-t border-border/60"><div className="mx-auto max-w-7xl px-5 py-20 sm:px-6"><div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><div className="flex items-center gap-2 font-mono text-xs font-semibold text-secondary"><Icon className="size-4" />{kicker}</div><h2 className="mt-4 max-w-3xl text-3xl font-semibold sm:text-4xl">{title}</h2>{description && <p className="mt-4 max-w-2xl text-[15px] leading-6 text-muted-foreground">{description}</p>}</div>{side}</div>{children}</div></section>;
}

function InfoCard({ icon: Icon, title, lines, accent = false }: { icon: typeof Cpu; title: string; lines: string[]; accent?: boolean }) {
  return <div className="panel p-5"><div className="flex items-center gap-2"><Icon className={`size-5 ${accent ? "text-secondary" : "text-primary"}`} /><h3 className="text-lg font-semibold">{title}</h3></div><p className="mt-3 text-sm font-medium">{lines[0]}</p><p className="mt-1 font-mono text-[11px] text-muted-foreground">{lines[1]}</p><p className="mt-2 font-mono text-[11px] text-foreground/75">{lines[2]}</p></div>;
}

function ProjectCard(project: (typeof projects)[number]) {
  return <article className="group flex overflow-hidden rounded-lg border border-border bg-card/70 shadow-panel transition-all hover:-translate-y-1 hover:border-primary/50">
    <div className="flex w-full flex-col">
      <div className="relative h-60 overflow-hidden border-b border-border bg-accent"><img src={project.image} alt={project.alt} className="size-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100" /><div className="absolute inset-0 image-shade" /><span className={`absolute right-4 top-4 rounded-full border border-border bg-background/90 px-2.5 py-1 font-mono text-[10px] ${project.tone === "cyan" ? "text-secondary" : "text-tertiary"}`}>● &nbsp;{project.badge}</span></div>
      <div className="flex-1 p-6"><div className="flex items-center justify-between"><h3 className="text-2xl font-semibold transition-colors group-hover:text-primary">{project.name}</h3><div className="flex gap-2"><Button variant="ghost" size="icon" aria-label={`${project.name} source code`}><Code2 /></Button><Button variant="ghost" size="icon" aria-label={`${project.name} live preview`}><ExternalLink /></Button></div></div><p className="mt-4 text-[15px] leading-6 text-muted-foreground">{project.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.tech.map((item) => <span className="pill text-primary" key={item}>{item}</span>)}</div></div>
      <div className="flex items-center justify-between gap-3 border-t border-border bg-accent/40 px-6 py-4 font-mono text-[10px] text-muted-foreground"><span>{project.stat}</span><span className="text-secondary">{project.result}</span></div>
    </div>
  </article>;
}

function Field({ label, type }: { label: string; type: string }) {
  return <label className="grid gap-2 font-mono text-xs text-muted-foreground">{label}<input required type={type} className="h-10 rounded-md border border-input bg-background px-3 font-sans text-sm text-foreground outline-none transition-colors focus:border-primary" /></label>;
}