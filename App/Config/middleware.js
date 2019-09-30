import api from './api';
import {ASYNC_START, ASYNC_END, LOGIN, LOGOUT} from './types';
import AsyncStorage from '@react-native-community/async-storage';

const requestMiddleware = store => next => action => {
  if (isPromise(action.payload)) {
    store.dispatch({type: ASYNC_START, subtype: action.type});

    action.payload
      .then(response => {
        action.payload = response;
        store.dispatch({type: ASYNC_END, promise: action.payload});
        store.dispatch(action);
      })
      .catch(err => {
        action.error = true;
        action.payload = err.response.data;

        if (err.response.status === '403') {
          store.dispatch({type: LOGOUT});
        }

        store.dispatch({type: ASYNC_END, promise: action.payload});
        store.dispatch(action);
      });
    return;
  }
  next(action);
};

const tokenMiddleware = store => next => action => {
  if (action.type === LOGIN) {
    AsyncStorage.setItem('jwt', action.payload.jwt);
    api.setToken(action.payload.jwt);
  } else {
    AsyncStorage.removeItem('jwt');
    api.setToken(null);
  }
};

function isPromise(v) {
  return v && typeof v.then === 'function';
}

export {requestMiddleware, tokenMiddleware};
