import {SET_USER_ROLE} from '../actions/types';

const initialState = {
   role: localStorage.getItem('role') 
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_ROLE:
            return {
                ...state,
                role: action.payload
            }
        default:
            return state
    }
}

export default userReducer;