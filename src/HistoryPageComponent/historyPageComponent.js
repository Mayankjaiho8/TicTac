import React, { Component } from 'react';

import { connect } from 'react-redux';

import { toggleHistoryPageHandlerActionCreator } from './../StateFunctions/actionDispatcherFunctions';
import { getPlayerNameFromId } from './../StateFunctions/helperFunctions'

class HistoryPageComponent extends Component {
    render(){
        const { collapsedHistoryPageFlag, toggleHistoryPageHandler, gameHistory, player1Name, player2Name } = this.props;

        const historyPageContentStyleObj = {
                                                width : collapsedHistoryPageFlag ? '0' : '75%',
                                                overflow: collapsedHistoryPageFlag ? 'hidden' : 'auto',

                                            }
        const toggleHisotoryPageButtonStyleObj = {
                                                    left:collapsedHistoryPageFlag ? '0' : '75%',
                                                }
        return(
            <React.Fragment>
                <div style = { toggleHisotoryPageButtonStyleObj }onClick = { toggleHistoryPageHandler } id="toggle-history-page-btn">
                    <div className={ collapsedHistoryPageFlag === true ? "open-sign" : "closed-sign"}></div>
                </div>

                <div style = { historyPageContentStyleObj } className="history-page-container">
                    <div className="history-page-content">

                        <div className="row">
                            <div className="history-content-sno-col">
                                <strong>S. No.</strong>
                            </div>

                            <div className="history-content-result-col">
                                <strong>Result</strong>
                            </div>

                            <div className="history-content-winner-col">
                                <strong>Winner</strong>
                            </div>
                        </div>
                        
                        { gameHistory.map((gameHistoryObj, idx) => (
                            <div className="row">
                                <div className="history-content-sno-col">
                                    <strong>{ idx + 1} </strong>
                                </div>

                                <div className="history-content-result-col">
                                    <strong>{ gameHistoryObj.isGameDrawn ? 'Game Drawn' : 'Resulted'}</strong>
                                </div>

                                <div className="history-content-winner-col">
                                    <strong>{ gameHistoryObj.isGameDrawn ? 'NA' : getPlayerNameFromId(gameHistoryObj.winnerId, [player1Name, player2Name]) }</strong>
                                </div>
                            </div>
                        )) }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = store => {
    return {
        collapsedHistoryPageFlag : store.appStateReducer.collapsedHistoryPageFlag,
        gameHistory : store.gameStateReducer.gameHistory,
        player1Name : store.appStateReducer.player1Name,
        player2Name : store.appStateReducer.player2Name,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleHistoryPageHandler : () => dispatch(toggleHistoryPageHandlerActionCreator()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HistoryPageComponent)