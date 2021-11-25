import React from "react";
import { useState } from "react";

function Form({ addTask }) {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      class="absolute  flex justify-items-center mt-16 ml-24 p-4 w-auto bg-white rounded-xl shadow-md"
    >
      <input
        class="form-tick appearance-none h-8 w-96  rounded-md checked:bg-white checked:border-transparent focus:outline-none"
        value={userInput}
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="Add Task"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 mt-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
        />
      </svg>
    </form>
  );
}

export default Form;
