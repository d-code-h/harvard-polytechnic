import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from 'lucide-react';

const Contact = () => {
  const contact = [
    {
      Icon: Phone,
      text: '(+234) 813 532 5674',
    },
    {
      Icon: Mail,
      text: 'info@harvardpolytechnic.edu.ng',
    },
    {
      Icon: MapPin,
      text: 'No 15, Onireke road, Agbabiaka Area, Ilorin Kwara',
    },
  ];

  return (
    <div className="hidden md:flex bg-dark text-white">
      <div className="flex flex-wrap justify-center lg:gap-12 w-fit mx-auto">
        <div className="flex flex-wrap items-center gap-5 py-3.5">
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
