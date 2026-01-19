export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}
export const publicationData: Publication[] = [
  {
    year: "2026",
    conference: "AIAA SciTech",
    title: "Enabling Autonomous Navigation with Radar-Only Perception in GPS-Denied Environments",
    authors: "Sandip Sharan Senthil Kumar, et al.",
    paperUrl: "https://arc.aiaa.org/doi/10.2514/6.2026-1070",
    tldr: "Developed a radar-only perception framework for robust autonomous navigation in GPS-denied environments, leveraging machine learning-based calibration and sensor fusion techniques.",
    imageUrl:
      "/scitech.png",
  },
  {
    year: "2025",
    conference: "IEEE ICRA",
    title: "DISC: Dataset for Analyzing Driving Styles in Simulated Crashes for Mixed Autonomy",
    authors: "Sandip Sharan Senthil Kumar, et al.",
    paperUrl: "https://arxiv.org/abs/2502.00050",
    tldr: "Introduced a large-scale dataset for understanding human and autonomous vehicle driving behaviors under crash scenarios using simulation-based experiments.",
    imageUrl:
      "/disc.png",
  },
  {
    year: "2024",
    conference: "IEEE IROS",
    title: "TRAVERSE: Traffic-Responsive Autonomous Vehicle Experience & Rare-event Simulation for Enhanced Safety",
    authors: "Sandip Sharan Senthil Kumar, et al.",
    paperUrl: "http://arxiv.org/abs/2407.09466",
    tldr: "Proposed a simulation-based framework to generate rare traffic scenarios for evaluating and improving autonomous vehicle safety and responsiveness.",
    imageUrl:
      "/traverse.png",
  },
  {
    year: "2024",
    conference: "IEEE Access",
    title: "ShellCollect: A Framework for Smart Precision Shellfish Harvesting Using Data Collection Path Planning",
    authors: "Sandip Sharan Senthil Kumar, et al.",
    paperUrl: "https://ieeexplore.ieee.org/document/10766580",
    tldr: "Designed an intelligent robotic framework for precision shellfish harvesting using path-planning algorithms and sensor-based environmental data collection.",
    imageUrl:
      "/shellcollect.png",
  },
];
