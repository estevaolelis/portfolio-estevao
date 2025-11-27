import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce React - NÃO EXISTE",
      description: "Loja virtual completa com carrinho, pagamento e painel admin.",
      technologies: ["React", "TypeScript", "Tailwind", "Stripe"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      liveUrl: "https://demo-ecommerce.com",
      githubUrl: "https://github.com/estevao-lelis/ecommerce"
    },
    {
      title: "Dashboard Analytics - NÃO EXISTE",
      description: "Painel de métricas e visualização de dados em tempo real.",
      technologies: ["React", "Next.js", "Chart.js", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      liveUrl: "https://demo-dashboard.com",
      githubUrl: "https://github.com/estevao-lelis/dashboard"
    },
    {
      title: "API REST .NET - NÃO EXISTE",
      description: "API robusta para gestão de produtos com autenticação JWT.",
      technologies: ["C#", ".NET", "SQL Server", "Azure"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      githubUrl: "https://github.com/estevao-lelis/api-dotnet"
    },
    {
      title: "Testes E2E Playwright - NÃO EXISTE",
      description: "Suite de testes automatizados para aplicação web complexa.",
      technologies: ["Playwright", "TypeScript", "CI/CD", "Azure DevOps"],
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
      githubUrl: "https://github.com/estevao-lelis/e2e-tests"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Projetos</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-200">
            Alguns dos meus trabalhos recentes e projetos pessoais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;