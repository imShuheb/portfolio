import Link from 'next/link'
import React, { useState } from 'react'
import { CiFolderOn } from "react-icons/ci";
import { BiLinkExternal } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { projectData, Project } from './data/projects'


function SectionBuilt() {
    const [visibleProjects, setVisibleProjects] = useState<number>(4);

    const handleShowMore = () => {
        setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 4);
    };


    return (
        <section className='section-projects' id='projects'>
            <div className="numbered-heading d-flex align-items-center fade-in">
                <h2>Some Things I&apos;ve Built</h2>
            </div>

            <ul className="projects-grid fade-in">
                {projectData.slice(0, visibleProjects).map((project: Project, index: number) => (
                    <li key={index} className='project-outer '>
                        <div className="project-inner">
                            <header className='w-100'>
                                <div className="project-top">
                                    <div className="folder"><CiFolderOn size={50} /></div>
                                    <div className="project-link">
                                        {project.githubLink &&
                                            <Link href={project.githubLink} target='_blank' rel="noopener noreferrer">
                                                <FiGithub size={20} />
                                            </Link>
                                        }
                                        <Link href={project.externalLink} target='_blank' rel="noopener noreferrer">
                                            <BiLinkExternal size={20} />
                                        </Link>
                                    </div>
                                </div>
                                <h3 className="project-title fw-bold">
                                    <Link target='_blank' href={project.externalLink} rel="noopener noreferrer">
                                        {project.title}
                                    </Link>
                                </h3>
                                <div className="project-description">
                                    <p>{project.description}</p>
                                </div>
                            </header>
                            <footer>
                                <ul className="project-footer-list">
                                    {project.technologies.map((tech, techIndex) => (
                                        <li key={techIndex}>{tech}</li>
                                    ))}
                                </ul>
                            </footer>
                        </div>
                    </li>
                ))}
            </ul>

            {visibleProjects < projectData.length && (
                <div className="d-flex justify-content-center scale-trans mt-5">
                    <button className="button px-4 py-3" onClick={handleShowMore}>
                        Show More
                    </button>
                </div>
            )}
        </section>
    )
}

export default SectionBuilt
