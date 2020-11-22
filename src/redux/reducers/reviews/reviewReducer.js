import {
  CLEAR_ERRORS,
  GET_REVIEWS,
  SET_LOADING,
  REVIEW_ERROR,
  DELETE_REVIEW
} from '../../actions/types'

const initialState = {
  reviews: [],
  error: null,
  loading: true,
  msg: null,
  currentPage: 1,
  totalItems: 0,
  totalPages: 0
}

export const review = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }

    case GET_REVIEWS:
      return {
        ...state,
        reviews: action.payload.reviews.data,
        currentPage: action.payload.reviews.currentPage,
        totalItems: action.payload.reviews.totalItems,
        totalPages: action.payload.reviews.totalPages,
        loading: false
      }

    case DELETE_REVIEW:
      return {
        ...state,
        reviews: state.reviews.filter((review) => review.id !== action.payload),
        msg: 'Review deleted successfully',
        loading: false,
      }

    case REVIEW_ERROR:
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
