import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from '@redux-devtools/extension';
import {userLoginReducer} from "./reducers/userReducer.js"

const reducer = combineReducers({
  //wil contia reducers
  userLogin: userLoginReducer,
});

const userInfoStorage = localStorage.getItem("userInfo") ? JSON.parse( localStorage.getItem("userInfo") ) : null;

const initialState = {
  userLogin : {userInfo: userInfoStorage }
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);  

export default store;


