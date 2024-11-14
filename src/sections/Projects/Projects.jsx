import styles from './ProjectsStyles.module.css';
import bostont from '../../assets/bostont.png';
import airtight from '../../assets/airtight.png';
import huffman from '../../assets/huffman.png';
import hipsster from '../../assets/hipsster.png';
import rpncalc from '../../assets/rpncalc.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={airtight}
          link="https://github.com/harrylynchh/airtight-container"
          h3="Container Inventory"
          p="Web-Based Container Software with PERN Stack"
        />
        <ProjectCard
          src={huffman}
          link="https://github.com/harrylynchh/Huffman-Encoder-Decoder"
          h3="Huffman Coder"
          p="Lossless Text Compression in C++"
        />
        <ProjectCard
          src={rpncalc}
          link="https://github.com/harrylynchh/RPNCalculator"
          h3="RPN Calculator"
          p="Turing Complete Reverse Polish Notation Calculator in C++"
          rpnCalc={true}
        />
        <ProjectCard
          src={bostont}
          link="https://github.com/harrylynchh/MetroSimulator"
          h3="Metro Simulator"
          p="Boston T Train Simulator in C++"
        />
      </div>
    </section>
  );
}

export default Projects;
