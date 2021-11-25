import React from "react";
import { useState } from "react";

function ToDo({ todo, removeTask, changeEditTask }) {
  const [valueInput, setValueInput] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [x, setX] = useState(false);

  const handleChange = (input) => {
    setEditMode((prevState) => !prevState);
    if (editMode) {
      if (valueInput.length < 1) {
        alert("Please type more words");
      } else {
        changeEditTask(todo.id, valueInput);
      }
    } else {
      setValueInput(input);
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleChange();
    }
  };

  return (
    <div class="relative flex justify-content-center pt-4">
      <div key={todo.id}>
        <div class=" absolute flex justify-content-center left-8 mt-1 break-all">
          {todo.title}
        </div>

        {editMode ? (
          <div>
            <input
              class=" bg-gray-200 w-96 h-8 flex absolute justify-center justify-content-center ml-8 checked:border-transparent focus:outline-none rounded-md"
              autoFocus
              maxLength={50}
              value={valueInput}
              onChange={(e) => setValueInput(e.currentTarget.value)}
              onKeyDown={handleKeyPress}
              type="text"
            />
          </div>
        ) : (
          console.log("edit none")
        )}
        <input
          class="absolute mt-2 ml-2 h-5 w-5 bg-purple-400 "
          type="checkbox"
          checked={x}
          onChange={() => setX(!x)}
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 absolute flex right-6 mt-1 opacity-80"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => removeTask(todo.id)}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 absolute flex right-14 mt-1 opacity-80"
          viewBox="0 0 20 20"
          fill="currentColor"
          onClick={() => handleChange(todo.title)}
        >
          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
          <path
            fill-rule="evenodd"
            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}

export default ToDo;
