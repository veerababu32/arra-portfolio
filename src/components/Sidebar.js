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
      <div className="sidebar">
        <div className="mb-4">
          <Link to={"/"} className="text-decoration-none">
            <div className="sidebar-img">
              <img src={Logo} alt="Arra Logo" className="w-100 h-100" />
            </div>
            <p className="m-0 text-center">Real Estate Digital Assets</p>
          </Link>
        </div>
        <div className="sidebar-links">
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
                <span className="sidebar-badge">
                  <RiVipDiamondLine className="sidebar-icons sidebar-assets-icon" />
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
