import React, { useState } from "react";
import VisibilityToggleButton from "./VisibilityToggleButton";

function SignInForm() {
  const [isVisible, setVisibility] = useState(false);

  const passwordVisibilityToggle = () => {
    setVisibility(!isVisible);
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center bg-teal-1">
      <div>
        <div className="d-flex justify-content-center mb-4">
          <p className="h4">Sign in</p>
        </div>
        <div
          className="bg-green-2 rounded rounded-4 p-5 mb-5"
          style={{ width: "400px" }}
        >
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
              <VisibilityToggleButton onClick={passwordVisibilityToggle} />
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn btn-success px-4" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="d-flex justify-content-center">
          <div className="me-4">
            <p>New to ToDo?</p>
          </div>
          <div>
            <a className="page-link link-primary" href="/sign-up">
              Create account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;
