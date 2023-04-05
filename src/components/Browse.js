import { Card, Col, Container, Row } from "react-bootstrap";
import { MdLocationOn } from "react-icons/md";
import { browseData } from "../constants/data";
import hexagonIcon from "../assets/images/hexagon-icon.png";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Browse = () => {
  return (
    <>
      <Container className="d-flex flex-row p-0 home" fluid>
        <Sidebar />
        <div className="w-100">
          <Navbar />
          <div>
            <ul className="nav nav-tabs" id="myBrowseTab" role="tablist">
              {browseData.map((tab) => {
                return (
                  <li
                    className="nav-item"
                    role="presentation"
                    key={tab.tabName}
                  >
                    <button
                      className={`nav-link${tab.activeTab}`}
                      id={`${tab.tabId}-tab`}
                      data-bs-toggle="tab"
                      data-bs-target={`#${tab.tabId}-tab-pane`}
                      type="button"
                      role="tab"
                      aria-controls={`#${tab.tabId}-tab-pane`}
                      aria-selected={tab.ariaSelected}
                    >
                      {tab.tabName}
                    </button>
                  </li>
                );
              })}
            </ul>
            {browseData.map((items, index) => {
              return (
                <div className="tab-content" id="myTabContent" key={index}>
                  <div
                    className={`tab-pane fade${items.showClass}${items.activeTab}`}
                    id={`${items.tabId}-tab-pane`}
                    role="tabpanel"
                    aria-labelledby={`${items.tabId}-tab`}
                    tabIndex={index}
                  >
                    <Container className="px-4 py-2 browse-container">
                      <form>
                        <Row className="mb-3 align-items-center">
                          <Col xs={8}>
                            <input
                              type={"search"}
                              className="form-control leaderboards-input m-0"
                              placeholder="🔍 Search Any"
                            />
                          </Col>
                          <Col>
                            <select className="form-select w-auto">
                              <option>RECENTLY CLOSED</option>
                            </select>
                          </Col>
                          <Col className="d-flex align-items-center">
                            <input
                              type="checkbox"
                              id="onSale"
                              className="tools-criteria"
                            />
                            <label htmlFor="onSale">Toggle</label> ON SALE
                          </Col>
                        </Row>
                      </form>
                      <div className="tools-filter mb-4">
                        <Row className="mb-3">
                          <Col>
                            <label className="form-label">COLLECTION</label>
                            <select className="form-select">
                              <option>All Collection</option>
                            </select>
                          </Col>
                          <Col>
                            <label className="form-label">PRICE RANGE</label>
                            <select className="form-select">
                              <option>$0 - $15,000,000</option>
                            </select>
                          </Col>
                          <Col>
                            <label className="form-label">LOCATION</label>
                            <select className="form-select">
                              <option>International</option>
                            </select>
                          </Col>
                          <Col>
                            <label className="form-label">CURRENCY</label>
                            <select className="form-select">
                              <option>Ethereum</option>
                            </select>
                          </Col>
                          <Col>
                            <label className="form-label">CATEGORIES</label>
                            <select className="form-select">
                              <option>Estates</option>
                            </select>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={7}>
                            <h6>RARITY</h6>
                            <div className="d-flex justify-content-between">
                              <button className="me-2">Common</button>
                              <button className="me-2">Uncommon</button>
                              <button className="me-2">Rare</button>
                              <button className="me-2">Epic</button>
                              <button className="me-2">Legendary</button>
                              <button className="me-2">Mythic</button>
                              <button>Unique</button>
                            </div>
                          </Col>
                          <Col xs={2}>
                            <label className="form-label">CATEGORIES</label>
                            <select className="form-select">
                              <option>Estates</option>
                            </select>
                          </Col>
                        </Row>
                      </div>
                      <div className="browse-cards">
                        {items.browseCardData.map((item) => {
                          return (
                            <Card key={item.cardId}>
                              <Card.Header className="p-0">
                                <Card.Img
                                  src={item.img}
                                  alt={item.name}
                                  className="w-100 h-100"
                                />
                              </Card.Header>
                              <Card.Body>
                                <div className="d-flex justify-content-between align-items-center">
                                  <div>
                                    <h6 className="m-0">{item.name}</h6>
                                  </div>
                                  <div className="d-flex">
                                    <div className="browse-cards-icon">
                                      <img
                                        src={hexagonIcon}
                                        className="w-100 h-100"
                                        alt="hexagon-icon"
                                      />
                                    </div>
                                    <p className="m-0">{item.count}</p>
                                  </div>
                                </div>
                                <div>
                                  <p className="m-0 mb-2">{item.subName}</p>
                                  <button className="browse-cards-button">
                                    <MdLocationOn />
                                    {item.subCount}
                                  </button>
                                </div>
                              </Card.Body>
                            </Card>
                          );
                        })}
                      </div>
                    </Container>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Browse;
