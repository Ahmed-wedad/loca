import {CLEAR_ERRORS, GET_USERS, SET_LOADING, USER_APPROUVED, USER_DISABLED, USER_ERROR} from '../../actions/types'
const initialState = {
  users: [],
  error: null,
  loading: true,
  msg: null,
  currentPage: 1,
  totalItems: 0,
  totalPages: 0
}

export const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }

    case GET_USERS:
      return {
        ...state,
        users: action.payload.users.data,
        currentPage: action.payload.users.currentPage,
        totalItems: action.payload.users.totalItems,
        totalPages: action.payload.users.totalPages,
        loading: false
      }
    case USER_DISABLED :
      const ag = state.users.reduce(()=>user.id===action.payload)
      ag.statusBan=false
      const newusers=state.users.filter((user) =>user.id !== action.payload)
      newusers.push(ag)
      
    return {
      ...state,
     users: newusers,
      msg: 'user disabled successfully',
      loading: false,
    }
    case USER_APPROUVED :
      const us = state.users.reduce(()=>user.id===action.payload)
      us.statusBan=false
      const newnewusers=state.users.filter((user) =>user.id !== action.payload)
      newnewusers.push(us)
    return {
      ...state,
     users: newnewusers,
      msg: 'user disabled successfully',
      loading: false,
    }
    case USER_ERROR:
      
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
