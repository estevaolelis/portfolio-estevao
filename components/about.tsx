import { Card, CardContent } from "@/components/ui/card";
import { Code, Rocket, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/10">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white">About Me</h2>
          <p className="text-gray-200 text-lg">
            Get to know a bit more about my journey
          </p>
        </div>

        <div className="space-y-8">
          <Card className="p-6 bg-zinc-900/50 border-zinc-800">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-gray-200">
                I'm a Back-end Developer who enjoys solving complex logic puzzles. While I can handle React, my real strength lies in the server-side, building scalable architectures with C# and .NET.
                For me, software engineering isn't just about making things work—it's about writing clean, testable code that my future self (and my team) will thank me for.
              </p>
              <p className="text-lg leading-relaxed text-gray-200 mt-4">
                I constantly seek to develop myself as a professional, 
                combining modern design with clean and efficient code. I believe that make the simples is the best for the user experience.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center p-6 bg-zinc-900/50 border-zinc-800 hover:bg-zinc-900 transition-colors">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-white">
                  <Code className="h-8 w-8 text-black" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">Architecture</h3>
              <p className="text-sm text-gray-400">
                Writing code is easy; writing code that humans can read is the challenge. I strive for clarity and efficiency, treating code as a form of communication.
              </p>
            </Card>

            <Card className="text-center p-6 bg-zinc-900/50 border-zinc-800 hover:bg-zinc-900 transition-colors">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-white">
                  <Target className="h-8 w-8 text-black" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">Reliability</h3>
              <p className="text-sm text-gray-400">
                I sleep better knowing my code is tested. Automated testing is my safety net to refactor with confidence and keep technical debt low.
              </p>
            </Card>

            <Card className="text-center p-6 bg-zinc-900/50 border-zinc-800 hover:bg-zinc-900 transition-colors">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-white">
                  <Rocket className="h-8 w-8 text-black" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">Learning</h3>
              <p className="text-sm text-gray-400">
                Driven by curiosity. Whether it's mastering a new .NET feature or understanding a complex algorithm, I'm always looking for the "why" behind the "how".
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;