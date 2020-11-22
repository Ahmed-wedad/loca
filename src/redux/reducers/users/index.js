import {combineReducers} from 'redux'
import {user} from "./userReducer";

const userReducer = combineReducers({
  user
})

export default userReducer
