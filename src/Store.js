import {createStore, applyMiddleware} from 'redux';
import {combineReducers} from 'redux';
import {authenticationReducer} from './ducks/authenticateUser'
import {createUserReducer} from './ducks/createUser'
import { devToolsEnhancer } from 'redux-devtools-extension';


const rootReducer = combineReducers({
    authenticationReducer,
    createUserReducer
  });
  console.log(rootReducer)

const INITIAL_STATE = {};

const Store = createStore(rootReducer, INITIAL_STATE, devToolsEnhancer());

console.log(Store)



export default Store