export const addTodo = (newTodo) => {
  return {
    type: "ADD-TODO",
    payload: {
      id: Math.random(),
      description: newTodo,
      isDone: false,
    },
  };
};
export const toggleTodo = (id) => {
  return {
    type: "TOGGLE-TODO",
    payload: id,
  };
};
export const editTodo = (id, newDesc) => {
  return {
    type: "EDIT-TODO",
    payload: {
      id,
      description : newDesc,
    }
  };
};
export const deleteTodo = (id) => {
  return {
    type: "DELETE-TODO",
    payload: 
      id
  };
};

