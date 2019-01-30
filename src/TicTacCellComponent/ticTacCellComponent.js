import React, { Component } from 'react';
import { getCellOnStatus } from './../StateFunctions/helperFunctions';

import './../Sass/gamePageComponent.scss';
import { ticTacCellClickedActionDispatcher } from './../StateFunctions/actionDispatcherFunctions';

import { connect } from 'react-redux';

class TicTacCellComponent extends Component {
    

    render(){
        const { id, status, ticTacCellClickedHandler, currentPlayerId } = this.props;

        return(
            <div className="tictac-cell" onClick = { () => { ticTacCellClickedHandler(id, currentPlayerId) } }>
                { getCellOnStatus(status) }
            </div>
        )
    }
    
}

const mapStateToProps = store => {
    return {
        currentPlayerId : store.gameStateReducer.currentPlayerId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        ticTacCellClickedHandler : (cellId, currentPlayerId) => dispatch(ticTacCellClickedActionDispatcher(cellId, currentPlayerId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicTacCellComponent);