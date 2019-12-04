import {
  CREATE_PROJECT,
  CREATE_FILTER,
  CREATE_MARK,
  CREATE_TASK,
  SORT_TASKS
} from "../constants";

export const createProject = project => {
  return {
    type: CREATE_PROJECT,
    project
  };
};

export const createFilter = filter => {
  return {
    type: CREATE_FILTER,
    filter
  };
};

export const createMark = mark => {
  return {
    type: CREATE_MARK,
    mark
  };
};

export const createTask = task => {
  return {
    type: CREATE_TASK,
    task
  };
};

export const sortTasks = tasks => {
  return {
    type: SORT_TASKS,
    tasks
  };
};
