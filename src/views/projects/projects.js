import React from "react";
import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent,
  createTheme,
  themes
} from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

//Css file
import "./project.css";

//Projects
import ChatKharaMeal from "../../assets/img/projects/ChatKharaMeal-Website.png";
import WeatherDashboard from "../../assets/img/projects/weather.png";
import MusicList from "../../assets/img/projects/Music-List-App.png";
import QuizApp from "../../assets/img/projects/QuizzApp-JavaScript.png";
import PasswordGApp from "../../assets/img/projects/PG.jpeg";
import DayPlanner from "../../assets/img/projects/dayPlan.png";
//import FbComponent from "../../assets/img/projects/Fb-component.png";





//Skills
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_MYSQL from "../../assets/img/skills/mysql-svgrepo-com.svg";

// Custom timline theme
const customTheme = createTheme(themes.default, {
  card: {
    backgroundColor: "#efefef"
  },
  date: {
    backgroundColor: "#ec4b4f"
  },
  marker: {
    borderColor: "#070d59"
  },
  timelineTrack: {
    backgroundColor: "#ec4b4f"
  }
});

const ProjectTimeline = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline theme={customTheme}>
        <Events>
           {/* // Password Generator App */}
           <ImageEvent
            date="29th Feb, 2022"
            className="text-center"
            text="Password Generator"
            src={PasswordGApp}
            alt="Password Generator"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a Password generator app in which Empolyee can generate a Password easily and use.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Provide user friendy Enviroment.</li>
                          <li>Enables employee to generator random passwords. </li>
                          <li>Solves a security concern of weak passwords.</li>
                          <li>Includes uppercase/lowercase, numeric & special characters.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="Html"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                             HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="JavaScript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JavaScript
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/DemeSibere/my-password-generator-hw/blob/main/Assets/hw-demo.gif"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/DemeSibere/my-password-generator-hw"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          
        {/* //React  Component */}
          <ImageEvent
            date="10th Sep, 2022"
            className="text-center"
            text="Day Planner"
            src={DayPlanner}
            alt="FB Component"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is application that allows a user to save events for each hour of the day by modifying starter code
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Calendar application that allows a user to save
                                        events for each hour of the day by modifying starter code</li>
                          <li>This app will run in the browser and feature
                                        dynamically updated HTML, CSS, and JavaScript</li>
                           <li>Powered by jQuery and moments.Js</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React Native
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="JavaScript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JavaScript
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/DemeSibere/note-taker-project/blob/main/Assets/note-taker.gif"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/DemeSibere/MyWork-Day-Scheduler"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* //Weather Dashboard */}

          <ImageEvent
            date="18th July, 2022"
            className="text-center"
            text="Expense Tracker App"
            src={WeatherDashboard}
            alt="ExpenseTracker"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a weather outlook for multiple cities per user's request. User
                        friendly and easy to use.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>This app will run in the browser and forcasts
                              weather outlook for multiple cities per user's request.</li>
                          <li>Powered by CSS.HTML, CSS, JavaScript, Bootstrap, Jquery, and
                                        OpenWeather API</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="JavaScript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JavaScript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MYSQL}
                                alt="Firebase"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MySql
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP}
                                alt="bootstrap"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Bootstrap
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/DemeSibere/my-weather-dashboard/blob/main/my-weather-dashboard/assets/dashboard-demo.gif"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/DemeSibere/my-weather-dashboard"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* QuizApp */}

          <ImageEvent
            date="9th June, 2022"
            className="text-center"
            text="Quiz App"
            src={QuizApp}
            alt="Quizz App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Basic Quiz app, to test
                        your computer knowledge. Also, The question and its
                        options changed in every page reload.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Test your basic computer knowledge </li>
                          <li>API used for computer science quiz</li>
                          <li>Powered by JavaScript, HTML and CSS.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="JavaScript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JavaScript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP}
                                alt="bootstrap"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Bootstrap
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/DemeSibere/code-quiz-hw"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* //MusicListApp */}

          <ImageEvent
            date="9th June, 2020"
            className="text-center"
            text="Music List App"
            src={MusicList}
            alt="MusicList App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> If you are a Music Lover!,
                        then its the best app for you to collect your music
                        collection in one place.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li> JavaScript CRUD operation</li>
                          <li>Attractive UI, Easy to use.</li>
                          <li>Powered by JavaScript, HTML and CSS.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="JavaScript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JavaScript
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default ProjectTimeline;
