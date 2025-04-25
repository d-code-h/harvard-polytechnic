import Categories from '@/components/Categories';
import Header from '../components/Header';
import Hero from '@/components/Hero';
import Profile from '@/components/Profile';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Categories />
      <Profile />
    </main>
  );
}
