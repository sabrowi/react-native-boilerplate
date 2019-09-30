import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import {requestMiddleware, tokenMiddleware} from '../Config/middleware';
import reducers from '../Reducers/';

const store = createStore(
  reducers,
  applyMiddleware(requestMiddleware, tokenMiddleware, createLogger()),
);

export default store;
