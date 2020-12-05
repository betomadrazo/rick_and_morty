import axios from 'axios'
import {
  CHARACTER_GET_REQUEST,
  CHARACTER_GET_SUCCESS,
  CHARACTER_GET_FAIL,
} from '../constants/characterConstants'

export const searchCharacters = (term) => async dispatch => {
  try {
    dispatch({ type: CHARACTER_GET_REQUEST })
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character/?${term}`)

    dispatch({ type: CHARACTER_GET_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: CHARACTER_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
