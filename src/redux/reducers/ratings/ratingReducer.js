import {
  CLEAR_ERRORS,
  GET_RATINGS,
  SET_LOADING,
  RATING_ERROR,
  DELETE_RATING
} from '../../actions/types'

const initialState = {
  ratings: [],
  error: null,
  loading: true,
  msg: null,
  currentPage: 1,
  totalItems: 0,
  totalPages: 0
}

export const rating = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }

    case GET_RATINGS:
      return {
        ...state,
        ratings: action.payload.ratings.data,
        currentPage: action.payload.ratings.currentPage,
        totalItems: action.payload.ratings.totalItems,
        totalPages: action.payload.ratings.totalPages,
        loading: false
      }

    case DELETE_RATING:
      return {
        ...state,
        ratings: state.ratings.filter((rating) => rating.id !== action.payload),
        msg: 'Rating deleted successfully',
        loading: false,
      }

    case RATING_ERROR:
      return {
        ...state,
        error: (action.payload.msg) ? action.payload.msg : action.payload,
        loading: false
      }

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
        msg: null
      }

    default:
      return state
  }
}
