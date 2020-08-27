import {
  UPDATE_USER_INFO
} from '../types'

const initState = {
  userName: ''
}

export default function (state = initState, action) {
  switch (action.type) {
    case UPDATE_USER_INFO:
      return {
        ...initState,
        userName: action.userName
      }
    default:
      return state
  }
}
