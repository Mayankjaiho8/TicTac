export const currentPageChangedActionDispatcher = currentPageNum => dispatcher => {
    
    dispatcher({type:'CURRENT_PAGE_NUMBER_CHANGED', payload: currentPageNum + 1})
}

export const ticTacCellClickedActionDispatcher = (id, currentPlayerId) => dispatcher => {
    
    dispatcher({type:'TIC_TAC_CELL_CLICKED', payload:[id, currentPlayerId]});
}

export const newGameBtnClickedActionDispatcher = () => dispatcher => {
    
    dispatcher({type:'NEW_GAME_BTN_CLICKED'});
}

export const resetBtnClickedActionDispatcher = () => dispatcher => {

    dispatcher({type:'RESET_GAME_BTN_CLICKED'});
}

export const updatePlayer1NameActionDispatcher = player1Name => dispatcher => {
    dispatcher({type:'PLAYER_1_NAME_UPDATED', payload : player1Name})
}

export const updatePlayer2NameActionDispatcher = player2Name => dispatcher => {
    dispatcher({type:'PLAYER_2_NAME_UPDATED', payload : player2Name})
}

export const gameFinishActionDispatcher = (winnerId) => dispatcher => {
    dispatcher({type:'GAME_FINISHED', payload:winnerId})
}

export const toggleScoreBoardHandlerActionDispacther = () => dispatcher => {
    dispatcher({type:'TOGGLE_SCORE_BOARD'})
}

export const toggleHistoryPageHandlerActionCreator = () => dispatcher => {
    dispatcher({type:'TOGGLE_HISTORY_PAGE'})
}