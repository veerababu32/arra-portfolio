import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Leaderboards from "./components/Leaderboards";
import Community from "./components/Community";
import Tools from "./components/Tools";
import Browse from "./components/Browse";
import ErrorPage from "./ErrorPage.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/leaderboards",
    element: <Leaderboards />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/community",
    element: <Community />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tools",
    element: <Tools />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/browse",
    element: <Browse />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
