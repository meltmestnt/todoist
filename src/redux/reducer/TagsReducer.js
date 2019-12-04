import { CREATE_PROJECT, CREATE_MARK, CREATE_FILTER } from "../constants";

const initialState = {
  projects: [],
  marks: [],
  filters: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PROJECT: {
      return {
        ...state,
        projects: [...state.projects, action.project]
      };
      break;
    }
    case CREATE_MARK: {
      return {
        ...state,
        marks: [...state.marks, action.mark]
      };
      break;
    }
    case CREATE_FILTER: {
      return {
        ...state,
        filters: [...state.filters, action.filter]
      };
      break;
    }
    default:
      return state;
  }
};
