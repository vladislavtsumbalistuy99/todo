import { ADD_DONE, ADD_IMPORTANT, ADD_CLASSNAME } from './actionTypes'

export const addDone = payload => {
  return {
    type: ADD_DONE,
    payload
  }
}

export const addImportant = payload => {
  return {
    type: ADD_IMPORTANT,
    payload
  }
}

export const addClassName = payload => {
  return {
    type: ADD_CLASSNAME,
    payload
  }
}