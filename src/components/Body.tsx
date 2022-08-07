import React from "react";
import Tarefa from "../model/Task";
import styles from "./Body.module.css";
import Info from "./Info";
import TaskEmpty from "./TaskEmpty";
import Task from "./Task";
import { CreateTask } from "./CreateTask";

type BodyProps = {
  tasks: Tarefa[];
  setTasks: (task: Tarefa[]) => void;
};

export default function Body({ tasks, setTasks }: BodyProps) {
  function handleCompleteTask(id: string) {
    const tarefasUpdated = [...tasks];
    const tarefaFind = tarefasUpdated.find((tarf) => tarf.id === id);
    if (tarefaFind) {
      tarefaFind.done = !tarefaFind.done;
    }
    setTasks(tarefasUpdated);
  }

  function handleDeleteTask(id: string) {
    const tarefasUpdated = tasks.filter((task) => task.id !== id);
    setTasks(tarefasUpdated);
  }

  return (
    <div className={styles.content}>
      <CreateTask setTasks={setTasks} tasks={tasks} />

      <Info tasks={tasks} />

      {tasks.length === 0 && <TaskEmpty />}
      {tasks.length !== 0 &&
        tasks.map((task) => {
          return (
            <Task
              key={task.id}
              completeTask={handleCompleteTask}
              deleteTask={handleDeleteTask}
              task={task}
            />
          );
        })}
    </div>
  );
}
