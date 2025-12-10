import { useState } from "react";
import TaskItem from "./TaskItem";
import EditTaskForm from "./EditTaskForm";
import type { UpdateTaskArguments } from "../App";

type TaskListProps = {
  tasks: Task[];
  showOnlyIncomplete: boolean;
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
  updateTask: ({ editText, taskId, editPriority }: UpdateTaskArguments) => void;
};

export type Task = {
  id: number;
  text: string;
  priority: number;
  done: boolean;
};
const TaskList = ({
  tasks,
  showOnlyIncomplete,
  toggleTaskDone,
  removeTask,
  updateTask,
}: TaskListProps) => {
  const [editingTaskId, setEditingTaskId] = useState<null | number>(null);
  return (
    <ul>
      {tasks
        .filter((task) => !showOnlyIncomplete || !task.done)
        .map((task) => (
          <li
            key={task.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px",
              borderBottom: "1px solid #ccc",
              gap: "10px",
            }}
          >
            {editingTaskId === task.id ? (
              <EditTaskForm
                updateTask={updateTask}
                setEditingTaskId={setEditingTaskId}
                task={task}
              />
            ) : (
              <TaskItem
                removeTask={removeTask}
                toggleTaskDone={toggleTaskDone}
                setEditingTaskId={setEditingTaskId}
                task={task}
              />
            )}
          </li>
        ))}
    </ul>
  );
};

export default TaskList;
