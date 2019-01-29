const initialState = {
    pageNumber : 1,
}

const appStateReducer = (state = initialState, action) => {
    switch(action.type){
        case 'PAGE_NUMBER_CHANGED':
            const pageNumber = action.payload;
            return {
                ...state,
                pageNumber
            }
        default :
            return state;
    }
}

export default appStateReducer;