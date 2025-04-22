import Heading from '../../Component/Heading';
import img from '../../assets/travel-bg.jpeg';
import { travelPackeges } from '../../mock/travelPackages';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import search from '../../assets/search.svg';
import line from '../../assets/Line1.svg';

const TravelPackages = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Packages');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const categories = ['All Packages', 'America', 'Turkey', 'Japan', 'Dubai', 'Spain', 'Italy'];

  const filteredPackages = travelPackeges.filter(pkg => {
    const matchesCategory = selectedCategory === 'All Packages' || pkg.destination === selectedCategory;
    const matchesSearch = pkg.destination.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section>
      <Heading image={img} title={'Travel Packages'} />
      <div className='max-w-[1320px] w-full mx-auto px-4'>

        {/* Filter buttons and search */}
        <div className='flex flex-col lg:flex-row justify-between gap-6 mt-16'>
          <div className='flex flex-wrap gap-4 items-center'>
            {categories.map((category, index) => (
              <div key={index} className='flex items-center gap-2'>
                <p
                  onClick={() => setSelectedCategory(category)}
                  className={`text-[18px] sm:text-[22px] px-4 py-2 rounded-xl cursor-pointer hover:border hover:border-[#ccc] active:bg-[#e2e2e2] active:border-black transition-all duration-200 ${
                    selectedCategory === category ? 'border border-black bg-[#e2e2e2]' : ''
                  }`}
                >
                  {category}
                </p>
                {category === 'All Packages' && <img src={line} alt="line" className='hidden sm:block' />}
              </div>
            ))}
          </div>

          {/* Search input */}
          <div className='flex border border-[#A2A2A2] w-full lg:w-[315px] px-4 py-2 rounded-[10px]'>
            <input
              className='outline-none text-[#A2A2A2] text-[18px] sm:text-[22px] w-full bg-transparent'
              type="text"
              placeholder='Search'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className='cursor-pointer'>
              <img src={search} alt="search icon" />
            </button>
          </div>
        </div>

        {/* Package cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 my-16'>
          {filteredPackages.map((pkg) => (
            <div key={pkg.id} className='w-full sm:w-[90%] md:w-[48%] xl:w-[424px] h-fit border-[2px] rounded-xl transition-transform hover:scale-[1.02]' data-aos="fade-up">
              <img className='w-full h-[300px] md:h-[400px] xl:h-[424px] rounded-t-xl object-cover' src={pkg.img} alt={pkg.title} />
              <div className='p-[15px]'>
                <h3 className='py-[5px] font-bold text-[20px]'>{pkg.title}</h3>
                <div className='flex justify-between mt-[20px]'>
                  <div className='flex items-center gap-2'>
                    <img className='w-[24px] h-[24px]' src={pkg.logo1} alt='location logo' />
                    <p className='text-[18px]'>Destination:</p>
                  </div>
                  <p className='text-[18px] text-[#676767]'>{pkg.destination}</p>
                </div>
                <div className='flex justify-between mt-[20px]'>
                  <div className='flex items-center gap-2'>
                    <img className='w-[24px] h-[24px]' src={pkg.logo2} alt='duration logo' />
                    <p className='text-[18px]'>Duration:</p>
                  </div>
                  <p className='text-[18px] text-[#676767]'>{pkg.duration}</p>
                </div>
                <div className='flex justify-between mt-[20px]'>
                  <div className='flex items-center gap-2'>
                    <img className='w-[24px] h-[24px]' src={pkg.logo3} alt='dates logo' />
                    <p className='text-[18px]'>Dates:</p>
                  </div>
                  <p className='text-[18px] text-[#676767]'>{pkg.date}</p>
                </div>
                <div className='flex justify-between font-bold text-[20px] my-[20px]'>
                  <p>Price:</p>
                  <p>{pkg.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelPackages;
