import {SET_USER_ROLE} from './types';

export const setUserRole = (role) => dispatch => {
    localStorage.setItem("role", role);
    dispatch({
        type: SET_USER_ROLE,
        payload: role
    })
}