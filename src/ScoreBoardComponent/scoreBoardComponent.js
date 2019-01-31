import React,{ Component } from 'react';
import './../Sass/gamePageComponent.scss';

import { connect } from 'react-redux';

import { toggleScoreBoardHandlerActionDispacther } from './../StateFunctions/actionDispatcherFunctions'

class ScoreBoardComponent extends Component {

    

    render(){
        
        const { player1Name, player2Name, player1Score, player2Score, totalGames, 
                numOfMatchesDrawn, numOfMatchesPlayer1Won, collapseScoreBoardFlag, toggleScoreBoardHandler } = this.props;

        return (
            <React.Fragment>
                <div onClick = { toggleScoreBoardHandler} className="score-card-header">
                    Score Board
                </div>
                <div style = {{height: collapseScoreBoardFlag ? '0' : 'auto', overflow:'hidden', transition:' height 0.3s'}} id="score-content-container">
                    <div className="score-card">
                        <div className="score-card-player-name-header">{ player1Name } : <span className="score-card-player-score">{ player1Score }</span></div>

                        <div className="score-card-player-name-header">{ player2Name } : <span className="score-card-player-score">{ player2Score }</span></div>
                        
                    </div>
                    <hr/>

                    <div className="match-stats-card">
                        <div className="match-stats-header">Total Games : <span className="match-stats-content">{ totalGames }</span></div>
                        <div className="match-stats-header">Player 1 Won : <span className="match-stats-content">{ numOfMatchesPlayer1Won }</span></div>
                        <div className="match-stats-header">Player 2 Won : <span className="match-stats-content">{ totalGames - numOfMatchesDrawn - numOfMatchesPlayer1Won }</span></div>
                        <div className="match-stats-header">Matches Drawn : <span className="match-stats-content">{ numOfMatchesDrawn }</span></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = store => {
    return {
        player1Name : store.appStateReducer.player1Name,
        player2Name : store.appStateReducer.player2Name,
        player1Score : store.appStateReducer.player1Score,
        player2Score : store.appStateReducer.player2Score,
        totalGames : store.gameStateReducer.totalGames,
        numOfMatchesDrawn : store.gameStateReducer.numOfMatchesDrawn,
        numOfMatchesPlayer1Won : store.gameStateReducer.numOfMatchesPlayer1Won,
        collapseScoreBoardFlag : store.appStateReducer.collapseScoreBoardFlag,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleScoreBoardHandler : () => dispatch(toggleScoreBoardHandlerActionDispacther())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreBoardComponent);