import { combineReducers } from 'redux'
// import { addBuisness, removeBuisness } from './actions';

const user = (state = null) => state

// add switch statements in here
const buisness = (state = [], action) => {
    console.log(action,"action",state)
    switch(action.type) {
        case 'add_buisness':
            console.log(action,"addbuisness",state) 
            return [ ...state, action.value ]
        case 'remove_buisness':
            const newState = [ ...state ]
            newState.splice(action.value, 1) 
            return newState; 
    default:
        return state
 }
}
export default combineReducers({ user, buisness })