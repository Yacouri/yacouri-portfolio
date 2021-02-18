import React from 'react';
import './Css/about.css'
import * as Icon from 'react-feather';

const About = () => {
    return (
        <div>
            <div className="about-wrapper">
                <h2 className="about-title">About.</h2>
                <hr className="udl"/>
                <p className="caption">
                    Hey 👋<br />
                    My name is Zouhir Yacouri, i'm 21 years old.<br />
                    I'm a full stack web developer & Ui/Ux Designer.<br />
                    I help small businesses to bring their ideas to real life.
                </p>
                <div className="buttons">
                    <a className="download-cv">
                        <span>Download my CV</span>
                        <Icon.Download className="download-icon"/>
                    </a>
                    <br />
                    <a className="goto-project">
                        <span>Go to projects</span>
                        <Icon.Briefcase className="briefcase-icon"/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;
