import { Card, Col, Container, Row } from "react-bootstrap";
import { MdLocationOn } from "react-icons/md";
import { browseData } from "../constants/data";
import hexagonIcon from "../assets/images/hexagon-icon.png";
import Layout from "./Layout";

const Browse = () => {
  return (
    <Layout>
      <div className="app__browse">
        <ul
          className="nav nav-tabs app__browse-tab"
          id="myBrowseTab"
          role="tablist"
        >
          {browseData.map((tab, index) => {
            return (
              <li className="nav-item" role="presentation" key={tab.tabName}>
                <button
                  className={`nav-link ${index === 0 ? "active" : ""}`}
                  id={`${tab.tabId}-tab`}
                  data-bs-toggle="tab"
                  data-bs-target={`#${tab.tabId}-tab-pane`}
                  type="button"
                  role="tab"
                  aria-controls={`#${tab.tabId}-tab-pane`}
                  aria-selected={index === 0 ? true : false}
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
                className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
                id={`${items.tabId}-tab-pane`}
                role="tabpanel"
                aria-labelledby={`${items.tabId}-tab`}
                tabIndex={index}
              >
                <div className="app__browse-container">
                  {items.browseTabData.map((browseData) => {
                    return (
                      <Container key={browseData.searchName}>
                        <form>
                          <Row>
                            <Col xs={12} lg={7}>
                              <input
                                type={"search"}
                                className="form-control app__leaderboards-input"
                                placeholder={`🔍 ${browseData.searchName}`}
                              />
                            </Col>
                            <Col
                              xs={6}
                              sm={4}
                              lg={3}
                              className="app__leaderboards-select-btn"
                            >
                              <select className="form-select">
                                <option>{browseData.firstBtnName}</option>
                              </select>
                            </Col>
                            <Col
                              xs={6}
                              sm={3}
                              lg={2}
                              className="app__leaderboards-toggle-btn"
                            >
                              <input
                                type="checkbox"
                                id="onSale"
                                className="app__tools-filter-criteria-input"
                              />
                              <label htmlFor="onSale">Toggle</label>
                              {browseData.secondBtnName}
                            </Col>
                          </Row>
                        </form>
                        <div className="app__browse-filter">
                          <Row>
                            {browseData.filterData.map((filtData) => {
                              return (
                                <Col key={filtData.labelName}>
                                  <label className="form-label">
                                    {filtData.labelName}
                                  </label>
                                  <select className="form-select">
                                    <option>{filtData.option}</option>
                                  </select>
                                </Col>
                              );
                            })}
                          </Row>
                          <Row className="app__browse-rarity-section">
                            <h6>{browseData.boxDataName}</h6>
                            <Col md={9} lg={6}>
                              <div>
                                {browseData.rarityData.map((rarity) => {
                                  return (
                                    <button key={rarity.name}>
                                      {rarity.name}
                                    </button>
                                  );
                                })}
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className="app__browse-cards">
                          {items.browseCardData.map((item) => {
                            return (
                              <Card key={item.cardId}>
                                <Card.Header>
                                  <Card.Img src={item.img} alt={item.name} />
                                </Card.Header>
                                <Card.Body>
                                  <div className="app__browse-cards-top-content">
                                    <div>
                                      <h6>{item.name}</h6>
                                    </div>
                                    <div className="app__browse-cards-icon">
                                      <div>
                                        <img
                                          src={hexagonIcon}
                                          alt="hexagon-icon"
                                        />
                                      </div>
                                      <p>{item.count}</p>
                                    </div>
                                  </div>
                                  <div className="app__browse-cards-bottom-content">
                                    <p>{item.subName}</p>
                                    <button className="app__browse-cards-btn">
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
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Browse;
