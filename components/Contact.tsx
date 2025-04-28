import { contact } from '@/lib/data';
import Social from './Social';

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
        <Social variant="solid" />
      </div>
    </div>
  );
};

export default Contact;
