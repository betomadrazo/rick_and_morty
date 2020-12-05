import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { characterSearchReducer } from './reducers/characterReducers'
import { searchTermReducer, currentPageReducer } from './reducers/searchReducers'

const reducer = combineReducers({
  characterSearch: characterSearchReducer,
  searchTerm: searchTermReducer,
  currentPage: currentPageReducer,
})

const middleware = [thunk]

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
