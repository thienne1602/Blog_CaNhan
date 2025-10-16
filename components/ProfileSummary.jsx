import { Mail, Phone, MapPin, Github, Facebook, Linkedin } from "lucide-react";
import { personalInfo } from "@/data/profile.js";

const iconMap = {
  GitHub: Github,
  Facebook: Facebook,
  LinkedIn: Linkedin,
};

const ProfileSummary = () => {
  return (
    <div className="card-hover grid gap-6 rounded-3xl bg-white/90 p-8 shadow-lg">
      <div className="flex flex-col items-center gap-4 text-center md:flex-row md:items-start md:text-left">
        <img
          src={personalInfo.avatar}
          alt={personalInfo.fullName}
          className="h-28 w-28 rounded-2xl object-cover shadow-md"
        />
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-secondary-900">
            {personalInfo.fullName}
          </h2>
          <p className="text-sm font-medium text-primary-600">
            {personalInfo.headline}
          </p>
          <p className="text-sm text-secondary-600">{personalInfo.bio}</p>
        </div>
      </div>

      <div className="grid gap-3 text-sm text-secondary-600">
        <p className="flex items-center gap-2">
          <MapPin size={16} />
          {personalInfo.location}
        </p>
        <a
          className="flex items-center gap-2 hover:text-primary-600"
          href={`mailto:${personalInfo.email}`}
        >
          <Mail size={16} />
          {personalInfo.email}
        </a>
        <a
          className="flex items-center gap-2 hover:text-primary-600"
          href={`tel:${personalInfo.phone}`}
        >
          <Phone size={16} />
          {personalInfo.phone}
        </a>
      </div>

      <div className="flex flex-wrap gap-3">
        {personalInfo.socials.map((item) => {
          const Icon = iconMap[item.label] ?? Github;
          return (
            <a
              key={item.label}
              href={item.url}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-secondary-200 px-4 py-2 text-sm text-secondary-600 transition hover:border-primary-400 hover:text-primary-600"
            >
              <Icon size={16} />
              {item.label}
            </a>
          );
        })}
      </div>

      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-secondary-500">
          Công nghệ yêu thích
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {personalInfo.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-secondary-100 px-3 py-1 text-xs font-medium text-secondary-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileSummary;
