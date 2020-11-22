import {
  GET_TRIPS,
  TRIP_ERROR,
  DELETE_TRIP,
  UPDATE_TRIP,
  SET_CURRENT,
  SET_LOADING,
  CLEAR_CURRENT,
  CLEAR_ERRORS,
  ACCEPT_TRIP,
  REJECT_TRIP,
  FINISH_TRIP,
  CANCEL_TRIP
} from '../../actions/types'

const initialState = {
  trips: [],
  current: null,
  error: null,
  loading: true,
  msg: null,
  currentPage: 1,
  totalItems: 0,
  totalPages: 0
}

export const trip = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }

    case GET_TRIPS:
      return {
        ...state,
        trips: action.payload.trips.data,
        currentPage: action.payload.trips.currentPage,
        totalItems: action.payload.trips.totalItems,
        totalPages: action.payload.trips.totalPages,
        loading: false
      }

    case ACCEPT_TRIP:
    case REJECT_TRIP:
    case CANCEL_TRIP:
    case FINISH_TRIP:
    case UPDATE_TRIP:
      return {
        ...state,
        trips: state.trips.map((trip) => trip.trip_id === action.payload.trip.trip_id ? action.payload.trip : trip),
        msg: action.payload.msg,
        loading: false
      }

    case DELETE_TRIP:
      return {
        ...state,
        trips: state.trips.filter((trip) => trip.trip_id !== action.payload),
        msg: 'Trip deleted successfully',
        loading: false,
      }

    case TRIP_ERROR:
      return {
        ...state,
        error: (action.payload.msg) ? action.payload.msg : action.payload,
        loading: false
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
