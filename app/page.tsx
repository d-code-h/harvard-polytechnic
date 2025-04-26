import Categories from '@/components/Categories';
import CTA from '@/components/CTA';
import Hero from '@/components/Hero';
import Profile from '@/components/Profile';
import Team from '@/components/Teams';

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <Profile />
      <CTA />
      <Team />
    </main>
  );
}
