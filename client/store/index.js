import { createStore, applyMiddleware } from 'redux';
import {createWrapper} from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk'

import rootReducer from './reducers'

const initialState = {}
const middleware = [thunk]

export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export const wrapper = createWrapper(() => store, {debug: true});