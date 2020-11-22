import {
  GET_LICENSES,
  SET_LOADING,
  SET_CURRENT,
  CLEAR_CURRENT,
  LICENSE_ERROR,
  UPDATE_LICENSE,
  DELETE_LICENSE,
  CLEAR_ERRORS
} from '../../actions/types'

const initialState = {
  licenses: [],
  current: null,
  error: null,
  loading: true,
  msg: null,
  currentPage: 1,
  totalItems: 0,
  totalPages: 0
}

export const license = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }

    case GET_LICENSES:
      return {
        ...state,
        licenses: action.payload.drivers.data,
        currentPage: action.payload.drivers.currentPage,
        totalItems: action.payload.drivers.totalItems,
        totalPages: action.payload.drivers.totalPages,
        loading: false
      }

    case UPDATE_LICENSE:
      return {
        ...state,
        licenses: state.licenses.map((license) => license.license_id === action.payload.driver.license_id ? action.payload.driver : license),
        msg: 'License status changed',
        loading: false
      }

    case DELETE_LICENSE:
      return {
        ...state,
        licenses: state.licenses.filter((license) => license.license_id !== action.payload),
        msg: 'License deleted successfully',
        loading: false,
      }


    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      }

    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      }

    case LICENSE_ERROR:
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
