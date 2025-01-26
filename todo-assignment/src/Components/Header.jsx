import React, { useState } from "react";

function Header({ addTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = () => {
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <div className="mb-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-purple-700 mb-4">
        TODO List
      </h1>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <input
          type="text"
          className="flex-grow border-2 border-gray-300 rounded-md p-2 w-full sm:w-2/3"
          placeholder="What would you like to do?"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 w-full sm:w-auto"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Header;
