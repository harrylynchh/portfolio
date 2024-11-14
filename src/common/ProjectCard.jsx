import React from 'react';
import style from '../sections/Projects/ProjectsStyles.module.css';

function ProjectCard({ src, link, h3, p, rpnCalc }) {
  let txtStyle
  rpnCalc ? txtStyle = style.rpnCalc : txtStyle  = style.description 
  return (
    <a href={link} target="_blank">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <div className={style.textDiv}>
        <span className={style.textWrapper}><h3 className={style.projTxt}>{h3}</h3></span>
        <span className={style.textWrapper}><p className={txtStyle}>{p}</p></span>
      </div>
    </a>
  );
}

export default ProjectCard;
