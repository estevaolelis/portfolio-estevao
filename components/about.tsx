import { Card, CardContent } from "@/components/ui/card";
import { Code, Rocket, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/10">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Sobre Mim</h2>
          <p className="text-gray-200 text-lg">
            Conheça um pouco mais sobre minha trajetória
          </p>
        </div>

        <div className="space-y-8">
          <Card className="border-primary/20 bg-zinc-900/50">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-gray-200">
                Sou desenvolvedor back-end apaixonado por criar experiências
                digitais excepcionais. Atualmente, estou focado em aprimorar
                minhas habilidades em{" "}
                <span className="text-shadow-white text-white font-semibold">C#</span>,
                <span className="text-shadow-white text-white font-semibold"> .NET</span> e
                <span className="text-shadow-white text-white font-semibold"> React</span>.
              </p>
              <p className="text-lg leading-relaxed text-gray-200 mt-4">
                Busco constantemente me desenvolver como profissional,
                combinando design moderno com código limpo e eficiente. Tenho
                especial interesse em arquitetura de software, testes
                automatizados e boas práticas de desenvolvimento.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center p-6 bg-zinc-900/50">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-white">
                  <Code className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">Desenvolvimento</h3>
              <p className="text-sm text-gray-200">
                Código limpo, componentes reutilizáveis e performance otimizada
              </p>
            </Card>

            <Card className="text-center p-6 bg-zinc-900/50">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-white">
                  <Target className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">Qualidade</h3>
              <p className="text-sm text-gray-200">
                Testes automatizados e garantia de qualidade em cada entrega
              </p>
            </Card>

            <Card className="text-center p-6 bg-zinc-900/50">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-white">
                  <Rocket className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">Aprendizado</h3>
              <p className="text-sm text-gray-200">
                Sempre evoluindo e aprendendo novas tecnologias e padrões
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
