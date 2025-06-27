// project images
import friendsImage from "../assets/projects/friends.jpg";
import friendImage from "../assets/projects/friend.jpg";
import itemGroups from "../assets/projects/item-groups.jpg";
import endpoints from "../assets/projects/endpoints.jpg"
import chat from "../assets/projects/chat.jpg";
import dashboard from "../assets/projects/dashboard.png";
import dashboadrdStats from "../assets/projects/dashboard stats.jpg";
import charts from "../assets/projects/charts.png";
import archived from "../assets/projects/archived.jpg";
// icons
import { FaReact, FaGitAlt, FaPython, FaDocker} from "react-icons/fa";
import { SiSqlite, SiTypescript, SiSwagger, SiDotnet, SiPostgresql, SiTailwindcss} from "react-icons/si";


export interface ProjectDetails {
  id: number;
  title: string;
  description: string;
  githubUrl?: string;
  images?: { src: string; alt: string }[];
  longDescription: string;
  technologies: { icon: React.ComponentType<{ className?: string }>; hoverColor: string }[];
}

export const projectsData: ProjectDetails[] = [
  {
    id: 1,
    title: "AI-Powered HR Assistant Platform",
    description: "Smart Employment Document Processing & Chat Interface",
    githubUrl: "https://github.com/AntonIshchyk/",
    images: [
      { src: chat, alt: "Chat Interface" },
      { src: dashboard, alt: "Dashboard Overview" },
      { src: dashboadrdStats, alt: "Dashboard Statistics" },
      { src: charts, alt: "Charts and Graphs" },
      { src: archived, alt: "Archived Chats" }
    ],
    longDescription: "This project is designed to reduce the workload of HR employees by using a chatbot that answers questions based on the CAO and other internal company documents. If the chatbot cannot provide an answer, the user can request to speak a HR employee directly in the same chat.",
    technologies: [
      { icon: SiDotnet, hoverColor: "hover:text-[#512bd4]" },
      { icon: FaReact, hoverColor: "hover:text-[#61DBFB]" },
      { icon: SiTypescript, hoverColor: "hover:text-[#3178C6]" },
      { icon: SiTailwindcss, hoverColor: "hover:text-[#06B6D4]" },
      { icon: FaPython, hoverColor: "hover:text-[#3776AB]" },
      { icon: SiPostgresql, hoverColor: "hover:text-[#336791]" },
      { icon: FaDocker, hoverColor: "hover:text-[#2496ED]" }
    ]
  },
  {
    id: 2,
    title: "Social Agenda",
    description: "Employee Workshop & Team Building Management",
    githubUrl: "https://github.com/AntonIshchyk/Social-Agenda",
    images: [
      { src: friendsImage, alt: "Friends Page" },
      { src: friendImage, alt: "Friend Attending Event" }
    ],
    longDescription: "The website makes it easier for employees to see who is attending Workshops and Team Building activities. It also helps managers announce and manage attendance for these events.",
    technologies: [
      { icon: FaReact, hoverColor: "hover:text-[#61DBFB]" },
      { icon: SiTypescript, hoverColor: "hover:text-[#3178C6]" },
      { icon: SiDotnet, hoverColor: "hover:text-[#512bd4]" },
      { icon: FaGitAlt, hoverColor: "hover:text-[#f04141]" }
    ]
  },
  {
    id: 3,
    title: "CargoHub",
    description: "Legacy System Refactoring & Enhancement",
    githubUrl: "https://github.com/AntonIshchyk/CargoHub",
    images: [
      { src: endpoints, alt: "API Endpoints" },
      { src: itemGroups, alt: "Item Groups Endpoint Showcase" }
    ],
    longDescription: "Our team of three developers was tasked with analyzing, documenting, refactoring, and enhancing a legacy system inherited from the previous development team. Our focus was on improving code quality, maintainability, and functionality.",
    technologies: [
      { icon: SiDotnet, hoverColor: "hover:text-[#512BD4]" },
      { icon: SiSwagger, hoverColor: "hover:text-[#85C441]" },
      { icon: SiSqlite, hoverColor: "hover:text-[#003B57]" },
      { icon: FaGitAlt, hoverColor: "hover:text-[#f04141]" }
    ]
  }
];