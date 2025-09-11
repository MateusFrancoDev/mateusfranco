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
      className="relative flex flex-col items-center justify-center pt-20"
    >
      {/* Background Image no canto direito */}
      <div className="absolute mt-20 right-0 -z-10 top-60 md:top-0 h-full flex items-end">
        <Image
          src="/perfil.png"
          alt="Background"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-6xl lg:text-7xl">
            Olá, eu sou <span className="text-[#043C86]">Mateus Franco</span>
          </h1>
          <h2 className="text-2xl lg:text-3xl text-muted-foreground">
            Desenvolvedor Front-End
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bem-vindo ao meu portfólio, sou um desenvolvedor apaixonado com um
            forte desejo de aprender, crescer e contribuir para projetos
            emocionantes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="text-[#043C86] " />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-10 h-10 text-[#043C86] " />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
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
