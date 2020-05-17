import {LOGIN_USER, LOGOUT_USER, REGISTER_USER, BOOK_SERVICE, CANCEL_SERVICE} from './actionTypes'


export function loginUser() {
     return {
        type: LOGIN_USER,
        payload
    }
}

export function logoutUser(){
    return{
        type: LOGOUT_USER,
        payload
    }
}export function registerUser(){
    return{
        type: REGISTER_USER,
        payload
    }
}
export function bookService(){
    return{
        type: BOOK_SERVICE,
        payload
    }
}
export function cancelService(){
    return{
        type: CANCEL_SERVICE,
        payload
    }
}

