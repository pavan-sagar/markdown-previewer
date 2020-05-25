import { combineReducers } from 'redux'
import { updateContentReducer } from './slices/updateContentSlice'


export default combineReducers({
    updateContentReducer : updateContentReducer,
});