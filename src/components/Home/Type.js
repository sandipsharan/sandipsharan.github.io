import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Robotics Software Engineer",
          "Computer Vision Engineer",
          "Machine Learning Engineer",
          "AI Engineer", 
          "Automation Engineer",
          "AR / VR Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
