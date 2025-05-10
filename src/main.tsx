/** @jsxImportSource @emotion/react */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.tsx";

/* 
  DESC 初始化
*/

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
