import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App";
import ToDo from "./components/ToDo";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import "bootstrap/dist/css/bootstrap.css";
import "./css/style.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/todo",
    element: <ToDo />,
  },
  {
    path: "/sign-up",
    element: <SignUpForm />,
  },
  {
    path: "/sign-in",
    element: <SignInForm />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
