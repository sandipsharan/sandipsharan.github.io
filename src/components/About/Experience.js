import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Experience = () => {
  return (
    <Container>
      <h2> <span className='purple'>Research</span> Experience</h2>
      <br />

      <Row className="justify-content-md-start">
        <Col md={12} className="justified-column">
            <br />
            <h3 className="left-aligned-text"><span className='purple'><strong>Research Assistant</strong></span> - GAMMA Lab, UMD
            <span className='text-icons'> - 
            <a
              href="https://scholar.google.com/citations?user=ugFNit4AAAAJ&hl=en"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-text-icons"
            >
            <strong>Advisor: Dr. Ming. C. Lin</strong>
            </a>
            </span></h3>
            <p className="left-aligned-text">
                ◦ <span className='purple'>Scenario Creation:</span> Fabricated 9 collision scenarios from NHTSA precrash typology by integrating Road Runner, SUMO & Unity3D for
              computer graphics and also conducted a user study for human driver data collection by incorporating VR for eye tracking using Meta SDK.
              <br />
              <br />
                ◦ <span className='purple'>Path Planning:</span> Developed an LSTM model to classify driving styles from trajectory data and currently working on a machine learning model
              forecasting trajectories based on driving style for mixed autonomy situations proposing enhanced safety and reliability
            </p>
        </Col>

        <Col md={12} className="justified-column">
          <br />
          <h3 className="left-aligned-text">
            <span className='purple'>
               <strong>Research Assistant</strong> - Bio-Imaging and Machine Vision Lab, UMD
            </span>
            <span className='text-icons'> - 
            <a
              href="https://scholar.google.com/citations?user=T0NCdtgAAAAJ&hl=en"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-text-icons"
            >
            <strong>Advisor: Dr. Yang Tao</strong>
            </a>
            </span>
          </h3>
          <p className="left-aligned-text">
              ◦ <span className='purple'>Obstacle Detection:</span> Developed a robust computer vision system to efficiently process live GoPro camera video, enabling real-time tracking
            of the boat’s path using object detection and object tracking.
            <br />
            <br />
              ◦ <span className='purple'>Anomaly Detection:</span> Deployed a highly effective anomaly detection model for identifying obstacles and dredge underwater and determining
            their precise positions based on sonar scan data through image analysis techniques, enhancing navigational safety.
          </p>
        </Col>
      
      </Row>

      <br />
      <br />
      <br />

      <h2> <span className='purple'>Work</span> Experience</h2>
      <br />

      <Row className="justify-content-md-start">

        <Col md={12} className="justified-column">
          <h3 className="left-aligned-text"><span className='purple'><strong>Robotics Software Engineer Intern</strong></span> - Void Robotics, Marathon, FL</h3>
          <p className="left-aligned-text">
          ◦ Re-Engineered the project repository through containerization using docker for seamless operation on the <span className='purple'>NVIDIA Jetson Nano</span>, enhancing
          compatibility and leveraging GPU acceleration through cuda for optimized performance
          <br />
          <br />
          ◦ Leveraged <span className='purple'> ROS 2</span> to establish efficient communication with <span className='purple'> ZED2 4.0</span> stereo cameras on NVIDIA Jetson Nano via Docker, enabling access to
          camera data and cross-device RViz data visualization for robotic systems
          </p>
        </Col>

        <Col md={12} className="justified-column">
          <br />
          <h3 className="left-aligned-text"><span className='purple'><strong>Student Design Intern</strong></span> - DRDO, Chennai, India</h3>
          <p className="left-aligned-text">
              ◦ Designed and validated a conceptual fixture, improving automation testing the compatibility of the Armoured Fighting Vehicle’s track guard,
            skirt, and subsystems, resolving dimension issues before system integration
          </p>
        </Col>
      </Row>
    </Container>
    
 );
};


export default Experience;
