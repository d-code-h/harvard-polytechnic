import Container from '@/components/Container';
import Footer from '@/components/Footer';
import Hero from '@/components/global/Hero';
import { Clock4, MapPin, Phone } from 'lucide-react';
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { contactPageData } from '@/lib/data';

const Contact = () => {
  const { heroTitle, formFields, contactInfos } = contactPageData;

  return (
    <main>
      <Hero title={heroTitle} />

      <Container>
        <div className="p-5 py-8 md:p-16 bg-[#F2F2F2] flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <section className="w-full lg:flex-1">
            <h3 className="font-epilogue font-bold text-4xl text-dark">
              Get in Touch
            </h3>
            <p className="text-dark text-base mt-5 mb-9">
              We are here to assist you. Reach out to us for inquiries, support,
              or more information about Harvard Polytechnic.
            </p>
            <div className="bg-white px-9 lg:pe-12 xl:pe-9 py-11 space-y-8">
              {contactInfos.map((info, index) => {
                const IconComponent =
                  info.Icon === 'MapPin'
                    ? MapPin
                    : info.Icon === 'Clock4'
                    ? Clock4
                    : Phone;

                return (
                  <div key={index} className="flex gap-5">
                    <div className="bg-primary/20 p-2 flex justify-center items-center rounded-full w-9 h-9">
                      <IconComponent className="text-primary w-[18px] h-[18px]" />
                    </div>
                    <section className="space-y-1">
                      <p className="text-base text-[#4D5756]">{info.title}</p>
                      <h4 className="max-w-72 xl:max-w-96 font-epilogue text-base md:text-xl lg:text-lg xl:text-xl text-dark font-bold">
                        {info.description}
                      </h4>
                    </section>
                  </div>
                );
              })}
            </div>
          </section>
          <div className="w-full lg:w-5/12">
            <form action="">
              <div className="space-y-4">
                {formFields.map((field) => (
                  <div key={field.id} className="mb-5">
                    <label
                      htmlFor={field.id}
                      className="block text-lg font-epilogue text-dark"
                    >
                      {field.label}
                      {field.required && (
                        <span className="text-red-500"> *</span>
                      )}
                    </label>
                    {field.type === 'textarea' ? (
                      <textarea
                        id={field.id}
                        name={field.id}
                        rows={4}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary bg-white"
                      ></textarea>
                    ) : (
                      <Input
                        type={field.type}
                        id={field.id}
                        name={field.id}
                        required={field.required}
                        className="mt-1 block w-full p-5 py-6 bg-white"
                      />
                    )}
                  </div>
                ))}
                <div>
                  <Button
                    type="submit"
                    className="w-full md:w-fit bg-primary text-white py-6 px-4 rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary text-base"
                  >
                    Send Message
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  );
};

export default Contact;
