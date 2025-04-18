import line from '../../assets/line.svg';
import packages from '../../mock/packages';

const Packages = () => {
  return (
    <section className="mb-[30px]">
      <div className="container max-w-[1320px] mx-auto mt-[50px] px-4">
        {/* Heading */}
        <div className="flex gap-4 mb-[20px] items-center">
          <img src={line} alt="line" />
          <p className="text-[#8B8B8B] text-[16px] sm:text-[18px]">Packages</p>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row justify-between md:gap-[60px] lg:gap-[200px]">
          <h3 className="text-[24px] sm:text-[36px] md:text-[48px] leading-tight md:w-[70%] mb-4 md:mb-0">
            Browse our selection of carefully curated travel packages
          </h3>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] text-[#A2A2A2] md:w-[30%]">
            Discover a collection of expertly designed packages, combining adventure, culture, and stunning landscapes, each promising a journey to remember.
          </p>
        </div>

        {/* Packages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-[40px]">
          {packages.map((item) => (
            <div
              key={item.id}
              className="relative h-[350px] sm:h-[400px] md:h-[500px] p-4 rounded-[10px] bg-cover bg-center text-white"
              style={{ backgroundImage: `url(${item.img})` }}
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <div className="absolute bottom-[20px] left-4 right-4">
                <div className="flex flex-wrap gap-3 mb-2">
                  <div className="border border-white px-4 py-2 rounded-full text-sm sm:text-base">
                    {item.day}
                  </div>
                  <div className="text-black bg-white px-4 py-2 rounded-full text-sm sm:text-base">
                    {item.price}
                  </div>
                </div>
                <p className="text-[18px] sm:text-[22px] font-bold">{item.title}</p>
                <p className="text-[13px] sm:text-[14px] font-[300]">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
