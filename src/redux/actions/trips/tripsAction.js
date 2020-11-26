import axios from "axios";
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
  CANCEL_TRIP,
  URL
} from '../types'

export const getTrips = (page) => async dispatch => {
  const url = page ? `${URL}/api/v1/trip?page=${page}` : `${URL}/api/v1/trip`
  try {
    const res = await axios.get(url);
    dispatch({
      type: GET_TRIPS,
      payload: res.data,
    });
  }  catch (e) {
    dispatch({ type: TRIP_ERROR, payload: e.response.data });
  }
}

// Clear errors
export const clearErrors = () => async dispatch => dispatch({ type: CLEAR_ERRORS });

export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}

// Set Current trip
export const setCurrent = (car) => async dispatch => {
  dispatch({ type: SET_CURRENT, payload: car });
}

// Clear Current trip
export const clearCurrent = () => async dispatch => {
  dispatch({ type: CLEAR_CURRENT });
}

// Update trip
export const updateTrip = (id, formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.put(`${URL}/api/v1/trip/${id}`, formData, config);

    dispatch({ type: UPDATE_TRIP, payload: res.data });

  } catch (err) {
    dispatch({
      type: TRIP_ERROR,
      payload: err.response.data
    });
  }
}

// accept trip
export const acceptTrip = (id) => async dispatch => {

  try {
    const res = await axios.put(`${URL}/api/v1/trip/accept/${id}`);

    dispatch({ type: ACCEPT_TRIP, payload: res.data });

  } catch (err) {
    dispatch({
      type: TRIP_ERROR,
      payload: err.response.data
    });
  }
}

// reject trip
export const rejectTrip = (id) => async dispatch => {

  try {
    const res = await axios.put(`${URL}/api/v1/trip/reject/${id}`);

    dispatch({ type: REJECT_TRIP, payload: res.data });

  } catch (err) {
    dispatch({
      type: TRIP_ERROR,
      payload: err.response.data
    });
  }
}


// finish trip
export const finishTrip = (id) => async dispatch => {

  try {
    const res = await axios.put(`${URL}/api/v1/trip/finish/${id}`);

    dispatch({ type: FINISH_TRIP, payload: res.data });

  } catch (err) {
    dispatch({
      type: TRIP_ERROR,
      payload: err.response.data
    });
  }
}

// cancel trip
export const cancelTrip = (id) => async dispatch => {

  try {
    const res = await axios.put(`${URL}/api/v1/trip/cancel/${id}`);

    dispatch({ type: CANCEL_TRIP, payload: res.data });

  } catch (err) {
    dispatch({
      type: TRIP_ERROR,
      payload: err.response.data
    });
  }
}

// Delete trip
export const deleteTrip = (id) => async dispatch => {
  try {
    await axios.delete(`${URL}/api/v1/trip/${id}`);

    dispatch({ type: DELETE_TRIP, payload: id });
  } catch (err) {
    dispatch({ type: TRIP_ERROR, payload: err.response.data });
  }
}

