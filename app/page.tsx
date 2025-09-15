import { ContactSection } from "./_components/contato";
import { Header } from "./_components/header";
import { HeroSection } from "./_components/principal";
import { ProjectsSection } from "./_components/projetos";
import { SkillsSection } from "./_components/skills";
import { AboutSection } from "./_components/sobre";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
