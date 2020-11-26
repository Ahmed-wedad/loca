import axios from 'axios'
import {SET_LOADING, GET_PAYMENTS, PAYMENT_ERROR, CLEAR_ERRORS, URL} from '../types'

// Clear errors
export const clearErrors = () => async dispatch => dispatch({ type: CLEAR_ERRORS });

export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}

export const getPayments = (page) => async dispatch => {
  const url = page ? `${URL}/api/v1/payment?page=${page}` : `${URL}/api/v1/payment`
  try {
    const res = await axios.get(url);
    dispatch({
      type: GET_PAYMENTS,
      payload: res.data,
    });
  }  catch (e) {
    dispatch({ type: PAYMENT_ERROR, payload: e.response.data });
  }
}
