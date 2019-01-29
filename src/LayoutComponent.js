import React, { Component } from 'react';
import { connect } from 'react-redux';

import App from './App';

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
                <React.Component>
                    { this.getLayoutPage() }
                </React.Component>
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