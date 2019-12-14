import {SET_USER_ROLE} from '../actions/types';
import {SET_USER_ID} from '../actions/types';

const initialState = {
    id: localStorage.getItem('id'),
   role: localStorage.getItem('role') 
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_ROLE:
            return {
                ...state,
                role: action.payload
            }
        case SET_USER_ID:
            return {
                ...state,
                id: action.payload
            }
        default:
            return state
    }
}

export default userReducer;