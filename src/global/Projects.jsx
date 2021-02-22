import React from 'react'
import WebProject from '../components/Projects/WebProject'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBootstrap, faCss3, faGithub, faHtml5, faReact, faSoundcloud, faVuejs } from '@fortawesome/free-brands-svg-icons'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import LogoDesignProjects from '../components/Projects/LogoDesignProjects'
import './Css/projects.css'


const Projects = () => {
    const html_ = <FontAwesomeIcon icon={faHtml5} size="2x" color="#FDDC7D" className="tech-icons"/>
    const css = <FontAwesomeIcon icon={faCss3} size="2x" color="#FDDC7D" className="tech-icons"/>
    const bootstrap = <FontAwesomeIcon icon={faBootstrap} size="2x" color="#FDDC7D" className="tech-icons"/>
    const github = <FontAwesomeIcon icon={faGithub} size="2x" color="#FDDC7D" className="tech-icons"/>
    const reactjs = <FontAwesomeIcon icon={faReact} size="2x" color="#FDDC7D" className="tech-icons"/>
    const vuejs = <FontAwesomeIcon icon={faVuejs} size="2x" color="#FDDC7D" className="tech-icons"/>
    const soundcloud = <FontAwesomeIcon icon={faSoundcloud} size="2x" color="#FDDC7D" className="tech-icons"/>
    const qmark = <FontAwesomeIcon icon={faQuestion} size="2x" color="#FDDC7D" className="tech-icons"/>
    return (
        <div id="projects">
            <h2 className="projects-title">Projects.</h2>
            <hr className="udl"/>
            <div className="projects-wrapper">
                <h4 className="p-title mtb-p">Web projects 🌐</h4>
                <div className="web-projects">
                    <div>
                        <WebProject 
                            name="Yacouri"
                            type="web portfolio"
                            url="https://Yacouri.netlify.app"
                            icons={[html_, css, reactjs, github]}
                            display={'none'}
                        />
                    </div>
                    <div>
                        <WebProject 
                            name="Dofamilier"
                            type="web application"
                            url="https://dofamilier.netlify.app"
                            icons={[html_, css, vuejs, bootstrap, github]}
                            display={'none'}
                        />
                    </div>
                    <div>
                        <WebProject 
                            name="Random songs"
                            type="web application"
                            url="https://randomsongs.netlify.app"
                            icons={[html_, css, reactjs, bootstrap, github, soundcloud]}
                            display={'none'}
                        />
                    </div>
                    <div>
                        <WebProject 
                            name="ETC."
                            type="web application"
                            url="Not hosted yet"
                            icons={qmark}
                            display={'block'}
                        />
                    </div>
                    <div>
                        <WebProject 
                            name="Maaqal"
                            type="web application"
                            url="Not hosted yet"
                            icons={qmark}
                            display={'block'}
                        />
                    </div>
                </div>
                
                <h4 className="p-title mtb-p">Logo Design projects 🖌️</h4>
                <div className="logo-design-projects">
                    <div>
                        <LogoDesignProjects 
                            name="Yacouri logo"
                            type="logo design"
                            icons={"Ai"}
                        />
                    </div>
                    <div>
                        <LogoDesignProjects 
                            name="Kuza sushi"
                            type="logo design"
                            icons={"Ai"}
                        />
                    </div>
                </div>
            
                <h4 className="p-title mtb-p">Web & mobile applications design projects 🎨</h4>
                <div className="web-mobile-projects">
                    <div>
                        <LogoDesignProjects 
                            name="Yacouri logo"
                            type="logo design"
                            icons={"Ai"}
                        />
                    </div>
                    <div>
                        <LogoDesignProjects 
                            name="Kuza sushi"
                            type="logo design"
                            icons={"Ai"}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects
