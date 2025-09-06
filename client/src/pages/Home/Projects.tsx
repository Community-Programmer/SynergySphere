import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "RD Services",
    tags: ["Services", "Customer Care"],
    image: "https://placehold.co/120x80?text=RD+Services",
    date: "21/03/22",
    tasks: 19,
    user: "Test User",
  },
  {
    id: 2,
    title: "RD Sales",
    tags: ["Payments", "UI"],
    image: "https://placehold.co/120x80?text=RD+Sales",
    date: "29/03/22",
    tasks: 203,
    user: "Test User",
  },
  {
    id: 3,
    title: "RD Upgrade",
    tags: ["Upgrade", "Migration"],
    image: "https://placehold.co/120x80?text=RD+Upgrade",
    date: "27/04/22",
    tasks: 19,
    user: "Test User",
  },
]

function Projects() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Projects</h2>
        <Button variant="secondary" onClick={() => navigate("/projects/new")}>+ New Project</Button>
      </div>

      {/* Project Cards */}
      <div className="flex gap-4 flex-wrap">
        {projects.map((project) => (
          <Card key={project.id} className="w-72">
            <CardHeader className="pb-2">
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <img
                src={project.image}
                alt={project.title}
                className="rounded mb-2 w-full h-20 object-cover"
              />
              <CardTitle className="text-lg mb-1">{project.title}</CardTitle>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{project.date}</span>
                <span>{project.tasks} tasks</span>
              </div>
              <div className="mt-2 text-xs text-gray-700">{project.user}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Projects;
