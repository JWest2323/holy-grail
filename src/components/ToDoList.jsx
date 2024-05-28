import "./css/ToDoList.css";
import { useState } from "react";

let id = 0;

const INITIAL_TASKS = [
  { id: id++, task: "Walk the dog" },
  { id: id++, task: "Water the plants" },
  { id: id++, task: "Wash the dishes" }
];

const ToDoList = () => {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [newTask, setNewTask] = useState("");

  const handleChange = input => {
    setNewTask(input);
  };

  const handleSubmit = () => {
    if (newTask === "") return;

    setTasks(prevState => [
      ...prevState,
      {
        id: id++,
        task: newTask.trim()
      }
    ]);
    setNewTask("");
  };

  const handleKeyDown = event => {
    if (event.key === "Enter") handleSubmit();
  };

  const handleDelete = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <div className="todo-list_input-container">
        <input
          value={newTask}
          onKeyDown={handleKeyDown}
          onChange={event => handleChange(event.target.value)}
          type="text"
          name="todo"
          placeholder="Add your task"
          id="todo"
        />
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </div>
      <div className="todo-list_items-container">
        <ul>
          {tasks && tasks.length
            ? tasks.map(({ id, task }) => {
                return (
                  <li key={id}>
                    <span>{task}</span>
                    <button onClick={() => handleDelete(id)}>Delete</button>
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
