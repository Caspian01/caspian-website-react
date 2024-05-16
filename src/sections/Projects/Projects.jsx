import React from 'react'
import styles from './ProjectsStyles.module.css'
import project1 from '../../assets/popcornpal.jpg'
import project2 from '../../assets/algorithm_visualizer.jpg'
import project3 from '../../assets/small_market.jpg'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={project1} link="https://github.com/Caspian01/popcorn-pal-app" h3="Popcorn Pal" p="Movie Search App"/>
            <ProjectCard src={project2} link="https://github.com/Caspian01/algorithm-visualizer" h3="Pygame AlgoVisual" p="Sorting Algorithm Visualizer"/>
            <ProjectCard src={project3} link="https://github.com/Caspian01/small-market-inventory-management" h3="Market Operations DB" p="Interface for inventory tracking"/>
        </div>
    </section>
  )
}

export default Projects;