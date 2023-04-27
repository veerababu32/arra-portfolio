import { createContext } from "react";

const AppContext = createContext({
  tabs: "",
  addTabs: (tab) => {},
  toggleSidebar: "",
  toggleSidebarFun: () => {},
});

export default AppContext;
