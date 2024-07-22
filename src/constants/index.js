import {
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
  ethforall
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
  SiRstudio
} from "react-icons/si";

import {
  FaHardHat,
  FaRust
} from "react-icons/fa";

import {
  IoIosNotificationsOutline
} from "react-icons/io";

import {
  FaGolang
} from "react-icons/fa6";

import { RiFileExcel2Line } from "react-icons/ri";


import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";

export const resumeLink = "https://drive.google.com/file/d/1dp9zYqgvYBNga49JDnm5lizsT1rWQRCa/view?usp=sharing";
export const repoLink = "https://github.com/mittal-parth/personal-portfolio";

export const callToAction = "https://www.linkedin.com/in/mittal-parth";

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
    icon: ethglobal,
    event: "ETHIndia'22 | World's Largest Ethereum Hackathon",
    position: "Winner",
    content1: "Top 12 winners among 20k+ registrations",
    content2: "One of Polygon's Best Public Goods",
    content3: "Best Module on Biconomy SDK",
    article: "https://www.thehindu.com/news/cities/Mangalore/nitk-iiit-delhi-team-makes-it-to-top-12-winners-in-ethindia-22/article66238923.ece",
    project: "https://devfolio.co/projects/chargeswap-3527",
    youtube: "https://youtu.be/9rieTya8Yds?t=3908",
  },
  {
    id: "a-2",
    icon: polkadot,
    event: "Polkadot Hackathon: Europe Edition",
    position: "2nd Runner Up in the ink! Smart Contract Category",
    content1: "Built GreenTrust offering a novel solution for obtaining certification in organic farming.",
    content2: "",
    content3: "",
    github: "https://github.com/pranav2305/GreenTrust",
  },
  {
    id: "a-3",
    icon: lightspeed,
    event: "Warpspeed by Lightspeed",
    position: "1st Runner Up",
    content1: "1st Runner Up Overall by Lightspeed among 107 hackers",
    content2: "Top 3 projects using Replit",
    content3: "1st Runner Up by Amazon Web Services (AWS)",
    article: "https://shorturl.at/fhjsT",
  },
  {
    id: "a-4",
    icon: dennisivy,
    event: "September Hackathon by Dennis Ivy",
    position: "Winner",
    content1: "Rated the best portfolio website among 450+ participants across the globe.",
    content2: "",
    content3: "",
    youtube: "https://www.youtube.com/watch?v=X2473En3h_o&t=5278s",
    project: "https://parthmittal.netlify.app/",
  },
  {
    id: "a-5",
    icon: manipal,
    event: "Manipal Hackathon'22",
    position: "Consolation Prize",
    content1: "Top 10 among 500+ teams across India",
    content2: "Developed a cross-platform mobile application to address the problem of social cohesion.",
    content3: "",
    article: "https://shorturl.at/exEIQ",
  },
  {
    id: "a-6",
    icon: icon,
    event: "ICON Hyperbuild Hackathon",
    position: "Honorable Mention",
    content1: "Honorable Mention among 655 participants across the globe in a 3 month-long online hackathon.",
    content2: "",
    content3: "",
    project: "https://devpost.com/software/green-trust-xj2w6g",
  },
  {
    id: "a-7",
    icon: ethforall,
    event: "ETHForAll 2023",
    position: "Top 3 Superfluid Projects",
    content1: "Bounty winners among 430 projects in ETHGlobal's largest online hackathon.",
    content2: "",
    content3: "",
    project: "https://devfolio.co/projects/green-trust-ed14",
  },
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
      }
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
            link: ""
          }
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
            link: ""
          }
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
        title: "Pelletier Librayr HelpDesk",
        duration: "Aug 2022 - Aug 2023",
        content: [
          {
            text: "Scanned books in and out for patreons, was responsible for opening and closing the library",
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
    organisation: "URECA LLC",
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
  }
];

