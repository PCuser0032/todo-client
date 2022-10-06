import React from "react";
import VisibilityToggleButton from "./VisibilityToggleButton";

function SignUpForm() {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center bg-teal-1">
      <div>
        <div className="d-flex justify-content-center mb-4">
          <p className="h4">Sign up</p>
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
                type="password"
                name="password"
                placeholder="password"
                required
              />
              <VisibilityToggleButton />
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
            <p>Already have an account?</p>
          </div>
          <div>
            <a className="page-link link-primary" href="/sign-in">
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
