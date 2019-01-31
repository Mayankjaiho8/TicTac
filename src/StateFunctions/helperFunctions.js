import React from 'react'

export const getCellOnStatus = status => {
    if(status === 'default'){
        return <div className="default"></div>
    }
    else if(status === 'red'){
        return <div className="red-cross"></div>
    }
    
    return <div className="green-dot"></div>
}

export const checkForWinner = (cellId, playerIdsArr) => {

    if(playerIdsArr.length < 3){
        return false;
    }

    const rowColObj = convertCellIdToRowCol(cellId);
    const rowNum = rowColObj.row;
    const colNum = rowColObj.col;

    if(checkForRow(playerIdsArr, rowNum) || checkForCol(playerIdsArr, colNum)){
        return true;
    }

    if((rowNum === colNum || rowNum + colNum === 2) && checkForDiagonal(playerIdsArr, rowNum, colNum)){
        console.log('rowNum, colNum', rowNum, colNum)
        return true;
    }

    return false;
}

export const getPlayerNameFromId = (playerId, playerNameArr) => {
    
    return playerNameArr[playerId-1];
}



/*
    Private Functions 
*/

const convertCellIdToRowCol = cellId => {

    return {
        row: Math.floor((cellId-1)/3),
        col: (cellId-1)%3,
    }
}

const checkForRow = (playerIdsArr, rowNum) => {

    for(let i = 0; i<3; i++){

        if(!playerIdsArr.includes((rowNum * 3 + i)+1))
            return false;
    }

    return true
}

const checkForCol = (playerIdsArr, colNum) => {

    for(let i = 0; i<3; i++){
        if(!playerIdsArr.includes((i * 3 + colNum)+1))
            return false;
    }

    return true;
}

const checkForDiagonal = (playerIdsArr, rowNum, colNum) => {
    
    let forwardDiagonalCheckRequired = false;
    let reverseDiagonalCheckRequired = false;

    if(rowNum + colNum === 2){
        forwardDiagonalCheckRequired = true;
    }

    if(rowNum === colNum){
        reverseDiagonalCheckRequired = true;
    }

    if(forwardDiagonalCheckRequired && checkForwardDiagonal(playerIdsArr)){
        return true;
    }

    if(reverseDiagonalCheckRequired && checkReverseDiagonal(playerIdsArr)){
        return true;
    }

    return false;  
}

const checkForwardDiagonal = (playerIdsArr) => {
    
    for(let i=0; i< 3; i++){
        if(!playerIdsArr.includes(getCellNumByRowCol(i, 2-i)))
            return false;
    }

    return true;
}

const checkReverseDiagonal = (playerIdsArr) => {

    for(let i=0; i< 3; i++){
        if(!playerIdsArr.includes(getCellNumByRowCol(i, i)))
            return false;
    }

    return true;
}

const getCellNumByRowCol = (rowNum, colNum) => {
    
    return (rowNum * 3 + colNum) + 1;
}

