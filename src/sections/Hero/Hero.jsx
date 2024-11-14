import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Design uten navn.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import emailLight from '../../assets/email-light.png';
import emailDark from '../../assets/email-dark.png';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/harry_lynch_resume.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const emailIcon = theme === 'light' ? emailLight : emailDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Harry
          <br />
          Lynch
        </h1>
        <h2>Full Stack Developer</h2>
        <span>
          <a href="https://github.com/harrylynchh" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="mailto:hlynch02@tufts.edu" target="_blank">
            <img src={emailIcon} alt="Email icon" />
          </a>
          <a href="https://www.linkedin.com/in/harry-lynch-5350992a8/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          Sophomore Computer Science Student at Tufts University passionate about software development.
          <br /><br />
          Please reach out through the above resources if you'd like to connect!
        </p>
        <a href={CV} download>
          <button className="hover">Résumé</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
