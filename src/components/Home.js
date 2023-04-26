import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { BsMeta, BsThreeDotsVertical } from "react-icons/bs";
import { homeCardsData, homeTopStoriesData } from "../constants/data";
import Layout from "./Layout";

const Home = () => {
  return (
    <Layout>
      <div className="app__home-container">
        <Container>
          <Row>
            {homeCardsData.map((item) => {
              return (
                <Col xs={4} key={item.name}>
                  <div className="app__home-cards">
                    <h4>{item.title}</h4>
                    <div className={`app__home-card ${item.card}`}>
                      <div className="card-top">
                        <h5 className={`${item.card} `}>{item.name}</h5>
                        <h6>{item.subName}</h6>
                      </div>
                      <div className="card-bottom">
                        <Table hover borderless>
                          <thead>
                            <tr>
                              <th>{item.tableTitleOne}</th>
                              <th>{item.tableTitleTwo}</th>
                              <th>{item.tableTitleThree}</th>
                            </tr>
                          </thead>
                          <tbody>
                            {item.tableData.map((data) => {
                              return (
                                <tr key={data.tableId}>
                                  <td>
                                    <div className="app__home-card-table-data">
                                      <div className="app__home-card-table-data-icon">
                                        <BsMeta />
                                      </div>
                                      <div>
                                        <h6>{data.tableBodyTitle}</h6>
                                        <p>{data.tableBodySubTitle}</p>
                                      </div>
                                    </div>
                                  </td>
                                  <td>${data.tableBodyPrice}</td>
                                  <td
                                    style={{
                                      color: `${
                                        data.tableBodyChanee[0] === "-"
                                          ? "red"
                                          : "#8ff129"
                                      }`,
                                    }}
                                  >
                                    {data.tableBodyChanee}%
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
          {homeTopStoriesData.map((items) => {
            return (
              <Row className="app__home-stories-section" key={items.name}>
                <h5>{items.name}</h5>
                {items.cardData.map((item) => {
                  return (
                    <Col
                      xs={12}
                      className="app__home-stories"
                      key={item.cardId}
                    >
                      <Card className="app__home-stories-card">
                        <Card.Header className="app__home-stories-card-img">
                          <Card.Img src={item.img} alt={item.alt} />
                        </Card.Header>
                        <Card.Body className="app__home-stories-card-body">
                          <div className="app__home-stories-card-body-sub-title">
                            <h6>{item.subTitle}</h6>
                            <p>{item.date}</p>
                          </div>
                          <div className="app__home-stories-card-body-title">
                            <div>
                              <h5>{item.title}</h5>
                              <p>{item.desc}</p>
                            </div>
                            <div>
                              <a href="#info">
                                <BsThreeDotsVertical />
                              </a>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            );
          })}
        </Container>
      </div>
    </Layout>
  );
};
export default Home;
