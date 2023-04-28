import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { BsMeta, BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import {
  dashboardYourAssets,
  dashboardPerformanceTable,
  dashboardInviteData,
} from "../constants/data";
import Layout from "./Layout";
import MyChart from "./MyChart";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <Layout>
      <div className="app__home-container">
        <Container>
          <form>
            <Row>
              <Col lg={12} xl={7}>
                <h4>Portifolio</h4>
                <div className="app__dashboard-portifolio">
                  <div className="app__dashboard-portifolio-content">
                    <div className="app__dashboard-portifolio-content-left">
                      <h4>$ 17,643.41</h4>
                      <p>Portifolio Balance</p>
                    </div>
                    <div className="app__dashboard-portifolio-content-right">
                      <Link to={"#"}>
                        <BsThreeDotsVertical />
                      </Link>
                    </div>
                  </div>
                  <MyChart />
                </div>
              </Col>
              {dashboardYourAssets.map((items) => {
                return (
                  <Col lg={12} xl={5} key={items.name}>
                    <h4>{items.name}</h4>
                    <div className="app__dashboard-assets">
                      {items.data.map(function (item) {
                        return (
                          <Card
                            className={`app__dashboard-assets-card card--${item.num}`}
                            key={item.num}
                          >
                            <Card.Body className="app__dashboard-assets-card-body">
                              <div className="top-section">
                                <div>
                                  <h6>{item.title}</h6>
                                  <p>{item.subTitle}</p>
                                </div>
                                <div>
                                  <Link to={"#"}>
                                    <BsThreeDotsVertical />
                                  </Link>
                                </div>
                              </div>
                              <div className="bottom-section">
                                <p>{item.description}</p>
                                <p>{item.subDes}</p>
                              </div>
                            </Card.Body>
                          </Card>
                        );
                      })}
                    </div>
                  </Col>
                );
              })}
            </Row>
            <Row>
              {dashboardPerformanceTable.map((items) => {
                return (
                  <Col
                    md={12}
                    lg={7}
                    className="app__dashboard-assets-performance"
                    key={items.name}
                  >
                    <div className="app__dashboard-assets-performance-header">
                      <h4>{items.name}</h4>
                      <div>
                        <select className="form-select">
                          <option>{items.firstSelector}</option>
                        </select>
                        <select className="form-select">
                          <option>{items.secondSelector}</option>
                        </select>
                      </div>
                    </div>
                    <Table
                      className="app__dashboard-table"
                      borderless
                      hover
                      responsive
                    >
                      <thead>
                        <tr>
                          <th>{items.tableTitleOne}</th>
                          <th>{items.tableTitleTwo}</th>
                          <th>{items.tableTitleThree}</th>
                          <th>{items.tableTitleFour}</th>
                          <th className="text-center">
                            {items.tableTitleFive}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {items.tableData.map((item) => {
                          return (
                            <tr key={item.id}>
                              <td>
                                <div className="app__home-card-table-data">
                                  <div className="app__home-card-table-data-icon">
                                    <BsMeta />
                                  </div>
                                  <div>
                                    <h6>{item.iconName}</h6>
                                    <p style={{ color: "#8ff129" }}>
                                      {item.iconSubTitle}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td>{item.price}</td>
                              <td
                                style={{
                                  color: `${
                                    item.chanee[0] === "-" ? "red" : "#8ff129"
                                  }`,
                                }}
                              >
                                {item.chanee}
                              </td>
                              <td>{item.marketCap}</td>
                              <td className="text-center">
                                <AiOutlineStar />
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </Col>
                );
              })}
              {dashboardInviteData.map((item) => {
                return (
                  <Col
                    md={12}
                    lg={5}
                    className="app__dashboard-assets-invite"
                    key={item.title}
                  >
                    <h5>{item.title}</h5>
                    <h6>{item.subTitle}</h6>
                    <p>{item.description}</p>
                    <div className="app__dashboard-assets-invite-email">
                      <input
                        type="email"
                        placeholder="Enter email address"
                        className="form-control"
                        required
                      />
                      <button type="submit">Enter</button>
                    </div>
                    <div className="app__dashboard-assets-invite-img">
                      <img src={item.img} alt="Invite-Img" />
                    </div>
                    <div className="app__dashboard-assets-invite-terms">
                      <p>{item.subDes}</p>
                      <p>{item.terms}</p>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </form>
        </Container>
      </div>
    </Layout>
  );
};

export default Dashboard;
