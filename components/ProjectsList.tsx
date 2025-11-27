import { unstable_cacheLife as cacheLife } from "next/cache";
import ProjectCard from "./ProjectCard";

// Tipagem dos dados do GitHub
interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  fork: boolean;
  language: string;
}

// --- FUNÇÃO DE DADOS ---
// O "use cache" aqui faz com que o Next execute isso no build (ou na primeira visita)
// e guarde o JSON resultante.
async function getGithubProjects() {
  "use cache"; // <--- A diretiva mágica

  // Define que esse cache deve durar "horas" (perfil padrão do Next)
  cacheLife("hours");

  const username = "EstevaoLelis"; // Seu usuário

  // Como o "use cache" está ativo, não precisamos de configs extras no fetch.
  // O Next.js entende automaticamente.
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=100`
  );

  if (!response.ok) return [];

  const data: GithubRepo[] = await response.json();

  // Filtra e retorna apenas os 6 melhores/mais recentes
  return data.filter((repo) => !repo.fork && repo.description).slice(0, 6);
}

// --- COMPONENTE (SERVER COMPONENT) ---
export default async function ProjectsList() {
  // Chamada direta da função cacheada (parece mágica, mas é o Next 16)
  const repos = await getGithubProjects();

  return (
    <section id="projects" className="py-20 px-4 bg-black/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Projetos Selecionados
          </h2>
          <p className="text-gray-400 text-lg">
            Alguns dos trabalhos que desenvolvi recentemente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <ProjectCard
              key={repo.id}
              title={repo.name}
              description={repo.description || "Sem descrição definida."}
              technologies={
                repo.topics.length > 0 ? repo.topics : [repo.language]
              }
              // Placeholder elegante enquanto não temos imagem oficial
              image={`https://placehold.co/600x400/18181b/FFF?text=${repo.name}`}
              liveUrl={repo.homepage || undefined}
              githubUrl={repo.html_url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
