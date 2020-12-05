import {
  SET_CURRENT_PAGE,
} from '../constants/searchConstants'

export const setCurrentPage = (page) => dispatch => {
  dispatch({ type: SET_CURRENT_PAGE, payload: page })
}