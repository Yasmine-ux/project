import {GET_SERVICES} from '../../Actions/ServiceProviderActions/actionTypes'

const initState = { services: [] };

export const Reducer= (state= initState, action) => {
    switch(action.type){
        case GET_SERVICES:
            return { ...state, services: action.payload }
    }
}