// Static imports for the photo strip to enable Next.js image optimization.
import radar from "../../public/images/publications/aiaa-sparse-radar.png";
import lidar from "../../public/images/publications/aiaa-sparse-lidar.png";
import disc from "../../public/images/publications/icra-disc-dataset.png";
import traverse from "../../public/images/publications/iros-traverse.png";
import shellcollect from "../../public/images/publications/ieee-access-shellcollect.png";
import dubins from "../../public/images/publications/mdpi-dubins-curve.png";
import inspection3d from "../../public/images/projects/3d-surface-inspection.png";
import underwater from "../../public/images/projects/underwater-image-restoration.jpg";
import gesture from "../../public/images/projects/gesture-driving.png";
import intersection from "../../public/images/projects/autonomous-intersection.png";

export const myPics = [
  { img: radar, title: "Stereo-Radar Perception", alt: "Scitech 2026 - Stereo-Radar Perception" },
  { img: lidar, title: "Sparse Lidar Reconstruction", alt: "Scitech 2026 - Sparse Lidar Reconstruction" },
  { img: disc, title: "DISC Dataset", alt: "ICRA 2025 - DISC Dataset" },
  { img: traverse, title: "TRAVERSE", alt: "IROS 2024 - TRAVERSE" },
  { img: shellcollect, title: "ShellCollect", alt: "IEEE Access 2024 - ShellCollect" },
  { img: dubins, title: "Dubins Curve Planning", alt: "MDPI Sensors 2025 - Dubins Curve Planning" },
  { img: inspection3d, title: "3D Surface Inspection", alt: "3D Surface Inspection comparison (Neus vs Hf-Neus)" },
  { img: underwater, title: "Underwater Restoration", alt: "Underwater image restoration using Sea-thru" },
  { img: gesture, title: "Gesture Driving", alt: "Gesture driving using Google MediaPipe" },
  { img: intersection, title: "Autonomous Intersection RL", alt: "Autonomous intersection RL using Deep-Q" },
];


