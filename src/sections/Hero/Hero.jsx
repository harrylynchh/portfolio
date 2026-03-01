import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/Design uten navn.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import emailLight from "../../assets/email-light.png";
import emailDark from "../../assets/email-dark.png";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/harry_lynch_resume.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
	const { theme, toggleTheme } = useTheme();

	const themeIcon = theme === "light" ? sun : moon;
	const emailIcon = theme === "light" ? emailLight : emailDark;
	const githubIcon = theme === "light" ? githubLight : githubDark;
	const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

	const navigateDown = () => {
		const el = document.getElementById("experience");
		if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
	};

	return (
		<section className={styles.heroWrapper}>
			<section id="hero" className={styles.hero}>

				{/* ── Left column ── */}
				<div className={styles.left}>
					<span className={styles.eyebrow}>Portfolio</span>

					<div className={styles.nameWrap}>
						<span className={styles.nameFirst}>Harry</span>
						<span className={styles.nameLast}>Lynch</span>
					</div>

					<div className={styles.rule} aria-hidden="true" />

					<div className={styles.titleLine}>
						Full Stack Developer
						<span className={styles.cursor} aria-hidden="true" />
					</div>

					<p className={styles.bio}>
						<strong>I'm a Junior CS student at Tufts University</strong> and incoming
						SWE intern at Bloomberg with interests in finance and mathematics.
					</p>

					<div className={styles.actions}>
						<a href={CV} target="_blank" className={styles.btnResume}>
							Résumé <span aria-hidden="true">↗</span>
						</a>
						<div className={styles.socials}>
							<a
								className={styles.socialLink}
								href="https://github.com/harrylynchh"
								target="_blank"
								aria-label="GitHub"
							>
								<img src={githubIcon} alt="" />
							</a>
							<a
								className={styles.socialLink}
								href="mailto:hlynch02@tufts.edu"
								aria-label="Email"
							>
								<img src={emailIcon} alt="" />
							</a>
							<a
								className={styles.socialLink}
								href="https://www.linkedin.com/in/harry-lynch"
								target="_blank"
								aria-label="LinkedIn"
							>
								<img src={linkedinIcon} alt="" />
							</a>
						</div>
					</div>
				</div>

				{/* ── Vertical divider ── */}
				<div className={styles.colDivider} aria-hidden="true" />

				{/* ── Right column ── */}
				<div className={styles.right}>
					<div className={styles.avatarWrap}>
						{/* Profile photo */}
						<div className={styles.photoRing}>
							<img
								src={heroImg}
								className={styles.photo}
								alt="Profile picture of Harry Lynch"
							/>
						</div>

						{/* Theme toggle */}
						<button
							className={styles.themeBtn}
							onClick={toggleTheme}
							aria-label="Toggle color mode"
						>
							<img src={themeIcon} alt="" />
						</button>
					</div>
				</div>

				</section>

			{/* ── Scroll indicator ── */}
			<button
				className={styles.scrollHint}
				onClick={navigateDown}
				aria-label="Scroll down"
			>
				<div className={styles.scrollBar} aria-hidden="true" />
				<span>Scroll</span>
			</button>
		</section>
	);
}

export default Hero;
