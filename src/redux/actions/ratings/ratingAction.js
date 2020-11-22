import axios from 'axios'
import {CLEAR_ERRORS, GET_RATINGS, SET_LOADING, RATING_ERROR, DELETE_RATING} from '../types'

export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}

export const getRatings = (page) => async dispatch => {
  const url = page ? `/api/v1/rating?page=${page}` : `/api/v1/rating`
  try {
    const res = await axios.get(url);
    dispatch({
      type: GET_RATINGS,
      payload: res.data,
    });
  }  catch (e) {
    dispatch({ type: RATING_ERROR, payload: e.response.data });
  }
}

// Delete rating
export const deleteRating = (id) => async dispatch => {
  try {
    await axios.delete(`/api/v1/rating/${id}`);

    dispatch({ type: DELETE_RATING, payload: id });
  } catch (err) {
    dispatch({ type: RATING_ERROR, payload: err.response.data });
  }
}


// Clear errors
export const clearErrors = () => async dispatch => dispatch({ type: CLEAR_ERRORS });

