import { useState } from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Accordion,
  Carousel,
} from "react-bootstrap";
import {
  communityStoriesData,
  communityDanielInfo,
  communityTrendingData,
  communityDanielAccordian,
} from "../constants/data";
import { BsHeart, BsChat, BsSend, BsBookmark } from "react-icons/bs";
import Layout from "./Layout";

const Community = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Layout>
      <div className="app__community">
        <div className="app__community-stories">
          {communityStoriesData.map((item) => {
            return (
              <div key={item.id}>
                <div>
                  <img src={item.img} alt={item.name} />
                </div>
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
        <div className="app__community-container">
          <Container>
            <Row>
              <Col xs={12} md={7} lg={8}>
                <div className="app__community-input-section">
                  <div>
                    <input
                      type={"search"}
                      className="form-control app__community-input"
                      placeholder="What's going on Daniel?"
                      required
                    />
                    <button className="app__community-btn" type="button">
                      Share
                    </button>
                  </div>
                </div>
                {communityDanielAccordian.map((item) => {
                  return (
                    <Accordion
                      defaultActiveKey="0"
                      key={item.id}
                      className="app__community-accordion"
                    >
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <div className="app__community-accordion-top">
                            <div className="app__community-accordion-top-img">
                              <img src={item.img} alt={item.name} />
                            </div>
                            <div>
                              <h5>{item.name}</h5>
                              <p>{item.location}</p>
                            </div>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <Carousel activeIndex={index} onSelect={handleSelect}>
                            <Carousel.Item>
                              <img src={item.carouselImg} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img src={item.carouselImg} alt="Second slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img src={item.carouselImg} alt="Third slide" />
                            </Carousel.Item>
                          </Carousel>
                          <div className="app__community-accordion-post-card">
                            <div>
                              <BsHeart />
                              <BsChat />
                              <BsSend />
                            </div>
                            <div>
                              <BsBookmark />
                            </div>
                          </div>
                          <p>{item.desc}</p>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  );
                })}
              </Col>
              <Col md={5} lg={4} className="app__community-right-section">
                {communityDanielInfo.map((item) => {
                  return (
                    <Card
                      className="app__community-right-info-card"
                      key={item.id}
                    >
                      <Card.Body>
                        <div className="app__community-right-info-card--top">
                          <div>
                            <div className="app__community-right-info-card--img">
                              <img src={item.img} alt={item.name} />
                            </div>
                            <div>
                              <h5>{item.name}</h5>
                              <p>{item.mail}</p>
                            </div>
                          </div>
                          <p className="app__community-right-info-card--btn">
                            Edit
                          </p>
                        </div>
                        <p className="app__community-right-info-card--loc">
                          {item.location}
                        </p>
                        <div className="app__community-right-info-card--bottom">
                          <div>
                            <h6>Posts</h6>
                            <p>{item.posts}</p>
                          </div>
                          <div>
                            <h6>Following</h6>
                            <p>{item.following}</p>
                          </div>
                          <div>
                            <h6>Followers</h6>
                            <p>{item.followers}</p>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  );
                })}
                {communityTrendingData.map((items) => {
                  return (
                    <Card
                      className="app__community-right-trending-card"
                      key={items.id}
                    >
                      <Card.Body>
                        <div className="app__community-right-trending-card-header">
                          <h5>{items.title}</h5>
                          <p>{items.btn}</p>
                        </div>
                        {items.data.map((item) => {
                          return (
                            <div
                              className="app__community-right-trending-card-content"
                              key={item.title}
                            >
                              <div className="app__community-right-trending-card-content--img">
                                <img src={item.img} alt={item.title} />
                              </div>
                              <div className="app__community-right-trending-card-content--data">
                                <h6>{item.title}</h6>
                                <p>{item.description}</p>
                              </div>
                            </div>
                          );
                        })}
                      </Card.Body>
                    </Card>
                  );
                })}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </Layout>
  );
};

export default Community;
