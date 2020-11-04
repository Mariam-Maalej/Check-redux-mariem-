import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Actions/Actions";

const AddTask = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo === "") return;
    dispatch(addTodo(newTodo));
    setNewTodo("");
  };

  return (
    <div>
      <h4>Add a task</h4>
      <form onSubmit={handleSubmit}>
        <input
          className="input-task"
          type="text"
          placeholder="Enter task"
          value={newTodo}
          onChange={handleChange}
        ></input>
        <button type="submit" className="submit">
          Add
        </button>
      </form>
    </div>
  );
};
export default AddTask;
