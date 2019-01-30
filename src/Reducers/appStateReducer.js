const initialState = {
    currentPageNumber : 1,
}

const appStateReducer = (state = initialState, action) => {
    switch(action.type){
        case 'CURRENT_PAGE_NUMBER_CHANGED':
            
            const currentPageNumber = action.payload;
            
            return {
                ...state,
                currentPageNumber
            }
        default :
            return state;
    }
}

export default appStateReducer;