import { combineReducers } from "redux";

const user = (state = {}, action) => {
  switch (action.type) {
    case "SET_USER":
      return action.value;
    default:
      return state;
  }
};

const login = (state = false, action) => {
  switch (action.type) {
    case "SET_LOGIN_STATUS":
      return action.value;
    default:
      return state;
  }
};
// add switch statements in here
const business = (state = [], action) => {
  console.log(action, "action", state);
  switch (action.type) {
    case "ADD_BUSINESS":
      console.log(action, "addbusiness", state);
      return [...state, action.value];
    case "REMOVE_BUSINESS":
      const newState = [...state];
      newState.splice(action.value, 1);
      return newState;
    default:
      return state;
  }
};
export default combineReducers({ user, business, login });
