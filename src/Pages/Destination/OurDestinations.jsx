import line from '../../assets/line.svg';
import search from '../../assets/search.svg';
import { destinations } from '../../mock/destinations';

const OurDestinations = () => {
  return (
    <section>
      <div className='container max-w-[1320px] mx-auto my-[50px] px-4'>
        <div className='flex justify-between'>
          <div className='flex gap-4 mb-[20px] items-center'>
            <img src={line} alt="line" />
            <p className='text-[#8B8B8B] text-[16px] sm:text-[18px]'>About Us</p>
          </div>
          <div className='flex border border-[#A2A2A2] w-[315px] px-4 py-2 rounded-[10px]'>
            <input
              className='outline-none text-[#A2A2A2] text-[22px]'
              type="text"
              placeholder='Search'
            />
            <button className='cursor-pointer'>
              <img src={search} alt="search icon" />
            </button>
          </div>

        </div>
        {/* Destinations */}
        <div className='grid grid-cols-3 gap-[40px] mt-[50px]'>
          {/* 1 */}
          {
            destinations.map((destination) => (
              <div
                className="relative h-[560px] w-[424px] p-4 rounded-[10px] bg-cover bg-center text-white"
                style={{ backgroundImage: `url(${destination.img})` }}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="absolute bottom-[20px]">
                  <p className="text-[20px] sm:text-[24px] font-bold">{destination.title}</p>
                  <p className="text-[14px] font-[300]"> 
                    {destination.subtitle}
                  </p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default OurDestinations;