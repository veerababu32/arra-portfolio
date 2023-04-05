import { Col, Container, Row } from "react-bootstrap";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Tools = () => {
  return (
    <>
      <Container className="d-flex flex-row p-0 home" fluid>
        <Sidebar />
        <div className="w-100">
          <Navbar />
          <div>
            {/* <ul class="nav nav-tabs" id="myToolsTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected="true"
              >
                Compare Platforms
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
              >
                Compare Virtual Lands
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact-tab-pane"
                type="button"
                role="tab"
                aria-controls="contact-tab-pane"
                aria-selected="false"
              >
                Compare Crowd Funded Assets
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
              tabindex="0"
            >
              ...
            </div>
            <div
              class="tab-pane fade"
              id="profile-tab-pane"
              role="tabpanel"
              aria-labelledby="profile-tab"
              tabindex="0"
            >
              ...
            </div>
            <div
              class="tab-pane fade"
              id="contact-tab-pane"
              role="tabpanel"
              aria-labelledby="contact-tab"
              tabindex="0"
            >
              ...
            </div>
          </div> */}
            <Container className="p-4 home-container">
              <form>
                <Row>
                  <Col xs={12}>
                    <input
                      type={"search"}
                      className="form-control leaderboards-input"
                      placeholder="🔍 Search Any"
                    />
                  </Col>
                </Row>
              </form>
              <div className="tools-filter">
                <Row className="mb-3">
                  <Col>
                    <label className="form-label">PRICE PER SQM</label>
                    <select className="form-select">
                      <option>$0 - $10,000</option>
                    </select>
                  </Col>
                  <Col>
                    <label className="form-label">IRR COMPARISONS</label>
                    <select className="form-select">
                      <option>$0 - $10,000</option>
                    </select>
                  </Col>
                  <Col>
                    <label className="form-label">RETURN CALCULATOR</label>
                    <select className="form-select">
                      <option>Select Currency</option>
                    </select>
                  </Col>
                  <Col>
                    <label className="form-label">TRENDING CITIES</label>
                    <select className="form-select">
                      <option>Select City</option>
                    </select>
                  </Col>
                  <Col>
                    <label className="form-label">
                      ASSETS CLASS COMPARISONS
                    </label>
                    <select className="form-select">
                      <option>Select Asset Class</option>
                    </select>
                  </Col>
                </Row>
                <div>
                  <h6>CRITERIA</h6>
                  <div className="d-flex justify-content-between">
                    <button className="me-2">
                      <input
                        type="checkbox"
                        id="switch"
                        className="tools-criteria"
                        checked
                      />
                      <label htmlFor="switch">Toggle</label> Blockchain
                    </button>
                    <button className="me-2">
                      <input
                        type="checkbox"
                        id="switchOne"
                        className="tools-criteria"
                        checked
                      />
                      <label htmlFor="switchOne">Toggle</label> NFTS
                    </button>
                    <button className="me-2">
                      <input
                        type="checkbox"
                        id="switchTwo"
                        className="tools-criteria"
                        checked
                      />
                      <label htmlFor="switchTwo">Toggle</label> Security
                    </button>
                    <button className="me-2">
                      <input
                        type="checkbox"
                        id="switchThree"
                        className="tools-criteria"
                        checked
                      />
                      <label htmlFor="switchThree">Toggle</label> IRR Between X
                      & Y
                    </button>
                    <button className="me-2">
                      <input
                        type="checkbox"
                        id="switchFour"
                        className="tools-criteria"
                        checked
                      />
                      <label htmlFor="switchFour">Toggle</label> Locked Period
                      Between X & Y
                    </button>
                    <button>
                      <input
                        type="checkbox"
                        id="switchFive"
                        className="tools-criteria"
                        checked
                      />
                      <label htmlFor="switchFive">Toggle</label> Annual Yield
                      Between X & Y
                    </button>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Tools;
