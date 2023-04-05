import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { BsMeta, BsThreeDotsVertical } from "react-icons/bs";
import Bitcoin from "../assets/images/Group-284-image.png";
import Republic from "../assets/images/Group-285-image.png";
import ETF from "../assets/images/Group-286-image.png";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Container className="d-flex flex-row p-0 home" fluid>
        <Sidebar />
        <div className="w-100">
          <Navbar />
          <Container className="p-4 home-container">
            <Row className="mb-4">
              <Col xs={4}>
                <div>
                  <h4>Physical Assets</h4>
                  <div className="home-card one">
                    <div className="card-top">
                      <h5>Crowsfunded & Tokenization Assets</h5>
                      <h6>Recent Transactions</h6>
                    </div>
                    <div className="card-middle"></div>
                    <div className="card-bottom">
                      <Table hover borderless className="m-0">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Chanee</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="card-table-data">
                                <div className="card-table-data-icon me-2">
                                  <BsMeta />
                                </div>
                                <div>
                                  <h6 className="m-0 card-table-data-names">
                                    SmartCrowd
                                  </h6>
                                  <p className="m-0 card-table-data-names text-white">
                                    SMRTCRWD
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>$2.56</td>
                            <td style={{ color: "#8ff129" }}>+13.65%</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="card-table-data">
                                <div className="card-table-data-icon me-2">
                                  <BsMeta />
                                </div>
                                <div>
                                  <h6 className="m-0 card-table-data-names">
                                    SmartCrowd
                                  </h6>
                                  <p className="m-0 card-table-data-names text-white">
                                    SMRTCRWD
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>$10.43</td>
                            <td style={{ color: "#8ff129" }}>+11.19%</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="card-table-data">
                                <div className="card-table-data-icon me-2">
                                  <BsMeta />
                                </div>
                                <div>
                                  <h6 className="m-0 card-table-data-names">
                                    SmartCrowd
                                  </h6>
                                  <p className="m-0 card-table-data-names text-white">
                                    SMRTCRWD
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>$8.93</td>
                            <td style={{ color: "#f70f0f" }}>-6.955%</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={4}>
                <div>
                  <h4>Virtual Digital Assets</h4>
                  <div className="home-card two">
                    <div className="card-top">
                      <h5>Metaverse, Web3 & Gaming Platforms</h5>
                      <h6>Recent Transactions</h6>
                    </div>
                    <div className="card-middle"></div>
                    <div className="card-bottom">
                      <Table hover borderless className="m-0">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Chanee</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="card-table-data">
                                <div className="card-table-data-icon me-2">
                                  <BsMeta />
                                </div>
                                <div>
                                  <h6 className="m-0 card-table-data-names">
                                    SmartCrowd
                                  </h6>
                                  <p className="m-0 card-table-data-names text-white">
                                    SMRTCRWD
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>$2.56</td>
                            <td style={{ color: "#8ff129" }}>+13.65%</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="card-table-data">
                                <div className="card-table-data-icon me-2">
                                  <BsMeta />
                                </div>
                                <div>
                                  <h6 className="m-0 card-table-data-names">
                                    SmartCrowd
                                  </h6>
                                  <p className="m-0 card-table-data-names text-white">
                                    SMRTCRWD
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>$10.43</td>
                            <td style={{ color: "#8ff129" }}>+11.19%</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="card-table-data">
                                <div className="card-table-data-icon me-2">
                                  <BsMeta />
                                </div>
                                <div>
                                  <h6 className="m-0 card-table-data-names">
                                    SmartCrowd
                                  </h6>
                                  <p className="m-0 card-table-data-names text-white">
                                    SMRTCRWD
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>$8.93</td>
                            <td style={{ color: "#f70f0f" }}>-6.955%</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={4}>
                <div>
                  <h4>Phyrtual-Hybrid Assets</h4>
                  <div className="home-card three">
                    <div className="card-top">
                      <h5 className="w-50">Physical to Digital Link</h5>
                      <h6>Recent Transactions</h6>
                    </div>
                    <div className="card-middle"></div>
                    <div className="card-bottom">
                      <Table hover borderless className="m-0">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Chanee</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="card-table-data">
                                <div className="card-table-data-icon me-2">
                                  <BsMeta />
                                </div>
                                <div>
                                  <h6 className="m-0 card-table-data-names">
                                    SmartCrowd
                                  </h6>
                                  <p className="m-0 card-table-data-names text-white">
                                    SMRTCRWD
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>$2.56</td>
                            <td style={{ color: "#8ff129" }}>+13.65%</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="card-table-data">
                                <div className="card-table-data-icon me-2">
                                  <BsMeta />
                                </div>
                                <div>
                                  <h6 className="m-0 card-table-data-names">
                                    SmartCrowd
                                  </h6>
                                  <p className="m-0 card-table-data-names text-white">
                                    SMRTCRWD
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>$10.43</td>
                            <td style={{ color: "#8ff129" }}>+11.19%</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="card-table-data">
                                <div className="card-table-data-icon me-2">
                                  <BsMeta />
                                </div>
                                <div>
                                  <h6 className="m-0 card-table-data-names">
                                    SmartCrowd
                                  </h6>
                                  <p className="m-0 card-table-data-names text-white">
                                    SMRTCRWD
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>$8.93</td>
                            <td style={{ color: "#f70f0f" }}>-6.955%</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <h5>Top Stories</h5>
              <Col xs={12} className="mb-4">
                <Card className="flex-row home-stories-card">
                  <Card.Header className="p-0 home-stories-card-img border-0">
                    <Card.Img
                      src={Bitcoin}
                      alt="bitcoin"
                      className="w-100 h-100"
                    />
                  </Card.Header>
                  <Card.Body className="home-stories-card-body">
                    <div className="d-flex">
                      <h6 className="m-0 me-4">News</h6>
                      <p className="m-0">May14</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div>
                        <h5 className="m-0">
                          Major Increase In Bitcoin Trading Volume
                        </h5>
                        <p className="m-0">
                          A significant amount of bitcoin changed hands on the
                          United States’ most dominant spot exchange, Coinbase,
                          as investors look to buy the dip.
                        </p>
                      </div>
                      <div>
                        <BsThreeDotsVertical />
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} className="mb-4">
                <Card className="flex-row home-stories-card">
                  <Card.Header className="p-0 home-stories-card-img border-0">
                    <Card.Img
                      src={Republic}
                      alt="republic"
                      className="w-100 h-100"
                    />
                  </Card.Header>
                  <Card.Body>
                    <div className="d-flex">
                      <h6 className="m-0 me-4">News</h6>
                      <p className="m-0">May11</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div>
                        <h5 className="m-0">
                          ‘Unlike Republicans, we recognize that there is real
                          risk’ to stablecoins and crypto, says Senate Banking
                          Committee chairmans
                        </h5>
                      </div>
                      <div>
                        <BsThreeDotsVertical />
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12}>
                <Card className="flex-row home-stories-card">
                  <Card.Header className="p-0 home-stories-card-img border-0">
                    <Card.Img src={ETF} alt="etf" className="w-100 h-100" />
                  </Card.Header>
                  <Card.Body>
                    <div className="d-flex">
                      <h6 className="m-0 me-4">Explainers</h6>
                      <p className="m-0">May4</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div>
                        <h5 className="m-0">What is an ETF?</h5>
                        <p className="m-0">
                          Exchange-traded funds — better known as an ETFs — are
                          similar in many ways to mutual funds.
                        </p>
                      </div>
                      <div>
                        <BsThreeDotsVertical />
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
};
export default Home;
