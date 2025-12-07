import {
  web,
  backend,
  frontend,
  thport,
  fullstack,
  javascript,
  java,
  html,
  css,
  reactjs,
  ubuntu,
  tailwind,
  mysql,
  linux,
  git,
  samaritans,
  oist,
  nextinnovation,
  cognizant,
  internshala,
  linkedin,
  hackerrank,
  karate,
  pglife,
  sortingvisualiser,
  aws,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: frontend
  },
  {
    title: "Backend Developer",
    icon: backend
  },
  {
    title: "Software Developer",
    icon: fullstack,
  },
];

const education = [
  {
    title: "Bachelors in Information Technology",
    company_name: "Oriental Institute Of Science And Technology, Bhopal",
    icon: oist,
    iconBg: "#fff",
    date: "2017-2019",
    points: [
      "Courses undertaken: Data Structures and Algorithms, Operating Systems, Database Management Systems, Distributed Computing, Object Oriented Programming, Computer Architecture, Computer Network, Compiler Design, Computer Graphics & Multimedia, Soft Computing, Cloud Computing, Information Security, Blockchain Technology, Analysis and Design of Algorithm, Artificial Intelligence, Software Engineering, Machine Learning, Data Science, Internet of Things.",
    ],
  },
  {
    title: "Higher Secondary",
    company_name: "C.S Lewis Billingual  High School",
    icon: samaritans,
    iconBg: "#fff",
    date: "2017-2012",
    points: [
      "Courses undertaken: Physics, Chemistry and Mathematics.",
    ],
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Ubuntu",
    icon: ubuntu,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Senior Software Engineer",
    company_name: "Tigren Of Vietnam",
    icon: cognizant,
    iconBg: "#fff",
    date: "Aug 2024 - Nov 2025",
    points: [
      "Achieved ServiceNow Certified Risk and Compliance certification.",
      "Specialized in GRC/IRM (Governance, Risk, and Compliance/Integrated Risk Management) within ServiceNow, gaining hands-on experience in this product line."
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Slovakia/EU",
    icon: cognizant,
    iconBg: "#fff",
    date: "Mar 2022 - Aug 2024",
    points: [
      "Migrated enterprise systems to modern frameworks, cutting maintenance costs by 35% and ensuring scalability.",
      "Implemented AI chatbots and CRM customizations, increasing sales tracking by 40%.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "ehter.fi of George Town in Grand Cayman Island",
    icon: internshala,
    iconBg: "#1294C8",
    date: "Apr 2019 - Mar 2022",
    points: [
      "Built and integrated front-end interfaces using modern JavaScript frameworks (React.js, Next.js) with back-end services powered by Node.js and RESTful APIs",
      "Optimized application performance and reliability by incorporating best practices in state management, database queries, and server response times",
      "Contributed to the design and implementation of new features such as crypto-backed credit card services and liquid token management using HTML and Tailwind CSS.",
    ],
  },
];

const projects = [
  {
    name: "3D Portfolio",
    description:
      "Web Portfolio in React JS which uses 3D graphics and animations to bring the content to life. The website is divided into several main sections, including an about, Education, project, connect and contact section. Each section is designed to showcase 3D's unique style and creativity, with an emphasis on interactivity and user engagement.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
      {
        name: "three.js",
        color: "blue-text-gradient",
      },
    ],
    image: thport,
    source_code_link: "https://github.com/danicavargadev-pixel/my-portfolio.git",
    live_project_link: "https://danica-varga.app/",
  },
  {
    name: "Tigren",
    description:
      "The Tigren Web Application is a platform designed to facilitate the management and search for Paying Guest (PG) accommodations. It allows users to view details, and connect with potential landlords or tenants.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: pglife,
    live_project_link: "https://www.tigren.com/",
  },
  {
    name: "ether.fi",
    description:
      "The Ether.Fi protocol is a decentralized finance platform that operates on the blockchain network and extends credit to you based on criteria.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: sortingvisualiser,
    live_project_link: "https://ether.fi/",
  },
];

export {
  services,
  technologies,
  experiences,
  projects,
  education,
};
