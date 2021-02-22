import React from 'react';
import * as Icon from 'react-feather';
import Cv from '../downloads/Zouhir Yacouri (cv).pdf';
import './Css/about.css'

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
                <a href={Cv} className="abb-one" download>
                    Download my CV
                    <Icon.Download className="download-icon"/>
                </a>
                <br />
                <a href="#projects" className="abb-two">
                    Go to projects
                    <Icon.Briefcase className="briefcase-icon"/>
                </a>
            </div>
        </div>
    );
}

export default About;
