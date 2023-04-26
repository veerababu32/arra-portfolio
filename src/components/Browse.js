import { Card, Col, Container, Row } from "react-bootstrap";
import { MdLocationOn } from "react-icons/md";
import { browseData } from "../constants/data";
import hexagonIcon from "../assets/images/hexagon-icon.png";
import Layout from "./Layout";

const Browse = () => {
  return (
    <Layout>
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
                <Container>
                  <form>
                    <Row>
                      <Col xs={8}>
                        <input
                          type={"search"}
                          className="form-control app__leaderboards-input"
                          placeholder="🔍 Search Any"
                        />
                      </Col>
                      <Col>
                        <select className="form-select">
                          <option>RECENTLY CLOSED</option>
                        </select>
                      </Col>
                      <Col>
                        <input
                          type="checkbox"
                          id="onSale"
                          className="app__tools-filter-criteria-input"
                        />
                        <label htmlFor="onSale">Toggle</label> ON SALE
                      </Col>
                    </Row>
                  </form>
                  <div className="app__browse-filter">
                    <Row>
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
                                  <img src={hexagonIcon} alt="hexagon-icon" />
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
              </div>
            </div>
          </div>
        );
      })}
    </Layout>
  );
};

export default Browse;
