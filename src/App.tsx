import { useState } from "react";
import TaskControls from "./components/TaskControls";
import TaskForm from "./components/TaskForm";
import TaskList, { type Task } from "./components/TaskList";
import { getStoredTasks, updateLocalStorage } from "./utils/localStorageUtils";
export type UpdateTaskArguments = {
  taskId: number;
  editText: string;
  editPriority: number;
};

const App = () => {
  const [tasks, setTasks] = useState(getStoredTasks());
  const [showOnlyIncomplete, setShowOnlyIncomplete] = useState(false);
  const addTask = (newTask: Task) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks);
  };
  const sortTasks = () => {
    const sortedTasks = [...tasks].sort((a, b) => a.priority - b.priority);
    setTasks(sortedTasks);
    updateLocalStorage(sortedTasks);
  };

  const removeTask = (id: number) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
    updateLocalStorage(filteredTasks);
  };

  const toggleTaskDone = (id: number) => {
    const toggleTasks = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(toggleTasks);
    updateLocalStorage(toggleTasks);
  };

  const updateTask = ({
    taskId,
    editText,
    editPriority,
  }: UpdateTaskArguments) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? { ...task, text: editText, priority: editPriority }
        : task
    );

    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks);
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
        updateTask={updateTask}
      />
    </div>
  );
};

export default App;
