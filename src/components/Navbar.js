import { Container, Nav } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";
import { navbarTabs } from "../constants/data";

const Navbar = () => {
  return (
    <>
      <div className="navbar navbar-expand navbar-light">
        <Container fluid>
          <Nav className="navbar-nav">
            {navbarTabs.map((item) => {
              return (
                <NavLink
                  to={`/${item.link}`}
                  className="nav-link"
                  key={item.tabId}
                >
                  <span className="py-1 px-3 navbar-badges-left">
                    {item.name}
                  </span>
                </NavLink>
              );
            })}
          </Nav>
          <Nav className="navbar-nav align-items-center">
            <Link className="nav-link" to={"#"}>
              <span className="py-1 px-3 navbar-badges-right">Buy/Sell</span>
            </Link>
            <Link className="nav-link" to={"#"}>
              <span className="py-1 px-3 navbar-badges-right">My Store</span>
            </Link>
            <Link className="nav-link" to={"#"}>
              <span className="navbar-search-icon bg-white">
                <BsSearch />
              </span>
            </Link>
            <Link className="nav-link" to={"#"}>
              <span className="navbar-notification-icon bg-white">
                <IoMdNotificationsOutline />
              </span>
            </Link>
            <Link className="nav-link" to={"#"}>
              <span className="navbar-user-icon bg-black text-white">
                <AiOutlineUser />
              </span>
            </Link>
          </Nav>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
