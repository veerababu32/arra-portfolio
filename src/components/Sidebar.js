import { Link } from "react-router-dom";
import { RiCloseLine, RiVipDiamondLine } from "react-icons/ri";
import { useContext, useEffect, useState } from "react";
import AppContext from "../store/AppContext";

const Sidebar = () => {
  const appCtx = useContext(AppContext);
  const [isTabActive, setIsTabActive] = useState(appCtx.tabs[0].id);
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(!show);
  const handleShow = () => setShow(!show);

  const activeTabHandler = (tabId) => {
    setIsTabActive(tabId);
  };

  useEffect(() => {
    handleShow();
    // eslint-disable-next-line
  }, [appCtx]);

  return (
    <>
      <div className={`app__sidebar ${show ? "active" : ""}`}>
        <div className="app__sidebar-logo-section">
          <div className="app__sidebar-close-btn" onClick={handleClose}>
            <RiCloseLine />
          </div>
        </div>
        <div className="app__sidebar-links">
          {appCtx.tabs.map((item) => {
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
