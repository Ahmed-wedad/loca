import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
  CLEAR_ERRORS,
  UPDATE_USER,
  UPDATE_PASSWORD,
  PASSWORD_ERROR,
  UPLOAD_PHOTO,
  PHOTO_ERROR,
  SET_LOADING
} from "../../actions/types"

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: false,
  user: {},
  msg: null,
  error: null
}

export const login = (state = initialState, action) => {
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

    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        user: action.payload.admin,
        loading: false,
      }

    case LOGIN_FAIL:
      return {
        ...state,
        token: null,
        isAuthenticated: null,
        user: null,
        error: (action.payload.msg) ? action.payload.msg : action.payload,
        loading: false,
      }

    case AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        isAuthenticated: null,
        user: null,
        error: null,
        loading: false,
      }

    case UPLOAD_PHOTO:
    case UPDATE_USER:
      return {
        ...state,
        msg: action.payload.msg,
        user: action.payload.admin,
        loading: false
      }

    case UPDATE_PASSWORD:
      return {
        ...state,
        msg: action.payload.msg,
        loading: false
      }


    case PHOTO_ERROR:
    case PASSWORD_ERROR:
      return {
        ...state,
        error: (action.payload.msg) ? action.payload.msg : action.payload,
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
