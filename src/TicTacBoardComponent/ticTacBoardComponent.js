import React, { Component } from 'react';
import { connect } from 'react-redux';

import './../Sass/gamePageComponent.scss';

import TicTacCellComponent from './../TicTacCellComponent/ticTacCellComponent';

class TicTacBoardComponent extends Component{

    constructor(props){
        super(props);

        this.getTictacBoardCellArray = this.getTictacBoardCellArray.bind(this);
    }

    getTictacBoardCellArray = () => {
        const { defaultCellIdArray, player1CellIdArr, player2CellIdArr} = this.props;
        const ticTacBoardArr = [];

        for(let i=1; i<10; i++){
            if(defaultCellIdArray.includes(i)){
                ticTacBoardArr.push(<TicTacCellComponent key={i} id = {i} status={'default'} />)
            }
            else if(player2CellIdArr.includes(i)){
                ticTacBoardArr.push(<TicTacCellComponent key={i} id = {i} status={'red'} />)
            }
            else if(player1CellIdArr.includes(i)){
                ticTacBoardArr.push(<TicTacCellComponent key={i} id = {i} status={'green'} />)
            }
        }

        return ticTacBoardArr;
    }

    render(){

        return (
            <div className="tictac-board-component">
                { this.getTictacBoardCellArray()}
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        defaultCellIdArray : store.gameStateReducer.defaultCellIdArray,
        player1CellIdArr : store.gameStateReducer.player1CellIdArr,
        player2CellIdArr : store.gameStateReducer.player2CellIdArr,
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicTacBoardComponent)