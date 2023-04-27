import { Container, Nav } from "react-bootstrap";
import { BsEnvelope, BsSearch } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineUser, AiOutlineClose, AiOutlineDown } from "react-icons/ai";
import { FaBars, FaFile, FaUsers } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { NavLink, Link } from "react-router-dom";
import { navbarTabs } from "../constants/data";
import Logo from "../assets/images/logo.svg";
import { useContext, useEffect, useState, useRef } from "react";
import AppContext from "../store/AppContext";

const Navbar = () => {
  const appCtx = useContext(AppContext);
  const [showMoretabs, setShowMoretabs] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(true);
  const [showNotification, setShowNotification] = useState(true);
  const [showUser, setShowUser] = useState(true);
  const notificationRef = useRef();
  const userRef = useRef();

  const tabHandler = (tabId) => {
    appCtx.addTabs(tabId);
  };

  const moretabsHandler = () => {
    setShowMoretabs(!showMoretabs);
  };

  const handleSearchBar = (state) => {
    setShowSearchBar(state);
  };

  const handleNotification = () => {
    setShowNotification(!showNotification);
  };

  const handleUser = () => {
    setShowUser(!showUser);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!notificationRef?.current?.contains(event.target)) {
        setShowNotification(true);
      }

      if (!userRef?.current?.contains(event.target)) {
        setShowUser(true);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [notificationRef, userRef]);

  return (
    <>
      <div className="app__navbar navbar navbar-expand navbar-light">
        <div className="app__navbar-logo-section">
          <div className="app__navbar-logo">
            <Link to={"/"}>
              <div className="app__navbar-logo-img">
                <img src={Logo} alt="Arra Logo" />
              </div>
              <p className="app__navbar-logo-text">
                Real Estate Digital Assets
              </p>
            </Link>
          </div>
        </div>
        <Container fluid>
          <div className="app__navbar-more-tabs" onClick={moretabsHandler}>
            <button type="button">
              More Tabs <AiOutlineDown />
            </button>
          </div>
          <Nav
            className={`navbar-nav app__navbar-left-section ${
              showMoretabs ? "show" : ""
            }`}
          >
            <div>
              {navbarTabs.map((item) => {
                return (
                  <NavLink
                    to={`/${item.link}`}
                    className="nav-link app__navbar-badges-left"
                    key={item.tabId}
                    onClick={() => tabHandler(item.name)}
                  >
                    {/* {item.name} */}
                    <span className="app__navbar-badges-left">{item.name}</span>
                  </NavLink>
                );
              })}
            </div>
            <div>
              <Link className="nav-link" to={"#"} id="buySell">
                <span className="app__navbar-badges-right">Buy/Sell</span>
              </Link>
              <Link className="nav-link" to={"#"} id="myStore">
                <span className="app__navbar-badges-right">My Store</span>
              </Link>
            </div>
            {/* <NavDropdown title="More Tabs" id="basic-nav-dropdown">
              {navbarTabs.map((item) => {
                return (
                  <NavLink
                    to={`/${item.link}`}
                    className="nav-link"
                    key={item.tabId}
                    onClick={() => tabHandler(item.name)}
                  >
                    {item.name}
                  </NavLink>
                );
              })}
              <Link className="nav-link" to={"#"}>
                Buy/Sell
              </Link>
              <Link className="nav-link" to={"#"}>
                My Store
              </Link>
            </NavDropdown> */}
          </Nav>
          <Nav className="navbar-nav app__navbar-right-section">
            <div className="nav-item">
              <Link
                className="nav-link"
                to={"#"}
                onClick={() => {
                  handleSearchBar(false);
                }}
              >
                <span className="app__navbar-search-icon">
                  <BsSearch />
                </span>
              </Link>
              <div
                className="app__navbar-search-block"
                style={{ display: `${showSearchBar ? "none" : "block"}` }}
              >
                <form className="form-inline">
                  <div className="input-group input-group-sm">
                    <input
                      className="form-control form-control-navbar"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-navbar" type="submit">
                        <BsSearch />
                      </button>
                      <button
                        className="btn btn-navbar"
                        type="button"
                        data-widget="navbar-search"
                        onClick={() => {
                          handleSearchBar(true);
                        }}
                      >
                        <AiOutlineClose className="app__navbar-search-closebtn" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div
              className={`nav-item dropdown ${showNotification ? "" : "show"}`}
              ref={notificationRef}
            >
              <Link
                className="nav-link"
                data-toggle="dropdown"
                to={"#"}
                aria-expanded={showNotification ? "false" : "true"}
                onClick={handleNotification}
              >
                <span className="app__navbar-notification-icon">
                  <IoMdNotificationsOutline />
                  <span className="badge bg-danger app__navbar-badge">15</span>
                </span>
              </Link>
              <div
                className={`dropdown-menu app__navbar-notification-dropdown dropdown-menu-right ${
                  showNotification ? "" : "show"
                }`}
                style={{ left: "inherit", right: "0" }}
              >
                <Link to={"#"} className="dropdown-item dropdown-header">
                  15 Notifications
                </Link>
                <div className="dropdown-divider"></div>
                <Link to={"#"} className="dropdown-item">
                  <BsEnvelope className="me-2" /> 4 new messages
                  <span className="float-end text-muted text-sm">3 mins</span>
                </Link>
                <div className="dropdown-divider"></div>
                <Link to={"#"} className="dropdown-item">
                  <FaUsers className="me-2" />8 friend requests
                  <span className="float-end text-muted text-sm">12 hours</span>
                </Link>
                <div className="dropdown-divider"></div>
                <Link to={"#"} className="dropdown-item">
                  <FaFile className="me-2" /> 3 new reports
                  <span className="float-end text-muted text-sm">2 days</span>
                </Link>
                <div className="dropdown-divider"></div>
                <Link to={"#"} className="dropdown-item dropdown-footer">
                  See All Notifications
                </Link>
              </div>
            </div>
            <div
              className={`nav-item dropdown ${showUser ? "" : "show"}`}
              ref={userRef}
            >
              <Link
                className="nav-link"
                data-toggle="dropdown"
                to={"#"}
                aria-expanded={showUser ? "false" : "true"}
                onClick={handleUser}
              >
                <span className="app__navbar-user-icon">
                  <AiOutlineUser />
                </span>
              </Link>
              <div
                className={`dropdown-menu app__navbar-user-dropdown dropdown-menu-right ${
                  showUser ? "" : "show"
                }`}
                style={{ left: "inherit", right: "0" }}
              >
                <Link to={"#"} className="dropdown-item">
                  <AiOutlineUser className="me-2" /> User
                </Link>
                <div className="dropdown-divider"></div>
                <Link to={"#"} className="dropdown-item">
                  <CiLogout className="me-2" /> Logout
                </Link>
              </div>
            </div>
            <div
              onClick={() => appCtx.toggleSidebarFun()}
              className="app__navbar-hamburger"
            >
              <FaBars />
            </div>
          </Nav>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
