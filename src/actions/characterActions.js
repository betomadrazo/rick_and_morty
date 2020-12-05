import axios from 'axios'
import {
  CHARACTER_GET_REQUEST,
  CHARACTER_GET_SUCCESS,
  CHARACTER_GET_FAIL,
} from '../constants/characterConstants'
import {
  SET_CURRENT_SEARCH_TERM,
  RESET_CURRENT_SEARCH_TERM,
  RESET_CURRENT_PAGE,
  SET_CURRENT_PAGE,
} from '../constants/searchConstants'

export const searchCharacters = (term, page=1) => async (dispatch) => {
  try {
    dispatch({ type: CHARACTER_GET_REQUEST })
    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/character/?name=${term}&page=${page}`
    )

    dispatch({ type: CHARACTER_GET_SUCCESS, payload: data })
    dispatch({ type: SET_CURRENT_SEARCH_TERM, payload: term })
    dispatch({ type: SET_CURRENT_PAGE, payload: page })
  } catch (error) {
    dispatch({
      type: CHARACTER_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
    dispatch({
      type: RESET_CURRENT_SEARCH_TERM,
      payload: '',
    })
    dispatch({
      type: RESET_CURRENT_PAGE,
      payload: null,
    })
  }
}
