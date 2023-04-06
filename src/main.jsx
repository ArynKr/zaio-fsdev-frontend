import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { Enroll, Root, Schedule } from "./pages";
import RedirectToEnroll from "./components/EnrollLink";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/enroll",
        element: <Enroll />,
      },
      {
        path: "/schedule",
        element: <Schedule />,
      },
      {
        path: "",
        element: <RedirectToEnroll />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
