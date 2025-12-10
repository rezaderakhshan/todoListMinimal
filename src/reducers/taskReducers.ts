import type { Task } from "../components/TaskList";
import { updateLocalStorage } from "../utils/localStorageUtils";
type TAction =
  | { type: "ADD"; payload: Task }
  | { type: "REMOVE"; payload: number }
  | { type: "UPDATE"; payload: UpdateTaskArguments }
  | { type: "SORT" }
  | { type: "TOGGLE"; payload: number };

export type UpdateTaskArguments = {
  taskId: number;
  editText: string;
  editPriority: number;
};
export const taskReducer = (state: Task[], action: TAction) => {
  let updatedTasks;

  switch (action.type) {
    case "ADD":
      updatedTasks = [...state, action.payload];
      break;

    case "REMOVE":
      updatedTasks = state.filter((task) => task.id !== action.payload);
      break;

    case "UPDATE":
      updatedTasks = state.map((task) =>
        task.id === action.payload.taskId
          ? {
              ...task,
              text: action.payload.editText,
              priority: action.payload.editPriority,
            }
          : task
      );
      break;

    case "SORT":
      updatedTasks = [...state].sort((a, b) => a.priority - b.priority);
      break;

    case "TOGGLE":
      updatedTasks = state.map((task) =>
        task.id === action.payload ? { ...task, done: !task.done } : task
      );
      break;
    default:
      updatedTasks = state;
  }
  updateLocalStorage(updatedTasks);
  return updatedTasks;
};
