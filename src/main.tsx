/** @jsxImportSource @emotion/react */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Global } from "@emotion/react";

import "./index.css";
import "@/common/initial.ts";
import App from "./App.tsx";
import { setTheme } from "./common/theme";

/* 
  DESC 初始化
*/

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Global styles={setTheme(false)} />
    <App />
  </StrictMode>
);
