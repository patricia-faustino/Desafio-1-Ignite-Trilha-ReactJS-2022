import React from "react";
import Tarefa from "../model/Task";
import check from "../assets/check.svg";
import uncheck from "../assets/uncheck.svg";
import trash from "../assets/trash.svg";
import styles from "./Task.module.css";

type TaskProps = {
  completeTask: (id: string) => void;
  deleteTask: (id: string) => void;
  task: Tarefa;
};

export default function Task({ completeTask, deleteTask, task }: TaskProps) {
  return (
    <div className={styles.div}>
      <button onClick={() => completeTask(task.id)}>
        <img src={task.done ? check : uncheck} />
      </button>
      <p className={task.done ? styles.trashed : ""}>{task.content}</p>
      <button onClick={() => deleteTask(task.id)}>
        <img src={trash} />
      </button>
    </div>
  );
}
