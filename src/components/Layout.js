import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Container } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <Container className="d-flex flex-row p-0 layout" fluid>
      <Sidebar />
      <div className="w-100">
        <Navbar />
        {children}
      </div>
    </Container>
  );
};

export default Layout;
