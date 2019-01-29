import React, { Component } from 'react';
import { connect } from 'react-redux';

import App from './App';
import './Sass/main.scss';
import MiddlePageComponent from './MiddlePageComponent/middlePageComponent';
import HeaderComponent from './HeaderComponent/headerComponent';

class LayoutComponent extends Component{

    constructor(props){
        super(props);

        this.getLayoutPage = this.getLayoutPage.bind(this);
    }

    getLayoutPage(){
        const { currentPageNumber } = this.props;

        switch(currentPageNumber){
            case 1:
                return <App />
        }
    }

    render(){
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
        currentPageNumber : store.appStateReducer.pageNumber,
    }
}

const mapDispatcherToProps = dispatch => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatcherToProps)(LayoutComponent);