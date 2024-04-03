import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiDocker,
  SiSlack,
  SiGit,
  SiWindows,
  SiLinux,
  SiGooglecolab,
  SiAnaconda,
  SiPycharm,
  SiGithub,
  SiSumo
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows title="Windows"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux title="Linux"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker title="Docker"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda title="Anaconda"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode title="VS Code"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecolab title="G-Colab"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm title="PyCharm"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub title="GitHub"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit title="Git"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack title="Slack"/>
      </Col>
    </Row>
  );
}

export default Toolstack;
