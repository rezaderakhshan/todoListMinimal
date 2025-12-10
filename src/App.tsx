import { useState } from "react";
import TaskControls from "./components/TaskControls";
import TaskForm from "./components/TaskForm";
import TaskList, { type Task } from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Buy groceries", priority: 4, done: true },
    { id: 2, text: "Have a walk", priority: 2, done: false },
    { id: 3, text: "Read a book", priority: 3, done: false },
  ]);
  const [showOnlyIncomplete, setShowOnlyIncomplete] = useState(false);
  const addTask = (newTask: Task) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
  };
  const sortTasks = () => {
    const sortedTasks = [...tasks].sort((a, b) => a.priority - b.priority);
    setTasks(sortedTasks);
  };

  const removeTask = (id: number) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  const toggleTaskDone = (id: number) => {
    const toggleTasks = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(toggleTasks);
  };
  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial",
        maxWidth: "800px",
        margin: "auto",
      }}
    >
      <h2 style={{ textAlign: "center" }}>To-Do List</h2>
      <TaskForm addTask={addTask} />
      <TaskControls
        showOnlyIncomplete={showOnlyIncomplete}
        setShowOnlyIncomplete={setShowOnlyIncomplete}
        sortTasks={sortTasks}
      />
      <TaskList
        toggleTaskDone={toggleTaskDone}
        showOnlyIncomplete={showOnlyIncomplete}
        tasks={tasks}
        removeTask={removeTask}
      />
    </div>
  );
};

export default App;
