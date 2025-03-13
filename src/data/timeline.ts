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
    title: 'Software Developer',
    company: "Your Company",
    description: 'Contributed to Your Company by working on ... and achieving ...',
    date: 'ASAP - X',
    link: "",
  },
  {
    title: 'Warehouse Employee',
    company: "Verbena Meat",
    description: 'Assisted in maintaining organized warehouse inventory and ensuring efficient stock management.\nResponsible for packing products for distribution.',
    date: 'July 2020 - August 2020',
    link: "https://verbenameat.com.ua/",
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