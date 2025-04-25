import { contact } from '@/lib/data';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Contact = () => {
  return (
    <div className="hidden md:flex bg-dark text-white">
      <div className="flex flex-wrap flex-1 justify-between lg:justify-center ps-5 lg:gap-10 w-fit lg:w-10/12 mx-auto">
        <div className="flex flex-1 flex-wrap jus items-center  gap-5 py-3.5">
          {contact.map(({ Icon, text }) => (
            <div key={text} className="flex items-center gap-2.5">
              <Icon className="text-tertiary" />
              <span>{text}</span>
            </div>
          ))}
        </div>
        <div className="bg-tertiary flex items-center gap-5 px-9 py-4">
          {/* <Image src={facebook} alt="Logo" width={28} height={28} /> */}
          <Facebook className="text-dark" />
          <Instagram className="text-dark" />
          <Linkedin className="text-dark" />
          <Youtube className="text-dark" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
