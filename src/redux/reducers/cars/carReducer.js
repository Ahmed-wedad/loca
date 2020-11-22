import {
  GET_CARS,
  CAR_ERROR,
  CLEAR_CARS,
  VERIFY_CAR,
  DELETE_CAR,
  CLEAR_CURRENT,
  SET_CURRENT,
  CLEAR_ERRORS, SET_LOADING,
} from '../../actions/types'

const initialState = {
  cars: [],
  current: null,
  error: null,
  loading: true,
  msg: null,
  currentPage: 1,
  totalItems: 0,
  totalPages: 0
}

export const car = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }

    case GET_CARS:
      return {
        ...state,
        cars: action.payload.cars.data,
        currentPage: action.payload.cars.currentPage,
        totalItems: action.payload.cars.totalItems,
        totalPages: action.payload.cars.totalPages,
        loading: false
      }

    case VERIFY_CAR:
      return {
        ...state,
        cars: state.cars.map((car) => car.car_id === action.payload.car.car_id ? action.payload.car : car),
        msg: 'Car status changed',
        loading: false
      }

    case DELETE_CAR:
      return {
        ...state,
        cars: state.cars.filter((car) => car.car_id !== action.payload),
        msg: 'Car deleted successfully',
        loading: false,
      }

    case CLEAR_CARS:
      return {
        ...state,
        cars: null,
        error: null,
        current: null
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

    case CAR_ERROR:
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
