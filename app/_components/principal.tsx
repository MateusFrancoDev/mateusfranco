"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { Github, Mail, Download, Linkedin } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen px-4 lg:px-20 py-10"
    >
      {/* Texto */}
      <div className="flex-1 text-center lg:text-left space-y-6 lg:space-y-8 z-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Olá, eu sou{" "}
          <span className="text-[#043C86] whitespace-nowrap">
            Mateus Franco
          </span>
        </h1>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium">
          Desenvolvedor Front-End
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
          Bem-vindo ao meu portfólio, sou um desenvolvedor apaixonado com um
          forte desejo de aprender, crescer e contribuir para projetos
          emocionantes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4 lg:mt-6">
          <Button
            variant="default"
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="px-8 bg-[#043C86] hover:bg-[#043C86] cursor-pointer"
          >
            Ver Projetos
          </Button>
          <Button
            variant="default"
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="px-8 cursor-pointer"
          >
            <Mail className="w-4 h-4 mr-2  " />
            Entre em Contato
          </Button>
        </div>

        <div className="flex gap-4 justify-center lg:justify-start mt-4">
          <Button variant="secondary" size="icon" asChild>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github />
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
              <Download className="w-6 h-6 text-red-600" />
            </a>
          </Button>
        </div>
      </div>

      {/* Imagem */}
      <div className="flex justify-end w-full max-w-md lg:max-w-lg mb-8 lg:mb-0 lg:ml-40 lg:mr-[-80px] ">
        <Image
          src="/perfil.png"
          alt="Perfil"
          width={500}
          height={500}
          className="w-full h-auto object-contain justify-end "
          priority
        />
      </div>
    </section>
  );
}
