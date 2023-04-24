import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Leaderboards from "./components/Leaderboards";
import Community from "./components/Community";
import Tools from "./components/Tools";
import Browse from "./components/Browse";
import ErrorPage from "./ErrorPage.js";
import SidebarContext from "./store/SidebarContext";
import { sideBarData } from "./constants/data";
import { useState } from "react";

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

const App = () => {
  const [sidebarTabs, setSidebarTabs] = useState([
    { id: "s1", name: "All Assets" },
    { id: "s2", name: "Top Stories" },
    { id: "s3", name: "Guides & Tutorials" },
    { id: "s4", name: "Help" },
  ]);

  const changeSidebarTabs = (tabName) => {
    sideBarData.map((item) => {
      if (tabName.toLowerCase() === item.name) {
        setSidebarTabs(item.tabsData);
      }
      return item;
    });
  };

  const sidebarContextData = {
    tabs: sidebarTabs,
    addTabs: changeSidebarTabs,
  };

  return (
    <SidebarContext.Provider value={sidebarContextData}>
      <RouterProvider router={router} />
    </SidebarContext.Provider>
  );
};

export default App;
