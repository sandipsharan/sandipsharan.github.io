export interface AboutMe {
  nameHtml: string;   // with <br />
  nameText: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  nameHtml: "Sandip Sharan<br />Senthil Kumar",
  nameText: "Sandip Sharan Senthil Kumar",
  title: "Research Engineer",
  company: "University of Florida - REEF",
  description:
    "I'm a Research Engineer at the <a href='https://avl.reef.ufl.edu/'>Autonomous Vehicle Laboratory (REEF), University of Florida</a>, where I develop machine learning-based sensor calibration and fusion systems to enhance navigation in GPS-denied environments. \n\nMy work bridges robotics, perception, and learning-based navigation focusing on radar-only localization, multi-sensor fusion, and robust autonomous systems for both ground and aerial platforms. \n\nPreviously, I contributed to research at the GAMMA Lab and Bio-Imaging & Machine Vision Lab at the University of Maryland, working on VR-based driving simulation, trajectory prediction, and computer vision for underwater systems. \n\nI’m passionate about building reliable, data-driven autonomy by combining classical GNC principles with modern AI techniques.",
  email: "sandipsharanskumar@gmail.com",
  imageUrl:
    "/skumar.png",
  googleScholarUrl: "https://scholar.google.com/citations?hl=en&user=0JJLKFoAAAAJ",
  githubUsername: "sandipsharan",
  linkedinUsername: "sandip26",
  cvUrl: "https://drive.google.com/file/d/1L71MTPU1-HARiaKc22NhPlxrKwrjqbj7/view?usp=sharing",
  institutionUrl: "https://avl.reef.ufl.edu/",
};
