export const currentPageChangedActionDispatcher = currentPageNum => dispatcher => {
    
    dispatcher({type:'CURRENT_PAGE_NUMBER_CHANGED', payload: currentPageNum + 1})
}