import line from '../../assets/line.svg';

const Destinations = () => {
  return (
    <section className="mb-[30px]">
      <div className="container max-w-[1320px] mx-auto mt-[50px] px-4">
        {/* Heading */}
        <div className="flex gap-4 mb-[20px] items-center">
          <img src={line} alt="line" />
          <p className="text-[#8B8B8B] text-[16px] sm:text-[18px]">Popular Destinations</p>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row justify-between md:gap-[60px] lg:gap-[200px]">
          <h3 className="text-[32px] sm:text-[40px] md:text-[50px] leading-tight md:w-[70%] mb-4 md:mb-0">
            A seamless blend of adventure, culture, and natural wonders
          </h3>
          <p className="text-[16px] sm:text-[18px] text-[#A2A2A2] md:w-[30%]">
            Explore a blend of adventure, rich culture, and breathtaking landscapes across our diverse destinations, where every journey promises unforgettable memories
          </p>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
