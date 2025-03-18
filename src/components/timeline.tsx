import { Education, Work } from "../data/timeline";

const TimelineItem: React.FC<Education | Work> = (props) => {
  return (
    <div className="group relative py-6 pl-8 sm:pl-32 flex justify-center">
      <div className="w-full max-w-2xl mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 after:bg-indigo-600 group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]">
        <time className="left-0 mb-3 inline-flex h-6 w-20 translate-y-0.5 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold uppercase text-emerald-600 sm:absolute sm:mb-0">
          {props.date}
        </time>
        {"university" in props ? (
          <div>
            {props.link ? (
              <a href={props.link} target="_blank" rel="noopener noreferrer" className="text-xl font-bold flex items-center gap-2">
                <img src={props.logo} alt={`${props.university} Logo`} className="h-12 w-12 object-contain" />
                <span className="hover:underline">{props.university}</span>
              </a>
            ) : (
              <span className="text-xl font-bold">{props.university}</span>
            )}
            <div>{props.degree} in {props.field} | {props.form}</div>
          </div>
        ) : (
          <div>
            <div className="text-xl font-bold">
              {props.link ? (
                <a href={props.link} target="_blank" rel="noopener noreferrer">
                  <span className="hover:underline">{props.title} at {props.company}</span>
                </a>
              ) : (
                <>{props.title} at {props.company}</>
              )}
            </div>
            <div className="whitespace-pre-line">{props.description}</div>
          </div>
        )}
      </div>
    </div>
  );
};

interface TimelineProps {
  education?: Education[];
  work?: Work[];
}

const Timeline: React.FC<TimelineProps> = ({ education, work }) => {
  return (
    <div className="w-full flex flex-col items-center">
      {education && (
        <div className="w-full max-w-2xl">
          <h2 className="text-2xl font-bold">Education</h2>
          {education.map((item, idx) => (
            <TimelineItem key={idx} {...item} />
          ))}
        </div>
      )}
      
      {work && (
        <div className="w-full max-w-2xl mt-4">
          <h2 className="text-2xl font-bold">Work Experience</h2>
          {work.map((item, idx) => (
            <TimelineItem key={idx} {...item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Timeline;