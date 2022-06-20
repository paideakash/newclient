import {createContext} from "react";

const INITIAL STATE = {
    user : null,
    isFetching: false,
    error : false
}

export const AuthContext = createContext(INITIAL_STATE);