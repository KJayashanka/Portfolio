export const personal = {
  name: "Kanishka Liyanage",
  role: "Full-Stack Software Engineer",
  location: "Hikkaduwa, Sri Lanka",
  email: "kanishka.jayashanka1@gmail.com",
  phone: "+94 75 028 9665",
  tagline:
    "Full-Stack Software Engineer with 3 years of experience building production web applications with Laravel, PHP, Vue.js, JavaScript, and MySQL.",
  bio: [
    "I'm a Full-Stack Software Engineer with 3 years of professional experience developing and maintaining production web applications using Laravel, PHP, Vue.js, JavaScript, and MySQL.",
    "I specialize in building RESTful APIs, database-driven applications, and scalable backend solutions for business-critical features. I enjoy debugging complex issues, optimizing databases, and collaborating with teams to ship reliable software.",
    "Alongside my professional work, I've built machine learning projects spanning satellite image analysis and mobile health applications, combining my software engineering background with data science.",
  ],
  socials: {
    github: "https://github.com/KJayashanka",
    linkedin: "https://www.linkedin.com/in/KanishkaLiyanage",
  },
};

export const education = {
  degree: "B.Sc. (Hons) in Software Engineering",
  institution: "Informatics Institute of Technology / University of Westminster, UK",
  duration: "Sep 2020 - Sep 2026",
  detail:
    "Completed a BSc (Hons) in Software Engineering with Industrial Experience, awarded Lower Second Class Honours.",
};

export const skills = [
  {
    category: "Languages",
    items: ["PHP", "JavaScript", "Java", "Python", "HTML", "CSS"],
  },
  {
    category: "Frameworks",
    items: ["Laravel", "Vue.js", "React"],
  },
  {
    category: "Database",
    items: ["MySQL", "SQL"],
  },
  {
    category: "APIs",
    items: ["RESTful APIs"],
  },
  {
    category: "Version Control",
    items: ["Git", "GitLab"],
  },
  {
    category: "Cloud & DevOps",
    items: ["GitLab CI/CD"],
  },
];

export const experience = [
  {
    role: "Full-Stack Software Engineer",
    company: "Elevex Technologies (Pvt) Ltd.",
    location: "Colombo, Sri Lanka",
    type: "Full-time",
    duration: "Sep 2024 - Present",
    points: [
      "Develop and maintain production full-stack web applications using Laravel, PHP, Vue.js, JavaScript, HTML, CSS, and MySQL.",
      "Develop and integrate RESTful APIs supporting core business workflows and application functionality.",
      "Design and maintain database-driven features, including SQL queries, database structures, reporting, and data management.",
      "Troubleshoot production issues, identify root causes, and implement reliable fixes.",
      "Develop new application features based on business and operational requirements.",
      "Use Git and GitLab for version control and collaborative development.",
    ],
  },
  {
    role: "Software Engineer - Internship",
    company: "Ceylon Linux (Pvt) Ltd.",
    location: "Colombo, Sri Lanka",
    type: "Full-time",
    duration: "Sep 2023 - Sep 2024",
    points: [
      "Developed and maintained web applications using Laravel, PHP, Vue.js, HTML, CSS, and MySQL.",
      "Assisted with REST API development, database management, debugging, and feature implementation.",
      "Collaborated with the development team to implement application enhancements and resolve software issues.",
    ],
  },
];

export const projects = [
  {
    title: "UGCL - Urban Green Cover Loss Detection System",
    subtitle: "Final Year Project",
    description:
      "An ML-based system to monitor and analyze urban green cover loss in medium-scale Sri Lankan cities using Sentinel-2 satellite imagery. Implemented Random Forest and CNN models for classification, with image preprocessing, cloud masking, NDVI generation, and multi-temporal change detection to support urban planning and environmental monitoring.",
    tech: ["Python", "Machine Learning", "CNN", "Random Forest", "Sentinel-2", "Google Earth Engine", "QGIS"],
    link: "",
  },
  {
    title: "Skin Rashes Prediction Mobile Application",
    subtitle: "Second Year Group Project",
    description:
      "A mobile application for predicting common skin rashes using a machine learning model trained on image data. Implemented image-based prediction, integrated the trained Python model into the mobile app, and designed a user-friendly interface for image upload and prediction results.",
    tech: ["Python", "Machine Learning", "TensorFlow", "CNN", "Flutter", "Firebase"],
    link: "",
  },
];
