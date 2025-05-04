import Image from 'next/image';

const TestimonyCard = ({
  text,
  author,
  src,
  position,
}: {
  text: string;
  author: string;
  src: string;
  position: string;
}) => {
  return (
    <div className="w-full sm:w-[300px] md:w-[350px] lg:w-[330px] p-6 lg:border border-gray-200 shadow-md rounded-lg bg-white hover:shadow-lg transition-shadow duration-300">
      <p className="text-gray-600 italic text-base leading-relaxed">{text}</p>
      <div className="mt-6 flex items-center gap-4">
        <Image
          src={src}
          alt={`${author}'s picture`}
          width={50}
          height={50}
          className="w-14 h-14 rounded-full object-cover border border-gray-300"
        />
        <div>
          <h5 className="font-semibold text-lg text-gray-800">{author}</h5>
          <p className="text-sm text-gray-500">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonyCard;
