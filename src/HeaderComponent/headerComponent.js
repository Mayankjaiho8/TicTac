import React from 'react'

import './../Sass/headerComponent.scss';

const HeaderComponent = props => {
    return (
        <header>
            <div className="logo">Tic Tac</div>
            <div className="header-tabs">
                <a href="">Sign Up </a>
                <a href="">Log In </a>
            </div>
        </header>
    )
}

export default HeaderComponent;