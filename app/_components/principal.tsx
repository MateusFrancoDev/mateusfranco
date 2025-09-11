"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { Github, Mail, Download, Linkedin } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center pt-0 min-h-screen"
    >
      <div className="absolute right-0 -z-10 top-0 sm:top-10 md:top-16 transform translate-y-[227px] sm:translate-y-0">
        <Image
          src="/perfil.png"
          alt="Background"
          width={500}
          height={500}
          className="object-contain py-8"
          priority
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl ">
            Olá, eu sou{" "}
            <span className="text-[#043C86] text-4xl sm:text-4xl lg:text-5xl whitespace-nowrap">
              Mateus Franco
            </span>
          </h1>
          <h2 className="text-xl sm:text-4xl lg:text-1xl">
            Desenvolvedor Front-End
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Bem-vindo ao meu portfólio, sou um desenvolvedor apaixonado com um
            forte desejo de aprender, crescer e contribuir para projetos
            emocionantes.
          </p>

          <div className="flex  sm:flex-row gap-4 justify-center md:flex md:gap-4 md:mt-10 md:justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="px-8 cursor-pointer bg-[#043C86]"
            >
              Ver Projetos
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="px-8 cursor-pointer"
            >
              <Mail className="w-4 h-4 mr-2 r" />
              Entre em Contato
            </Button>
          </div>

          <div className="flex gap-4 justify-center">
            <Button variant="secondary" size="icon" asChild>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="" />
              </a>
            </Button>
            <Button variant="secondary" size="icon" asChild>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
            </Button>
            <Button variant="secondary" size="icon" asChild>
              <a href="#" download aria-label="Download CV">
                <Download className="w-10 h-10 text-red-600" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
