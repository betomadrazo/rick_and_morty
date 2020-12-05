import {
  CHARACTER_GET_REQUEST,
  CHARACTER_GET_SUCCESS,
  CHARACTER_GET_FAIL,
  SET_CURRENT_SEARCH_TERM,
  RESET_CURRENT_SEARCH_TERM,
} from '../constants/characterConstants'

export const characterSearchReducer = (state = { characters: [] }, action) => {
    switch (action.type) {
    case CHARACTER_GET_REQUEST:
      return { loading: true, characters: [] }
    case CHARACTER_GET_SUCCESS:
      return { loading: false, characters: action.payload.results, pagerInfo: action.payload.info }
    case CHARACTER_GET_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

