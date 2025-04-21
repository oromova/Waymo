import search from '../../assets/search.svg';
import line from '../../assets/line.svg';
import Heading from '../../Component/Heading';
import img from '../../assets/gallary-bg.jpeg';
import img1 from '../../assets/japan1.jpeg';
import img2 from '../../assets/japan2.jpeg';
import img3 from '../../assets/japan3.jpeg';
import img4 from '../../assets/japan4.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';
import img5 from '../../assets/america1.jpeg';
import img6 from '../../assets/america2.jpg';
import img7 from '../../assets/america3.jpg';
import img8 from '../../assets/america4.jpg';
import img9 from '../../assets/turkey1.jpeg';
import img10 from '../../assets/turkey2.jpeg';
import img11 from '../../assets/turkey3.jpeg';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import Marquee from 'react-fast-marquee';

const Gallery = () => {
  const swiper = [
    {
      id: 1,
      img: img5
    },
    {
      id: 2,
      img: img6
    },
    {
      id: 3,
      img: img7
    },
    {
      id: 4,
      img: img8
    },
    {
      id: 5,
      img: img5
    },
    {
      id: 6,
      img: img6
    },
    {
      id: 7,
      img: img7
    },
    {
      id: 8,
      img: img8
    },
  ];


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
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className='cursor-pointer'>
              <img src={search} alt="search icon" />
            </button>
          </div>
        </div>

        <div className='text-center mt-[30px]'>
          <h2 className='text-[32px] sm:text-[48px] md:text-[60px]'>
            Journey in
            <span className='font-semibold'> Japan</span>
          </h2>
        </div>

        <div className='mt-[50px] flex justify-between flex-wrap lg:flex-nowrap gap-[20px]'>
          {/* 1 */}
          <div className='w-full sm:w-[48%] lg:w-[424px]'>
            <img className='w-full h-[630px] rounded-[10px] object-cover object-center'
              src={img1} alt="Japan image" />
          </div>

          {/* 2 */}
          <div className='w-full sm:w-[48%] lg:w-[424px]'>
            <img className='w-full h-[303px] rounded-[10px] mb-[24px] object-cover object-center'
              src={img2} alt="Japan image" />
            <img className='w-full h-[303px] rounded-[10px] object-cover object-center'
              src={img3} alt="Japan image" />
          </div>

          {/* 3 */}
          <div className='w-full sm:w-[48%] lg:w-[424px]'>
            <img className='w-full h-[630px] rounded-[10px] object-cover object-center'
              src={img4} alt="Japan image" />
          </div>
        </div>


      </div>
      {/* Journey in America */}
      <div className='bg-[#F3F3F3] mt-[90px] mb-[60px]'>
        <div className='w-full max-w-[1320px] mx-auto px-4'>
          <div className='text-center py-[60px]'>
            <h2 className='text-[32px] sm:text-[48px] md:text-[60px] pb-[30px]'>
              Journey in <span className='font-semibold'>America</span>
            </h2>
            <>
              <Swiper
                className='h-[250px] sm:h-[400px] md:h-[600px]'
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false
                }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
              >
                {swiper.map((item) => (
                  <SwiperSlide key={item.id}>
                    <img
                      className='w-full h-full object-cover object-center rounded-xl'
                      src={item.img}
                      alt="America"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          </div>
        </div>
      </div>

      {/* Journey in Turkey */}
      <div className='w-full max-w-[1320px] mx-auto text-center mb-[60px]'>
  <h2 className='text-[32px] sm:text-[48px] md:text-[60px] pb-[30px]'>
    Journey in <span className='font-semibold'>Turkey</span>
  </h2>
  <Marquee>
    <img
      className='w-[80%] sm:w-[350px] md:w-[500px] h-[200px] sm:h-[300px] md:h-[388px] rounded-[10px] mr-[20px]'
      src={img9} alt="Turkey image"
    />
    <img
      className='w-[80%] sm:w-[350px] md:w-[500px] h-[200px] sm:h-[300px] md:h-[388px] rounded-[10px] mr-[20px]'
      src={img10} alt="Turkey image"
    />
    <img
      className='w-[80%] sm:w-[350px] md:w-[500px] h-[200px] sm:h-[300px] md:h-[388px] rounded-[10px] mr-[20px]'
      src={img11} alt="Turkey image"
    />
  </Marquee>
</div>

    </section>
  );
};

export default Gallery;