import styles from "./ProjectsStyles.module.css";
import portfolio from "../../assets/portfolio.png";
import airtight from "../../assets/airtight.png";
import cpp from "../../assets/cppIcon.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
	return (
		<section id="projects" className={styles.container}>
			<h1 className="sectionTitle">Projects</h1>
			<div className={styles.projectsContainer}>
				<ProjectCard
					src={portfolio}
					link="https://github.com/harrylynchh/portfolio"
					h3="My Portfolio Site"
					p="This Portfolio Site with React, 3JS, and Node"
				/>

				<ProjectCard
					src={airtight}
					link="https://github.com/harrylynchh/airtight-container"
					h3="Container Inventory"
					p="Web-Based Container Software with PERN Stack"
					gold={true}
				/>

				<ProjectCard
					src={cpp}
					link="https://github.com/harrylynchh/c-cppProjectDetails"
					h3="C/C++ Projects"
					p="Projects in Data Structures & Algorithms."
				/>
			</div>
		</section>
	);
}

export default Projects;
