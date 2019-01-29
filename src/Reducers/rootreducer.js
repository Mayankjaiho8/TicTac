import { combineRedcuer } from 'redux';

import appStateReducer from './appStateReducer';

const rootReducer = combineRedcuer({
    appStateReducer,
})

export default rootReducer;