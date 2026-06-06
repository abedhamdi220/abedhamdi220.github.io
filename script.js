:root {
    --bg-dark: #070a13;
    --bg-card: #111827;
    --bg-card-hover: #1f2937;
    --primary: #0ea5e9; /* الأزرق السماوي */
    --primary-glow: rgba(139, 92, 246, 0.4); /* توهج بنفسجي */
    --secondary: #8b5cf6; /* البنفسجي النيون */
    --text-light: #f8fafc;
    --text-muted: #94a3b8;
    --border: #1f2937;
    --font-main: 'Inter', sans-serif;
    --font-code: 'Fira Code', monospace;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-main);
    background-color: var(--bg-dark);
    color: var(--text-light);
    line-height: 1.6;
    overflow-x: hidden;
}

/* Background Effects */
.particles-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    background: radial-gradient(circle at 15% 50%, rgba(14, 165, 233, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 85% 30%, rgba(16, 185, 129, 0.05) 0%, transparent 50%);
}

.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px;
}

/* Glassmorphism Navbar */
nav {
    padding: 18px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    background: rgba(7, 10, 19, 0.7);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    position: sticky;
    top: 0;
    z-index: 1000;
    transition: all 0.3s ease;
}

nav.scrolled {
    padding: 12px 0;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
}

.logo {
    font-family: var(--font-code);
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--primary);
    text-decoration: none;
    letter-spacing: -0.5px;
}

.logo span { color: var(--text-light); }

.nav-links {
    display: flex;
    gap: 32px;
    list-style: none;
}

.nav-links a {
    color: var(--text-muted);
    text-decoration: none;
    font-weight: 500;
    font-size: 0.95rem;
    transition: color 0.3s ease;
}

.nav-links a:hover { color: var(--primary); }

/* Hero Section */
.hero {
    min-height: 90vh;
    display: flex;
    align-items: center;
    padding: 80px 0;
}

.hero-content {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 60px;
    align-items: center;
}

.profile-glow {
    position: relative;
    display: inline-block;
    margin-bottom: 30px;
}

.profile-glow::after {
    content: '';
    position: absolute;
    inset: -5px;
    border-radius: 50%;
    background: linear-gradient(45deg, var(--primary), var(--secondary));
    z-index: -1;
    filter: blur(20px);
    opacity: 0.6;
}

.profile-pic {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--bg-dark);
    display: block;
}

