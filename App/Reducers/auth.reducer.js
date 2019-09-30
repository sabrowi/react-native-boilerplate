import {LOGIN, LOGOUT} from '../Config/types';

const defaultState = {
  isAuthenticated: false,
  jwt: '',
  currentUser: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        jwt: action.payload.jwt,
        currentUser: action.payload.user,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        jwt: null,
        currentUser: null,
      };
    default:
      return state;
  }
};
