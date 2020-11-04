import React, { useState } from "react";
import "./App.css";
import AddTask from "./Components/AddTask";
import ListTask from "./Components/ListTask";
import Filter from "./Components/Filter";
import { useSelector } from "react-redux";

function App() {
  const todoList = useSelector((state) => state.todos);
  const [filterList, setFilterList] = useState(todoList);
  const [status, setStatus] = useState("ALL");
  return (
    <div className="App">
      <ListTask filterList={filterList} status={status} />
      <br></br>
      <Filter
        setFilterList={setFilterList}
        todoList={todoList}
        status={status}
        setStatus={setStatus}
      /><br></br>
      <AddTask />
    </div>
  );
}

export default App;
