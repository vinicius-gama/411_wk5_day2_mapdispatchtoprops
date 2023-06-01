import { combineReducers } from 'redux';

const user = (state = null) => state;

const cars = (state = [], action) => {
  switch (action.type) {
    case "ADD_CAR":
      return [...state, action.car];
    default:
      return state;
  }
};

export default combineReducers({ user, cars });
