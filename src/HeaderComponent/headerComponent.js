import React from 'react'

import './../Sass/headerComponent.scss';

import { connect } from 'react-redux';
import { newGameBtnClickedActionDispatcher } from './../StateFunctions/actionDispatcherFunctions';

const HeaderComponent = props => {
    const { newGameBtnClickedHandler } = props;
    return (
        <header>
            <div onClick = { newGameBtnClickedHandler} ><button className="logo">Tic Tac</button></div>
            <div className="header-tabs">
                <a href="">Sign Up </a>
                <a href="">Log In </a>
            </div>
        </header>
    )
}

const mapStateToProps = store => {
    return{

    }
}

const mapDispatchToProps = dispatch => {
    return {
        newGameBtnClickedHandler : () => dispatch(newGameBtnClickedActionDispatcher()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);