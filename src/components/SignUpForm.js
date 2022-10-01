import React from "react";

function SignUpForm() {
  return (
    <div>
      <div className="d-flex justify-content-center mb-4">
        <p className="h4">Sign up</p>
      </div>
      <div className="w-100 bg-green-2 rounded rounded-4 p-5">
        <form>
          <div className="mb-4">
            <input
              className="form-control"
              type="text"
              placeholder="login"
              required
            />
          </div>
          <div className="mb-4">
            <input
              className="form-control"
              type="password"
              placeholder="password"
              required
            />
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
