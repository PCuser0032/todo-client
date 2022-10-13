import React, { useState } from "react";
import "../css/Button.css";

function MyForm() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loginTouched, setLoginTouched] = useState("");
  const [passwordTouched, setPasswordTouched] = useState("");
  const [loginError, setLoginError] = useState("Login cannot be empty");
  const [passwordError, setPasswordError] = useState(
    "Password cannot be empty"
  );

  const loginHandler = (e) => {
    setLogin(e.target.value);
    if (e.target.value.length < 6 || e.target.value.length > 12) {
      setLoginError("Login cannot be less than 6 or more than 12 characters");
      if (!e.target.value) {
        setLoginError("Login cannot be empty");
      }
    } else {
      setLoginError("");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8 || e.target.value.length > 24) {
      setPasswordError(
        "Password cannot be less than 8 or more than 24 characters"
      );
      if (!e.target.value) {
        setPasswordError("Password cannot be empty");
      }
    } else {
      setPasswordError("");
    }
  };

  const blurHandler = (e) => {
    if (e.target.name === "login") {
      setLoginTouched(true);
    }
    if (e.target.name === "password") {
      setPasswordTouched(true);
    }
  };

  const [isVisible, setVisibility] = useState(false);

  const buttonHandler = () => {
    setVisibility(!isVisible);
  };

  return (
    <form>
      {loginTouched && loginError && (
        <div className="text-danger mb-2">{loginError}</div>
      )}
      <div className="mb-4">
        <input
          onChange={(e) => loginHandler(e)}
          value={login}
          onBlur={(e) => blurHandler(e)}
          className="form-control px-3 py-2"
          type="text"
          name="login"
          placeholder="login"
        />
      </div>
      {passwordTouched && passwordError && (
        <div className="text-danger mb-2">{passwordError}</div>
      )}
      <div className="position-relative mb-5">
        <input
          onChange={(e) => passwordHandler(e)}
          value={password}
          onBlur={(e) => blurHandler(e)}
          className="d-inline-block form-control px-3 py-2"
          type={`${isVisible ? "text" : "password"}`}
          name="password"
          placeholder="password"
        />
        <button
          type="button"
          onClick={buttonHandler}
          className={`Button ${isVisible ? "Invisible" : "Visible"}`}
        ></button>
      </div>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-success px-4"
          type="submit"
          disabled={!((loginError === "") && (passwordError === ""))}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default MyForm;
