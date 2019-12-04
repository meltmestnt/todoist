import { CREATE_TASK, SORT_TASKS } from "./../constants";

const initialState = {
  tasks: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.task]
      };
      break;
    case SORT_TASKS:
      return {
        ...state,
        tasks: [...action.tasks]
      };
      break;
    default:
      return state;
  }
};
