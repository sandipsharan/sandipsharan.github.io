export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Nov 2024 - Present",
    title: "Research Engineer",
    company: "Autonomous Vehicle Laboratory, REEF, University of Florida",
    description:
      "• Engineered a machine learning-based calibration system to model and correct sensor inaccuracies and significantly enhance navigation precision and reliability for autonomous ground and aerial robots.\n" +
      "• Spearheading the development of an innovative stereo radar navigation solution for GPS-denied environments, leveraging sensor fusion techniques to enable robust autonomous localization.\n" +
      "• Refactored legacy ROS codebases to ROS2, aligning with current middleware standards for robotic hardware deployment and maintainability.",
    companyUrl: "https://avl.reef.ufl.edu/",
    manager: "Dr. Humberto Ramos" ,
  },
  {
    date: "Aug 2023 - Nov 2024",
    title: "Computer Vision Research Associate",
    company: "GAMMA Lab, UMD",
    description:
      "• Engineered a high-fidelity VR driving simulator by integrating Unity3D with SUMO traffic models and NHTSA precrash scenarios; conducted a user study to analyze behavioral data for realistic autonomous vehicle simulation.\n" +
      "• Designed and trained ML models to classify driving styles and predict vehicle trajectories using MTR, enhancing AV safety and bridging the sim-to-real gap through data-driven behavioral realism.",
    advisor: "Dr. Ming C. Lin",
    companyUrl: "https://gamma.umd.edu/",
  },
  {
    date: "Sept 2023 - May 2024",
    title: "Research Assistant",
    company: "Bio-Imaging & Machine Vision Lab, UMD",
    description:
      "• Developed a computer vision framework for real-time GoPro footage analysis, utilizing YOLOv8 for state-of-the-art object detection and tracking, followed by image processing techniques to track and display trajectories.\n" +
      "• Implemented a machine learning model for pose estimation of a dredge underwater with 86% accuracy using sonar data.",
    advisor: "Dr. Tao Yang",
    companyUrl: "https://taolab.umd.edu/",
  },
  {
    date: "May 2023 - Aug 2023",
    title: "Robotics Software Engineer Intern",
    company: "Void Robotics",
    description:
      "• Re-engineered the project repository through Docker containerization for seamless operation on the NVIDIA Jetson Nano, leveraging GPU acceleration through CUDA for a 50% improvement in processing speed.\n" +
      "• Integrated ROS2 on NVIDIA Jetson Nano via Docker for streamlined communication with ZED2 4.0 stereo cameras, reducing data transfer latency by 60% and improving overall system performance.",
    companyUrl: "https://www.voidrobotics.com/",
  },
];
