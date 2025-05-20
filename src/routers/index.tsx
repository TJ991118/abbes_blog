import TestPage from "@/pages/test";
import { createBrowserRouter } from "react-router";

const routes = [
  { path: "/", element: <div>This is test</div> },
  { path: "/test", element: <TestPage /> },
];
// eslint-disable-next-line react-refresh/only-export-components
export default createBrowserRouter(routes);
