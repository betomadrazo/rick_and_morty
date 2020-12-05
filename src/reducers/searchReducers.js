import {
  SET_CURRENT_SEARCH_TERM,
  RESET_CURRENT_SEARCH_TERM,
  SET_CURRENT_PAGE,
  RESET_CURRENT_PAGE,
} from '../constants/searchConstants'

export const searchTermReducer = (state = { currentSearch: '' }, action) => {
  switch (action.type) {
    case SET_CURRENT_SEARCH_TERM:
      return { currentSearch: action.payload }
    case RESET_CURRENT_SEARCH_TERM:
      return { currentSearch: action.payload }
    default:
      return state
  }
}

export const currentPageReducer = (state = { currentPage: null }, action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return { currentPage: action.payload }
    case RESET_CURRENT_PAGE:
      return { currentPage: action.payload }
    default:
      return state
  }
}
