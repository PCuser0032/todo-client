import React from "react";
import "../css/modal.css";

function DeleteModalForm({ active, setActive }) {
  return (
    <div
      className={`vw-100 vh-100 top-0 start-0 bg-green-1 bg-opacity-50 position-absolute`}
      style={{ zIndex: "1000" }}
    >
      <div className="position-absolute" style={{top: "33.3333%", left: "40%"}}>
        <div className="h-25 py-5 px-4 bg-green-2 rounded">
          <div className="mb-4">
            <h5>Are you sure you want to delete the task?</h5>
          </div>
          <div className="d-flex justify-content-center">
            <div>
              <button className="btn btn-danger me-5">Cancel</button>
              <button className="btn btn-success">Accept</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteModalForm;
