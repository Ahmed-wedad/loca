import axios from 'axios'
import {CLEAR_ERRORS, GET_REVIEWS, SET_LOADING, REVIEW_ERROR, DELETE_REVIEW} from '../types'

export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}

export const getReviews = (page) => async dispatch => {
  const url = page ? `/api/v1/review?page=${page}` : `/api/v1/review`
  try {
    const res = await axios.get(url);
    dispatch({
      type: GET_REVIEWS,
      payload: res.data,
    });
  }  catch (e) {
    dispatch({ type: REVIEW_ERROR, payload: e.response.data });
  }
}

// Delete review
export const deleteReview = (id) => async dispatch => {
  try {
    await axios.delete(`/api/v1/review/${id}`);

    dispatch({ type: DELETE_REVIEW, payload: id });
  } catch (err) {
    dispatch({ type: REVIEW_ERROR, payload: err.response.data });
  }
}


// Clear errors
export const clearErrors = () => async dispatch => dispatch({ type: CLEAR_ERRORS });

