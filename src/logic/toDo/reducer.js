import defaultState from "../defaultState.js";
import { ADD_TODO, DELETE_TODO } from './actionTypes';

export default function toDoReducer (state = defaultState.toDo, action) {
  switch (action.type){
    case ADD_TODO: {
      state.push(action.payload)
      return [...state]
    }
    case DELETE_TODO: {
      let newState = [...state]
      let id = action.payload;
      
      for (let i=0;i<=newState.length;i++){
        if(newState[i].id === id){
          newState.splice(i,1);
          return[...newState];
        }        
      }
    }
    default: {
      return [...state]
    }
  }
}