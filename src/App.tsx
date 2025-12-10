import { useState } from "react";
import TaskControls from "./components/TaskControls";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Buy groceries", priority: 4, done: true },
    { id: 2, text: "Have a walk", priority: 2, done: false },
    { id: 3, text: "Read a book", priority: 3, done: false },
  ]);
  const [showOnlyIncomplete, setShowOnlyIncomplete] = useState(false);
  const sortTasks = () => {
    const sortedTasks = [...tasks].sort((a, b) => a.priority - b.priority);
    setTasks(sortedTasks);
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
      <TaskForm />
      <TaskControls
        showOnlyIncomplete={showOnlyIncomplete}
        setShowOnlyIncomplete={setShowOnlyIncomplete}
        sortTasks={sortTasks}
      />
      <TaskList showOnlyIncomplete={showOnlyIncomplete} tasks={tasks} />
    </div>
  );
};

export default App;
