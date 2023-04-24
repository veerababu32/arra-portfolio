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

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  let stories = communityStoriesData.map((item) => {
    return (
      <div key={item.id}>
        <div>
          <img src={item.img} alt={item.name} className="w-100 h-100" />
        </div>
        <p className="m-0">{item.name}</p>
      </div>
    );
  });

  let danielAccordian = communityDanielAccordian.map((item) => {
    return (
      <Accordion defaultActiveKey="0" key={item.name}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div className="d-flex align-items-center">
              <div className="community-info-card--img">
                <img src={item.img} alt={item.name} />
              </div>
              <div>
                <h6 className="m-0 mb-1">{item.name}</h6>
                <p className="m-0">{item.location}</p>
              </div>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              className="mb-2"
            >
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={item.carouselImg}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={item.carouselImg}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={item.carouselImg}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
            <div className="community-post-card">
              <div>
                <BsHeart className="me-3" />
                <BsChat className="me-3" />
                <BsSend />
              </div>
              <div>
                <BsBookmark />
              </div>
            </div>
            <p className="m-0">{item.desc}</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  });

  let danielInfoCard = communityDanielInfo.map((item) => {
    return (
      <Card className="community-info-card" key={item.name}>
        <Card.Body>
          <div className="community-info-card--top">
            <div className="d-flex align-items-center">
              <div className="community-info-card--img">
                <img src={item.img} alt={item.name} />
              </div>
              <div>
                <h6 className="m-0 mb-1">{item.name}</h6>
                <p className="m-0">{item.mail}</p>
              </div>
            </div>
            <p className="community-info-card--btn">Edit</p>
          </div>
          <p className="community-info-card--loc">{item.location}</p>
          <div className="community-info-card--bottom">
            <div>
              <h6 className="m-0 mb-1">Posts</h6>
              <p className="m-0">{item.posts}</p>
            </div>
            <div>
              <h6 className="m-0 mb-1">Following</h6>
              <p className="m-0">{item.following}</p>
            </div>
            <div>
              <h6 className="m-0 mb-1">Followers</h6>
              <p className="m-0">{item.followers}</p>
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  });

  let trendingData = communityTrendingData.map((item) => {
    return (
      <Card className="community-trending-card" key={item.title}>
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h6 className="m-0">{item.title}</h6>
            <p className="m-0">{item.btn}</p>
          </div>
          <div className="d-flex align-items-start mb-3">
            <div className="community-trending-card--img">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="community-trending-card--data">
              <h6 className="m-0 mb-1">{item.titleOne}</h6>
              <p className="m-0">{item.descOne}</p>
            </div>
          </div>
          <div className="d-flex align-items-start mb-3">
            <div className="community-trending-card--img">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="community-trending-card--data">
              <h6 className="m-0 mb-1">{item.titleTwo}</h6>
              <p className="m-0">{item.descTwo}</p>
            </div>
          </div>
          <div className="d-flex align-items-start">
            <div className="community-trending-card--img">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="community-trending-card--data">
              <h6 className="m-0 mb-1">{item.titleThree}</h6>
              <p className="m-0">{item.descThree}</p>
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  });

  return (
    <>
      <Layout>
        <div className="community">
          <div className="community-stories">{stories}</div>
        </div>
        <Container className="p-4 community-container">
          <Row>
            <Col xs={9}>
              <div className="mb-4">
                <div className="d-flex">
                  <input
                    type={"search"}
                    className="form-control community-input"
                    placeholder="What's going on Daniel?"
                  />
                  <button className="community-btn">Share</button>
                </div>
              </div>
              {danielAccordian}
            </Col>
            <Col xs={3}>
              {danielInfoCard}
              {trendingData}
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
};

export default Community;
