import axios from "axios"
import setAuthToken from "../../../utility/setAuthToken";
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
  SET_LOADING,
  URL
} from "../types"

// Load user
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    setLoading();
    const res = await axios.get(`${URL}/api/v1/auth/admin`);

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

//Login user
export const login = (formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
  };

  setLoading();

  try {
    const res = await axios.post(`${URL}/api/v1/auth/admin`, formData, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    await loadUser();
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data,
    });
  }
};

// Update Admin
export const updateUser = (user) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  setLoading()

  try {
    const res = await axios.put(`${URL}/api/v1/admin`, user, config);
    dispatch({ type: UPDATE_USER, payload: res.data });
  } catch (err) {
    dispatch({ type: PASSWORD_ERROR, payload: err.response.data });
  }
};


// Update Admin Password
export const updatePassword =  (formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  setLoading()
  try {
    const res = await axios.put(`${URL}/api/v1/admin/password`, formData, config);
    dispatch({ type: UPDATE_PASSWORD, payload: res.data });
  } catch (err) {
    dispatch({ type: PASSWORD_ERROR, payload: err.response.data });
  }
};

// Upload photo
export const uploadProfilePhoto = (formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
  }

  try {
    const res = await axios.put(`${URL}/api/v1/admin/upload`, formData, config);
    dispatch({ type: UPLOAD_PHOTO, payload: res.data });
  } catch (err) {
    dispatch({ type: PHOTO_ERROR, payload: err.response.data });
  }
};

// Logout
export const logout = () =>  dispatch => dispatch({ type: LOGOUT });

// Clear errors
export const clearErrors = () => dispatch => dispatch({ type: CLEAR_ERRORS });


export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}
