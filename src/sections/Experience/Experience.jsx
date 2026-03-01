import styles from './ExperienceStyles.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import bloombergLogo from '../../assets/experience_logos/bloomberg.png';
import crumforsterLogo from '../../assets/experience_logos/crum_and_forster.png';
import launchLogo from '../../assets/experience_logos/launch.png';
import airtightLogo from '../../assets/experience_logos/airtight.png';

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
    role: 'Software Engineering Intern',
    location: 'New York, NY',
    date: 'Summer 2026',
    upcoming: true,
    bullets: [],
  },
  {
    company: 'Crum & Forster',
    logo: crumforsterLogo,
    role: 'Data Science / Software Engineering Intern',
    location: 'Morristown, NJ',
    date: 'May 2025 – Nov 2025',
    bullets: [
      'Independently delivered **15+ production projects** impacting **6 divisions**, consulting with non-technical stakeholders across Actuarial, Claims, Audit, Underwriting, Accounting, and Marketing.',
      'Built Python **ETL pipelines** to ingest, clean, and load **50k+ rows** of Excel data monthly into **SQL Server** via T-SQL stored procedures.',
      'Re-engineered a **statutory government filing model** from a 7-tab Excel workflow into a **6-parameter Python CLI** with parallelized SQL queries, producing a submission-ready workbook in **under 10 seconds** (from 1+ hours).',
      'Shipped features across a **C#/.NET, SQL Server, and Angular** stack — RESTful API endpoints, front-end UI, and database optimizations.',
    ],
  },
  {
    company: 'Launch (Startup)',
    logo: launchLogo,
    role: 'Full Stack Software Development Intern',
    location: 'Medford, MA',
    date: 'Jan 2025 – May 2025',
    bullets: [
      'Led a team of 5 interns on backend orchestration, independently designing a normalized **PostgreSQL** and **MongoDB** schema to model company, product, and user data across the full application.',
      'Built a **RAG pipeline** using **Ollama** and scraped social media data to power a custom AI agent that auto-generates company websites from existing online profiles.',
      'Developed a drag-and-drop **React** interface for end-users to customize AI-generated websites, rearranging and editing components in real time.',
    ],
  },
  {
    company: 'Airtight Storage Systems',
    logo: airtightLogo,
    role: 'Freelance Software Development',
    location: 'Manalapan, NJ',
    date: 'May 2024 – Oct 2024',
    bullets: [
      'Designed, developed, and maintained a **full-stack web app** for internal inventory and sale management, tracking **500+ containers/month** and cutting manual documentation time by **65%**.',
      'Implemented **JWT authentication**, permission-based accounts, automated client emails, and industry-specific invoice generation; hosted live on **AWS EC2 & S3** for day-to-day corporate use.',
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
            {job.upcoming && <span className={styles.incomingBadge}>Incoming</span>}
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
