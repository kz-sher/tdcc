import { SET_USERNAME, LOGOUT } from '../actions/types';

const DEFAULT_STATE = {
    username: ''
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SET_USERNAME:
            return { ...state, username: action.username }
        case LOGOUT:
            return DEFAULT_STATE
        default:
            return state;
    }
}