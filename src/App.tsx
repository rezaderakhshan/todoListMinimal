import { useReducer, useState } from "react";
import TaskControls from "./components/TaskControls";
import TaskForm from "./components/TaskForm";
import TaskList, { type Task } from "./components/TaskList";
import { getStoredTasks } from "./utils/localStorageUtils";
import { taskReducer } from "./reducers/taskReducers";
import { TaskContext } from "./contexts/TaskContext";
export type UpdateTaskArguments = {
  taskId: number;
  editText: string;
  editPriority: number;
};

const App = () => {
  const [tasks, dispatch] = useReducer(taskReducer, getStoredTasks());
  const [showOnlyIncomplete, setShowOnlyIncomplete] = useState(false);
  const addTask = (newTask: Task) => {
    dispatch({ type: "ADD", payload: newTask });
  };
  const sortTasks = () => {
    dispatch({ type: "SORT" });
  };

  const removeTask = (id: number) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const toggleTaskDone = (id: number) => {
    dispatch({ type: "TOGGLE", payload: id });
  };

  const updateTask = ({
    taskId,
    editText,
    editPriority,
  }: UpdateTaskArguments) => {
    dispatch({ type: "UPDATE", payload: { taskId, editText, editPriority } });
  };

  return (
    <TaskContext value={{ removeTask, toggleTaskDone, updateTask }}>
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
        <TaskList showOnlyIncomplete={showOnlyIncomplete} tasks={tasks} />
      </div>
    </TaskContext>
  );
};

export default App;
