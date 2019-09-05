import {createStore, applyMiddleware} from 'redux';
import {combineReducers} from 'redux';
import userReducer from './users/reducer'
import activityReducer from "./activities/reducer"
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

let middleware=[thunk]

const rootReducer = combineReducers({
    userReducer,
    activityReducer
  });


export default createStore(rootReducer, (applyMiddleware(...middleware)));


