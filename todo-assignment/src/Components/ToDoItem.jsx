import React, { useState } from "react";

function ToDoItem({ task, toggleComplete, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTaskName, setNewTaskName] = useState(task.name);

  const handleEdit = () => {
    if (newTaskName.trim()) {
      editTask(task.id, newTaskName);
      setIsEditing(false);
    }
  };

  return (
    <tr className="border-b">
      {/* Task Name */}
      <td className="py-2">
        {isEditing ? (
          <input
            type="text"
            value={newTaskName}
            className="border-2 border-gray-300 rounded-md p-1 w-full"
            onChange={(e) => setNewTaskName(e.target.value)}
          />
        ) : (
          task.name
        )}
      </td>

      {/* Status */}
      <td className="py-2">
        { task.completed ? <span
          className={`px-3 py-1 text-white rounded-full bg-green-500
            }`}
        >
          Completed
        </span>:
        <span
        className={`px-3 py-1 text-white rounded-full cursor-pointer ${task.completed ? "bg-green-500" : "bg-gray-400"
          }`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.completed ? "Completed" : "Pending"}
      </span>}
      </td>

      {/* Edit & Delete Buttons */}
      <td className="py-2 flex flex-col sm:flex-row gap-2 justify-start items-center">
       {!task.completed ? <> {isEditing ? (
          <button
            onClick={handleEdit}
            className="px-3 py-1 text-white rounded-full cursor-pointer bg-blue-300 hover:bg-blue-500"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="cursor-pointer text-yellow-500 hover:underline"
          >
            <div className="p-2 cursor-pointer">
              <svg width="18" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8344 1.54314C11.0066 1.37094 11.211 1.23435 11.436 1.14116C11.661 1.04796 11.9021 1 12.1456 1C12.3891 1 12.6303 1.04796 12.8553 1.14116C13.0802 1.23435 13.2847 1.37094 13.4569 1.54314C13.6291 1.71533 13.7657 1.91976 13.8588 2.14474C13.952 2.36973 14 2.61086 14 2.85439C14 3.09791 13.952 3.33904 13.8588 3.56403C13.7657 3.78901 13.6291 3.99344 13.4569 4.16563L4.60593 13.0166L1 14L1.98344 10.3941L10.8344 1.54314Z" stroke="#BCBFCB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </button>
        )}
        <button
          onClick={() => deleteTask(task.id)}
          className=" cursor-pointer text-red-500 hover:underline"
        >

          <div className="p-2"><svg width="18" height="20" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 5H3H19" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17 5V19C17 19.5304 16.7893 20.0391 16.4142 20.4142C16.0391 20.7893 15.5304 21 15 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5M6 5V3C6 2.46957 6.21071 1.96086 6.58579 1.58579C6.96086 1.21071 7.46957 1 8 1H12C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V5" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8 10V16" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 10V16" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg></div>
        </button></>: <div>-</div>}
      </td>
    </tr>
  );
}

export default ToDoItem;
