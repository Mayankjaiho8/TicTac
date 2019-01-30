import { combineReducers } from 'redux';

import appStateReducer from './appStateReducer';
import gameStateReducer from './gameStateReducer';

const rootReducer = combineReducers({
    appStateReducer,
    gameStateReducer,
})

export default rootReducer;