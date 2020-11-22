import {combineReducers} from 'redux'
import {license} from "./licenseReducer";

const licenseReducer = combineReducers({
  license
})

export default licenseReducer
