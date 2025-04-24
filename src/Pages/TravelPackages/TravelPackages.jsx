import Heading from '../../Component/Heading';
import img from '../../assets/travel-bg.jpeg';
import { travelPackeges } from '../../mock/travelPackages';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import search from '../../assets/search.svg';
import { useNavigate } from 'react-router-dom';

const TravelPackages = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Packages');
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const categories = ['All Packages', 'America', 'Turkey', 'Japan', 'Dubai', 'Spain', 'Italy'];

  const filteredPackages = travelPackeges.filter(pkg => {
    const matchesCategory = selectedCategory === 'All Packages' || pkg.destination === selectedCategory;
    const matchesSearch = pkg.destination.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const singleNavigate = (id) => {
    navigate(`/single/${id}`);
  };

  return (
    <section>
      <Heading image={img} title={'Travel Packages'} />

      <div className='max-w-[1320px] w-full mx-auto px-4'>

        {/* Filter & Search */}
        <div className='flex flex-col gap-6 lg:flex-row justify-between mt-16'>

          {/* Filter Tabs */}
          <div className='flex flex-wrap gap-4 items-center overflow-x-auto scrollbar-hide'>
            {categories.map((category, index) => (
              <p
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`text-[18px] sm:text-[22px] px-4 py-2 rounded-xl cursor-pointer 
                hover:border hover:border-[#ccc] active:bg-[#e2e2e2] active:border-black transition-all duration-200
                ${selectedCategory === category ? 'border border-black bg-[#e2e2e2]' : ''}`}
              >
                {category}
              </p>
            ))}
          </div>

          {/* Search Input */}
          <div className='w-full lg:w-[315px] flex items-center border border-[#A2A2A2] px-4 py-2 rounded-[10px]'>
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='outline-none text-[#A2A2A2] text-[18px] sm:text-[22px] w-full bg-transparent'
              type="text"
              placeholder='Search'
            />
            <button className='cursor-pointer'>
              <img src={search} alt="search icon" />
            </button>
          </div>
        </div>

        {/* Card Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 my-16'>
          {filteredPackages.map((pkg) => (
            <div
              onClick={() => singleNavigate(pkg?.id)}
              key={pkg?.id}
              className='w-full border-[2px] rounded-xl transition-transform hover:scale-[1.02]'
              data-aos="fade-up"
            >
              {/* Image */}
              <div>
                <img
                  className='w-full h-[300px] sm:h-[350px] md:h-[400px] xl:h-[424px] rounded-t-xl object-cover'
                  src={pkg?.img} alt={pkg?.title}
                />
              </div>

              {/* Content */}
              <div className='p-[15px]'>
                <h3 className='py-[5px] font-bold text-[20px]'>{pkg.title}</h3>

                {/* Destination */}
                <div className='flex justify-between mt-[20px]'>
                  <div className='flex items-center gap-2'>
                    <img className='w-[24px] h-[24px]' src={pkg.logo1} alt='location' />
                    <p className='text-[18px]'>Destination:</p>
                  </div>
                  <p className='text-[18px] text-[#676767]'>{pkg.destination}</p>
                </div>

                {/* Duration */}
                <div className='flex justify-between mt-[20px]'>
                  <div className='flex items-center gap-2'>
                    <img className='w-[24px] h-[24px]' src={pkg.logo2} alt='duration' />
                    <p className='text-[18px]'>Duration:</p>
                  </div>
                  <p className='text-[18px] text-[#676767]'>{pkg.duration}</p>
                </div>

                {/* Dates */}
                <div className='flex justify-between mt-[20px]'>
                  <div className='flex items-center gap-2'>
                    <img className='w-[24px] h-[24px]' src={pkg.logo3} alt='dates' />
                    <p className='text-[18px]'>Dates:</p>
                  </div>
                  <p className='text-[18px] text-[#676767]'>{pkg.date}</p>
                </div>

                {/* Price */}
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
