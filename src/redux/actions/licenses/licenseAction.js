import axios from "axios";
import {
  GET_LICENSES,
  SET_LOADING,
  SET_CURRENT,
  CLEAR_CURRENT,
  LICENSE_ERROR,
  UPDATE_LICENSE,
  DELETE_LICENSE,
  CLEAR_ERRORS,
  URL
} from '../types'

export const getLicenses = (page) => async dispatch => {
  const url = page ? `${URL}/api/v1/license?page=${page}` : `${URL}/api/v1/license`
  try {
    const res = await axios.get(url);
    dispatch({
      type: GET_LICENSES,
      payload: res.data,
    });
  }  catch (e) {
    dispatch({ type: LICENSE_ERROR, payload: e.response.data });
  }
}

// Verify cars
export const updateLicense = (id, formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.put(`${URL}/api/v1/license/${id}`, formData, config);

    dispatch({ type: UPDATE_LICENSE, payload: res.data });

  } catch (err) {
    dispatch({
      type: LICENSE_ERROR,
      payload: err.response.data
    });
  }
}

// Set Current license
export const setCurrent = (car) => async dispatch => {
  dispatch({ type: SET_CURRENT, payload: car });
};

// Clear Current license
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

// Delete license
export const deleteLicense = (id) => async dispatch => {
  try {
    await axios.delete(`${URL}/api/v1/license/${id}`);

    dispatch({ type: DELETE_LICENSE, payload: id });
  } catch (err) {
    dispatch({ type: LICENSE_ERROR, payload: err.response.data });
  }
}
