import { Link } from "react-router-dom";
import { RiCloseLine, RiVipDiamondLine } from "react-icons/ri";
import { useContext, useRef, useState } from "react";
import AppContext from "../../store/AppContext";
import "./Sidebar.scss";

const Sidebar = () => {
  const { tabs, toggleSidebar, toggleSidebarFun } = useContext(AppContext);
  const [isTabActive, setIsTabActive] = useState(tabs[0].id);
  const sidebarRef = useRef();

  const activeTabHandler = (tabId) => {
    setIsTabActive(tabId);
  };

  return (
    <>
      <div
        className={`app__offcanvasSidebar ${toggleSidebar ? "active" : ""}`}
        onClick={() => toggleSidebarFun()}
      ></div>
      <div
        className={`app__sidebar ${toggleSidebar ? "active" : ""}`}
        ref={sidebarRef}
      >
        <div className="app__sidebar-logo-section">
          <div
            className="app__sidebar-close-btn"
            onClick={() => toggleSidebarFun()}
          >
            <RiCloseLine />
          </div>
        </div>
        <div className="app__sidebar-links">
          {tabs.map((item) => {
            return (
              <Link
                key={item.id}
                to={"#"}
                onClick={() => activeTabHandler(item.id)}
                className={`app__sidebar-badge ${
                  isTabActive === item.id ? "active" : ""
                }`}
              >
                <RiVipDiamondLine className="app__sidebar-icons sidebar-assets-icon" />
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
