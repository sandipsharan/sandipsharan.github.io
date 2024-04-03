import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import astar from "../../Assets/Projects/astar.png";
import gesture from "../../Assets/Projects/gesture.png";
import lqrlqg from "../../Assets/Projects/LQR_LQG.png";
import mars from "../../Assets/Projects/mars.png";
import maze from "../../Assets/Projects/maze.png";
import multi from "../../Assets/Projects/multi.jpg";
import nerf from "../../Assets/Projects/nerf.png";
import underwater from "../../Assets/Projects/underwater.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nerf}
              isBlog={false}
              title="3D Inspection using NerF"
              description="Developed an innovative 3D inspection framework. Integrated modified HF-NeuS and DeepCrack. Layed the groundwork for precise 3D crack inspection"
              ghLink="https://github.com/sandipsharan"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={underwater}
              isBlog={false}
              title="Underwater Image Restoration"
              description="Built a DNN model for getting the depth map of the input image. Pre-processed the depth map and estimated the illuminant map, and the wideband attenuation coefficient. Restored the image using the estimated attenuation coefficient value"
              ghLink="https://github.com/sandipsharan/Underwater-Image-Restoration"
              imgStyle={{ width: '100px', height: '100px' }}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gesture}
              isBlog={false}
              title="Gesture-Based Virtual Car Driving System"
              description="Used Google's Media Pipe model to extract hand’s key points and estimate the angle between them. Trained a Feed Forward Neural Network (FFNN) with a custom dataset to classify gestures. Implemented the live Gesture control for Turtlebot using Gazebo, ROS."
              ghLink="https://github.com/sandipsharan/Virtual-Car-Driving-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={astar}
              isBlog={false}
              title="Weighted A-star algorithm for Turtle Bot using ROS2"
              description="Implemented A* algorithm for path planning of a TurtleBot in a custom map containing random obstacles. Utilized the ROS2 framework to simulate the robot's movement within the obstacle space. Successfully integrated the A* algorithm with the ROS2 simulation and visualized them in Gazebo."
              ghLink="https://github.com/sandipsharan/A-star-algorithm-for-turtlebot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mars}
              isBlog={false}
              title="Martian Rover"
              description="Designed and Simulated Martian Rover using Solidworks and Gazebo. Formulated Kinematics and Dynamics for each links of the rover and the robotic arm. Controlled the rover using ROS in a simulated gazebo environment similar to the Martian world"
              ghLink="https://github.com/sandipsharan/Martian-Rover"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={maze}
              isBlog={false}
              title="Maze Robot"
              description="Implemented wall-following algorithm in the robot for solving the maze in C++. Robot's Work: Detect the walls, Setting the walls, Change the color of the cell after passing, and halt when it reaches the goal. Implemented the algorithm for the robot to return back to its original position."
              ghLink="https://github.com/sandipsharan/Maze-Robot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lqrlqg}
              isBlog={false}
              title="LQR and LQG Controller"
              description="Implemented the LQR and LQG Controller for a frictionless cart with masses attached to it. Calculated the equations of motion for system. Implemented the controllers for both non-linear and linearized system and simulating the response for initial condition and step input."
              ghLink="https://github.com/sandipsharan/LQR-LQG-Controller"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={multi}
              isBlog={false}
              title="Multi-Purpose Rover"
              description="Designed and developed a Multi-Purpose Rover which can be used in different fields just by changing the end-effector. Usage Areas: x Floor Sanitization- Medical x Landmine Detection - Military x Soil collection - Space Exploration"
              ghLink="https://github.com/sandipsharan"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
