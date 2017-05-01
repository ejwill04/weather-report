import { combineReducers } from 'redux'
import cities from './weatherReducer'

const rootReducer = combineReducers({
  cities,
})

export default rootReducer
