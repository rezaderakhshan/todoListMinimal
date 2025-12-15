import { Check } from "lucide-react";
import type { Task } from "./TaskList";
import { useState } from "react";
import { useTaskActions } from "../contexts/TaskContext";

type EditTaskFormProps = {
  task: Task;
  setEditingTaskId: React.Dispatch<React.SetStateAction<number | null>>;
};
const EditTaskForm = ({ task, setEditingTaskId }: EditTaskFormProps) => {
  const [editText, setEditText] = useState(task.text);
  const [editPriority, setEditPriority] = useState(task.priority);
  const taskActions = useTaskActions();
  if (!taskActions) throw new Error("used outside the provider");
  const { updateTask } = taskActions;

  const saveEdit = () => {
    if (editText.trim()) {
      updateTask({ taskId: task.id, editText, editPriority });
      setEditingTaskId(null);
    }
  };

  return (
    <>
      <input
        type="text"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
        style={{
          flexGrow: 1,
          padding: "5px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <input
        type="number"
        min={"1"}
        value={editPriority}
        onChange={(e) => setEditPriority(+e.target.value)}
        style={{
          width: "50px",
          padding: "5px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <button
        onClick={saveEdit}
        style={{
          borderRadius: "50%",
          backgroundColor: "#28a745",
          color: "#fff",
          padding: "10px",
          border: "none",
          cursor: "pointer",
        }}
      >
        <Check size={16} />
      </button>
    </>
  );
};

export default EditTaskForm;
