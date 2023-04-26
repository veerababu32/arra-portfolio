import { Col, Container, Row, Table } from "react-bootstrap";
import { BsMeta } from "react-icons/bs";
import { leaderboardsTableData } from "../constants/data";
import Layout from "./Layout";

const Leaderboards = () => {
  return (
    <Layout>
      <div className="app__home-container app__leaderboards-section">
        <Container>
          <h5>Leaderboards</h5>
          <form>
            <Row>
              <Col xs={10}>
                <input
                  type={"search"}
                  className="form-control app__leaderboards-input"
                  placeholder="🔍 Search Any"
                />
              </Col>
              <Col xs={2}>
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
                <div className="mb-4" key={items.title}>
                  <h5 className="mb-3">{items.title}</h5>
                  {
                    <Table hover className="m-0 app__leaderboards-table">
                      <thead>
                        <tr
                          style={{
                            backgroundColor: `${items.bgColor}`,
                            borderTopLeftRadius: "20px",
                            borderTopRightRadius: "20px",
                            color: `${items.color}`,
                          }}
                        >
                          <th
                            style={{
                              borderTopLeftRadius: "20px",
                            }}
                          ></th>
                          <th>WORLD</th>
                          <th>MARKET CAP</th>
                          <th>FLOOR</th>
                          <th>1D VOL</th>
                          <th>1D %</th>
                          <th>7D VOL</th>
                          <th>7D %</th>
                          <th
                            style={{
                              borderTopRightRadius: "20px",
                            }}
                          >
                            OWNERS
                          </th>
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
