import React from 'react'
import { Eye } from 'react-feather'

function LogoDesignProjects({name, type, icons}) {
    return (
        <div>
            <div className="project-cards">
                <div className="card">
                    <div className="display">
                        <div className="p-name">
                            <div>
                                <h1>{ name }</h1>
                                <small>{ type }</small>
                            </div>
                            <div>
                                <a href="#" target="blank" className="project-link">
                                    <Eye color="#17252A" size={24} className="eye"/>
                                </a>
                            </div>
                        </div>
                        <div className="icons">
                            <p className="icon-text">{ icons }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogoDesignProjects
