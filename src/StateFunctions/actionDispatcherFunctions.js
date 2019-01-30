export const currentPageChangedActionDispatcher = currentPageNum => dispatcher => {
    
    dispatcher({type:'CURRENT_PAGE_NUMBER_CHANGED', payload: currentPageNum + 1})
}

export const ticTacCellClickedActionDispatcher = (id, currentPlayerId) => dispatcher => {
    
    dispatcher({type:'TIC_TAC_CELL_CLICKED', payload:[id, currentPlayerId]});
}