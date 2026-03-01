import styles from './ProjectsStyles.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { techIcons, techIconsDark } from '../../common/techIcons';
import { useTheme } from '../../common/ThemeContext';

const projects = [
  {
    num: '01',
    name: 'JumBuddy',
    award: 'JumboHack 2026 — Overall & Track Winner',
    tech: ['React', 'TypeScript', 'Python', 'PostgreSQL', 'Supabase', 'VSCode'],
    description:
      'VS Code extension capturing keystroke-level edit history with per-symbol metrics (thrash, churn, time-on-function). Flask API ingests editor flushes and pipes diffs into an LLM for qualitative insights. Backed by PostgreSQL via Supabase with a React professor dashboard featuring per-student analytics and a code-replay timeline.',
    link: 'https://github.com/Seth-Lupo/jumbohack2026',
  },
  {
    num: '02',
    name: 'Container Inventory Software',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'AWS'],
    description:
      'Full-stack app for Airtight Storage Systems tracking 500+ containers/month and cutting manual documentation time by 65%. JWT auth, permission-based accounts, automated client emails, and industry-specific invoice generation. Hosted live on AWS EC2 & S3 for day-to-day corporate use.',
    link: 'https://github.com/harrylynchh/airtight-container',
  },
  {
    num: '03',
    name: 'Naïve Bayesian Radar Classifier',
    tech: ['Python', 'NumPy', 'Pandas', 'scikit-learn'],
    description:
      'Multivariate Naïve Bayes classifier distinguishing bird vs. aircraft radar traces from velocity-time data. Temporal and statistical feature engineering — 96% accuracy and 0.93 F1 on 10k unseen samples.',
    link: 'https://github.com/harrylynchh/naive-bayes',
  },
  {
    num: '04',
    name: 'Universal Machine Emulator',
    tech: ['C'],
    description:
      'Complete emulator for the 14-instruction Universal Machine architecture: loader, segmented memory manager, and register-based ALU. Profiled at ~9 billion instructions/second on a 64-bit host via pointer arithmetic.',
    link: 'https://github.com/harrylynchh/c-cppProjectDetails',
  },
];

function TechTag({ name }) {
  const { theme } = useTheme();
  const icon = (theme === 'dark' && techIconsDark[name]) ? techIconsDark[name] : techIcons[name];
  return (
    <span className={`tag ${styles.tag}`}>
      {icon && <img src={icon} alt={name} className={styles.tagIcon} />}
      {name}
    </span>
  );
}

function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <span className={styles.num}>{project.num}</span>
      <h2 className={styles.name}>{project.name}</h2>
      {project.award && (
        <span className={styles.award}>
          <span className={styles.trophy}>🏆</span>
          {project.award}
        </span>
      )}
      <div className={styles.tags}>
        {project.tech.map((t) => (
          <TechTag key={t} name={t} />
        ))}
      </div>
      <p className={styles.description}>{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className={styles.link}
      >
        View on GitHub →
      </a>
    </div>
  );
}

function Projects() {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal();
  return (
    <section id="projects" className={styles.container}>
      <div ref={headerRef} className="reveal">
        <p className="sectionLabel">What I&apos;ve Built</p>
        <h1 className="sectionTitle">Projects</h1>
      </div>
      <div ref={gridRef} className={`reveal ${styles.grid}`}>
        {projects.map((project) => (
          <ProjectCard key={project.num} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
