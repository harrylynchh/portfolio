import styles from './ExperienceStyles.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import bloombergLogo from '../../assets/experience_logos/bloomberg.png';
import crumforsterLogo from '../../assets/experience_logos/crum_and_forster.png';
import launchLogo from '../../assets/experience_logos/launch.png';
import airtightLogo from '../../assets/experience_logos/airtight.png';

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
    date: 'May 2025 – Present',
    bullets: [
      'Built production ETL pipelines in Python ingesting 50k+ rows/month into SQL Server with T-SQL stored procedures.',
      'Re-engineered a government filing workflow from a 1+ hour manual process to a 6-parameter CLI script completing in under 10 seconds.',
      'Designed a RESTful API layer with C# / ASP.NET Core & Entity Framework to supplement internal dashboards.',
    ],
  },
  {
    company: 'Launch (Startup)',
    logo: launchLogo,
    role: 'Full Stack Software Development Intern',
    location: 'Medford, MA',
    date: 'Jan 2025 – May 2025',
    bullets: [
      'Designed and implemented a multi-database ERD for company and product data with Postgres and MongoDB.',
      'Developed and trained a custom AI agent to generate websites from scraped social media profiles.',
      'Built an interface for end-users to drag-and-drop and customize generated website components.',
    ],
  },
  {
    company: 'Airtight Storage Systems',
    logo: airtightLogo,
    role: 'Freelance Software Development',
    location: 'Manalapan, NJ',
    date: 'May 2024 – Oct 2024',
    bullets: [
      'Single-handedly designed, developed, and shipped a full-stack web app for inventory and sale management.',
      'Implemented industry-specific invoice generation, transport documents, and internal communication tools.',
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
              <li key={i}>{b}</li>
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
