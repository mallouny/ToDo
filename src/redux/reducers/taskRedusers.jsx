import * as actions from "../actions/taskActions";

export const defaultState = {
  todos: [],
  hasErrors: false,
};

export default function tasksReducer(state = defaultState, action) {
  switch (action.type) {
    case actions.POST_TASK:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        hasErrors: false,
      };
    case actions.SORTED_TASKS:
      return { todos: [...action.payload], hasErrors: false };
    case actions.GET_POSTS_SUCCESS:
      return { todos: action.payload, hasErrors: false };
    case actions.GET_POSTS_FAILURE:
      return { ...state, hasErrors: true };
    case actions.PUT_TASKS:
      return {
        todos: state.todos.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
        hasErrors: false,
      };
    case actions.DEL_TASKS:
      return {
        todos: state.todos.filter((item) => item.id !== action.payload),
        hasErrors: false,
      };

    default:
      return state;
  }
}
