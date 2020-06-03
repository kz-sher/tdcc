import { SET_USERNAME, LOGOUT } from './types';

export const setUsername = username => {
    return dispatch => {
        dispatch({ type: SET_USERNAME, username })
    }
}

export const logout = () => {
    return dispatch => {
        dispatch({ type: LOGOUT })
    }
}