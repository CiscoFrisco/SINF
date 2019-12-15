import {SET_USER_ROLE} from './types';
import {SET_USER_ID} from './types';

export const setUserRole = (role) => dispatch => {
    localStorage.setItem("role", role);
    dispatch({
        type: SET_USER_ROLE,
        payload: role
    })
}

export const setUserID = (id) => dispatch => {
    localStorage.setItem("id", id);
    dispatch({
        type: SET_USER_ID,
        payload: id
    })
}