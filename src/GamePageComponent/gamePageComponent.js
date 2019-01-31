import React, { Component } from 'react';
import { connect } from 'react-redux';

import './../Sass/gamePageComponent.scss';

import TicTacBoardComponent from './../TicTacBoardComponent/ticTacBoardComponent';

import { newGameBtnClickedActionDispatcher, resetBtnClickedActionDispatcher } from './../StateFunctions/actionDispatcherFunctions';
import { getPlayerNameFromId } from './../StateFunctions/helperFunctions'

class GamePageComponent extends Component {

    render(){
        
        const { newGameBtnClickedHandler, resetBtnClickedHandler, player1Name, player2Name, isGameFinished, isGameDrawnFlag, winnerId, currentPlayerId } = this.props;
        
        const playerHeaderStyleObj = currentPlayerId == 1 ? {
            color: '#79ff4d'
        }: {
            color: '#ff704d'
        }

        return (

            <div className="game-page-container">
                <div className="score-board-container">
                    
                </div>

                <div className="game-board-container">
                    <div>

                        {!isGameFinished && (
                            <div className="player-header">
                                <h3 style = { playerHeaderStyleObj }>Current Player : { getPlayerNameFromId(currentPlayerId, [player1Name, player2Name]) }</h3>
                            </div>
                        )
                        }
                        { !isGameFinished && <TicTacBoardComponent /> }
                        
                        { isGameFinished && ( isGameDrawnFlag ? (
                                                                    <div className="draw-message-container">
                                                                        <h2>Game is Drawn :| </h2>
                                                                        <h4>Better Luck Next Time</h4>
                                                                        <p>Press Reset to continue to another game</p>
                                                                    </div>
                                                                ) 
                                                            : (
                                                                <div className="congrats-message-container">
                                                                        <h2> Congratulations { getPlayerNameFromId(winnerId, [player1Name, player2Name]) } !! </h2>
                                                                        <h2>You Are the Winner :)</h2>
                                                                        <p>Press Reset to continue to another game</p>
                                                                </div>
                                                              )
                                            )
                        }

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
        isGameFinished : store.gameStateReducer.isGameFinished,
        winnerId : store.gameStateReducer.winnerId,
        currentPlayerId : store.gameStateReducer.currentPlayerId,
        player1Name : store.appStateReducer.player1Name,
        player2Name : store.appStateReducer.player2Name,
        isGameDrawnFlag : store.gameStateReducer.isGameDrawnFlag,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        newGameBtnClickedHandler : () => dispatch(newGameBtnClickedActionDispatcher()),
        resetBtnClickedHandler : () => dispatch(resetBtnClickedActionDispatcher()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePageComponent);