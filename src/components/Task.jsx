import React from "react";

function Task({ id, description }) {
  return (
    <div className="d-block d-flex align-items-center bg-green-2 mb-4 py-3 px-4 rounded">
      <div className="d-inline-block border-end border-dark fs-4 me-3 pe-3">
        {id}
      </div>
      <div className="w-100">{description}</div>
      <div className="d-flex border-start border-dark ps-3">
        <button className="btn btn-primary me-3 py-2 px-4">Edit</button>
        <button className="btn btn-danger py-2 px-3">Delete</button>
      </div>
    </div>
  );
}

export default Task;
