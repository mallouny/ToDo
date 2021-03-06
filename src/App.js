import React from "react";
import { useEffect } from "react";
import ToDo from "./components/ToDo";
import Form from "./components/Form";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTasks,
  deleteTask,
  addTask,
  changeTask,
} from "../src/redux/actions/taskActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const { todos } = useSelector((state) => state.tasksReducer);

  const handleAddTask = (userInput, descriptionInput) => {
    if (userInput.length < 5 && descriptionInput < 5) {
      alert(" Min. Characters =  5");
    } else {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        title: userInput,
        status: 1,
        description: descriptionInput,
      };
      dispatch(addTask(newItem));
    }
  };

  const removeTask = (id) => {
    dispatch(deleteTask(id));
  };

  const changeEditTask = (id, valueInput, flag, todo) => {
    
    if (flag) {
      dispatch(
        changeTask({
          id: id,
          title: todo.title,
          status: 1,
          description: valueInput,
        })
      );
    } 
    else {
      dispatch(
        changeTask({
          id: id,
          title: valueInput,
          status: 1,
          description: todo.description,
        })
      );
    }
  };
  
  
  

  return (
    <div class="bg-fixed bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 flex justify-center h-screen relative">
      <div class="absolute  bg-white bg-opacity-40 w-2/6 h-4/5 mt-24 rounded-3xl overflow-auto ">
        <div class=" absolute mt-5 ml-72 flex font-bold">
          Task {todos.length}
        </div>

        <Form addTask={handleAddTask} />

        <div class="mt-52  flex-col justify-center items-center flex ">
          {todos.map((todo) => {
            return (
              <div class=" mt-4 h-16 w-4/5 bg-gray-200 bg-opacity-60 shadow-md rounded-3xl">
                <ToDo
                  todo={todo}
                  removeTask={removeTask}
                  key={todo.title}
                  changeEditTask={changeEditTask}
                  todos={todos}

                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
