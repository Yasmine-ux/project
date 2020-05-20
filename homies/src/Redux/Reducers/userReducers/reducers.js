import {LOGIN_USER, LOGOUT_USER, BOOK_SERVICE, CANCEL_SERVICE, REGISTER_USER} from '../../Actions/UserActions/actionTypes'


export default function (state= {}, action) {
    switch(action.type) {
        case REGISTER_USER: 
            return { ...state, register: action.payload }
        case LOGIN_USER:
            return { ...state, login: action.payload }
        case LOGOUT_USER:
            return { ...state }
        case BOOK_SERVICE:
            return{ ...state, book: action.payload }
        case CANCEL_SERVICE:
            return{ ...state, cancel: action.payload }
        default: 
            return state;
    }
}