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
    console.log(id);
    localStorage.setItem("id", id);
    console.log("DEI set");
    dispatch({
        type: SET_USER_ID,
        payload: id
    })
}