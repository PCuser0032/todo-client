import React from "react";
import "../css/modal.css";

function DeleteModalForm({ active, setActive }) {
  return (
    <div
      className={`opacity-50 vw-100 vh-100 top-0 start-0 bg-green-1 position-fixed ${active ? "modal active" : "modal"}`}
      onClick={() => setActive(false)}
      style={{ zIndex: "100" }}
    ></div>
  );
}

export default DeleteModalForm;
