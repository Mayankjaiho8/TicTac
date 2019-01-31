import React, { Component } from 'react';
import { connect } from 'react-redux';

import { currentPageChangedActionDispatcher, updatePlayer1NameActionDispatcher, updatePlayer2NameActionDispatcher } from './../StateFunctions/actionDispatcherFunctions';
import './../Sass/personaldetailsComponent.scss';

class PersonalDetaisComponent extends Component{

    constructor(props){
        super(props);

        this.handleStartButtonClick = this.handleStartButtonClick.bind(this);
    }

    handleStartButtonClick(){  
        this.props.currentPageChanged(this.props.currentPageNum);
    }

    render(){
        
        const  { player1Name, player2Name, updatePlayer1Name, updatePlayer2Name } = this.props;

        return(
            <div className="personaldetails-container">
                <div className="personaldetails-container-form-container">
                    
                    <label htmlFor="firstPlayer">First Player Name : </label>
                    <input type="text" id="firstPlayer" value={ player1Name } onChange = { (e) => { updatePlayer1Name(e.target.value) } }/> <br/>
                    
                    <label htmlFor="secondPlayer">Second Player Name : </label>
                    <input type="text" id = "secondPlayer" value={ player2Name } onChange = { (e) => { updatePlayer2Name(e.target.value) } }/>
                    
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
        player1Name : store.appStateReducer.player1Name,
        player2Name : store.appStateReducer.player2Name,
    }
}

const mapDispatcherToProps = dispatch => {
    
    return {
      currentPageChanged : currentPageNum => dispatch(currentPageChangedActionDispatcher(currentPageNum)),
      updatePlayer1Name : (player1Name) => dispatch(updatePlayer1NameActionDispatcher(player1Name)),
      updatePlayer2Name : (player2Name) => dispatch(updatePlayer2NameActionDispatcher(player2Name)),
    }
}

export default connect(mapStateToProps, mapDispatcherToProps)(PersonalDetaisComponent);