import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import * as Icon from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function WebProject({name, type, url, icons, display}) {
    return (
        <div className="web-projects-wrapper">
            <div className="project-cards">
                <div className="card">
                    <div className="display" style={display === 'block'?{opacity:0.3}: {opacity:1}} className="op">
                        <div className="p-name">
                            <div>
                                <h1>{ name }</h1>
                                <small>{ type }</small>
                            </div>
                            <div>
                                <a href={url} target="blank" className="project-link">
                                    <FontAwesomeIcon icon={faArrowRight} color="#FDDC7D" className="arrow-right"/>
                                </a>
                            </div>
                        </div>
                        <small>{ url }</small>  
                        <div className="icons">
                            { icons }
                        </div>
                    </div>
                    <div style={{ display:display }} className="soon">
                        coming soon... 🔜
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebProject
