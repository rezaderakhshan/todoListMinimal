import { Pencil, Trash } from "lucide-react";
import type { Task } from "./TaskList";
type TaskItemProps = {
  task: Task;
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
  setEditingTaskId: React.Dispatch<React.SetStateAction<number | null>>;
};
const TaskItem = ({
  task,
  toggleTaskDone,
  removeTask,
  setEditingTaskId,
}: TaskItemProps) => {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
        <input
          type="checkbox"
          onChange={() => toggleTaskDone(task.id)}
          checked={task.done}
          style={{ marginRight: "10px" }}
        />
        <span
          style={{
            textDecoration: task.done ? "line-through" : "none",
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {task.text}
          <span
            style={{
              backgroundColor: "#6f42c1",
              color: "#fff",
              borderRadius: "50%",
              padding: "4px 8px",
              fontSize: "12px",
              textAlign: "center",
              display: "inline-block",
            }}
          >
            {task.priority}
          </span>
        </span>
      </div>
      <div style={{ display: "flex", gap: "5px" }}>
        <button
          onClick={() => setEditingTaskId(task.id)}
          style={{
            borderRadius: "50%",
            backgroundColor: "#ffc107",
            color: "#000",
            padding: "10px",
            border: "none",
            cursor: "pointer",
          }}
        >
          <Pencil />
        </button>
        <button
          onClick={() => removeTask(task.id)}
          style={{
            borderRadius: "50%",
            backgroundColor: "#dc3545",
            color: "#fff",
            padding: "10px",
            border: "none",
            cursor: "pointer",
          }}
        >
          <Trash />
        </button>
      </div>
    </>
  );
};

export default TaskItem;
