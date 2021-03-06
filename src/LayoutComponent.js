import React, { Component } from 'react';
import { connect } from 'react-redux';

import App from './App';
import './Sass/main.scss';

import MiddlePageComponent from './MiddlePageComponent/middlePageComponent';
import HeaderComponent from './HeaderComponent/headerComponent';
import PersonalDetaisComponent from './PersonalDetailsComponent/personalDetailsComponent';
import GamePageComponent from './GamePageComponent/gamePageComponent';

class LayoutComponent extends Component{

    constructor(props){
        super(props);

        this.getLayoutPage = this.getLayoutPage.bind(this);
    }

    getLayoutPage(){
        const { currentPageNumber } = this.props;

        switch(currentPageNumber){
            case 2:
                return <PersonalDetaisComponent />
            case 3:
                return <GamePageComponent />
            default : 
                return <App />
        }
    }

    render(){
        const { currentPageNumber } = this.props;
        
        return (
                <div className="layout-container">
                    <HeaderComponent />
                    <div className="middle-page-container">
                        <MiddlePageComponent>
                            { this.getLayoutPage() }
                        </MiddlePageComponent>
                    </div>
                </div>
            )
    }
}


const mapStateToProps = store => {
    return {
        currentPageNumber : store.appStateReducer.currentPageNumber,
    }
}

const mapDispatcherToProps = dispatch => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatcherToProps)(LayoutComponent);