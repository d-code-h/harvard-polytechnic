// import Categories from '@/components/Categories';
// import Courses from '@/components/Courses';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Posts from '@/components/Posts';
import Profile from '@/components/Profile';
import Team from '@/components/Teams';
import Testimonies from '@/components/Testimonies';

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Categories /> */}
      {/* <Courses /> */}
      <Profile />
      <CTA />
      <Testimonies />
      <Team />
      <Posts />
      <Footer />
    </main>
  );
}
