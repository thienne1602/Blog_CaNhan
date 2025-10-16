import { timeline } from "@/data/profile.js";

const Timeline = () => {
  return (
    <div className="card-hover rounded-3xl bg-white p-8 shadow-md">
      <h3 className="text-xl font-semibold text-secondary-900">
        Hành trình học tập & dự án
      </h3>
      <div className="mt-6 space-y-6 border-l-2 border-primary-100 pl-6">
        {timeline.map((item) => (
          <div key={item.year} className="relative">
            <span className="absolute -left-3 top-1 h-2.5 w-2.5 rounded-full bg-primary-500" />
            <p className="text-xs font-semibold uppercase tracking-wider text-primary-500">
              {item.year}
            </p>
            <p className="mt-1 text-base font-medium text-secondary-900">
              {item.title}
            </p>
            <p className="text-sm text-secondary-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
