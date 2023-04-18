import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { BsMeta, BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import {
  dashboardYourAssets,
  dashboardPerformanceTable,
  dashboardInviteData,
} from "../constants/data";
import Layout from "./Layout";

const Dashboard = () => {
  return (
    <>
      <Layout>
        <Container className="p-4 container">
          <Row>
            <Col xs={7}>
              <h5>Portifolio</h5>
              <div className="border" style={{ height: "300px" }}></div>
            </Col>
            {dashboardYourAssets.map((items) => {
              return (
                <Col xs={5} key={items.name}>
                  <h5>{items.name}</h5>
                  <div className="d-flex justify-content-between flex-wrap">
                    {items.data.map(function (item) {
                      return (
                        <Card
                          className={`dashboard-card card--${item.num} mb-4`}
                          key={item.num}
                        >
                          <Card.Body className="d-flex flex-column justify-content-between">
                            <div className="d-flex justify-content-between">
                              <div>
                                <h6 className="m-0 me-4">{item.title}</h6>
                                <p className="m-0">{item.subTitle}</p>
                              </div>
                              <div>
                                <BsThreeDotsVertical />
                              </div>
                            </div>
                            <div className="d-flex justify-content-between">
                              <p className="m-0">{item.description}</p>
                              <p className="m-0 text-white">{item.subDes}</p>
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
          <Row className="mb-2">
            {dashboardPerformanceTable.map((items) => {
              return (
                <Col xs={7} className="dashboard-performance" key={items.name}>
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="m-0">{items.name}</h5>
                    <div className="d-flex">
                      <select className="form-select me-3 rounded-5">
                        <option>{items.firstSelector}</option>
                      </select>
                      <select className="form-select w-auto rounded-5">
                        <option>{items.secondSelector}</option>
                      </select>
                    </div>
                  </div>
                  <Table className="table-borderless table-hover">
                    <thead>
                      <tr>
                        <th>{items.tableTitleOne}</th>
                        <th>{items.tableTitleTwo}</th>
                        <th>{items.tableTitleThree}</th>
                        <th>{items.tableTitleFour}</th>
                        <th className="text-center">{items.tableTitleFive}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.tableData.map((item) => {
                        return (
                          <tr key={item.id}>
                            <td>
                              <div className="card-table-data">
                                <div className="card-table-data-icon me-2">
                                  <BsMeta />
                                </div>
                                <div>
                                  <h6 className="m-0 card-table-data-names">
                                    {item.iconName}
                                  </h6>
                                  <p
                                    className="m-0 card-table-data-names"
                                    style={{ color: "#8ff129" }}
                                  >
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
                <Col className="dashboard-invite" key={item.title}>
                  <h5>{item.title}</h5>
                  <h6>{item.subTitle}</h6>
                  <p>{item.description}</p>
                  <div className="d-flex mb-3">
                    <input
                      type={"email"}
                      placeholder="Enter email address"
                      className="form-control me-2"
                    />
                    <button className="dashboard-invite--button">Enter</button>
                  </div>
                  <div className="dashboard-invite-img mb-3">
                    <img src={item.img} alt="Invite-Img" />
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="text-dark m-0">{item.subDes}</p>
                    <p className="m-0">{item.terms}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </Layout>
    </>
  );
};

export default Dashboard;
