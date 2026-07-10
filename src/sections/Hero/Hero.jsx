import { useState } from 'react';
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/profile.png';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
	const { theme, toggleTheme } = useTheme();
	const [flipping, setFlipping] = useState(false);
	const targetMode = theme === 'light' ? 'dark' : 'light';

	const handleToggle = () => {
		setFlipping(true);
		toggleTheme();
	};

	const navigateDown = () => {
		const el = document.getElementById('experience');
		if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	return (
		<section className={styles.heroWrapper}>
			<section id="hero" className={styles.hero}>
				<span className={styles.eyebrow}>Portfolio</span>

				<div className={styles.name}>
					<div className={styles.lineMask}>
						<span className={styles.lineInner}>Harry</span>
					</div>
					<div className={styles.lineMask}>
						<span className={styles.lineInner}>
							Lynch<span className={styles.stop}>.</span>
						</span>
					</div>
				</div>

				<div className={styles.bottom}>
					<div className={styles.bottomRight}>
						<img
							src={heroImg}
							className={styles.photo}
							alt="Profile picture of Harry Lynch"
						/>

						<div className={styles.meta}>
							<span>Full-stack engineer</span>
							<span>SWE Intern @ Bloomberg</span>
							<span>CS @ Tufts &apos;27</span>
						</div>

						<div className={styles.metaLinks}>
							<a
								href="https://github.com/harrylynchh"
								target="_blank"
								rel="noreferrer"
							>
								github
							</a>
							<a
								href="https://www.linkedin.com/in/harry-lynch"
								target="_blank"
								rel="noreferrer"
							>
								linkedin
							</a>
							<a href="mailto:hlynch02@tufts.edu">email</a>
							<button
								type="button"
								className={`${styles.themeToggle} ${flipping ? styles.flipping : ''}`}
								onClick={handleToggle}
								aria-label={`Switch to ${targetMode} mode`}
							>
								<span
									className={styles.swatch}
									aria-hidden="true"
									onAnimationEnd={() => setFlipping(false)}
								/>
								{targetMode}
							</button>
						</div>
					</div>
				</div>

				<div className={styles.heroHairline} aria-hidden="true" />
			</section>

			{/* ── Scroll indicator ── */}
			<button
				className={styles.scrollHint}
				onClick={navigateDown}
				aria-label="Scroll down"
			>
				<span aria-hidden="true">↓</span>
			</button>
		</section>
	);
}

export default Hero;
