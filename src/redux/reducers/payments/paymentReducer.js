import {SET_LOADING, GET_PAYMENTS, PAYMENT_ERROR, CLEAR_ERRORS} from '../../actions/types'
const initialState = {
  payments: [],
  error: null,
  loading: true,
  msg: null,
  currentPage: 1,
  totalItems: 0,
  totalPages: 0
}

export const payment = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }

    case GET_PAYMENTS:
      return {
        ...state,
        payments: action.payload.payments.data,
        currentPage: action.payload.payments.currentPage,
        totalItems: action.payload.payments.totalItems,
        totalPages: action.payload.payments.totalPages,
        loading: false
      }

    case PAYMENT_ERROR:
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
