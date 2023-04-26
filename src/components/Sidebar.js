import { Link } from "react-router-dom";
import { RiVipDiamondLine } from "react-icons/ri";
import Logo from "../assets/images/logo.svg";
import { useContext, useState } from "react";
import SidebarContext from "../store/SidebarContext";

const Sidebar = () => {
  const sidebarCtx = useContext(SidebarContext);
  const [isTabActive, setIsTabActive] = useState(sidebarCtx.tabs[0].id);

  const activeTabHandler = (tabId) => {
    setIsTabActive(tabId);
  };

  return (
    <>
      <div className="app__sidebar">
        <div className="app__sidebar-logo-section">
          <Link to={"/"}>
            <div className="app__sidebar-logo-img">
              <img src={Logo} alt="Arra Logo" className="w-100 h-100" />
            </div>
            <p>Real Estate Digital Assets</p>
          </Link>
        </div>
        <div className="app__sidebar-links">
          {sidebarCtx.tabs.map((item) => {
            return (
              <Link
                key={item.id}
                to={"#"}
                onClick={() => activeTabHandler(item.id)}
                className={`nav-link ${
                  isTabActive === item.id ? "active" : ""
                }`}
              >
                <span className="app__sidebar-badge">
                  <RiVipDiamondLine className="app__sidebar-icons sidebar-assets-icon" />
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
