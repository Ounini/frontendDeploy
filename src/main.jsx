import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { QuestionProvider } from "./context/QuestionContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QuestionProvider>
      <Router>
        <App />
      </Router>
    </QuestionProvider>
  </StrictMode>
);
