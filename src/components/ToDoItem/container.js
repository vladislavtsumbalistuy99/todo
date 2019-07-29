import { addDone, addImportant, addClassName} from '../../logic/toDoItem/actions.js';

export function mapStateToProps(state) {
  const { toDo } = state
  return { toDo }
}
export function mapDispatchToProps(dispatch) {
  return {
      addDone(data) {
        dispatch(addDone(data))
      },
      addImportant(data) {
        dispatch(addImportant(data))
      },
      addClassName(data) {
        dispatch(addClassName(data))
      }
  }
}