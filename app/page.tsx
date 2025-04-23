import { Button } from '@/components/ui/button';
import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <main>
      <h1>Hello World!!!</h1>
      <Navigation />

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque ipsa
        consequuntur similique est pariatur vel aliquam, error neque quo
        deserunt veniam beatae vitae placeat eos aut facilis possimus
        perspiciatis voluptatibus.
      </p>

      <Button>Click Me</Button>
    </main>
  );
}
