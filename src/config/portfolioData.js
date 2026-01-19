// Portfolio Configuration - Customize this file with your information
export const portfolioData = {
  // Personal Information
  personal: {
    name: "Maruti Auti",
    title: "Full Stack Developer | Software Developer",
    email: "autimaruti2004@gmail.com",
    phone: "+91-7249408615",
    location: "India",
    summary:
      "Passionate developer with expertise in building modern Web Applications / Softwares using React, Node.js, and full-stack technologies.",
    description:
      "With a strong foundation in computer science and hands-on experience in full-stack development, I am committed to creating innovative solutions that solve real-world problems. I am continuously learning and staying updated with the latest technologies to deliver high-quality applications that meet client needs and provide exceptional user experiences.",
    image: "/profile.jpg",
  },

  // Navigation Menu
  navigation: [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Certifications", id: "certifications" },
    { label: "Contact", id: "contact" },
  ],

  // Skills Section
  skills: {
    title: "Skills",
    categories: [
      {
        name: "Frontend",
        items: [
          "React",
          "JavaScript",
          "HTML5",
          "CSS3",
          "Vite",
          "Responsive Web Design",
          "Bootstrap",
          "Tailwind CSS",
        ],
      },
      {
        name: "Backend",
        items: [
          "Node.js",
          "Express.js",
          "REST APIs",
          "JWT Authentication",
          "CRUD Operations",
        ],
      },
      {
        name: "Database",
        items: [
          "MySQL",
          "MongoDB",
          "Database Design",
          "SQL Queries",
          "Joins & Indexing",
        ],
      },
      {
        name: "Tools & Technologies",
        items: ["Git", "GitHub", "Postman", "VS Code", "npm"],
      },
      {
        name: "Concepts",
        items: [
          "Data Structures Basics",
          "OOP Concepts",
          "DBMS",
          "SDLC",
          "API Integration",
        ],
      },
      {
        name: "Soft Skills",
        items: [
          "Problem Solving",
          "Team Collaboration",
          "Time Management",
          "Communication",
          "Quick Learner",
        ],
      },
    ],
  },

  // Experience Section
  experience: [
    // Experience section removed for freshers
  ],

  // Projects Section
  projects: [
    {
      id: 1,
      title: "SmartSheti",
      description: "A smart agriculture solution for farmers.",
      fullDescription:
        "SmartSheti is an intelligent platform designed to help farmers optimize their agricultural productivity. It provides real-time crop monitoring, weather forecasting, and market insights. The application uses advanced analytics to help farmers make data-driven decisions and maximize their yield.",
      technologies: ["React", "Node.js","Express","REST API", "MongoDB"],
      githubLink: "https://github.com/autimaruti2004/",
      demo: "",
      image: "/project1.jpg",
    },
    {
      id: 2,
      title: "Point Of Sale(POS) System",
      description: "A comprehensive POS system for retail businesses.",
      fullDescription:
        "A full-featured Point of Sale system designed for retail and restaurant businesses. Features include inventory management, sales tracking, employee management, and real-time reporting. The system helps businesses streamline operations and improve customer service with a user-friendly interface.",
      technologies: ["Django", "Node.js", "Express", "MongoDB"],
      githubLink: "https://github.com/autimaruti2004/",
      demo: "",
      image: "/project2.jpg",
    },
    {
      id: 3,
      title: "To-Do List App",
      description: "A simple and effective task management application.",
      fullDescription:
        "A simple and effective task management application built with modern web technologies. It allows users to create, organize, and track their daily tasks efficiently.",
      technologies: ["HTML", "CSS", "JAVASCRIPT"],
      githubLink: "https://github.com/autimaruti2004/",
      demo: "",
      image: "/project3.jpg",
    },
  ],

  // Education Section
  education: [
    {
      id: 1,
      institution: "G. H Raisoni College of Engineering and Management, Pune",
      degree: "Masters Of Computer Application",
      field: "Computer Application",
      year: "2024 - Present",
      gpa: "7.93 CGPA",
    },
    {
      id: 2,
      institution: "Balasaheb Jadhav Arts, Commerce and Science College, Ale",
      degree: "Bachelors Of Computer Application",
      field: "Computer Application",
      year: "2021 - 2024",
      gpa: "7.80 CGPA",
    },
    {
      id: 3,
      institution: "Vidya Vikas Mandir, Rajuri",
      degree: "Higher Secondary Certificate (HSC)",
      field: "Commerce",
      year: "2019 - 2021",
      gpa: "60.00 % Percentage",
    },
    {
      id: 4,
      institution: "Shri Hareshwar Vidyalaya, Karjule Harya",
      degree: "Secondary School Certificate (SSC)",
      field: "General",
      year: "2018 - 2019",
      gpa: "62.20 % Percentage",
    },
  ],

  // Certifications Section
  certifications: [
    {
      id: 4,
      title: "Introduction to SQL",
      issuer: "Simplilearn SkillUp",
      year: "2025",
      image: "/SQL CERTIFICATE.jpg",
    },
    {
      id: 3,
      title: "Introduction to ASP.Net",
      issuer: "Simplilearn SkillUp",
      year: "2025",
      image: "/ASP.NET CERTIFICATE.jpg",
    },
    {
      id: 2,
      title: "The Joy of Computing using Python",
      issuer: "NPTEL",
      year: "2025",
      image: "/NPTEL python.jpg",
    },
    {
      id: 1,
      title: "Web Developement + ReactJs",
      issuer: "SevenMentor",
      year: "2023",
      image: "/web reactjs seven mentor.jpg"
    },
  ],

  // Resume
  resume: "/Maruti Auti W.pdf",

  // Social Links
  social: {
    github: "https://github.com/autimaruti2004",
    linkedin: "https://www.linkedin.com/in/maruti-auti-458b83234/",
    twitter: "https://twitter.com",
    instagram: "https://www.instagram.com/maruti.auti.54/",
    facebook: "https://facebook.com",
    portfolio: "https://yourportfolio.com",
  },

  // Contact Info
  contact: {
    email: "autimaruti2004@gmail.com",
    phone: "+91-7249408615",
    location: "Pune, Maharashtra, India",
    message:
      "Feel free to reach out to me for any opportunities or collaborations!",
  },
};
