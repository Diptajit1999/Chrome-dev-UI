// src/redux/store.js

import { legacy_createStore, combineReducers } from 'redux';
import requestsReducer from './reducers/index';

const rootReducer = combineReducers({
  requests: requestsReducer
});

const store = legacy_createStore(rootReducer);

export default store;

