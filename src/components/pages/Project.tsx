import { projects, type Project } from "@/data/project"; // 👈 Import data and type
import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge"; // 👈 shadcn/ui
import { Button } from "@/components/ui/button"; // 👈 shadcn/ui
import { Github, ExternalLink, ArrowLeft } from "lucide-react"; // 👈 lucide icons

function ProjectDetail() {
  // 1. Get the 'id' from the URL
  const { id } = useParams<{ id: string }>();
  const projectId = id ? parseInt(id) : -1;

  // 2. Find the project object that matches the ID
  const project: Project | undefined = projects.find(
    (p) => p.id === projectId
  );

  // 3. Handle the case where the project is not found (404)
  if (!project) {
    return (
      <div className="flex h-[60vh] flex-col items-center justify-center gap-4">
        <h1 className="text-6xl font-bold text-destructive">404</h1>
        <p className="text-xl text-muted-foreground">
          Project with ID "{id}" not found.
        </p>
        <Button asChild variant="outline">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go back to Portfolio
          </Link>
        </Button>
      </div>
    );
  }

  /**
   * Parses the longDescription to find **bold** text and converts it to <strong> tags.
   */
  const renderLongDescription = (description: string) => {
    return description.split("**").map((part, index) => {
      // Every odd index part is wrapped in 'strong'
      if (index % 2 === 1) {
        return (
          <strong key={index} className="font-semibold text-foreground">
            {part}
          </strong>
        );
      }
      // Even index parts are regular text
      return <span key={index}>{part}</span>;
    });
  };

  // 4. Render the detailed project view
  return (
    <div className="mx-auto max-w-5xl py-12 px-4">
      <div className="mb-6">
        <Button asChild variant="ghost" className="text-muted-foreground">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Projects
          </Link>
        </Button>
      </div>

      <div className="flex flex-col gap-8">
        {/* Title and Overview */}
        <div className="flex flex-col gap-2 border-b pb-4">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {project.description}
          </p>
        </div>

        {/* Tags and Links */}
        <div className="flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge variant="secondary" key={tag}>
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex gap-2 sm:ml-auto">
            {project.github && (
              <Button asChild variant="outline" size="sm">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            )}
            {project.link && (
              <Button asChild size="sm">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Site
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className="aspect-video w-full rounded-xl border object-cover shadow-sm"
          loading="eager"
        />

        {/* --- MODIFIED SECTION: Single Column Layout --- */}
        <div className="flex flex-col gap-10">
          {/* Main Description */}
          <div>
            <h2 className="mb-4 text-3xl font-bold">About this Project</h2>
            <div className="text-base leading-relaxed text-muted-foreground whitespace-pre-line sm:text-lg">
              {project.longDescription
                ? renderLongDescription(project.longDescription)
                : "No detailed description available."}
            </div>
          </div>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-4 text-2xl font-semibold">Key Features</h3>
                <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
        {/* --- End of Modified Section --- */}

      </div>
    </div>
  );
}

export default ProjectDetail;