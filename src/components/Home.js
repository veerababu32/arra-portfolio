import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { BsMeta, BsThreeDotsVertical } from "react-icons/bs";
import { homeCardsData, homeTopStoriesData } from "../constants/data";
import Layout from "./Layout";

const Home = () => {
  return (
    <>
      <Layout>
        <Container className="p-4 home-container">
          <Row className="mb-4">
            {homeCardsData.map((item) => {
              return (
                <Col xs={4} key={item.name}>
                  <div>
                    <h4>{item.title}</h4>
                    <div className={`home-card ${item.card}`}>
                      <div className="card-top">
                        <h5 className={`${item.card}`}>{item.name}</h5>
                        <h6>{item.subName}</h6>
                      </div>
                      <div className="card-middle"></div>
                      <div className="card-bottom">
                        <Table hover borderless className="m-0">
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
                                    <div className="card-table-data">
                                      <div className="card-table-data-icon me-2">
                                        <BsMeta />
                                      </div>
                                      <div>
                                        <h6 className="m-0 card-table-data-names">
                                          {data.tableBodyTitle}
                                        </h6>
                                        <p className="m-0 card-table-data-names text-white">
                                          {data.tableBodySubTitle}
                                        </p>
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
              <Row key={items.name}>
                <h5>{items.name}</h5>
                {items.cardData.map((item) => {
                  return (
                    <Col xs={12} className="mb-4" key={item.cardId}>
                      <Card className="flex-row home-stories-card">
                        <Card.Header className="p-0 home-stories-card-img border-0">
                          <Card.Img
                            src={item.img}
                            alt={item.alt}
                            className="w-100 h-100"
                          />
                        </Card.Header>
                        <Card.Body className="home-stories-card-body">
                          <div className="d-flex">
                            <h6 className="m-0 me-4">{item.subTitle}</h6>
                            <p className="m-0">{item.date}</p>
                          </div>
                          <div className="d-flex justify-content-between">
                            <div>
                              <h5 className="m-0">{item.title}</h5>
                              <p className="m-0">{item.desc}</p>
                            </div>
                            <div>
                              <a href="#info">
                                <BsThreeDotsVertical className="text-black"/>
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
      </Layout>
    </>
  );
};
export default Home;
