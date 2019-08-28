import {createStore, applyMiddleware} from 'redux';
import {combineReducers} from 'redux';
import userReducer from './users/reducer'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

let middleware=[thunk]

const rootReducer = combineReducers({
    userReducer
  });


export default createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));


