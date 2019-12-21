import { combineReducers } from 'redux'
// import { addBuisness, removeBuisness } from './actions';
import initialState from './state';


const user = (state = null) => state
const login = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_LOGIN_STATUS':
        return { // changing redux state without mutating
          ...state,
          login: action.payload
        }
      default:
        return state
    }
  }
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
export default combineReducers({ user, buisness,login })