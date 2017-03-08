export const fetchTodos = () => (
  $.ajax({
    url: "api/todos"
  })
);

export const createTodo = (todo) => {
  return $.ajax({
    url: "api/todos",
    type: 'POST',
    data: {todo}
  });
};

export const updateTodo = (todo) => {
  return $.ajax({
    url: `api/todos/${todo.id}`,
    type: 'PATCH',
    data: {todo}
  });
};

export const deleteTodo = (todo) => {
  return $.ajax({
    url: `api/todos/${todo.id}`,
    type: 'DELETE'
  });
};
