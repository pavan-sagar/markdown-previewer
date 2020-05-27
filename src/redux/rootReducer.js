import { combineReducers } from 'redux'
import { updateContentReducer } from './slices/updateContentSlice'
import { maximiseWindowReducer } from './slices/maximiseWindowSlice'


export default combineReducers({
    updateContentReducer : updateContentReducer,
    maximiseWindowReducer : maximiseWindowReducer,
});