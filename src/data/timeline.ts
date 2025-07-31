import hr from "../assets/about/hr.png"
import lntu from "../assets/about/lntu.png"

export interface Education {
  university: string;
  degree: string;
  field: string;
  form: string;
  date: string;
  link: string;
  logo: string;
}
  
export interface Work {
  title: string;
  company: string;
  description: string;
  date: string;
  link: string;
}

export const work: Work[] = [
  {
    title: 'Intern',
    company: "SCOR Digital Solutions",
    description: 'Learning and getting hands-on experience in software development.',
    date: '09/01/2025 - 26/12/2025',
    link: "https://www.scordigitalsolutions.com/",
  }
];

export const education: Education[] = [
  {
    university: 'Rotterdam University of Applied Sciences',
    degree: "Bachelor's degree",
    field: "Informatica",
    form: "Full-time",
    date: '2023-2027',
    link: "https://www.hogeschoolrotterdam.nl/opleidingen/bachelor/informatica/voltijd/",
    logo: hr
  },
  {
    university: 'Lutsk National Technical University',
    degree: "Bachelor's degree",
    field: "Computer Science",
    form: "Part-time",
    date: '2022-2026',
    link: "https://lntu.edu.ua/en",
    logo: lntu
  },
];