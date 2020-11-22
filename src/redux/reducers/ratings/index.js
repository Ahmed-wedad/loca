import {combineReducers} from 'redux'
import {rating} from "./ratingReducer";

const ratingReducer = combineReducers({
  rating
})

export default ratingReducer
