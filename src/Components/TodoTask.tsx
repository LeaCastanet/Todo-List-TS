import React from "react";
import { ITask } from "../Interfaces";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span className="spanTask">{task.taskName}</span>
        <span className="spanDeadline">{task.deadline}</span>
      </div>
      <button
        className="buttonDelete"
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        X
      </button>
    </div>
  );
};

export default TodoTask;
