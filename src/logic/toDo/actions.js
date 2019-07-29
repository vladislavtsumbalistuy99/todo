import { ADD_TODO, DELETE_TODO } from './actionTypes';

export const addTodoItem = payload => {
  return {
    type: ADD_TODO,
    payload
  }
}

export const deleteTodoItem = payload => {
  return {
    type: DELETE_TODO,
    payload
  }
}