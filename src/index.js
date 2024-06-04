import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  // createBrowserRouter,
  RouterProvider,
  createHashRouter,
  // HashRouter,
  // Route,
  // Routes,
} from "react-router-dom";
import AuthorList from "./components/authorList";
import AddAuthorComponent from "./components/addAuthor";
import ErrorPage from "./components/errorPage";

const router = createHashRouter([
  {
    path: "/",
    element: <AuthorList />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/add",
        element: <AddAuthorComponent />,
        // loader: teamLoader,
      },
    ],
  },
  {
    path: "/add",
    element: <AddAuthorComponent />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
    {/* <HashRouter baseline="/">
      <Routes>
        <Route path="/" Component={AuthorList} exact />
        <Route path="/add" Component={AddAuthorComponent} exact />
      </Routes>
    </HashRouter> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
