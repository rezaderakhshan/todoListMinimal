import { createContext, useContext } from "react";
import type { UpdateTaskArguments } from "../reducers/taskReducers";
type TaskContextType = {
  removeTask: (id: number) => void;
  toggleTaskDone: (id: number) => void;
  updateTask: ({ taskId, editText, editPriority }: UpdateTaskArguments) => void;
};
export const TaskContext = createContext<TaskContextType | null>(null);
export const useTaskActions = () => useContext(TaskContext);
