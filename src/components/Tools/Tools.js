import { Col, Container, Row, Table } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { toolsTabsData, toolsTableData } from "../../constants/data";
import Layout from "../Layout/Layout";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { useState } from "react";
import "./Tools.scss";

const Tools = () => {
  const [checkboxValues, setCheckboxValues] = useState({
    checkbox1: true,
    checkbox2: true,
    checkbox3: true,
    checkbox4: true,
    checkbox5: true,
    checkbox6: true,
    checkbox7: true,
    checkbox8: true,
    checkbox9: true,
    checkbox10: true,
    checkbox11: true,
    checkbox12: true,
    checkbox13: true,
    checkbox14: true,
    checkbox15: true,
    checkbox16: true,
    checkbox17: true,
    checkbox18: true,
  });

  const lineBarData = {
    labels: ["", "", "", "", "", ""],
    datasets: [
      {
        label: "",
        data: [0, 100, 30, 60, 85, 0],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "",
        data: [0, 100, 30, 60, 85, 85],
        type: "line",
        fill: false,
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
      },
    ],
  };

  const lineBarOptions = {
    scales: {
      y: {
        display: false,
      },
      x: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxValues({ ...checkboxValues, [name]: checked });
  };

  return (
    <Layout>
      <div className="app__tools">
        <ul
          className="nav nav-tabs app__tools-tab"
          id="myToolsTab"
          role="tablist"
        >
          {toolsTabsData.map((tab, index) => {
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
        {toolsTabsData.map((items, index) => {
          return (
            <div className="tab-content" id="myTabContent" key={index}>
              <div
                className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
                id={`${items.tabId}-tab-pane`}
                role="tabpanel"
                aria-labelledby={`${items.tabId}-tab`}
                tabIndex={index}
              >
                <div className="app__tools-container">
                  {items.toolsTabData.map((tabData) => {
                    return (
                      <Container key={tabData.searchName}>
                        <form>
                          <Row>
                            <Col md={12} lg={8}>
                              <input
                                type="search"
                                className="form-control app__leaderboards-input"
                                placeholder={`🔍 ${tabData.searchName}`}
                              />
                            </Col>
                            <Col
                              xs={6}
                              sm={3}
                              md={2}
                              lg={2}
                              className="app__tools-platform-btns"
                            >
                              <button className="app__tools-platform-btn">
                                <AiOutlinePlus />
                                {tabData.firstBtnName}
                              </button>
                            </Col>
                            <Col xs={6} sm={3} md={2} lg={2}>
                              <button className="app__tools-platform-btn">
                                <AiOutlinePlus />
                                {tabData.secondBtnName}
                              </button>
                            </Col>
                          </Row>
                        </form>
                        <div className="app__tools-filter">
                          <Row>
                            {tabData.filterData.map((filtData) => {
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
                          <div className="app__tools-filter-criteria">
                            <h6>{tabData.boxDataName}</h6>
                            <div>
                              {tabData.creteriaData.map((item) => {
                                return (
                                  <button key={item.labelName} type="button">
                                    <input
                                      type="checkbox"
                                      id={item.id}
                                      name={item.name}
                                      className="app__tools-filter-criteria-input"
                                      checked={checkboxValues[item.name]}
                                      onChange={handleCheckboxChange}
                                    />
                                    <label htmlFor={item.id}>Toggle</label>
                                    {item.labelName}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                        <div>
                          {toolsTableData.map((items) => {
                            return (
                              <Table
                                className="app__tools-table"
                                key={items.colsData}
                                responsive
                              >
                                <thead>
                                  <tr>
                                    <th colSpan={6}>
                                      COMPARISON ANAYLYSIS WITH KEY METRICS
                                    </th>
                                  </tr>
                                  <tr>
                                    <th>
                                      <div>Platform</div>
                                    </th>
                                    <th>Annual Return</th>
                                    <th>Return 3Y</th>
                                    <th>Classification</th>
                                    <th>Growth of 1000</th>
                                    <th>Minimum Increment</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {items.colsData.map((item) => {
                                    return (
                                      <tr key={item.dataId}>
                                        <td style={{ width: "180px" }}>
                                          <div className="app__tools-card-table-data">
                                            <div className="app__tools-card-table-data-icon">
                                              arra
                                            </div>
                                            <div>
                                              <h6>{item.name}</h6>
                                              <p style={{ color: "#8ff129" }}>
                                                {item.subName}
                                              </p>
                                            </div>
                                          </div>
                                        </td>
                                        <td>{item.annualReturn}</td>
                                        <td>{item.return3Y}</td>
                                        <td>{item.classification}</td>
                                        <td style={{ width: "200px" }}>
                                          <div className="app__tools-line-bar-chart">
                                            <Bar
                                              data={lineBarData}
                                              options={lineBarOptions}
                                              style={{
                                                width: "160px",
                                                height: "150px",
                                              }}
                                            />
                                          </div>
                                        </td>
                                        <td>{item.minInvestment}</td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </Table>
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
export default Tools;