export const openSourceContributions = [
  {
    id: "os-1",
    organisation: "GatorEducator",
    logo: publiclab,
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
    logo: publiclab,
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
    logo: publiclab,
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
  {
    id: "os-4",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title: "style: Make post page footer responsive",
    link: "https://github.com/publiclab/plots2/pull/10634",
    number: "#10634",
    date: "Feb 24 2022",
    linesAdded: "64",
    linesDeleted: "8",
  },
];

export const projects = [
  {
    id: "project-1",
    title: "Research Paper: \n How do macroeconomic indicators affect Layoffs?",
    github: "https://github.com/ayush4345/Comicify.ai",
    link: "https://comicify-ai.vercel.app/",
    image: comicify_ai,
    content:
      "Econometric study using Vector Autoregression (VAR) models and impulse response analysis to explore how interest rates, inflation, and industrial production affect layoff trends in Tech",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "Stata"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "Tableau"
      },
      {
        id: "icon-3",
        icon: SiOpenai,
        name: "Python"
      },
      {
        id: "icon-4",
        icon: SiGooglecloud,
        name: "Testing Stuff"
      },
    ],
  },
  {
    id: "project-2",
    title: "Statistical Analysis: How do Household metrics affect Alcohol consumption?",
    github: "https://github.com/mittal-parth/GreenTrust",
    link: "https://green-trust-fantom.netlify.app/",
    image: greentrust,
    content:
      "Winning project at 3 hackathons, GreenTrust offers a novel solution for obtaining certification in organic farming by organizing credible and decentralized Participatory Guarantee Systems (PGSs).",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-3",
        icon: SiNextdotjs,
        name: "Next.js"
      },
      {
        id: "icon-4",
        icon: SiIpfs,
        name: "IPFS"
      },
      {
        id: "icon-5",
        icon: SiSolidity,
        name: "Solidity"
      },
      {
        id: "icon-6",
        icon: IoIosNotificationsOutline,
        name: "Push Protocol"
      },
    ],
  },
  {
    id: "project-3",
    title: "Live-Chat-Box",
    github: "https://github.com/tuduun/LiveChatBox",
    link: "https://tuduun.github.io/LiveChatBox/",
    image: chargeswap,
    content:
      "Real-time chat application powered by Express and WebSockets creating scalable user management, and a seamless chatting experience",
    stack: [
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "JavaScript"
      },
      {
        id: "icon-2",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-4",
        icon: DiCss3,
        name: "CSS"
      },
     
      {
        id: "icon-11",
        icon: SiSolidity,
        name: "Solidity"
      },
      {
        id: "icon-5",
        icon: FaHardHat,
        name: "HardHat"
      },
      {
        id: "icon-6",
        icon: SiIpfs,
        name: "IPFS"
      },
      {
        id: "icon-7",
        icon: SiArduino,
        name: "Arduino"
      },
      {
        id: "icon-8",
        icon: IoIosNotificationsOutline,
        name: "Push Protocol"
      },
    ],
  },
  {
    id: "project-4",
    title: "Samsotech Table Management System",
    github: "",
    link: "https://www.linkedin.com/posts/mittal-parth_technologysolutions-softwaredevelopment-technology-activity-6994915645066809344-WnMY?utm_source=share&utm_medium=member_desktop",
    image: placeicon,
    content:
      "Restaurant, Place, Table and realtime Reservation Management with Multi-Tenant Architecture, RBAC, SMS and Email integration for Samsotech International",
    stack: [
      {
        id: "icon-1",
        icon: SiDotnet,
        name: "Dot Net Core MVC 6"
      },
      {
        id: "icon-2",
        icon: SiBootstrap,
        name: "Bootstrap"
      },
      {
        id: "icon-3",
        icon: DiMsqlServer,
        name: "MS Sql Server"
      },
      {
        id: "icon-4",
        icon: SiJquery,
        name: "jQuery"
      },
      {
        id: "icon-5",
        icon: SiTwilio,
        name: "Twillio"
      },
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
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
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
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
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
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
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
    link: "https://www.linkedin.com/in/mittal-parth",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/mittal-parth",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:mittalparth22@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiOutlineTwitter,
    link: "https://www.twitter.com/mittalparth_",
  },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/mittalparth_",
  },
];

export const aboutMe = {
    name: "Tuguldur G.",
    tagLine: "Software Engineer | Economist | Allegheny College Alumni",
    intro: "A life long knowledge seeker and technology enthusiast."
}
