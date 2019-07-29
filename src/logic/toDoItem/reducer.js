 import defaultState from '../defaultState'
 import { ADD_DONE, ADD_IMPORTANT, ADD_CLASSNAME } from './actionTypes'

 export default function toDoItemsReducer (state = defaultState.toDo, action) {
  switch (action.type){
    case ADD_DONE: {
      let id = action.payload;
      let newState = [...state];
      for (let i=0; i<newState.length; i++){
        if (newState[i].id === id){
          newState[i].done = !newState[i].done;
        }
      }
      return [...newState]
    }
    case ADD_IMPORTANT: {
      let id = action.payload;
      let newState = [...state];
      for (let i=0; i<newState.length; i++){
        if (newState[i].id === id){
          newState[i].important = !newState[i].important;
        }
      }
      console.log(newState)
      return [...newState]
    }
    case ADD_CLASSNAME: {
      
      return [...state];
    }
    default: {
      return [...state]
    }
  }
 }