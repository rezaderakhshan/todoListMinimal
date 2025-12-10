import TaskItem from "./TaskItem";

type TaskListProps = {
  tasks: Task[];
  showOnlyIncomplete: boolean;
};

export type Task = {
  id: number;
  text: string;
  priority: number;
  done: boolean;
};
const TaskList = ({ tasks, showOnlyIncomplete }: TaskListProps) => {
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
            <TaskItem task={task} />
          </li>
        ))}
    </ul>
  );
};

export default TaskList;
