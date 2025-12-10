import { Plus } from "lucide-react";
import { useState } from "react";
import type { Task } from "./TaskList";
type TaskFormProps = {
  addTask: (newTask: Task) => void;
};
const TaskForm = ({ addTask }: TaskFormProps) => {
  const [newTask, setNewTask] = useState("");
  const [newPriority, setNewPriority] = useState(1);
  const handleSubmit = () => {
    if (newTask.trim()) {
      addTask({
        id: Date.now(),
        text: newTask,
        priority: newPriority,
        done: false,
      });
      setNewTask("");
      setNewPriority(1);
    }
  };
  const inputStyle = {
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };
  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          placeholder="Enter new task"
          style={{ ...inputStyle, flexGrow: 1 }}
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <input
          type="number"
          min={"1"}
          style={{ ...inputStyle, width: "3.75rem" }}
          value={newPriority}
          onChange={(e) => setNewPriority(+e.target.value)}
        />
      </div>
      <button
        onClick={handleSubmit}
        style={{
          display: "block",
          margin: "20px auto 0",
          borderRadius: "50%",
          backgroundColor: "#007bff",
          color: "#fff",
          padding: "12px",
          border: "none",
          cursor: "pointer",
        }}
      >
        <Plus size={20} />
      </button>
    </div>
  );
};

export default TaskForm;
