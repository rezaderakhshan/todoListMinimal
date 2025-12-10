import { ArrowDownWideNarrow } from "lucide-react";
type TaskControlsProps = {
  showOnlyIncomplete: boolean;
  setShowOnlyIncomplete: React.Dispatch<React.SetStateAction<boolean>>;
  sortTasks: () => void;
};
const TaskControls = ({
  showOnlyIncomplete,
  setShowOnlyIncomplete,
  sortTasks,
}: TaskControlsProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: "10px",
        marginTop: "20px",
      }}
    >
      <label style={{ display: "flex", alignItems: "center" }}>
        <input
          type="checkbox"
          checked={showOnlyIncomplete}
          onChange={() => setShowOnlyIncomplete(!showOnlyIncomplete)}
          style={{ marginRight: "5px" }}
        />
        Show only incomplete
      </label>
      <button
        onClick={sortTasks}
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        <ArrowDownWideNarrow />
      </button>
    </div>
  );
};

export default TaskControls;
