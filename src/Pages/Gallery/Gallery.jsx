import { useState } from 'react';
import search from '../../assets/search.svg';
import line from '../../assets/line.svg';
import Heading from '../../Component/Heading';
import img from '../../assets/gallary-bg.jpeg'
import img1 from '../../assets/japan1.jpeg'
import img2 from '../../assets/japan2.jpeg'
import img3 from '../../assets/japan3.jpeg'
import img4 from '../../assets/japan4.jpeg'

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
    // Filter qilish
    // const filteredDestinations = destinations.filter((destination) =>
    //   destination.title.toLowerCase().includes(searchTerm.toLowerCase())
    // );

  return (
    <section>
      <Heading image={img} title={"Travel Gallery"} />
      <div className='container max-w-[1320px] mx-auto my-[50px] px-4'>
        {/* Heading */}
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
          <div className='flex gap-4 mb-[20px] items-center'>
            <img src={line} alt="line" />
            <p className='text-[#8B8B8B] text-[16px] sm:text-[18px]'>Gallery</p>
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

        {/* Journey in Japan */}
        <div className='mt-[50px] flex justify-between gap-[20px]'>
          {/* 1 */}
          <div>
            <img className='w-[424px] h-[630px] rounded-[10px]'
             src={img1} alt="Japan image" />
          </div>
          {/* 2 */}
          <div>
            <img className='w-[424px] h-[303px] rounded-[10px] mb-[24px]'
              src={img2} alt="Japan image" />
            <img className='w-[424px] h-[303px] rounded-[10px]'
              src={img3} alt="Japan image" />
          </div>
          {/* 3 */}
          <div>
            <img className='w-[424px] h-[630px] rounded-[10px]'
             src={img4} alt="Japan image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;