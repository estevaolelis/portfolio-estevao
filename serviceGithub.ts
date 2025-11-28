import { unstable_cacheLife as cacheLife } from "next/cache";

export interface GithubRepo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    homepage: string | null;
    topics: string[];
    fork: boolean;
    language: string;
    created_at: string;
}

export async function getGithubProjects(): Promise<GithubRepo[]> {
    "use cache";

    cacheLife("hours");

    const username = "estevaolelis"
    const token = process.env.GITHUB_TOKEN; //

    try {
        const response = await fetch(
            `https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=100`,
            {
                headers: token ? { Authorization: `Bearer ${token}`} : undefined,
            }
        )

        if (!response.ok) {
            console.error(`Github API error: ${response.statusText}`);
            return [];
        }

        const data: GithubRepo[] = await response.json();
        const filteredRepos = data.filter((repo) => !repo.fork && repo.description).slice(0, 6);

        return filteredRepos;
    } catch (error) {
        console.error("Failed to fetch projects: ", error);
        return [];
    }
}
