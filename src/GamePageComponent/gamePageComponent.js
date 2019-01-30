import React, { Component } from 'react';
import { connect } from 'react-redux';

import './../Sass/gamePageComponent.scss';

import TicTacBoardComponent from './../TicTacBoardComponent/ticTacBoardComponent';

import { newGameBtnClickedActionDispatcher, resetBtnClickedActionDispatcher } from './../StateFunctions/actionDispatcherFunctions';

class GamePageComponent extends Component {

    render(){
        
        const { newGameBtnClickedHandler, resetBtnClickedHandler } = this.props;

        return (

            <div className="game-page-container">
                <div className="score-board-container">
                    
                </div>

                <div className="game-board-container">
                    <div>
                        <TicTacBoardComponent />
                        <div className="game-board-btn-container">
                            <button onClick = { newGameBtnClickedHandler} className="btn">New Game</button>
                            <button onClick = { resetBtnClickedHandler } className="btn">Reset</button>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = store => {
    return{

    }
}

const mapDispatchToProps = dispatch => {
    return {
        newGameBtnClickedHandler : () => dispatch(newGameBtnClickedActionDispatcher()),
        resetBtnClickedHandler : () => dispatch(resetBtnClickedActionDispatcher()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePageComponent);