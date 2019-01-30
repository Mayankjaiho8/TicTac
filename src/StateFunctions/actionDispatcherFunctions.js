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