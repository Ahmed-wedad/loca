import {combineReducers} from 'redux'
import {payment} from "./paymentReducer";

const paymentReducer = combineReducers({
  payment
})

export default paymentReducer
