import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";
import AuthContenxt from "./context/AuthContenxt.jsx";
import AdminContext from "./context/AdminContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContenxt>
      <AdminContext>

      <App />
      </AdminContext>
    </AuthContenxt>
  </BrowserRouter>
);
