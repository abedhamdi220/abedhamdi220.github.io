/**
 * Design reminder — Living Systems Notebook:
 * A bilingual editorial engineering record. Arabic uses Cairo in a considered RTL
 * layout; dark mode preserves the warm-ink system language rather than becoming neon.
 */
import { useEffect, useState } from "react";
import {
  ArrowDownRight, ArrowUpRight, Braces, Check, Code2, Database, Download,
  ExternalLink, FileText, Github, GraduationCap, Languages, Layers3, Linkedin,
  Mail, MapPin, Menu, Moon, Network, Phone, Server, ShieldCheck, Sun, Workflow, X,
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { locales, type Locale } from "@/locales";

const cvUrl = `${import.meta.env.BASE_URL}cv/Abdulrahman_AlHammadi_CV.pdf`;

const asset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`;

const heroImage = asset("abdh-editorial-svg-portrait.png");
const corridorImage = asset("abdh-system-corridor.png");
const detailImage = asset("abdh-architecture-detail.png");
const logoImage = asset("abdh-logo-mark.png");
const skillIcons = [Server, Workflow, Database, Braces];
type SkillGroup = readonly [string, readonly string[]];
type JourneyItem = { date: string; title: string; badge: string; institution: string; detail: string };

function SectionLead({ kicker, title, intro }: { kicker: string; title: string; intro?: string }) {
  return <div className="section-lead"><span className="section-kicker">{kicker}</span><h2>{title}</h2>{intro ? <p>{intro}</p> : null}</div>;
}

function SystemMark({ className = "" }: { className?: string }) {
  return <svg className={`system-mark ${className}`} viewBox="0 0 58 42" fill="none" aria-hidden="true"><path d="M4 33L18 8L30 33L42 8L54 33" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 22H42" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /><circle cx="4" cy="33" r="3" fill="currentColor" /><circle cx="18" cy="8" r="3" fill="currentColor" /><circle cx="42" cy="8" r="3" fill="currentColor" /><circle cx="54" cy="33" r="3" fill="currentColor" /></svg>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState<Locale>(() => {
    const previewLanguage = new URLSearchParams(window.location.search).get("lang");
    if (previewLanguage === "en" || previewLanguage === "ar") return previewLanguage;
    return (localStorage.getItem("portfolio-language") as Locale) || "en";
  });
  const { theme, toggleTheme } = useTheme();
  const copy = locales[language];
  const rtl = language === "ar";
  const localizedSkillGroups = copy.skills.groups as unknown as readonly SkillGroup[];
  const journeyItems = [copy.journey.first, copy.journey.second] as unknown as readonly JourneyItem[];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = rtl ? "rtl" : "ltr";
    document.title = copy.title;
    localStorage.setItem("portfolio-language", language);
  }, [language, rtl, copy.title]);
  const closeMenu = () => setMenuOpen(false);
  const changeLanguage = () => { setLanguage((value) => value === "en" ? "ar" : "en"); setMenuOpen(false); };

  return (
    <div className={`portfolio-shell ${rtl ? "rtl" : ""}`} dir={rtl ? "rtl" : "ltr"}>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="Abdulrahman Al-Hammadi — back to top">
            <span className="brand-mark-wrap"><img src={logoImage} alt="" className="brand-mark" /><SystemMark className="brand-mark-overlay" /></span>
            <span className="brand-name">Abdulrahman<br />Al-Hammadi</span>
          </a>
          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
            <a href="#work" onClick={closeMenu}>{copy.nav[0]}</a><a href="#capabilities" onClick={closeMenu}>{copy.nav[1]}</a><a href="#journey" onClick={closeMenu}>{copy.nav[2]}</a><a href="#contact" onClick={closeMenu}>{copy.nav[3]}</a>
          </nav>
          <div className="header-tools">
            <button type="button" className="utility-control language-control" onClick={changeLanguage} aria-label={copy.controls.language}><Languages size={15} /><span>{copy.controls.language}</span></button>
            <button type="button" className="utility-control theme-control" onClick={toggleTheme} aria-label={theme === "dark" ? copy.controls.light : copy.controls.dark}>{theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}</button>
            <a href={cvUrl} className="header-cv" target="_blank" rel="noreferrer"><Download size={15} strokeWidth={2.2} /><span>{copy.controls.cv}</span></a>
          </div>
          <button type="button" className="menu-toggle" aria-label={menuOpen ? copy.controls.closeMenu : copy.controls.openMenu} aria-expanded={menuOpen} onClick={() => setMenuOpen((current) => !current)}>{menuOpen ? <X size={21} /> : <Menu size={22} />}</button>
        </div>
      </header>

      <main id="top">
        <section className="hero section-frame" aria-labelledby="hero-title">
          <div className="hero-index" aria-hidden="true"><span>01</span><i /></div>
          <div className="hero-copy">
            <span className="eyebrow"><span className="status-dot" /> {copy.hero.eyebrow}</span>
            <h1 id="hero-title">{copy.hero.heading[0]} <em>{copy.hero.heading[1]}</em> {copy.hero.heading[2]}</h1>
            <p className="hero-summary"><strong>Abdulrahman Al-Hammadi</strong> {copy.hero.summary.replace("Abdulrahman Al-Hammadi", "")}</p>
            <div className="hero-actions"><a href="#work" className="button button-primary">{copy.hero.primary} <ArrowDownRight size={18} /></a><a href={cvUrl} className="text-action" target="_blank" rel="noreferrer"><FileText size={17} /> {copy.hero.cv}</a></div>
            <dl className="hero-metadata">{copy.hero.metadata.map(([term, first, second]) => <div key={term}><dt>{term}</dt><dd>{first}<br />{second}</dd></div>)}</dl>
          </div>
          <div className="hero-visual" aria-label="Editorial profile with engineering data routes">
            <div className="visual-flag"><span>{copy.hero.profile}</span><b>2026</b></div><img src={heroImage} alt="Abdulrahman Al-Hammadi editorial profile" />
            <div className="visual-routes" aria-hidden="true"><span className="route route-a"><i /><b>REQ / 01</b></span><span className="route route-b"><i /><b>QUEUE / 02</b></span><span className="route route-c data-route"><i /><b>DATA / AI</b></span></div>
            <div className="visual-label visual-label-a">{copy.hero.profileLabel}<br /><b>{copy.hero.profileValue}</b></div><div className="visual-label visual-label-b">{copy.hero.focusLabel}<br /><b>{copy.hero.focusValue}</b></div><div className="hero-caption"><span>{copy.hero.principle}</span><p>{copy.hero.principleText}</p></div>
          </div>
        </section>

        <section className="intro-strip section-frame" aria-label="Professional summary"><div className="hero-index" aria-hidden="true"><span>02</span><i /></div><div className="intro-statement"><span className="section-kicker">{copy.intro.kicker}</span><p>{copy.intro.text}</p></div><div className="margin-monogram" aria-hidden="true"><SystemMark /><span>{copy.intro.continuity}</span></div><div className="principle-list"><div><Network size={19} /><span>{copy.intro.principles[0]}</span></div><div><ShieldCheck size={19} /><span>{copy.intro.principles[1]}</span></div><div><Layers3 size={19} /><span>{copy.intro.principles[2]}</span></div></div></section>

        <section id="work" className="work-section section-frame" aria-labelledby="work-title"><div className="hero-index" aria-hidden="true"><span>03</span><i /></div><SectionLead kicker={copy.work.kicker} title={copy.work.title} intro={copy.work.intro} />
          <div className="project-stack">{copy.projects.map((project, index) => <article className="project-record" key={project.title}><header className="project-record-head"><div className="project-id"><span>{project.code}</span><i /> <time>{project.date}</time></div>{"live" in project && project.live ? <a href={project.live} target="_blank" rel="noreferrer" className="live-link">{copy.work.live} <ExternalLink size={15} /></a> : <span className="project-position">{copy.work.record} {String(index + 1).padStart(2, "0")}</span>}</header><div className="project-body"><div className="project-intro"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p className="project-stack-label">{project.stack}</p></div><div className="solution-column"><span className="solution-label">{copy.work.notes}</span><ul>{project.solutions.map((solution) => <li key={solution}><Check size={15} />{solution}</li>)}</ul></div></div><div className="project-footer"><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="system-flow">{project.flow.map((step, flowIndex) => <span key={step} className={flowIndex === project.flow.length - 1 ? "data-step" : ""}><b>{step}</b>{flowIndex < project.flow.length - 1 ? <i aria-hidden="true"><ArrowUpRight size={13} /></i> : null}</span>)}</div></div></article>)}</div>
        </section>

        <section className="additional-section section-frame" aria-labelledby="additional-title"><div className="additional-visual"><img src={corridorImage} alt="Engineering route map" /><div className="additional-diagram" aria-hidden="true"><span>{copy.additional.route}</span><i /><b>04</b><em>05</em></div></div><div className="additional-content"><SectionLead kicker={copy.additional.kicker} title={copy.additional.title} /><div className="additional-list">{copy.additional.items.map((project, index) => <article key={project.title}><span className="additional-number">0{index + 4}</span><div><h3>{project.title}</h3><p>{project.detail}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div></div></section>

        <section id="capabilities" className="capabilities-section section-frame" aria-labelledby="capabilities-title"><div className="hero-index" aria-hidden="true"><span>04</span><i /></div><SectionLead kicker={copy.skills.kicker} title={copy.skills.title} intro={copy.skills.intro} /><div className="skills-layout"><div className="skill-groups">{localizedSkillGroups.map(([label, items], index) => { const Icon = skillIcons[index] ?? Server; return <article className="skill-group" key={label}><div className="skill-group-icon"><Icon size={21} /></div><div><h3>{label}</h3><div className="tag-list">{items.map((item) => <span key={item}>{item}</span>)}</div></div></article>; })}</div><aside className="capability-note"><img src={detailImage} alt="Connected architecture modules" /><div className="capability-routes" aria-hidden="true"><span>ASYNC</span><i /><span className="data-node">DATA</span></div><div><span className="section-kicker">{copy.skills.noteKicker}</span><p>{copy.skills.note}</p></div></aside></div></section>

        <section id="journey" className="journey-section section-frame" aria-labelledby="journey-title"><div className="hero-index" aria-hidden="true"><span>05</span><i /></div><SectionLead kicker={copy.journey.kicker} title={copy.journey.title} /><div className="timeline">{journeyItems.map((item, index) => <article className="timeline-item" key={item.title}><div className="timeline-date">{item.date}</div><div className="timeline-point">{index === 0 ? <GraduationCap size={18} /> : <Code2 size={18} />}</div><div className="timeline-copy"><h3>{item.title} <span>{item.badge}</span></h3><p className="institution">{item.institution}</p><p>{item.detail}</p></div></article>)}</div></section>

        <section id="contact" className="contact-section section-frame" aria-labelledby="contact-title"><div className="contact-grid"><div><span className="eyebrow"><span className="status-dot" /> {copy.contact.eyebrow}</span><h2 id="contact-title">{copy.contact.heading[0]} <em>{copy.contact.heading[1]}</em> {copy.contact.heading[2]}</h2></div><div className="contact-actions"><a className="button button-primary" href="mailto:hminabd71@gmail.com">{copy.contact.action} <ArrowUpRight size={18} /></a><div className="contact-details"><a href="mailto:hminabd71@gmail.com"><Mail size={16} />hminabd71@gmail.com</a><a href="tel:+963957614084"><Phone size={16} />+963 957 614 084</a><span><MapPin size={16} />{copy.contact.location}</span></div></div></div></section>
      </main>
      <footer className="site-footer"><div className="footer-inner"><a className="brand footer-brand" href="#top" aria-label="Back to top"><span className="brand-mark-wrap"><img src={logoImage} alt="" className="brand-mark" /><SystemMark className="brand-mark-overlay" /></span><span className="brand-name">Abdulrahman<br />Al-Hammadi</span></a><p>{copy.footer}</p><div className="social-links" aria-label="Social links"><a href="https://github.com/abedhamdi220" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19} /></a><a href="https://www.linkedin.com/in/abdulrahman-al-hammadi-901b94384/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a><a href="mailto:hminabd71@gmail.com" aria-label="Email"><Mail size={19} /></a></div></div></footer>
    </div>
  );
}
