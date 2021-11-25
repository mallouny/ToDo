import { host } from "../../components/host";

export const POST_TASK = "POST_TASK";
export const SORTED_TASKS = "SORTED_TASKS";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";
export const PUT_TASKS = "PUT_TASKS";
export const DEL_TASKS = "DEL_TASKS";

export const postTask = (todos) => ({
  type: POST_TASK,
  payload: todos,
});

export const sortTask = (todos) => ({
  type: SORTED_TASKS,
  payload: todos,
});

export const getPostsSuccess = (todos) => ({
  type: GET_POSTS_SUCCESS,
  payload: todos,
});

export const getPostsFailure = (error) => ({
  type: GET_POSTS_FAILURE,
  payload: error,
});

export const putTask = (todos) => ({
  type: PUT_TASKS,
  payload: todos,
});

export const delTask = (todosId) => ({
  type: DEL_TASKS,
  payload: todosId,
});

export function sortedTasks(task) {
  return async (dispatch) => {
    dispatch(sortTask(task));
  };
}
export function fetchTasks() {
  return async (dispatch) => {
    try {
      const response = await fetch(`${host}/api/tasks/list`);
      const data = await response.json();

      dispatch(getPostsSuccess(data));
    } catch (error) {
      dispatch(getPostsFailure());
    }
  };
}
export function deleteTask(id) {
  return async (dispatch) => {
    const response = await fetch(`${host}/api/tasks/remove/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data.rez) {
      dispatch(delTask(id));
    }
  };
}

export function changeTask({ id, title, description, status }) {
  return async (dispatch) => {
    const response = await fetch(`${host}/api/tasks/change/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        title,
        description,
        status,
      }),
    });
    const data = await response.json();
    dispatch(putTask(data));
  };
}

export function addTask({ id, title, description, status }) {
  return async (dispatch) => {
    try {
      const response = await fetch(`${host}/api/tasks/add`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          title,
          description,
          status,
        }),
      });
      const data = await response.json();
      dispatch(postTask(data));
    } catch {
      dispatch(getPostsFailure());
    }
  };
}
