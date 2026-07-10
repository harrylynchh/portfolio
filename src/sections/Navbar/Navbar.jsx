import { useEffect, useState } from 'react';
import styles from './NavbarStyles.module.css';
import CV from '../../assets/harry_lynch_resume.pdf';

const links = [
  { label: 'About', target: 'hero' },
  { label: 'Experience', target: 'experience' },
  { label: 'Projects', target: 'projects' },
  { label: 'Contact', target: 'footer' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <button className={styles.logo} onClick={() => scrollTo('hero')}>
          HL
        </button>
        <div className={styles.links}>
          {links.map(({ label, target }) => (
            <button key={target} onClick={() => scrollTo(target)}>
              {label}
            </button>
          ))}
          <a href={CV} target="_blank" rel="noreferrer" className={styles.resume}>
            Résumé <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
