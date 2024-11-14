import styles from './SkillsStyles.module.css';
import { useTheme } from '../../common/ThemeContext';
import {BallCanvas} from "./BallCanvas.jsx";
import { technologies } from './enum';
function SkillsBalls() {
  const { theme } = useTheme();
  
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div>
        {technologies.map((technology) => {(
            <div key={technology.name}>
                <BallCanvas icon={technology.icon} ballColor={technology.color}/>
                <p>ball</p>
            </div>
        )})}
      </div>
    </section>
  );
}

export default SkillsBalls;