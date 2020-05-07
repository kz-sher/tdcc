import { SET_USERNAME } from './types';

export const setUsername = username => {
    return dispatch => {
        dispatch({ type: SET_USERNAME, username })
    }
}