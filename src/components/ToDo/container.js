import { addTodoItem, deleteTodoItem } from '../../logic/toDo/actions.js';

export function mapStateToProps(state) {
  const { toDo } = state
  return {  toDo }
}
export function mapDispatchToProps(dispatch) {
  return {
      addToDo(data) {
        dispatch(addTodoItem(data))
      },
      deleteToDo(data) {
        dispatch(deleteTodoItem(data))
      }
  }
}