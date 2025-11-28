import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  image,
  liveUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <Card
      className="
        overflow-hidden group 
        bg-zinc-900/50 border-zinc-800
        hover:border-zinc-700 hover:bg-zinc-900 
        transition-all duration-300
        text-zinc-100
      "
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-gradient-to-t from-zinc-900 to-transparent opacity-80" />
      </div>

      <CardHeader>
        <CardTitle className="text-xl font-bold text-white">{title}</CardTitle>
        <CardDescription className="text-zinc-400">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white border border-zinc-700/50"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="gap-3 pt-2">
        {liveUrl && (
          <Button
            size="sm"
            className="bg-white text-black hover:bg-zinc-200"
            asChild
          >
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </a>
          </Button>
        )}
        {githubUrl && (
          <Button
            size="sm"
            variant="outline"
            className="bg-white text-black hover:bg-zinc-200"
            asChild
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Código
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
