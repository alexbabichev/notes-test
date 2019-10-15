import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

import { reducer } from  './reducers';

const AppState = createStore(reducer, applyMiddleware(logger));

export { AppState };