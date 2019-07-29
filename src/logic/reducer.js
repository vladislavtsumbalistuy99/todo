    
import { combineReducers } from 'redux'
import toDoReducer from './toDo/reducer'
import toDoItemReducer from './toDoItem/reducer'

const reducer = combineReducers({
    toDo: toDoReducer,
    toDoItem: toDoItemReducer
})
export default reducer;