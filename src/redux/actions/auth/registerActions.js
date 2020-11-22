import {
  USER_LOADED,
  AUTH_ERROR,
  CLEAR_ERRORS,
  SET_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "../types"
import setAuthToken from "../../../utility/setAuthToken";
import axios from "axios"

// Load user
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    setLoading();
    const res = await axios.get(`/api/v1/auth/admin`);

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const register = (formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post(`/api/v1/admin`, formData, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    await loadUser();
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response.data,
    });
  }
};

// Clear errors
export const clearErrors = () => dispatch => dispatch({ type: CLEAR_ERRORS });


export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}

