import {ADD_SERVICE, DELETE_RESERV, CONFIRM_RESERV, LOGIN_SER_PROVIDER, LOGOUT_SER_PROVIDER, EDIT_SERVICE, REGISTER_SER_PROVIDER} from './actionTypes'

export function loginServProvider() {
    return {
       type: LOGIN_SER_PROVIDER,
       payload
   }
}
export function logoutServProvider() {
    return {
       type: LOGOUT_SER_PROVIDER,
       payload
   }
}
export function registerSerProvider() {
    return {
       type: REGISTER_SER_PROVIDER,
       payload
   }
}
export function confirmReservation() {
    return {
       type: CONFIRM_RESERV,
       payload
   }
}
export function deleteReservation() {
    return {
       type: DELETE_RESERV,
       payload
   }
}
export function addService() {
    return {
       type: ADD_SERVICE,
       payload
   }
}
export function editService() {
    return {
       type: EDIT_SERVICE,
       payload
   }
}
export function deletService() {
    return {
       type: DELETE_SERVICE,
       payload
   }
}