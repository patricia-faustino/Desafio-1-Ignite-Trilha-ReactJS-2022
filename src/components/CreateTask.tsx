import React, { useState } from "react";
import addIcon from "../assets/plus-icon.svg";
import Tarefa from "../model/Task";
import { v4 as idv4 } from "uuid";
import styles from "./CreateTask.module.css";

type CreateTaskProps = {
  tasks: Tarefa[];
  setTasks: (tasks: Tarefa[]) => void;
};

export function CreateTask({ setTasks, tasks }: CreateTaskProps) {
  const [content, setContent] = useState("");

  function handleTarefa() {
    if (content) {
      const tasksUpdated = [...tasks];
      tasksUpdated.push({ id: idv4(), content, done: false });
      setTasks(tasksUpdated);
      setContent("");
    }
  }

  return (
    <div className={styles.div}>
      <input
        className={styles.input}
        placeholder="Adicione uma nova tarefa"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
      <button onClick={() => handleTarefa()}>
        Criar <img src={addIcon} alt="adicionar" />
      </button>
    </div>
  );
}
