import { createContext } from "react";

const SidebarContext = createContext({
  tabs: "",
  addTabs: (tab) => {},
});

export default SidebarContext;
