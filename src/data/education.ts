export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
  logoUrl?: string; 
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2022–2024",
    institution: "University of Maryland, College Park",
    degree: "M.Eng. in Robotics",
    logoUrl:
      "/University-of-Maryland-Logo.png",
  },
  {
    year: "2018–2022",
    institution: "Anna University, Chennai, India",
    degree: "B.E. in Mechanical Engineering",
    logoUrl:
      "/Anna-University-Logo.png",
  },
];
