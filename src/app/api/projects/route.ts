import { NextResponse } from "next/server";
import { getGithubProjects } from "@/services/serviceGithub"

export async function GET() {
    const projects = await getGithubProjects();
    return NextResponse.json(projects, {
        status: 200,
        headers: {
            "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=59",
        },
    });
}