.hero-text h2 {
    color: var(--secondary);
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.hero-text h1 {
    font-size: 3.5rem;
    line-height: 1.15;
    margin-bottom: 24px;
    font-weight: 800;
    letter-spacing: -1px;
}

.hero-text h1 span {
    background: linear-gradient(to right, var(--primary), #38bdf8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.hero-text p {
    color: var(--text-muted);
    font-size: 1.15rem;
    margin-bottom: 40px;
    max-width: 90%;
}

.hero-buttons { display: flex; gap: 16px; flex-wrap: wrap; }

.btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 28px;
    border-radius: 8px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 1rem;
}

.btn-primary {
    background-color: var(--primary);
    color: #fff;
    box-shadow: 0 4px 20px rgba(14, 165, 233, 0.3);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(14, 165, 233, 0.5);
    background-color: #0284c7;
}

.btn-outline {
    border: 1px solid var(--border);
    color: var(--text-light);
    background: rgba(255,255,255,0.03);
}

.btn-outline:hover {
    border-color: var(--text-muted);
    background: rgba(255,255,255,0.08);
}

/* Terminal Modernization */
.terminal-wrapper { perspective: 1000px; }

.terminal {
    background: #0d1117;
    border-radius: 12px;
    border: 1px solid var(--border);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
    overflow: hidden;
}

.terminal-header {
    background: #161b22;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    border-bottom: 1px solid var(--border);
}

.terminal-title {
    margin-left: auto;
    font-family: var(--font-code);
    font-size: 0.8rem;
    color: #8b949e;
}

.dot { width: 12px; height: 12px; border-radius: 50%; }
.dot.red { background: #ff5f56; }
.dot.yellow { background: #ffbd2e; }
.dot.green { background: #27c93f; }

.terminal-body {
    padding: 24px;
    font-family: var(--font-code);
    font-size: 0.95rem;
    line-height: 1.7;
    min-height: 220px;
}

.keyword { color: #ff7b72; }
.class-name { color: #d2a8ff; }
.string { color: #a5d6ff; }
.property { color: #79c0ff; }
.comment { color: #8b949e; }
.cursor {
    display: inline-block;
    width: 8px;
    height: 18px;
    background: var(--text-light);
    animation: blink 1s step-end infinite;
    vertical-align: middle;
    margin-left: 5px;
}

@keyframes blink { 50% { opacity: 0; } }

/* Sections Common */
section { padding: 120px 0; }

.section-title {
    font-size: 2.2rem;
    margin-bottom: 60px;
    display: flex;
    align-items: center;
    gap: 16px;
    font-weight: 700;
}

.section-title::before {
    content: '';
    width: 40px; height: 3px;
    background: var(--primary);
    border-radius: 2px;
}

/* Skills Grid */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 24px;
}

.skill-card {
    background: var(--bg-card);
    padding: 32px 24px;
    border-radius: 16px;
    border: 1px solid var(--border);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.skill-card:hover {
    transform: translateY(-8px);
    border-color: var(--primary);
    background: var(--bg-card-hover);
}

.skill-icon {
    font-size: 2.5rem;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 20px;
}

.skill-card h3 { font-size: 1.2rem; margin-bottom: 16px; }

.skill-tags { display: flex; flex-wrap: wrap; gap: 8px; }

.skill-tags span {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 0.8rem;
    color: var(--text-muted);
}

/* Projects */
.project-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 40px;
    margin-bottom: 32px;
    transition: border-color 0.3s;
}

.project-card:hover { border-color: rgba(14, 165, 233, 0.3); }

.project-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 24px;
    gap: 20px;
    flex-wrap: wrap;
}

.project-title h3 { font-size: 1.6rem; color: var(--text-light); }
.project-subtitle { color: var(--secondary); font-size: 0.95rem; margin-top: 5px; font-weight: 500; }

.project-link {
    color: var(--text-light);
    background: rgba(255,255,255,0.05);
    padding: 8px 16px;
    border-radius: 8px;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 600;
    transition: all 0.3s;
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.project-link:hover { background: var(--primary); color: #fff; }
.disabled-link { pointer-events: none; opacity: 0.5; }

.project-content h4 { margin-bottom: 16px; color: var(--text-light); font-size: 1.1rem; }

.challenge-list { list-style: none; margin-bottom: 24px; }
.challenge-list li {
    margin-bottom: 12px;
    padding-left: 28px;
    position: relative;
    color: var(--text-muted);
}
.challenge-list li::before {
    content: '▹';
    position: absolute;
    left: 0;
    top: 0;
    color: var(--primary);
    font-weight: bold;
    font-size: 1.2rem;
}

.challenge-list strong { color: var(--text-light); }

.tech-stack { display: flex; gap: 12px; flex-wrap: wrap; }
.tech-stack span {
    font-family: var(--font-code);
    font-size: 0.85rem;
    color: var(--primary);
}

/* Timeline (Fixed LTR Bug) */
.timeline {
    position: relative;
    padding-left: 32px; /* Fixed: Left padding for LTR */
    border-left: 2px solid var(--border); /* Fixed: Left border for LTR */
    margin-left: 10px;
}

.timeline-item {
    position: relative;
    margin-bottom: 48px;
}

.timeline-item:last-child { margin-bottom: 0; }

.timeline-item::before {
    content: '';
    position: absolute;
    left: -41px; /* Fixed: Absolute positioning to the left */
    top: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--bg-dark);
    border: 3px solid var(--primary);
    transition: background 0.3s;
}

.timeline-item:hover::before { background: var(--primary); }

.timeline-date {
    display: inline-block;
    font-family: var(--font-code);
    color: var(--primary);
    font-size: 0.9rem;
    margin-bottom: 8px;
}

.timeline-item h3 { font-size: 1.4rem; margin-bottom: 6px; }
.timeline-location { color: var(--text-light); font-weight: 500; margin-bottom: 12px; }
.timeline-desc { color: var(--text-muted); }

.badge-score {
    float: right;
    background: rgba(16, 185, 129, 0.1);
    color: var(--secondary);
    border: 1px solid rgba(16, 185, 129, 0.2);
    padding: 6px 14px;
    border-radius: 20px;
    font-weight: 600;
    font-size: 0.8rem;
}

/* Footer */
footer {
    text-align: center;
    padding: 60px 0;
    border-top: 1px solid var(--border);
    background: #05080f;
}

.social { display: flex; justify-content: center; gap: 24px; margin-bottom: 24px; }

.social a {
    color: var(--text-muted);
    font-size: 1.5rem;
    transition: all 0.3s;
    background: var(--bg-card);
    width: 50px; height: 50px;
    display: flex; align-items: center; justify-content: center;
    border-radius: 50%;
    border: 1px solid var(--border);
}

.social a:hover {
    color: #fff;
    border-color: var(--primary);
    background: var(--primary);
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(14, 165, 233, 0.3);
}

.footer-text { color: var(--text-muted); font-size: 0.95rem; }

/* Responsive */
@media(max-width: 900px) {
    .hero-content { grid-template-columns: 1fr; text-align: center; gap: 40px; }
    .hero-buttons { justify-content: center; }
    .hero-text h1 { font-size: 2.8rem; }
    .profile-glow { margin: 0 auto 30px auto; }
}

@media(max-width: 768px) {
    nav { flex-direction: column; padding: 20px 0; gap: 20px; }
    nav.scrolled { padding: 15px 0; }
    .nav-links { flex-wrap: wrap; justify-content: center; gap: 20px; }
    .section-title { font-size: 1.8rem; }
    .badge-score { float: none; display: inline-block; margin-bottom: 10px; }
}
