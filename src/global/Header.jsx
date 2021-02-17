import React from 'react';
import './Css/header.css'
import HeaderIllustration from '../components/Header/header-illustration.jsx';
import HeaderIntro from '../components/Header/header-intro';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="randomlines"></div>
            <div className="container header">
                <div className="header-intro">
                    <HeaderIntro />
                </div>
                <div className="header-illustration">
                    <HeaderIllustration />
                </div>
            </div>
        </div>
    );
}

export default Header;
