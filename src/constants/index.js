import {
  analysis,
  amsa,
  gatorgrade,
  gatoreducator,
  algorithmology,
  paper,
  twitch,
  alleghenycollege,
  alleghenycollege1,
  college,
  ureca,
  bmm,
  ftac,
  nitk,
  cluboard,
  cash_flow,
  gdsc,
  iris,
  ecell,
  genesis,
  portfolio,
  publiclab,
  zulip,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  huntly,
  oracle,
  comicify_ai,
  greentrust,
  averlon,
  devfolio,
  pba,
  ethglobal,
  polkadot,
  lightspeed,
  dennisivy,
  manipal,
  icon,
  ethforall,
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiMicrosoftazure,
  SiTableau,
  SiStreamlit,
  SiRstudio,
} from "react-icons/si";

import { FaHardHat, FaRust } from "react-icons/fa";

import { IoIosNotificationsOutline } from "react-icons/io";

import { FaGolang } from "react-icons/fa6";

import { RiFileExcel2Line } from "react-icons/ri";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";

export const resumeLink =
  "https://drive.google.com/file/d/1mVC1BR02xEqMRlim18tZFjc28z6SP1iY/view";
export const repoLink = "https://github.com/tuduun/personal-portfolio";

export const callToAction = "https://www.linkedin.com/in/tugi";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "projects",
    title: "Projects",
  },

  {
    id: "contactMe",
    title: "Contact Me",
  },
];

export const educationList = [
  {
    id: "education-1",
    icon: alleghenycollege1,
    title: "Allegheny College",
    degree: "Bachelor of Science in Computer Science",
    duration: "Aug 2020 - May 2024",
    content1: "GPA: 3.6",
  },
  {
    id: "education-2",
    icon: alleghenycollege1,
    title: "Allegheny College",
    degree: "Bachelor of Arts in Economics",
    duration: "Aug 2020 - May 2024",
    content1: "GPA: 3.6",
  },
];

export const achievements = [
  {
    id: "a-1",
    icon: amsa,
    event:
      "AMSA ACT Hackathon '21 | Association of Mongolian Students in America",
    position: "2nd place",
    content1:
      "Built AmsaGuide, a mentor-connecting website using Vue.js and Firebase",
    content2: "Placed 2nd out of 10 teams that attended",
    article: "https://www.amsa.mn/",
    project: "https://guide-sign.web.app/",
    github: "https://github.com/tsenguunchik/act2021-team2",
  },
  {
    id: "a-2",
    icon: alleghenycollege1,
    event: "Allegheny College |    Credly Certification",
    position: "Software Development with Python",
    content1:
      "Introduces essential knowledge and skills for engineering, releasing, and maintaining software using Python.",
    content3:
      "Demonstrated the ability to contribute high-quality updates to source code.",
    project:
      "https://www.credly.com/badges/99514de9-6b3b-46f6-947d-045679552742",
  },
  {
    id: "a-3",
    icon: alleghenycollege1,
    event: "Allegheny College |    Credly Certification",
    position: "Programming with Web Technologies",
    content1:
      "Provides knowledge and skills needed to benchmark, maintain, and enhance websites.",
    content3:
      "Developed accessible, aesthetically pleasing, and well-organized websites and web applications.",
    project:
      "https://www.credly.com/badges/76eccd60-8764-4f9d-99e3-73a2363b06ab",
  },
  {
    id: "a-4",
    icon: alleghenycollege1,
    event: "Alden Scholar Award",
    position: " Dean's List (2021 - 2024)",
    content1:
      "The Alden Scholar distinction at Allegheny College honors students who demonstrate exceptional academic achievement and intellectual engagement, maintaining a high GPA and actively contributing to scholarly activities.",
    content2: "",
    content3: "",
  },
  {
    id: "a-5",
    icon: manipal,
    event: "Winter League | Erie Ultimate Frisbee '23",
    position: "1st place",
    content1: "Top 1 among 20 teams in Erie, PA",
    content2:
      "Engaged in a team sport",
    content3: "",
  },
  {
    id: "a-6",
    icon: icon,
    event: "High Tide '23",
    position: "2nd place in Mixed Division",
    content1:
      "2nd place among D1 and D2 colleges ultimate frisbee teams in the mixed division",
    content2: "",
    content3: "",
  }
];

export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-2",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-6",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-7",
        icon: SiC,
        name: "C",
      },
      {
        id: "pl-10",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-11",
        icon: SiSolidity,
        name: "Solidity",
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "pl-8",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-9",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "f-1",
        icon: SiDjango,
        name: "Django",
      },
      {
        id: "f-3",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-4",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-6",
        icon: SiJquery,
        name: "jQuery",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-2",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-3",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-4",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-8",
        icon: SiNetlify,
        name: "Netlify",
      },
      {
        id: "t-9",
        icon: SiVite,
        name: "ViteJS",
      },
    ],
  },
];

