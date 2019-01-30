import React, { Component } from 'react';
import { connect } from 'react-redux';

import { currentPageChangedActionDispatcher } from './../StateFunctions/actionDispatcherFunctions';
import './../Sass/personaldetailsComponent.scss';

class PersonalDetaisComponent extends Component{

    constructor(props){
        super(props);

        this.handleStartButtonClick = this.handleStartButtonClick.bind(this);
    }

    handleStartButtonClick(){  
        this.props.currentPageChangedActionDispatcher(this.props.currentPageNum);
    }

    render(){
        
        return(
            <div className="personaldetails-container">
                <div className="personaldetails-container-form-container">
                    
                    <label htmlFor="firstPlayer">First Player Name : </label>
                    <input type="text" id="firstPlayer" /> <br/>
                    
                    <label htmlFor="secondPlayer">Second Player Name : </label>
                    <input type="text" id = "secondPlayer"/>
                    
                    <button onClick = { this.handleStartButtonClick } className="btn btn-center">
                        Start The Game
                    </button>
                </div>

            </div>
            
        )
    }
}

const mapStateToProps = store => {
    return {
        currentPageNum : store.appStateReducer.currentPageNumber,
    }
}

const mapDispatcherToProps = dispatch => {
    
    return {
      currentPageChangedActionDispatcher : currentPageNum => dispatch(currentPageChangedActionDispatcher(currentPageNum)) ,
    }
}

export default connect(mapStateToProps, mapDispatcherToProps)(PersonalDetaisComponent);