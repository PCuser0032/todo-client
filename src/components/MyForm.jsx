import React, { useState } from "react";
import "../css/Button.css";

function MyForm() {
  const [isVisible, setVisibility] = useState(false);

  const handlerButton = () => {
    setVisibility(!isVisible);
  };

  return (
    <form>
      <div className="mb-4">
        <input
          className="form-control px-3 py-2"
          type="text"
          name="login"
          placeholder="login"
          required
        />
      </div>
      <div className="position-relative mb-5">
        <input
          className="d-inline-block form-control px-3 py-2"
          type={`${isVisible ? "text" : "password"}`}
          name="password"
          placeholder="password"
          required
        />
        <button
          onClick={handlerButton}
          className={`Button ${isVisible ? "Invisible" : "Visible"}`}
        ></button>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-success px-4" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default MyForm;
