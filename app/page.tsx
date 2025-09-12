import { Header } from "./_components/header";
import { HeroSection } from "./_components/principal";
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
      </main>
    </>
  );
}
