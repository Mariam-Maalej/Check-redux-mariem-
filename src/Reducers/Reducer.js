const initialState = {
  todos: [
    {
      id: 1,
      description: "Go shopping",
      isDone: false,
    },
    {
      id: 2,
      description: "Practise sport in the gym",
      isDone: false,
    },
    {
      id: 3,
      description: "Watch a movie with friends",
      isDone: false,
    },
  ],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "TOGGLE-TODO":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    case "EDIT-TODO":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, description: action.payload.description }
            : todo
        ),
      };
    case "DELETE-TODO":
      return {
        todos: state.todos.filter((todo) =>
          todo.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default Reducer;
