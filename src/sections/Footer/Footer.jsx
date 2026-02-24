import styles from './FooterStyles.module.css';
import { useTheme } from '../../common/ThemeContext';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import emailLight from '../../assets/email-light.png';
import emailDark from '../../assets/email-dark.png';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';

function Footer() {
  const { theme } = useTheme();
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const emailIcon = theme === 'light' ? emailLight : emailDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.label}>Get In Touch</p>
        <div className={styles.links}>
          <a href="mailto:hlynch02@tufts.edu" className={styles.emailLink}>
            hlynch02@tufts.edu
          </a>
          <div className={styles.icons}>
            <a href="https://github.com/harrylynchh" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/harry-lynch" target="_blank" rel="noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="mailto:hlynch02@tufts.edu">
              <img src={emailIcon} alt="Email" />
            </a>
          </div>
        </div>
        <p className={styles.copy}>Built by Harry Lynch &middot; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
