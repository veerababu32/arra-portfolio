import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Container } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <Container className="app" fluid>
      <Sidebar />
      <div className="app__layout">
        <Navbar />
        {children}
      </div>
    </Container>
  );
};

export default Layout;
