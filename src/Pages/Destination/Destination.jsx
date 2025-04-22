import Heading from '../../Component/Heading';
import img from '../../assets/destination-bg.jpeg';
import { useState } from 'react';
import line from '../../assets/line.svg';
import search from '../../assets/search.svg';
import { destinations } from '../../mock/destinations';

const Destination = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter qilish
  const filteredDestinations = destinations.filter((destination) =>
    destination.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section>
      <Heading image={img} title={'Explore Destinations'} />
      <div className='container max-w-[1320px] mx-auto my-[50px] px-4'>
        {/* Heading */}
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
          <div className='flex gap-4 mb-[20px] items-center'>
            <img src={line} alt="line" />
            <p className='text-[#8B8B8B] text-[16px] sm:text-[18px]'>Our Destinations</p>
          </div>
          {/* Search */}
          <div className='flex border border-[#A2A2A2] w-full md:w-[315px] px-4 py-2 rounded-[10px]'>
            <input
              className='outline-none text-[#A2A2A2] text-[18px] sm:text-[22px] w-full'
              type="text"
              placeholder='Search'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className='cursor-pointer'>
              <img src={search} alt="search icon" />
            </button>
          </div>
        </div>

        {/* Destinations */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[40px] mt-[50px]'>
          {filteredDestinations.length > 0 ? (
            filteredDestinations.map((destination) => (
              <div
                key={destination.id}
                className="relative h-[560px] w-full p-4 rounded-[10px] bg-cover bg-center text-white"
                style={{ backgroundImage: `url(${destination.img})` }}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="absolute bottom-[20px]">
                  <p className="text-[20px] sm:text-[24px] font-bold">{destination.title}</p>
                  <p className="text-[14px] font-[300]">{destination.subtitle}</p>
                </div>
              </div>
            ))
          ) : (
            <p className='text-gray-500 col-span-full text-center'>No destinations found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Destination;