import React from "react";
import ToDoList from "./Components/ToDoList";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-600 to-pink-400 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-6 sm:p-10">
        <ToDoList />
      </div>
    </div>
  );
}

export default App;