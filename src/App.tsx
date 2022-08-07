import React, { useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import "./global.css";
import Tarefa from "./model/Task";

function App() {
  const [tasks, setTasks] = useState<Tarefa[]>([]);
  return (
    <>
      <Header />
      <Body tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;
