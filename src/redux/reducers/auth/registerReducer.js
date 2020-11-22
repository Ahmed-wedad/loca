import {
  USER_LOADED,
  AUTH_ERROR,
  CLEAR_ERRORS,
  SET_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "../../actions/types"

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: false,
  user: {},
  msg: null,
  error: null
}


export const register = (state= initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }

    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.admin,
        loading: false,
      }

    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        user: action.payload.admin,
        loading: false,
      }

    case REGISTER_FAIL:
      return {
        ...state,
        token: null,
        isAuthenticated: null,
        user: null,
        error: (action.payload.msg) ? action.payload.msg : action.payload,
        loading: false,
      }

    case AUTH_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        isAuthenticated: null,
        user: null,
        error: null,
        loading: false,
      }

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      }


    default: {
      return state
    }
  }
}
