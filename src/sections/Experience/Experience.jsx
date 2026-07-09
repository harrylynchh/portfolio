import styles from './ExperienceStyles.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import bloombergLogo from '../../assets/experience_logos/bloomberg.png';
import crumforsterLogo from '../../assets/experience_logos/crum_and_forster.png';
import launchLogo from '../../assets/experience_logos/launch.png';

function renderBullet(text) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i} className={styles.accent}>{part}</strong> : part
  );
}

const jobs = [
  {
    company: 'Bloomberg LP',
    logo: bloombergLogo,
    role: 'Software Engineer Intern – Buy-Side Compliance',
    location: 'New York, NY',
    date: 'June 2026 – Aug 2026',
    current: true,
    bullets: [
      'Owning the end-to-end rewrite of the **C++23** backend serving **VMGR**, Bloomberg\'s buy-side compliance-violation monitoring terminal function used by traders and auditors at some of the largest asset managers, hedge funds, and pension funds.',
      'Moving all filtering, sorting, and pagination of **1M+ row** violation datasets server-side with **infinite scroll**, streaming real-time violation rows off a message queue to the display, and eliminating multi-minute load times.',
    ],
  },
  {
    company: 'Crum & Forster',
    logo: crumforsterLogo,
    role: 'Software Engineer / Data Science Intern',
    location: 'Morristown, NJ',
    date: 'May 2025 – Nov 2025',
    bullets: [
      'Cut state filing prep from a **1+ hour** manual process to **under 10 minutes** by building a Python tool that runs SQL queries in parallel, computes the actuarial figures, and auto-formats a submission-ready exhibit.',
      'Surfaced the strongest predictors of **claim frequency and severity** by building a Python (**pandas**, **Seaborn**) framework for univariate and bivariate analysis of **500K+ claim records**, informing variable selection for a downstream pricing model.',
      'Built a monthly Python **ETL pipeline** that loads **50K+ rows** of premium and claim data into a structured **SQL Server** schema, deduplicating records, validating data quality, and normalizing column names with regex.',
    ],
  },
  {
    company: 'Launch (Startup)',
    logo: launchLogo,
    role: 'Full Stack Software Engineer Intern',
    location: 'Medford, MA',
    date: 'Jan 2025 – May 2025',
    bullets: [
      'Led a team of 5 interns on backend orchestration, independently designing a normalized **PostgreSQL** and **MongoDB** schema to model company, product, and user data across the full application.',
      'Built a **RAG pipeline** using **Ollama** and scraped social media data to power a custom AI agent that auto-generates company websites from existing online profiles.',
      'Developed a drag-and-drop **React** interface for end-users to customize AI-generated websites, rearranging and editing components in real time.',
    ],
  },
];

function TimelineEntry({ job, index }) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${styles.entry}`}
      style={{ '--delay': `${index * 120}ms` }}
    >
      <div className={styles.dotCol}>
        <div className={styles.dot} />
        <div className={styles.line} />
      </div>
      <div className={styles.content}>
        <div className={styles.topRow}>
          <div className={styles.companyGroup}>
            <img src={job.logo} alt={`${job.company} logo`} className={styles.logo} />
            <h2 className={styles.company}>{job.company}</h2>
            {job.current && <span className={styles.incomingBadge}>Current</span>}
          </div>
          <span className={styles.date}>{job.date}</span>
        </div>
        <div className={styles.subRow}>
          <span className={styles.role}>{job.role}</span>
          <span className={styles.location}>{job.location}</span>
        </div>
        {job.bullets.length > 0 && (
          <ul className={styles.bullets}>
            {job.bullets.map((b, i) => (
              <li key={i}>{renderBullet(b)}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function Experience() {
  const headerRef = useScrollReveal();
  return (
    <section id="experience" className={styles.container}>
      <div ref={headerRef} className="reveal">
        <p className="sectionLabel">Where I&apos;ve Worked</p>
        <h1 className="sectionTitle">Experience</h1>
      </div>
      <div className={styles.timeline}>
        {jobs.map((job, i) => (
          <TimelineEntry key={job.company} job={job} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
