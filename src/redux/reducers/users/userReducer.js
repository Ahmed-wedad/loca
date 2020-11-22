import {CLEAR_ERRORS, GET_USERS, SET_LOADING, USER_ERROR} from '../../actions/types'
const initialState = {
  users: [],
  error: null,
  loading: true,
  msg: null,
  currentPage: 1,
  totalItems: 0,
  totalPages: 0
}

export const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }

    case GET_USERS:
      return {
        ...state,
        users: action.payload.users.data,
        currentPage: action.payload.users.currentPage,
        totalItems: action.payload.users.totalItems,
        totalPages: action.payload.users.totalPages,
        loading: false
      }

    case USER_ERROR:
      return {
        ...state,
        error: (action.payload.msg) ? action.payload.msg : action.payload,
        loading: false
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
        msg: null
      };

    default:
      return state
  }
}
