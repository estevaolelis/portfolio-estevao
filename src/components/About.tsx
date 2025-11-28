import { Card, CardContent } from "@/components/ui/card";
import { Code, Rocket, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/10">
      <div className="container mx-auto max-w-4xl">
        
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mx-auto border-4 border-zinc-800 shadow-2xl">
            <img 
              src="/eu.jpg" 
              alt="Estevão Lelis" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold text-white">About Me</h2>
            <p className="text-gray-400 text-lg">
              Get to know a bit more about my journey
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <Card className="p-6 bg-zinc-900/50 border-zinc-800">
            <CardContent className="p-6 md:p-8">
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                
                <p>
                  I'm a <strong className="text-white font-semibold">Back-end Developer</strong> who enjoys solving complex logic puzzles. 
                  While I can handle React, my real strength lies in the server-side, building scalable architectures with{" "}
                  <strong className="text-white font-semibold">C#</strong> and{" "}
                  <strong className="text-white font-semibold">.NET</strong>.
                </p>

                <p>
                  For me, software engineering isn't just about making things work—it's about writing{" "}
                  <strong className="text-white font-semibold">clean, testable code</strong> that my future self 
                  (and my team) will thank me for.
                </p>

                <p>
                  I constantly seek to develop myself as a professional, combining modern design with efficiency. 
                  I believe that <strong className="text-white font-semibold">simplicity is the key</strong> to a great user experience.
                </p>

              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center p-6 bg-zinc-900/50 border-zinc-800 hover:bg-zinc-900 transition-colors group">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-white group-hover:scale-110 transition-transform">
                  <Code className="h-8 w-8 text-black" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">Architecture</h3>
              <p className="text-sm text-gray-400">
                Writing code is easy; writing code that humans can read is the challenge. I strive for clarity and efficiency.
              </p>
            </Card>

            <Card className="text-center p-6 bg-zinc-900/50 border-zinc-800 hover:bg-zinc-900 transition-colors group">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-white group-hover:scale-110 transition-transform">
                  <Target className="h-8 w-8 text-black" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">Reliability</h3>
              <p className="text-sm text-gray-400">
                I sleep better knowing my code is tested. Automated testing is my safety net to refactor with confidence.
              </p>
            </Card>

            <Card className="text-center p-6 bg-zinc-900/50 border-zinc-800 hover:bg-zinc-900 transition-colors group">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-white group-hover:scale-110 transition-transform">
                  <Rocket className="h-8 w-8 text-black" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">Learning</h3>
              <p className="text-sm text-gray-400">
                Driven by curiosity. Always looking for the "why" behind the "how", mastering features and algorithms.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;