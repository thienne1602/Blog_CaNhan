import ProjectCard from "@/components/ProjectCard";
import { personalInfo, projects as fallbackProjects } from "@/data/profile";

// Server component: fetch public GitHub repos for the configured user and
// map them into the shape `ProjectCard` expects. Falls back to the
// local `projects` list on error or when no suitable repos are found.
export default async function ProjectsPage() {
  let remoteProjects = [];

  try {
    const username =
      personalInfo?.socials?.find((s) => s.label === "GitHub")?.username ||
      personalInfo?.github?.split("/").pop();

    if (username) {
      const res = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=50&sort=updated`,
        {
          headers: { Accept: "application/vnd.github.v3+json" },
          // Cache for 1 hour at the Next edge/SSR layer
          next: { revalidate: 3600 },
        }
      );

      if (res.ok) {
        const repos = await res.json();

        // Filter out forks and private repos (private won't be returned for unauthenticated requests)
        const filtered = repos.filter((r) => !r.fork).slice(0, 12);

        remoteProjects = filtered.map((r) => ({
          name: r.name,
          description: r.description || "",
          tech:
            r.topics && r.topics.length > 0
              ? r.topics
              : r.language
              ? [r.language]
              : ["GitHub"],
          highlights: [
            `${r.stargazers_count ?? 0} ★`,
            r.language ? `Primary: ${r.language}` : "",
            `Updated: ${new Date(r.updated_at).toLocaleDateString()}`,
          ].filter(Boolean),
          repo: r.html_url,
          demo: r.homepage || null,
        }));
      }
    }
  } catch (err) {
    // network or parsing error - we'll silently fall back to local data
    console.error("Failed to fetch GitHub repos:", err);
    remoteProjects = [];
  }

  const projectsToShow =
    remoteProjects.length > 0 ? remoteProjects : fallbackProjects;

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
        {projectsToShow.map((project, index) => (
          <ProjectCard
            key={project.name + index}
            project={project}
            index={index}
          />
        ))}
      </section>
    </div>
  );
}
