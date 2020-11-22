import axios from 'axios'
import {
  GET_CARS,
  CAR_ERROR,
  CLEAR_CARS,
  VERIFY_CAR,
  DELETE_CAR,
  CLEAR_CURRENT,
  SET_CURRENT,
  CLEAR_ERRORS, SET_LOADING,
} from '../types'

// Get cars
export const getCars = (page, size, name, location) => async dispatch => {
  const url = (size && name && location && page) ? `/api/v1/car?page=${page}&size=${size}&name=${name}&location=${location}`
    : (page) ? `/api/v1/car?page=${page}`
      : (size) ? `/api/v1/car?size=${size}`
        : (name) ? `/api/v1/car?name=${name}`
          : (location) ? `/api/v1/car?location=${location}`
            :  `/api/v1/car`
  try {
    const res = await axios.get(url);
    dispatch({
      type: GET_CARS,
      payload: res.data,
    });
  }  catch (e) {
    dispatch({ type: CAR_ERROR, payload: e.response.data });
  }
}

export const getCarsSearch = (search) => async dispatch => {
  try {
    const res = await axios.get(`/api/v1/car?search=${search}`);
    dispatch({
      type: GET_CARS,
      payload: res.data,
    });
  }  catch (e) {
    dispatch({ type: CAR_ERROR, payload: e.response.data });
  }
}


// Delete car
export const deleteCar = (id) => async dispatch => {
  try {
    await axios.delete(`/api/v1/car/${id}`);

    dispatch({ type: DELETE_CAR, payload: id });
  } catch (err) {
    dispatch({ type: CAR_ERROR, payload: err.response.data });
  }
}

// Verify cars
export const verifyCar = (id, formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.put(`/api/v1/car/${id}`, formData, config);

    dispatch({ type: VERIFY_CAR, payload: res.data });

  } catch (err) {
    dispatch({
      type: CAR_ERROR,
      payload: err.response.data
    });
  }
}

// Clear Cars
export const clearCars = () => async dispatch =>{
  dispatch({ type: CLEAR_CARS });
};

// Set Current Car
export const setCurrent = (car) => async dispatch => {
  dispatch({ type: SET_CURRENT, payload: car });
};

// Clear Current car
export const clearCurrent = () => async dispatch => {
  dispatch({ type: CLEAR_CURRENT });
};

// Clear errors
export const clearErrors = () => async dispatch => dispatch({ type: CLEAR_ERRORS });

export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}




