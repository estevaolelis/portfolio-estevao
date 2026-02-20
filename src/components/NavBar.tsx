"use client";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();

  return (
    <header>
      <div className="mx-auto max-w-xl px-1 pt-8">
        <nav className="flex h-20 items-center justify-between gap-5 mt-12">
          <a
            className="text-3xl font-bold text-white cursor-pointer"
            onClick={() => router.push("/")}
          >
            Estêvão Lélis
          </a>
          <div className="flex items-center gap-5">
            <div
              className="text-xl text-white hover:text-gray-300 cursor-pointer"
              onClick={() => router.push("/projects")}
            >
              Projects
            </div>
            <div
              className="text-xl text-white hover:text-gray-300 cursor-pointer"
              onClick={() => router.push("/experience")}
            >
              Experience
            </div>
            <div className="text-xl text-white hover:text-gray-300 cursor-pointer">
              Hobbies
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
