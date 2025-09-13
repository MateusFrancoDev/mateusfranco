import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";

export function ProjectsSection() {
  const projects = [
    {
      title: "Cães",
      description:
        "Meu primeiro projeto em React foi uma rede social de cães, onde utilizei React para construir a interface do usuário e explorei uma API poderosa para gerenciar os dados de forma eficiente.",
      image: "/dogs1.jpg",
      technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "https://github.com/MateusFrancoDev/DOGS",
      githubUrl: "https://github.com/MateusFrancoDev/DOGS",
      showGithub: false,

      category: "Full Stack",
    },
    {
      title: "IEXFY",
      description:
        "Esta página permitia gerenciar e monitorar múltiplos dashboards internos da empresa, centralizando métricas e relatórios em uma única interface.",
      image: "/iexfy.png",
      technologies: [
        "React Native",
        "Next.js",
        "TypeScript",
        "Docker",
        "Redux",
      ],
      liveUrl: "https://app.stage.iexfy.com/login",
      githubUrl: "#",
      showLink: true,
      category: "Frontend",
    },
    {
      title: "Cãobinado",
      description:
        "Dashboard responsivo para visualização de dados e métricas empresariais com gráficos interativos e relatórios exportáveis.",
      image: "/caobinado.png",
      technologies: [
        "React Native",
        "TypeScript",
        "Azure",
        "Shadcn-ui",
        "Docker",
        "Next.js",
      ],
      liveUrl: "https://caobinado.com.br/signin",
      githubUrl: "#",
      showLink: true,
      category: "Frontend",
    },
    {
      title: "Neaby",
      description:
        "Esta aplicação de nome Nearby consiste em um aplicativo mobile de clube de benefícios com cupons para utilizar em estabelecimentos próximos a você.",
      image: "/neaby.png",
      technologies: [
        "React Native",
        "Expo",
        "TypeScript",
        "Axios",
        "React Native Maps",
        "Expo Camera",
      ],
      githubUrl: "https://github.com/MateusFrancoDev/Nearby",
      showGithub: false,
      category: "Mobile",
    },
    {
      title: "3M Dashboard",
      description:
        "Dashboard responsivo para visualização de dados e métricas empresariais com gráficos interativos e relatórios exportáveis",
      image: "/3m.png",
      technologies: ["React", "Material UI", "Node.js", "Docker"],
      liveUrl: "https://www.ped.3m.com/mmm/login",
      showLink: true,

      category: "Frontend",
    },
    {
      title: "Barber Shop",
      description:
        "Esta aplicação de nome Barber consiste em um aplicativo para barbearias controlar os horários dos atendimentos.",
      image: "/barber1.png",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Prisma",
        "TypeScript",
        "Shadcn-ui",
        "PostgreSQL",
      ],
      liveUrl: "",
      category: "Full Stack",
      githubUrl: "https://github.com/MateusFrancoDev/barbershop",
      showGithub: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl">Meus Projetos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Alguns dos projetos que desenvolvi recentemente, demonstrando
              diferentes tecnologias e soluções.
            </p>
          </div>

          {/* Projects Carousel */}
          <div className="relative w-full">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {projects.map((project, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 h-auto"
                  >
                    <Card className="p-0 overflow-hidden group hover:shadow-lg transition-all duration-300 border-0 h-[27rem] md:h-[32rem] lg:h-[29rem] flex flex-col">
                      {/* IMAGEM NO TOPO */}
                      <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden rounded-t-lg flex-shrink-0">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        />
                        {/* GRADIENTE */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {/* BADGE NO TOPO */}
                        <div className="absolute top-4 right-4">
                          <Badge
                            variant="secondary"
                            className="bg-background/80 backdrop-blur-sm"
                          >
                            {project.category}
                          </Badge>
                        </div>
                        {/* BOTÕES NO TOPO */}
                        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Button
                            variant="secondary"
                            size="icon"
                            className="h-8 w-8"
                            asChild
                          >
                            {project.liveUrl && project.showLink && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            )}
                          </Button>
                          <Button
                            variant="secondary"
                            size="icon"
                            className="h-8 w-8"
                            asChild
                          >
                            {project.githubUrl && project.githubUrl !== "#" && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="w-4 h-4" />
                              </a>
                            )}
                          </Button>
                        </div>
                      </div>

                      {/* CONTEÚDO */}
                      <div className="flex-1 flex flex-col justify-between">
                        <CardHeader className="pb-3">
                          <CardTitle className="line-clamp-1">
                            {project.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 flex-1">
                          <p className="text-muted-foreground text-sm line-clamp-3">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-1 mt-auto">
                            {project.technologies
                              .slice(0, 7)
                              .map((tech, techIndex) => (
                                <Badge
                                  key={techIndex}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            {project.technologies.length > 5 && (
                              <Badge variant="outline" className="text-xs">
                                +{project.technologies.length - 3}
                              </Badge>
                            )}
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* NAVEGAÇÃO */}
              <div className="flex justify-center gap-2 mt-8">
                <CarouselPrevious className="relative translate-y-0 left-0 top-0">
                  <ChevronLeft className="w-4 h-4" />
                </CarouselPrevious>
                <CarouselNext className="relative translate-y-0 right-0 top-0">
                  <ChevronRight className="w-4 h-4" />
                </CarouselNext>
              </div>
            </Carousel>
          </div>

          {/* Call to Action */}
        </div>
      </div>
    </section>
  );
}
