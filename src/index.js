import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "boxicons";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Pricing from "./pages/Pricing";

const router = createBrowserRouter([{ path: "/", element: <Pricing /> }]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);
