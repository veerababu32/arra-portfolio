import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import { Container } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <Container className="app" fluid>
      <Navbar />
      <div className="app__layout">
        <Sidebar />
        {children}
      </div>
    </Container>
  );
};

export default Layout;
