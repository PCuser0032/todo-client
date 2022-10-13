import React, { useState } from "react";
// import Task from "./Task";
import "../css/todo.css";
import "../css/avatar.css";
// import avatar from "../img/grug.jpeg";
import avatar from "../img/tree.jpg";
import DeleteModalForm from "./DeleteModalForm";

function ToDo() {
  const username = "Denis";

  const [active, setModalActive] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [taskDescription, setTaskDescription] = useState("");

  const items = taskList.map((description, index) => {
    return (
      <li key={index}>
        {/* <Task id={index + 1} description={description} /> */}
        <div className="d-block d-flex align-items-center bg-green-2 mb-4 py-3 px-4 rounded">
          <div className="d-inline-block border-end border-dark fs-4 me-3 pe-3">
            {index + 1}
          </div>
          <div className="w-100">{description}</div>
          <div className="d-flex border-start border-dark ps-3">
            <button className="btn btn-primary me-3 py-2 px-4">Edit</button>
            <button className="btn btn-danger py-2 px-3">Delete</button>
          </div>
        </div>
      </li>
    );
  });

  const descriptionHandler = (e) => {
    setTaskDescription(e.target.value);
  };

  const clearDescription = () => {
    setTaskDescription("");
  };

  const addTask = () => {
    if (!(taskDescription === "")) {
      setTaskList([...taskList, taskDescription]);
      clearDescription();
    }
  };

  return (
    <div className="position-relative vh-100 bg-green-1">
      <DeleteModalForm active={active} setActive={setModalActive} />
      <header
        className="position-absolute w-100 d-flex justify-content-between align-items-center bg-green-2 py-3 px-4"
        style={{ zIndex: 2 }}
      >
        <div className="d-flex align-items-center">
          <div className="avatar rounded rounded-circle me-3">
            <img src={avatar} alt="user avatar" width="72px" />
          </div>
          <div className="fs-5">{username}</div>
        </div>
        <div className="fs-3 fw-semibold">ToDo</div>
      </header>
      <div
        className="position-absolute w-100 d-flex justify-content-center pt-5 bg-green-1"
        style={{ zIndex: 1, top: "96px" }}
      >
        <main className="main">
          <div className="d-flex justify-content-between bg-green-2 mb-5 py-3 px-4 rounded">
            <input
              value={taskDescription}
              onChange={descriptionHandler}
              className="form-control me-5 py-2 px-3"
              type="text"
              placeholder="Enter task"
            />
            <button
              onClick={addTask}
              className="btn btn-success py-2 px-4"
              type="button"
            >
              Add
            </button>
          </div>
          <ul className="list-unstyled">{items}</ul>
        </main>
      </div>
    </div>
  );
}

export default ToDo;
