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
    <section id="about" className="py-20 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl md:text-4xl font-bold">Sobre Mim</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Desenvolvedor com mais experiência criando aplicações web modernas
              e escaláveis.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="space-y-4 text-justify">
                <p>
                  Desde cedo, sempre fui fascinado por tecnologia e a forma como
                  ela transforma o cotidiano das pessoas. Comecei explorando
                  pequenas interfaces e experimentando com código, e essa
                  curiosidade se tornou paixão. Hoje, atuo como desenvolvedor
                  Front-end, criando interfaces modernas, intuitivas e
                  performáticas, sempre buscando entregar soluções que realmente
                  impactem quem as utiliza.
                </p>
                <p>
                  Ao longo da minha trajetória, aprendi que desenvolvimento é
                  mais do que código: é traduzir necessidades em experiências.
                  Colaboro com designers e equipes de desenvolvimento para
                  transformar ideias em soluções funcionais e eficientes, sempre
                  atento à qualidade e à performance.
                </p>
                <p>
                  Nos meus momentos livres, jogo futebol, vou à academia e me
                  divirto assistindo filmes e séries de todos os estilos.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 dark:text-amber-800">
                <Badge variant="secondary" className="text-[#ffffff]">
                  1+ de experiência
                </Badge>
                <Badge variant="secondary" className="text-[#ffffff]">
                  5+ projetos concluídos
                </Badge>
                <Badge variant="secondary" className="text-[#ffffff]">
                  Aprendendo inglês
                </Badge>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card
                  key={index}
                  className="text-center p-4 hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="space-y-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                      <highlight.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold ">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-muted-foreground dark:text-]">
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
