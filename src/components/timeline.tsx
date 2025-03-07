const timelineData = [
  {
    title: 'Software Developer',
    company: "Your Company",
    description: 'Worked on amazing product',
    date: 'ASAP - X',
    link: "",
  },
  {
    title: 'Warehouse Employee',
    company: "Verbena Meat",
    description: 'Assisted in maintaining organized warehouse inventory and ensuring efficient stock management. Responsible for packing products for distribution.',
    date: 'July 2020 - August 2020',
    link: "https://verbenameat.com.ua/",
  }
]

const education = [{
    university: 'Rotterdam University of Applied Sciences',
    degree: "Bachelor's degree",
    field: "Informatica",
    form: "Full-time",
    date: '2023-2027',
    link: "https://www.rotterdamuas.com/",
  },
  {
    university: 'Lutsk National Technical University',
    degree: "Bachelor's degree",
    field: "Computer Science",
    form: "Part-time",
    date: '2022-2026',
    link: "https://lntu.edu.ua/en",
  },
]
  
interface PropsType {
  title: string 
  description: string
  date: string
}
  
const TimelineItem: React.FC<PropsType> = ({ title, description, date }) => {
  return (
  <div className="group relative py-6 pl-8 sm:pl-32">
    <div className="mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 after:bg-indigo-600 group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]">
      <time className="left-0 mb-3 inline-flex h-6 w-20 translate-y-0.5 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold uppercase text-emerald-600 sm:absolute sm:mb-0">
        {date}
      </time>
      <div className="text-xl font-bold text-slate-900">{title}</div>
    </div>
    <div className="text-slate-500">{description}</div>
  </div>
  )
}
  
const Timeline = () => {
  return (
    <div>
      {timelineData.length > 0 &&
        timelineData.map((item, idx) => (
          <TimelineItem
            key={idx}
            title={item.title}
            description={item.description}
            date={item.date}
          />
        ))}
    </div>
  )
}
  
export default Timeline