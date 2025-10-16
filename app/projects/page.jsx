import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/profile";

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <header className="rounded-3xl bg-white dark:bg-gray-800 p-8 shadow-lg dark:shadow-gray-900/50 transition-colors duration-300">
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
          Dự án tiêu biểu
        </h1>
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
          Tổng hợp các dự án cá nhân và học tập nổi bật của Thạch Văn Ngọc
          Thiên, tập trung vào lập trình mạng, realtime và hệ thống phân tán.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </section>
    </div>
  );
}
