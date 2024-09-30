import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Auth/Login.jsx";
import PrivateRoute from "./RouteProtector/PrivateRoute.jsx";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";
import Modal from "react-modal";

Modal.setAppElement("#root");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <App />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  </StrictMode>,
);
