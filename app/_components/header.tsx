"use client";
import { Button } from "./ui/button";
import { Moon, Sun, Menu } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-black dark:text-white">
            &lt;MATEUS.<span className="text-blue-500">DEV</span> /&gt;
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Button
            variant="link"
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Início
          </Button>
          <Button
            variant="link"
            onClick={() => scrollToSection("about")}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Sobre
          </Button>
          <Button
            variant="link"
            onClick={() => scrollToSection("skills")}
            className="hover:text-primary transition-colors cursor-pointer "
          >
            Habilidades
          </Button>
          <Button
            variant="link"
            onClick={() => scrollToSection("projects")}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Projetos
          </Button>
          <Button
            variant="link"
            onClick={() => scrollToSection("contact")}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Contato
          </Button>
          <Button
            className="cursor-pointer"
            variant="outline"
            size="sm"
            onClick={toggleTheme}
          >
            {isDark ? (
              <Sun className="w-4 h-4 " />
            ) : (
              <Moon className="w-4 h-4 " />
            )}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2 cursor-pointer">
          <Button
            className="cursor-pointer"
            variant="outline"
            size="sm"
            onClick={toggleTheme}
          >
            {isDark ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </Button>
          <Button
            className="cursor-pointer"
            variant="outline"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-4 h-4" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-background border-b border-border md:hidden cursor-pointer">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Button
                variant="outline"
                onClick={() => scrollToSection("home")}
                className="text-left hover:text-primary transition-colors "
              >
                Início
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("about")}
                className="text-left hover:text-primary transition-colors cursor-pointer"
              >
                Sobre
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("skills")}
                className="text-left hover:text-primary transition-colors"
              >
                Habilidades
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("projects")}
                className="text-left hover:text-primary transition-colors"
              >
                Projetos
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="text-left hover:text-primary transition-colors"
              >
                Contato
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
