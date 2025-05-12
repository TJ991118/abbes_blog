import { Global } from "@emotion/react";

import { setTheme } from "./common/theme";
import "./App.scss";
import "@/styles/theme.scss";

import ComContainer from "./components/common/Container";

function App() {
  return (
    <div id="app" className="app">
      <Global styles={setTheme(false)} />
      <ComContainer
        css={{
          color: "red",
        }}
      >
        This is App
      </ComContainer>
    </div>
  );
}
export default App;
