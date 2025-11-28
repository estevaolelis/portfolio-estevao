import { getGithubProjects } from "@/services/serviceGithub";
import ProjectCard from "./ProjectCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Projects = async () => {
  const projects = await getGithubProjects();

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="font-tech text-4xl md:text-5xl font-bold tracking-tight text-white">
            Projects
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-200">
            Some of my recent works and personal projects
          </p>
        </div>

        <div className="px-4 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {projects.map((project, index) => (
                <CarouselItem
                  key={project.id}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full p-1">
                    <ProjectCard
                      title={project.name}
                      description={project.description || "Sem descrição"}
                      technologies={project.topics || []}
                      image={`https://opengraph.githubassets.com/v1/estevaolelis/${project.name}`}
                      liveUrl={project.homepage || undefined}
                      githubUrl={project.html_url}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700 hidden sm:flex cursor-pointer" />
            <CarouselNext className="bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700 hidden sm:flex cursor-pointer" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;
