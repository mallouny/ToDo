import { combineReducers } from "redux";
import tasksReducer from "./reducers/taskRedusers";

const rootReducer = combineReducers({
  tasksReducer: tasksReducer,
});

export default rootReducer;
