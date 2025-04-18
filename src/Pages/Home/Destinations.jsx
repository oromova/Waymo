import line from '../../assets/line.svg';
import img1 from '../../assets/destination1.jpeg';
import img2 from '../../assets/destination2.jpeg';
import img3 from '../../assets/destination3.jpeg';

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
          <h3 className="text-[28px] sm:text-[36px] md:text-[50px] leading-tight md:w-[70%] mb-4 md:mb-0">
            A seamless blend of adventure, culture, and natural wonders
          </h3>
          <p className="text-[16px] sm:text-[18px] text-[#A2A2A2] md:w-[30%]">
            Explore a blend of adventure, rich culture, and breathtaking landscapes across our diverse destinations, where every journey promises unforgettable memories
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-[30px]">
          <div
            className="relative h-[300px] sm:h-[400px] md:h-[500px] p-4 rounded-[10px] bg-cover bg-center text-white"
            style={{ backgroundImage: `url(${img1})` }}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="absolute bottom-[20px]">
              <p className="text-[20px] sm:text-[24px] font-bold">Comprehensive Travel Support</p>
              <p className="text-[14px] font-[300]">24/7 customer service to assist you before, during, and after your trip</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div
              className="relative p-4 rounded-[10px] h-[150px] sm:h-[200px] md:h-[50%] bg-cover bg-center text-white"
              style={{ backgroundImage: `url(${img2})` }}
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="absolute bottom-[20px]">
                <p className="text-[20px] sm:text-[24px] font-bold">Expert Travel Advice</p>
                <p className="text-[14px] font-[300]">Tips and guides to enhance your travel experience</p>
              </div>
            </div>
            <div
              className="p-4 rounded-[10px] h-[150px] sm:h-[200px] md:h-[50%] bg-cover bg-center text-white relative"
              style={{ backgroundImage: `url(${img3})` }}
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="absolute bottom-[20px]">
                <p className="text-[20px] sm:text-[24px] font-bold">Diverse Destinations</p>
                <p className="text-[14px] font-[300]">Access to a wide range of domestic and international locations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
