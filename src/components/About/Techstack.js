import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPython,
  SiCplusplus,
  SiCsharp,
  SiOpencv,
  SiTensorflow,
  SiPytorch,
  SiRos,
  SiUnity,
  SiNumpy, 
  SiScikitlearn, 
  SiScipy, 
  SiPandas, 
} from "react-icons/si";

import MatlabIcon from '../../Assets/matlab.png';
import RoadRunnerIcon from '../../Assets/Roadrunner2.png';
import SumoIcon from '../../Assets/sumo.png';
import GazeboIcon from '../../Assets/Gazebo.png';
import SolidWorksIcon from '../../Assets/solidworks.png';


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={MatlabIcon} alt="Matlab" style={{ width: '1.75em', height: '1.75em' }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpencv />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
      </Col><Col xs={4} md={2} className="tech-icons">
        <SiRos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUnity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={SumoIcon} alt="Sumo" style={{ width: '1.25em', height: '1em' }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={RoadRunnerIcon} alt="RoadRunner" style={{ width: '1em', height: '1em' }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={GazeboIcon} alt="Gazebo" style={{ width: '1.75em', height: '1.75em' }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={SolidWorksIcon} alt="Solidworks" style={{ width: '1.05em', height: '1.05em' }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScipy />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
      </Col>  
    </Row>
  );
 }

export default Techstack;
