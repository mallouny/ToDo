import React from "react";
import { useState } from "react";
import ToDo from "./components/ToDo";
import Form from "./components/Form";

function App() {
  const [todos, setTodos] = useState([]);
  
  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        complete: false,
      };
      setTodos([...todos, newItem]);
    }
  };

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };
  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id == id ? { ...todo, complete: !todo.complete } : { ...todo }
      ),
    ]);
  };

    const changeEditTask = (id , valueInput) => {
      setTodos([
      ...todos.map((todo) => 
        todo.id == id ? { ...todo, task : valueInput } : {...todo}
      ),
      ]);
    };
   console.log(todos)
  return (
    <div class="bg-fixed bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 flex justify-center h-screen relative">
      <div class="absolute  bg-white bg-opacity-40 w-2/6 h-4/5 mt-24 rounded-3xl overflow-auto ">
        <div class=" absolute mt-5 ml-72 flex font-bold">
          Task  {todos.length}
        </div>

        <Form addTask={addTask} />
        
        <div class="mt-40  flex-col justify-center items-center flex ">
          {todos.map((todo) => {
            return (

              <div class=" mt-4 h-16 w-4/5 bg-gray-200 bg-opacity-60 shadow-md rounded-3xl">
                <ToDo
                  todo={todo}
                  toggleTask={handleToggle}
                  removeTask={removeTask}
                  key={todo.id}
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
