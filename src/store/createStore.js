import {createStore, applyMiddleware} from 'redux'
import jobReducer from '../reducer/JobReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export const store = createStore(jobReducer, applyMiddleware(thunk, logger));
