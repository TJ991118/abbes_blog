import { RouterProvider } from "react-router";

import routers from "./routers";

import "./App.scss";
import "@/styles/theme.scss";
import "@/styles/components/common.scss";

function App() {
  return <RouterProvider router={routers} />;
}
export default App;
