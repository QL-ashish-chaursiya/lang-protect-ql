import { Scene3D } from '@/components/Scene3D';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Contact } from '@/components/Contact';

const Index = () => {
  return (
    <main className="relative">
      <Scene3D />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
};

export default Index;
