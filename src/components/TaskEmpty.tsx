import React from "react";
import styles from "./TaskEmpty.module.css";
import clipboard from "../assets/clipboard.svg";

export default function TaskEmpty() {
  return (
    <div className={styles.div}>
      <img src={clipboard} />
      <span>
        Você ainda não tem tarefas cadastradas Crie tarefas e organize seus
        itens a fazer
      </span>
    </div>
  );
}
