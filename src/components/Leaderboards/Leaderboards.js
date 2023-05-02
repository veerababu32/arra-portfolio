import { Col, Container, Row, Table } from "react-bootstrap";
import { BsMeta } from "react-icons/bs";
import { leaderboardsTableData } from "../../constants/data";
import Layout from "../Layout/Layout";
import "./Leaderboards.scss";

const Leaderboards = () => {
  return (
    <Layout>
      <div className="app__home-container app__leaderboards-section">
        <Container>
          <h4>Leaderboards</h4>
          <form>
            <Row>
              <Col xs={12} sm={8} lg={10}>
                <input
                  type={"search"}
                  className="form-control app__leaderboards-input"
                  placeholder="🔍 Search Any"
                />
              </Col>
              <Col xs={6} sm={4} lg={2}>
                <select className="form-select app__leaderboards-input">
                  <option>Filter</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </Col>
            </Row>
          </form>
          <div>
            {leaderboardsTableData.map(function (items) {
              return (
                <div
                  className="app__leaderboards-table-section"
                  key={items.title}
                >
                  <h4>{items.title}</h4>
                  {
                    <Table hover responsive className="app__leaderboards-table">
                      <thead>
                        <tr
                          style={{
                            backgroundColor: `${items.bgColor}`,
                            color: `${items.color}`,
                          }}
                        >
                          <th></th>
                          <th>WORLD</th>
                          <th>MARKET CAP</th>
                          <th>FLOOR</th>
                          <th>1D VOL</th>
                          <th>1D %</th>
                          <th>7D VOL</th>
                          <th>7D %</th>
                          <th>OWNERS</th>
                        </tr>
                      </thead>
                      <tbody>
                        {items.data.map((item) => {
                          return (
                            <tr key={item.id}>
                              <td
                                style={{ width: "50px" }}
                                className="text-center"
                              >
                                {item.id}
                              </td>
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
                              <td>{item.marketCap}</td>
                              <td>{item.floor}</td>
                              <td>{item["1D vol"]}</td>
                              <td>{item["1D%"]}</td>
                              <td>{item["7D Vol"]}</td>
                              <td>{item["7D%"]}</td>
                              <td>{item.owners}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  }
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Leaderboards;
