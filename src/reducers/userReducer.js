import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, USER_LOGOUT } from "../constants/userConstants";

export const userLoginReducer = (state={},action) => {
    switch(action.type){
       case LOGIN_REQUEST:
          return {loading: true}
       case LOGIN_SUCCESS:
           return {loading:false, userInfo:action.payload};
       case LOGIN_FAILURE:
            return {loading:false, error:action.payload};
       case USER_LOGOUT:
            return {};    
        default:
           return state;               
    }
};