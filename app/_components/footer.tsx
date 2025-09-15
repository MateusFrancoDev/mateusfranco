import { Button } from "./ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Brand/Info */}
            <div className="space-y-4">
              <h3>Mateus Franco</h3>
              <p className="text-muted-foreground">Desenvolvedor Front-End</p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4>Links Rápidos</h4>
              <div className="flex flex-col space-y-2">
                <a
                  href="#home"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Início
                </a>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sobre
                </a>
                <a
                  href="#projects"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projetos
                </a>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contato
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4>Conecte-se Comigo</h4>
              <div className="flex justify-center md:justify-start gap-2">
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://github.com/MateusFrancoDev"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://www.linkedin.com/in/mateus-franco-dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="mailto:mateusfranc2@gmail.com" aria-label="Email">
                    <Mail className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              © {currentYear} Mateus Franco. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
