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
                I am a back-end developer passionate about creating exceptional 
                digital experiences. Currently, I am focused on honing my skills in{" "}
                <span className="text-shadow-white text-white font-semibold">C#</span>,
                <span className="text-shadow-white text-white font-semibold"> .NET</span>, and
                <span className="text-shadow-white text-white font-semibold"> React</span>.
              </p>
              <p className="text-lg leading-relaxed text-gray-200 mt-4">
                I constantly seek to develop myself as a professional, 
                combining modern design with clean and efficient code. I have a 
                special interest in software architecture, automated testing, 
                and development best practices.
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
              <h3 className="font-semibold text-lg mb-2 text-white">Development</h3>
              <p className="text-sm text-gray-400">
                Clean code, reusable components, and optimized performance.
              </p>
            </Card>

            <Card className="text-center p-6 bg-zinc-900/50 border-zinc-800 hover:bg-zinc-900 transition-colors">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-white">
                  <Target className="h-8 w-8 text-black" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">Quality Assurance</h3>
              <p className="text-sm text-gray-400">
                Automated testing and quality assurance in every delivery.
              </p>
            </Card>

            <Card className="text-center p-6 bg-zinc-900/50 border-zinc-800 hover:bg-zinc-900 transition-colors">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-white">
                  <Rocket className="h-8 w-8 text-black" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">Continuous Growth</h3>
              <p className="text-sm text-gray-400">
                Always evolving and learning new technologies and patterns.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;