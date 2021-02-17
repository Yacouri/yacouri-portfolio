import React from 'react';
import * as Icon from 'react-feather'

const HeaderIntro = () => {
    return (
        <div>
            <h1 className="hello-message">
                    Hello dear 👋<br />
                    I'm Zouhir Yacouri <br />
                    i build great experiences <br /> 
                    </h1>
                    <p className="s-title">
                        Full stack web developer <br />
                        Ui/Ui Designer
                    </p>
                    <button className="more-btn">Discover more...</button>
                    <div className="icons">
                        <a href="#" className="icon">
                            <Icon.Linkedin />
                        </a>
                        <a href="#" className="icon">
                            <Icon.Twitter />
                        </a>
                        <a href="#" className="icon">
                            <Icon.GitHub />
                        </a>
                    </div>
        </div>
    );
}

export default HeaderIntro;
