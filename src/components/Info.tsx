import React from "react";
import Task from "../model/Task";
import styles from "./Info.module.css";

type InfoProps = {
  tasks: Task[];
};

export default function Info({ tasks }: InfoProps) {
  return (
    <header className={styles.header}>
      <div className={styles.created}>
        <p>Tarefas criadas</p>
        <span>{tasks.length}</span>
      </div>

      <div className={styles.done}>
        <p>Concluídas</p>
        <span>{tasks.filter((task) => task.done).length} de  {tasks.length}</span>
      </div>
    </header>
  );
}
