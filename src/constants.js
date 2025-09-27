// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import mcLogo from './assets/tech_logo/mc.png';


// Experience Section Logo's
import DeloitteLogo from './assets/company_logo/Deloitte.png';
import InternshalaLogo from './assets/company_logo/Internshala.png';

// Education Section Logo's
import highschoolLogo from './assets/education_logo/highschool.png';
import intermediateLogo from './assets/education_logo/highschool.png';
import bachelorsLogo from './assets/education_logo/PranveerSingh.png';


// Project Section Logo's
import spotifyLogo from './assets/work_logo/Spotify.png.png';
import simonsaysLogo from './assets/work_logo/simonsays.png.png';
import airbnbLogo from './assets/work_logo/airbng.png.jpg';
import weatherapiLogo from './assets/work_logo/weatherapi.png.jpg';




export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: DeloitteLogo,
      role: "Data Analyst",
      company: "Deloitte",
      date: "June 2025",
      desc: "Completed a Deloitte job simulation involving data analysis and forensic technology , Created a data dashboard using Tableau , Used Excel to classify data and draw business conclusions",
      skills: [
        "Tableau",
        "Data Analytics",
        "Data Science",
        "Python",
        "Jupyter",
        "Anacondas",
        "Numpy",
        "Pandas",
      ],
    },
    {
      id: 1,
      img: InternshalaLogo,
      role: "FullStack Developer",
      company: "Internshala Trainings",
      date: "September 2025",
      desc: "Trained as a Full Stack Developer through Internshala Trainings, with hands-on experience in React.js, Tailwind CSS, HTML, CSS, JavaScript, Node.js, Express.js, and SQL. Skilled in building responsive, user-friendly web applications with clean code and efficient back-end integration.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "ReactJS",
        "MongoDB",
        "NodeJS",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: bachelorsLogo,
      school: "Pranveer Singh Institute of Technology , Kanpur",
      date: "Oct 2023 - July 2027",
      grade: "8.26 CGPA",
      desc: "I am currently pursuing a Bachelor of Technology in Computer Science and Engineering at Pranveer Singh Institute of Technology, now in my 5th semester. I have maintained a strong academic record, achieving an aggregate CGPA of 8.26 up to the 3rd semester. This journey has deepened my technical expertise, problem-solving skills, and understanding of advanced computing concepts, while fostering a strong foundation for innovation and future growth in the field of technology.",
      degree: "B.Tech - Computer Science and Engineering",
    },
    {
      id: 1,
      img: intermediateLogo,
      school: "Dr.Virendra Swaroop Public School, Kanpur",
      date: "Apr 2022 - Mar 2023",
      grade: "82%",
      desc: "I completed my intermediate education from Dr. Virendra Swaroop Public School, securing 82% in the ICSE Board examinations. This phase of my education enhanced my analytical abilities, subject knowledge, and problem-solving skills. It also strengthened my perseverance and adaptability, preparing me for higher education and future challenges with confidence and a strong academic foundation.",
      degree: "Intermediate",
    },
    {
      id: 2,
      img: highschoolLogo,
      school: "Dr.Virendra Swaroop Public School, Kanpur",
      date: "Apr 2020 - Mar 2021",
      grade: "88%",
      desc: "I completed my high school education from Dr. Virendra Swaroop Public School, achieving 88% in the ICSE Board examinations. This accomplishment reflects my dedication, strong academic foundation, and consistent hard work. My time at school not only strengthened my knowledge in core subjects but also helped me develop discipline, critical thinking, and effective time management skills that continue to guide my personal and academic journey.",
      degree: "High School",
    },
    
  ];
  
  export const projects = [
    {
      id: 0,
      title: "WanderLust",
      description:
        "Wanderlust is an innovative web application designed to connect travelers with unique accommodations and experiences worldwide. Offering advanced search filters, user-friendly booking management, secure payments, and personalized recommendations, Wanderlust provides a seamless travel planning experience. Built with modern web technologies and deployed online, the platform reflects strong skills in front-end and back-end development, database management, and cloud deployment, demonstrating the creation of a fully functional and scalable travel marketplace.",
      image: airbnbLogo,
      tags: ["HTML", "CSS", "JavaScript","API","MongoDB","ExpressJS","NodeJS"],
    },
    {
      id: 1,
      title: "Simon Says Game",
      description:
        "I have developed the Simon Says game, an interactive web-based application that challenges users to replicate sequences of lights and sounds, enhancing memory and focus. The project showcases my skills in front-end development, event handling, and responsive design, while emphasizing user engagement through smooth animations and intuitive gameplay.",
      image: simonsaysLogo,
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 2,
      title: "Spotify Clone",
      description:
        "I have developed a Spotify-inspired web application that allows users to explore, play, and manage music playlists seamlessly. The platform features a clean, responsive interface with functionalities such as song browsing, playlist creation, and audio playback controls. This project demonstrates my proficiency in front-end development, API integration, and user interface design, reflecting my ability to build dynamic and interactive media applications.",
      image: spotifyLogo,
      tags: ["HTML", "CSS",],
    //   github: "https://github.com/codingmastr/Movie-Recommendation-App",
    //   webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    {
      id: 3,
      title: "Weather API application",
      description:
        "I have built a React-based Weather API application that provides real-time weather updates for any location. The application features a clean and responsive user interface, enabling users to search for cities and instantly view detailed weather information including temperature, humidity, wind speed, and forecasts. This project demonstrates my skills in React development, API integration, state management, and responsive design, showcasing my ability to create functional and user-friendly web applications.",
      image: weatherapiLogo,
      tags: ["React JS", "Node.js", "NPM", "Validation"],
    //   github: "https://github.com/codingmastr/cmtk-email-validator",
    //   webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    },
  ];  