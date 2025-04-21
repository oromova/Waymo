import React from 'react';
import Heading from '../../Component/Heading';
import img from '../../assets/travel-bg.jpeg';
import { travelPackeges } from '../../mock/travelPackages';

const TravelPackages = () => {

  return (
    <section>
      <Heading image={img} title={'Travel Packages'} />
      <div className='w-[1320px] mx-auto '>

        {/* Packages */}
        <div className='flex flex-wrap justify-center gap-6 my-16'>
          {
            travelPackeges.map((pkg) => (
              <div key={pkg.id}
                className='w-[424px] h-fit border-[2px] rounded-xl'
               >
                {/* image box */}
                <div>
                  <img className='w-[424px] h-[424px] rounded-xl object-fit object-cover'
                    src={pkg.img} alt={pkg.title} />
                </div>
                {/* description */}
                <div className='p-[15px]'>
                  <h3 className='py-[5px] font-bold text-[20px]'>
                    {pkg.title}
                  </h3>
                  <div className='flex justify-between mt-[20px]'>
                    {/* destination */}
                    <div className='flex justify-between gap-4'>
                      <img
                        className='w-[24px] h-[24px]'
                        src={pkg.logo1} alt='location logo'
                      />
                      <p className='text-[18px]'>Destination:
                      </p>
                    </div>
                    <p className='text-[18px] text-[#676767]'>{pkg.destination}</p>
                  </div>
                  {/* duration */}
                  <div className='flex justify-between mt-[20px]'>
                    <div className='flex justify-between gap-4'>
                      <img
                        className='w-[24px] h-[24px]'
                        src={pkg.logo2} alt='duration logo'
                      />
                      <p className='text-[18px]'>Duration:
                      </p>
                    </div>
                    <p className='text-[18px] text-[#676767]'>{pkg.duration}</p>
                  </div>
                  {/* dates */}
                  <div className='flex justify-between mt-[20px]'>
                    <div className='flex justify-between gap-4'>
                      <img
                        className='w-[24px] h-[24px]'
                        src={pkg.logo3} alt='duration logo'
                      />
                      <p className='text-[18px]'>Dates:
                      </p>
                    </div>
                    <p className='text-[18px] text-[#676767]'>{pkg.date}</p>
                  </div>
                  <div className='flex justify-between font-bold text-[20px] my-[20px]'>
                    <p>Price:</p>
                    <p>{pkg.price}</p>
                  </div>
                </div>

              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default TravelPackages;