export const experiences = [
  {
    organisation: "Food Truck Association of Canada",
    logo: ftac,
    link: "https://foodtrucksofcanada.org/",
    positions: [
      {
        title: "Full-stack Engineer, Intern",
        duration: "Jan 2024 - May 2023",
        content: [
          {
            text: "Developed a web app linking food trucks with event-hosting businesses, featuring a real-time feed for new opportunities.",
            link: "",
          },
          {
            text: "Implemented user authentication for food trucks using Django and PostgreSQL.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Allegheny College",
    logo: alleghenycollege1,
    link: "https://www.cis.allegheny.edu/",
    positions: [
      {
        title: "Department Software Engineer",
        duration: "Jan 2024 - May 2024",
        content: [
          {
            text: "Designed an interactive Pygame app to teach high school students coding fundamentals through engaging, simplified concepts.",
            link: "",
          },
        ],
      },
      {
        title: "Teaching Assistant",
        duration: "Sep 2023 - Jan 2024",
        content: [
          {
            text: "Assisted in the instruction and mentorship of students in introductory courses and foundational projects",
            link: "",
          },
        ],
      },
      {
        title: "Full-Stack Engineer, Intern",
        duration: "May 2023 - Aug 2023",
        content: [
          {
            text: "Created GatorAdvisor, an interactive visual roadmap and a dashboard for the computer science department’s all major and minor programs to make it easier to understand and to reduce student course planning time.",
            link: "",
          },
        ],
      },
      {
        title: "Pelletier Library HelpDesk",
        duration: "Aug 2022 - Aug 2023",
        content: [
          {
            text: "Scanned books in and out for patrons, was responsible for opening and closing the library",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Bull Moose Marketing",
    logo: bmm,
    link: "https://www.linkedin.com/company/bullmoosemarketing/posts/?feedView=all",
    positions: [
      {
        title: "Software Engineer, Intern",
        duration: "Sep 2023 - Jan 2024",
        content: [
          {
            text: "Developed a web scraping tool integrating WordPress with Google Maps API, enhancing place listing accuracy and enabling automated content updates using Node.js, Google Maps API, Postman, and WordPress",
            link: "",
          },
          {
            text: "Engineered a full-stack Node.js application with RESTful API endpoints in Express for dynamic client-server interactions, data processing, scraping pages using Selenium, and generating downloadable JSON reports.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "URECA",
    logo: ureca,
    link: "Ureca.com",
    positions: [
      {
        title: "Blockchain Engineer, Intern",
        duration: "May 2022 - Aug 2022",
        content: [
          {
            text: "Spearheaded the minting of 5000 test ARC69 tokens, a pivotal component now driving URECA's carbon credit marketplace, which is the first of its kind to democratize climate action investments",
            link: "",
          },
        ],
      },
    ],
  },
];

export const openSourceContributions = [
  {
    id: "os-1",
    organisation: "GatorEducator",
    logo: gatoreducator,
    repo: "gatorgrade",
    type: "pull-request",
    status: "merged",
    title:
      "Feat: Add a function that parses and sets up shell commands from a YAML file",
    link: "https://github.com/GatorEducator/gatorgrade/pull/64",
    number: "#64",
    date: "May 7 2022",
    linesAdded: "36",
    linesDeleted: "1",
  },
  {
    id: "os-2",
    organisation: "GatorEducator",
    logo: gatoreducator,
    repo: "gatorgrade",
    type: "pull-request",
    status: "merged",
    title: "Feat: Add a function that generates command lines",
    link: "https://github.com/GatorEducator/gatorgrade/pull/52",
    number: "#52",
    date: "May 5 2022",
    linesAdded: "66",
    linesDeleted: "0",
  },
  {
    id: "os-3",
    organisation: "Algorithmology",
    logo: algorithmology,
    repo: "bosco",
    type: "pull-request",
    status: "merged",
    title: "Feat: Add list-processing algorithms",
    link: "https://github.com/Algorithmology/bosco/pull/28",
    number: "#28",
    date: "Apr 28 2024",
    linesAdded: "468",
    linesDeleted: "19",
  },
];

export const projects = [
  {
    id: "project-1",
    title: "Research Paper: How do macroeconomic indicators affect Layoffs?",
    github: "https://github.com/ReadyResearchers-2023-24/Tugi-Artifact",
    link: "https://drive.google.com/file/d/1R70gCThri7am5STw8PbhkX3Js2mM6TGG/view",
    image: paper,
    content:
      "Econometric study using Vector Autoregression (VAR) models and impulse response analysis to explore how interest rates, inflation, and industrial production affect layoff trends in Tech",
    stack: [
      {
        id: "icon-1",
        icon: SiTableau,
        name: "Tableau",
      },
      {
        id: "icon-2",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "icon-3",
        icon: SiStreamlit,
        name: "Streamlit",
      },
    ],
  },
  {
    id: "project-3",
    title: "Live-Chat-Box",
    github: "https://github.com/tuduun/LiveChatBox",
    link: "https://tuduun.github.io/LiveChatBox/",
    image: twitch,
    content:
      "Real-time chat application powered by Express and WebSockets creating scalable user management, and a seamless chatting experience",
    stack: [
      {
        id: "icon-1",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "icon-2",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "icon-3",
        icon: DiCss3,
        name: "CSS",
      },
    ],
  },
  {
    id: "project-4",
    title: "GatorGrader: Automatic Grading Tool",
    github: "https://github.com/GatorEducator/gatorgrade",
    link: "https://pypi.org/project/gatorgrade/",
    image: gatorgrade,
    content:
      "Directly contributed and enhanced the GatorGrade, a Python tool on PyPI , providing 300+ students with automated and consistent grading evaluations through GitHub Actions. Built an algorithm that parses and edits YML files for shell commands and GatorGrade checks (Python, Pytest)",
    stack: [
      {
        id: "icon-1",
        icon: SiPython,
        name: "Python",
      },
    ],
  },
  {
    id: "project-2",
    title:
      "Statistical Analysis: How do Household metrics affect Alcohol consumption?",
    link: "https://drive.google.com/file/d/1mWPQx5ejS8XNehBIXyOeoNhUjinEa6z4/view",
    image: analysis,
    content:
      "Analyzed U.S. Consumer Expenditure Survey data through regression analysis and authored a report demonstrating the societal impact of the data, advocating for equitable healthcare with data-driven insights. Highlighted that individuals with college degrees spend $28 more on alcohol compared to those without a high school diploma.",
    stack: [
      {
        id: "icon-2",
        icon: SiRstudio,
        name: "Rstudio",
      },
      {
        id: "icon-3",
        icon: RiFileExcel2Line,
        name: "Excel",
      },
      {
        id: "icon-4",
        icon: SiTableau,
        name: "Tableau",
      },
    ],
  },
  {
    id: "project-5",
    title:
      "Statistical Analysis: Socioeconomic Determinants of Global Happiness?",
    github: "https://github.com/CMPSC-301-Allegheny-College-Spring-2023/final-project-grays-team/blob/main/writing/reflection.md",
    image: analysis,
    content:
      "I analyzed global happiness data using linear regression to identify key determinants such as GDP per capita, freedom, generosity, and social support, thereby enhancing the understanding of socioeconomic impacts on well-being. Additionally, I created visualizations in R for over 100 countries, demonstrating that a one percent increase in GDP per capita correlates with a 0.2 increase in the happiness index.",
    stack: [
      {
        id: "icon-2",
        icon: SiRstudio,
        name: "Rstudio",
      }
    ],
  },
];

export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

export const extraCurricular = [
  {
    organisation: "Ultimate Frisbee Club",
    title: "Executive Board Member",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Winterland 2023 Champions, Erie PA    |    2nd Place at HighTide 2023",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7097977924686942209/",
      },
      {
        text: "Led a cohort of 37 selected students over 6 weeks to learn and build in the Ethereum ecosystem.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7095310520282480641/",
      },
    ],
    logo: devfolio,
  },
  {
    organisation: "Google Developer Student Club, NITK",
    title: "Co-Chair",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Started HackClub to promote and spread the culture of Hackathons in the college. 20+ hackathons particiaptions, 15+ wins over the year.",
        link: "",
      },
      {
        text: "Co-designed and developed the official website of Incident, NITK with 15K+ visitors",
        link: "https://incident.nitk.ac.in/",
      },
    ],
    logo: gdsc,
  },
  {
    organisation: "Genesis, NITK",
    title: "Competitions Head",
    duration: "Sep 2021 - Present",
    content: [
      {
        text: "Qualified for the nationals of Indian Hip Hop Dance Championship",
        link: "",
      },
      {
        text: "Won 7 inter-college solo dance competitions",
        link: "",
      },
    ],
    logo: genesis,
  },
  {
    organisation: "IRIS, NITK",
    title: "Tutor",
    duration: "Jan 2022 - Jan 2022",
    content: [
      {
        text: "Mentored 150+ students in a month-long Web Development and Ruby on Rails Bootcamp",
        link: "https://github.com/IRIS-NITK/IRIS-RoR-Bootcamp-2021",
      },
    ],
    logo: iris,
  },
  {
    organisation: "E-Cell, NITK",
    title: "Executive Member",
    duration: "Sep 2021 - Apr 2022",
    content: [
      {
        text: "Organised the season 3 of the E-Cell NITK Podcast",
        link: "https://www.youtube.com/watch?v=uA-Yrk6bVDc",
      },
      {
        text: "Member of the Sponsorship and E-Talks team for E-Summit'22",
        link: "",
      },
    ],
    logo: ecell,
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/tugi",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/tuduun",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:tuduun@gmail.com",
  },
];

export const aboutMe = {
  name: "Tuguldur Gantulga",
  tagLine: "Software Engineer | Economist | Allegheny College Alumni",
  intro: "A life long leaner and technology enthusiast.",
};
