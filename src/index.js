import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthorList from "./components/authorList";
import AddAuthorComponent from "./components/addAuthor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthorList />,
  },
  {
    path: "/add",
    element: <AddAuthorComponent />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
