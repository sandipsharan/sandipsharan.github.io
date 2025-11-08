export interface Projects {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const projectsData: Projects[] = [
  {
    title: "3D Surface Inspection",
    description:
      "Formulated a novel 3D inspection framework integrating a modified HF-NeuS model for surface rendering and semantic understanding, along with DeepCrack for neural crack segmentation through 3D reconstruction.",
    technologies: ["Python", "PyTorch", "OpenCV", "3D Vision", "Neural Rendering"],
    imageUrl:
      "/3d_surface_inspection.png",
    codeUrl: "https://github.com/sandipsharan/3D-Surface-Inspection-using-NeuS",
  },
  {
    title: "Underwater Image Restoration",
    description:
      "Developed a deep learning model to predict depth maps from underwater images and utilize neural predictions to eliminate light attenuation and haze, significantly improving visual clarity in underwater imagery.",
    technologies: ["Python", "TensorFlow", "OpenCV", "Image Processing", "Sea-Thru Algorithm"],
    imageUrl:
      "/underwater_image_restoration.jpg",
    codeUrl: "https://github.com/sandipsharan/Underwater-Image-Restoration",
  },
  {
    title: "Gesture-Based Virtual Driving System",
    description:
      "Constructed a virtual car driving interface using Google MediaPipe for real-time hand gesture recognition and machine learning classification, simulated on TurtleBot and Gazebo for behavior validation.",
    technologies: ["Python", "MediaPipe", "ROS", "Gazebo", "Machine Learning"],
    imageUrl:
      "/gesture_driving.png",
    codeUrl: "https://github.com/sandipsharan/Virtual-Car-Driving-System",
  },
  {
    title: "Brain Cancer Image Synthesis",
    description:
      "Developed a generative AI model to synthesize brain cancer MRI images for dataset augmentation, enhancing training diversity and improving tumor detection model accuracy.",
    technologies: ["Python", "PyTorch", "GANs", "VAEs", "Medical Imaging"],
    imageUrl:
      "/brain_cancer_synthesis.png",
    codeUrl: "https://github.com/sandipsharan/Brain-Tumor-Dataset-Augmentation",
  },
  {
    title: "Autonomous Vehicles at Intersections (Deep Q-Learning)",
    description:
      "Leveraged reinforcement learning techniques, specifically Deep Q-Learning, to optimize autonomous vehicle behavior at intersections, improving traffic flow and safety in mixed autonomy environments.",
    technologies: ["Python", "PyTorch", "Reinforcement Learning", "OpenAI Gym"],
    imageUrl:
      "/autonomous_intersection.png",
    codeUrl: "https://github.com/sandipsharan/Safe-Intersection-Navigation-AVs",
  },
  {
    title: "Leader-Follower Bot",
    description:
      "Implemented a leader-follower system using ArUco markers for leader identification, LiDAR for obstacle detection, and A* path planning for dynamic and efficient navigation control in multi-robot systems.",
    technologies: ["ROS2", "Python", "C++", "LiDAR", "ArUco"],
    imageUrl:
      "/astar.png",
    codeUrl: "https://github.com/sandipsharan",
  },
];
