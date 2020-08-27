import { combineReducers } from 'redux'
import userInfo from '~src/store/reducers/userInfo'
import loading from '~src/store/reducers/loading'

export default combineReducers({
  userInfo,
  loading
})
