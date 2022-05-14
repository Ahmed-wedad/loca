import {CLEAR_ERRORS, GET_AGENCES, SET_LOADING, AGENCE_ERROR, DISABLE_AGENCE, AGENCE_DISABLED, AGENCE_APPROUVED} from '../../actions/types'
const initialState = {
  agences: [],
  error: null,
  loading: true,
  msg: null,
  currentPage: 1,
  totalItems: 0,
  totalPages: 0
}

export const agence = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }

    case GET_AGENCES:
      return {
        ...state,
        agences: action.payload.agences.data,
        currentPage: action.payload.agences.currentPage,
        totalItems: action.payload.agences.totalItems,
        totalPages: action.payload.agences.totalPages,
        loading: false
      }

    case AGENCE_ERROR:
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
  case AGENCE_DISABLED:
    let ag = state.agences.reduce(()=>agence.id===action.payload)
    ag.statusBan=false
    let newAgences=state.agences.filter((agence) =>agence.id !== action.payload)
    newAgences.push(ag)
  return {
    ...state,
   agences: newAgences,
    msg: 'agence disabled successfully',
    loading: false,
  }
  case AGENCE_APPROUVED:
    const ag1 = state.agences.reduce(()=>agence.id===action.payload)
    ag1.statusBan=false
    const newAgences1=state.agences.filter((agence) =>agence.id !== action.payload)
    newAgences1.push(ag1)
  return {
    ...state,
   agences: newAgences1,
    msg: 'agence approuved successfully',
    loading: false,
  }
    default:
      return state
  }
}
