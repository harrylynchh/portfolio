import style from './SkillsStyles.module.css';
import { useTheme } from '../../common/ThemeContext';
import BallCanvas from "./BallCanvas.jsx";
import { technologies } from './enum';
function SkillsBalls() {
  const { theme } = useTheme();
  return (
    <section id="skills" className={style.container}>
      <h1 className="sectionTitle">Skills</h1> 
      <div className={style.ballContainer}>
        {technologies.map((technology) => { return (
          <div className={style.skillWrapper} key={technology.name}>
            <div className={style.text}>
              <p>{technology.name}</p>
            </div>
            <div className={style.ball} key={technology.name}>
                <BallCanvas icon={technology.icon} ballColor={technology.color}/>
            </div>
          </div>
        )})}
      </div>
    </section>
  );
}

export default SkillsBalls;