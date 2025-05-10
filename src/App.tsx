import { Global } from "@emotion/react";

import { setTheme } from "./common/theme";
import "./App.scss";
import "@/styles/theme.scss";

function App() {
  return (
    <div id="app" className="app">
      <Global styles={setTheme(false)} />
      This is App
    </div>
  );
}
export default App;
