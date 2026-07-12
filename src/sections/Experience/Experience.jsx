import styles from './ExperienceStyles.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

function renderBullet(text) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i} className={styles.accent}>{part}</strong> : part
  );
}

function renderCompany(name) {
  const match = name.match(/^(.*?)\s(\(.*\))$/);
  if (!match) return name;
  return (
    <>
      {match[1]} <span className={styles.startup}>{match[2]}</span>
    </>
  );
}

const jobs = [
  {
    company: 'Bloomberg LP',
    role: 'Software Engineer Intern – Buy-Side Compliance, Enterprise Products',
    location: 'New York, NY',
    date: 'June 2026 – Aug 2026',
    current: true,
    bullets: [
      'Owning the rewrite of the violation query/load path in the **C++23** backend of **VMGR**, Bloomberg\'s buy-side compliance-violation monitoring terminal function used by traders and auditors at major asset managers, hedge funds, and pension funds.',
      'Pushing filtering of **100K+ row** violation datasets server-side and merging real-time violation rows from a message queue into the display, eliminating minute-long load times from bulk client-side loads.',
      'Building a **multi-producer/multi-consumer queue** and **thread pool** that move database writes off the hot path.',
    ],
  },
  {
    company: 'Crum & Forster',
    role: 'Software Engineer / Data Science Intern',
    location: 'Morristown, NJ',
    date: 'May 2025 – Nov 2025',
    bullets: [
      'Cut state filing prep from a **1+ hour** manual process to **under 10 minutes** by building a Python tool that runs SQL queries in parallel, computes the actuarial figures, and auto-formats a regulator-ready exhibit.',
      'Surfaced the strongest predictors of **claim frequency and severity** by building a Python (**pandas**) framework for univariate and bivariate analysis of **500K+ claim records**, informing variable selection for a pricing model.',
      'Built a monthly Python **ETL pipeline** that loads **50K+ rows** of premium and claim data into a structured **SQL Server** schema, deduplicating records, validating data quality, and normalizing column names with regex.',
    ],
  },
  {
    company: 'Launch (Startup)',
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

function JobRow({ job, index }) {
  const ref = useScrollReveal();
  return (
    <article
      ref={ref}
      className={`reveal ${styles.job}`}
      style={{ '--delay': `${index * 80}ms` }}
    >
      <div className={styles.dateCol}>
        <span className={`${styles.date} nums`}>{job.date}</span>
        {job.current && <span className={styles.current}>Current</span>}
      </div>
      <div className={styles.body}>
        <div className={styles.top}>
          <h2 className={styles.company}>{renderCompany(job.company)}</h2>
        </div>
        <div className={styles.sub}>
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
    </article>
  );
}

function Experience() {
  const headerRef = useScrollReveal();
  return (
    <section id="experience" className={styles.container}>
      <div ref={headerRef} className="reveal sectionHead">
        <p className="sectionLabel">Where I&apos;ve Worked</p>
        <h1 className="sectionTitle">Experience</h1>
      </div>
      <div className={styles.jobList}>
        {jobs.map((job, i) => (
          <JobRow key={job.company} job={job} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
