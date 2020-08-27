import {
  UPDATE_USER_INFO
} from '../types'
import { startLoading, endLoading } from '~src/store/action/loading'

export function updateUserInfo (userName) {
  return async dispatch => {
    dispatch(startLoading())
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 500)
    })
    dispatch({ type: UPDATE_USER_INFO, userName })
    dispatch(endLoading())
  }
}
