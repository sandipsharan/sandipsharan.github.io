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
        <SiPython title="Python"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus title="C++"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp title="C Sharp"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div title="Matlab">
          <img src={MatlabIcon} alt="Matlab" style={{ width: '1.75em', height: '1.75em' }} />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpencv title="OpenCV"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow title="TensorFlow"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch title="PyTorch"/>
      </Col><Col xs={4} md={2} className="tech-icons">
        <SiRos title="ROS"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUnity title="Unity"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div title="SUMO">
        <img src={SumoIcon} alt="Sumo" style={{ width: '1.25em', height: '1em' }} />
      </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div title="RoadRunner">
        <img src={RoadRunnerIcon} alt="RoadRunner" style={{ width: '1em', height: '1em' }} />
      </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div title="Gazebo">
        <img src={GazeboIcon} alt="Gazebo" style={{ width: '1.75em', height: '1.75em' }} />
      </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div title="Solidworks">
        <img src={SolidWorksIcon} alt="Solidworks" style={{ width: '1.05em', height: '1.05em' }} />
      </div>  
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy title="NumPy"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn title="Scikit-Learn"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScipy title="SciPy"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas title="Pandas"/>
      </Col>  
    </Row>
  );
 }

export default Techstack;
