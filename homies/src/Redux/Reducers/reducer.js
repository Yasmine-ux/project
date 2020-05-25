import UserReducer from "./UserReducer";
import SerProvider from "./ServProvider";
import SearchFilter from "./SearchFilter";
import { combineReducers } from 'redux';



export default combineReducers ({
   user: UserReducer,
   serProvider: SerProvider,
   search: SearchFilter, 
})