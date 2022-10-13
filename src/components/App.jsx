import React from "react";

function App() {
  return (
    <div className="pt-5">
      <div className="container">
        <h1>App</h1>
        <div className="pt-3">
          <ul class="list-group">
            <li class="list-group-item">
              <a className="page-link link-primary" href="/todo">
                ToDo
              </a>
            </li>
            <li class="list-group-item">
              <a className="page-link link-primary" href="/app-test">
                App test
              </a>
            </li>
            <li class="list-group-item">
              <a className="page-link link-primary" href="/sign-in">
                Sign in page
              </a>
            </li>
            <li class="list-group-item">
              <a className="page-link link-primary" href="/sign-up">
                Sign up page
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
