import React from "react";
import ToDoItem from "./ToDoItem";
import Header from "./Header";

function ToDoList() {
  const [tasks, setTasks] = React.useState([]);

  const addTask = (taskName) => {
    setTasks([
      ...tasks,
      { id: Date.now(), name: taskName, completed: false },
    ]);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, newName) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, name: newName } : task
      )
    );
  };

  return (
    <div>
      <Header addTask={addTask} />
      <div className="bg-gray-50 rounded-md shadow-md p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
          Todo List
        </h2>
        <table className="w-full text-left table-fixed">
          <thead>
            <tr className="text-gray-600">
              <th className="py-2 w-1/2">List</th>
              <th className="py-2 w-1/4">Status</th>
              <th className="py-2 w-1/4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <ToDoItem
                key={task.id}
                task={task}
                toggleComplete={toggleComplete}
                deleteTask={deleteTask}
                editTask={editTask}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ToDoList;
