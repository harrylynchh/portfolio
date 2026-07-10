import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.message}>Say hello.</p>

        <a href="mailto:hlynch02@tufts.edu" className={styles.email}>
          hlynch02@tufts.edu
        </a>

        <div className={styles.links}>
          <a href="https://github.com/harrylynchh" target="_blank" rel="noreferrer">
            github.com/harrylynchh
          </a>
          <a href="https://www.linkedin.com/in/harry-lynch" target="_blank" rel="noreferrer">
            linkedin.com/in/harry-lynch
          </a>
        </div>

        <p className={styles.copy}>Built by Harry Lynch &middot; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
