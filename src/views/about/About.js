import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about/about.css";
import Profile from "../../assets/img/profile/"
import Profile from "../../assets/img/profile/profile.svg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-2">ABOUT ME</h1>
        <Container>
          <Row className=" pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded tex align-text-left " >
                <br />Web Developer with expertise of React.js,Node.js, HTML and CSS. 
                <br /><br/>
                Exceptionally focused and reliable Java Developer with an outstanding work ethic
                                and computer language knowledge base. Adept at explaining complex computer
                                development
                                concepts and processes to a variety of professional and lay audiences in a clear
                                and
                                accessible
                                manner. Able to work well independently or as part of a professional computer
                                program development team.                <br />
               
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1zgHt0DLSgvQEk8RAvTArNzvdPEyF6SEg/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
              
                  <div>
                    <a href="https://github.com/DemeSibere" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/deme-d-sibere/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;