"use client";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, Coffee, Globe, Users } from "lucide-react";

export function AboutSection() {
  const highlights = [
    {
      icon: Code,
      title: "Código Limpo",
      description: "Escrevo código mantível e bem documentado",
    },
    {
      icon: Globe,
      title: "Projetos de Impacto",
      description: "Sites e apps que realmente ajudam usuários.",
    },
    {
      icon: Users,
      title: "Trabalho em Equipe",
      description: "Colaboração efetiva em projetos complexos",
    },
    {
      icon: Coffee,
      title: "Aprendizado Contínuo",
      description: "Sempre explorando novas tecnologias",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 mt-24 md:mt-17 bg-muted/50pt-40 md:pt-50  bg-muted/50"
    >
      <div className="container mt-0 py-0 px-4 ">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="mb-4 text-3xl">Sobre Mim</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Desenvolvedor com mais experiência criando aplicações web modernas
              e escaláveis.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div>
                <p className="mb-4">
                  🔥 Desenvolvedor Front-end apaixonado por tecnologia Criando
                  interfaces modernas, intuitivas e performáticas sempre focado
                  em entregar soluções eficientes e de alto impacto.
                </p>
                <p className="mb-4">
                  Desenvolvimento de interfaces de usuário interativas e
                  responsivas para web e aplicativos móveis. Garantia de
                  qualidade e performance do código por meio de testes
                  automatizados e melhores práticas de desenvolvimento.
                  Colaboração com designers e equipes de desenvolvimento para
                  traduzir requisitos de negócios em soluções técnicas
                  eficientes. Atualização contínua com as tendências e evoluções
                  tecnológicas no desenvolvimento front-end.
                </p>
                <p>
                  Fora do código crítico de cinema nas horas vagas e atleta
                  amador!
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">1+ de experiência</Badge>
                <Badge variant="secondary">5+ projetos concluídos</Badge>
                <Badge variant="secondary">Aprendendo inglês</Badge>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <Card key={index} className="text-center p-4">
                  <CardContent className="space-y-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                      <highlight.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4>{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
