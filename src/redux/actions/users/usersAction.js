import axios from 'axios'

import {CLEAR_ERRORS, GET_USERS, SET_LOADING, USER_ERROR, URL, DISABLE_USER, USER_DISABLED} from '../types'

export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}

export const getUsers = () => async dispatch => {
  try {
    const res = await axios.get(`${URL}/api/v1/stat/user`);
    dispatch({
      type: GET_USERS,
      payload: res.data,
    })
  }  catch (e) {

    dispatch({ type: USER_ERROR, payload: e.response.data })

  }
}

export const getUsersPage = (page) => async dispatch => {
  try {
    const res = await axios.get(`${URL}/api/v1/stat/user?page=${page}`);
    dispatch({
      type: GET_USERS,
      payload: res.data,
    })
  }  catch (e) {
    dispatch({ type: USER_ERROR, payload: e.response.data });
  }
}

export const getUsersSearch = (search) => async dispatch => {
  try {
    const res = await axios.get(`${URL}/api/v1/stat/user?name=${search}`);
    dispatch({
      type: GET_USERS,
      payload: res.data,
    })
  }  catch (e) {
    dispatch({ type: USER_ERROR, payload: e.response.data });
  }
}
export const disableUser = (id) => async dispatch => {
  try {
    await axios.put(`${URL}/api/v1/user/${id}/`);

    dispatch({ type: USER_DISABLED, payload: id });
  } catch (err) {
    dispatch({ type: USER_ERROR, payload: err.response.data });
  }
}
// Clear errors
export const clearErrors = () => async dispatch => dispatch({ type: CLEAR_ERRORS })

