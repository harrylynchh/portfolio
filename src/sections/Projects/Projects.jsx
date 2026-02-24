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
      'VSCode extension that logs student coding activity. Professors view per-function time and thrash metrics, replay full edit histories, and query an LLM for qualitative insights — all from a web dashboard. Diff-based storage keeps history reconstruction efficient.',
    link: 'https://github.com/Seth-Lupo/jumbohack2026',
  },
  {
    num: '02',
    name: 'Container Inventory Software',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'AWS'],
    description:
      'Multi-tenant platform tracking 500+ containers/month, cutting manual documentation time by 65%. JWT auth, permission-based accounts, automated client emails, and industry-specific tooling. Hosted live on AWS EC2 & S3.',
    link: 'https://github.com/harrylynchh/airtight-container',
  },
  {
    num: '03',
    name: 'Naïve Bayesian Radar Classifier',
    tech: ['Python', 'NumPy', 'Pandas'],
    description:
      'Multivariate Naïve Bayes model classifying radar traces as bird or aircraft from velocity-time data. Temporal and statistical feature engineering — 96% accuracy and 0.93 F1 on 10,000 unseen points.',
    link: 'https://github.com/harrylynchh',
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

function ProjectCard({ project, index }) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${styles.card}`}
      style={{ '--delay': `${index * 120}ms` }}
    >
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
  return (
    <section id="projects" className={styles.container}>
      <div ref={headerRef} className="reveal">
        <p className="sectionLabel">What I&apos;ve Built</p>
        <h1 className="sectionTitle">Projects</h1>
      </div>
      <div className={styles.grid}>
        {projects.map((project, i) => (
          <ProjectCard key={project.num} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
