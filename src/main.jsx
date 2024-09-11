import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Auth/Login.jsx";
import PrivateRoute from "./RouteProtector/PrivateRoute.jsx";
import { Context } from "./Context/Context.js";
// import PrivateRoute from "./RouteProtector/PrivateRoute.jsx"; // Import the PrivateRoute component

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Context.Provider>
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
    </Context.Provider>
  </StrictMode>,
);
