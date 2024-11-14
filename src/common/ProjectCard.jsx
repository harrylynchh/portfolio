/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import style from '../sections/Projects/ProjectsStyles.module.css';
import { Tilt } from 'react-tilt'
function ProjectCard({ src, link, h3, p, rpnCalc }) {
  let txtStyle;
  rpnCalc ? txtStyle = style.rpnCalc : txtStyle  = style.description;
  const tiltOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            0.5,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }
  return (
    <Tilt options={tiltOptions}>
      <div>
        <a href={link} target="_blank">
          <img src={src} alt={`${h3} logo`} />
          <div className={style.textDiv}>
            <span className={style.textWrapper}><h3 className={style.projTxt}>{h3}</h3></span>
            <span className={style.textWrapper}><p className={txtStyle}>{p}</p></span>
          </div>
        </a>
      </div>
    </Tilt>
  );
}

export default ProjectCard;
