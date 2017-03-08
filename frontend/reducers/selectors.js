export const allTodos = ({todos}) => (
  Object.keys(todos).map((id) => todos[id] )
);

export const stepsByTodoId = (steps, todoId) => {
  let result = [];
  for (let id in steps) {
    if (steps[id].todo_id === todoId) {
      result.push(steps[id]);
    }
  }
  return result;
};
