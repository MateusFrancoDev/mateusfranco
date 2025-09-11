import { Header } from "./_components/header";
import { HeroSection } from "./_components/principal";
import { AboutSection } from "./_components/sobre";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
      </main>
    </>
  );
}
