import line from '../../assets/line.svg';

const AboutUs = () => {
  const data = [
    {
      id: 1,
      num: 200,
      title: "Happy Customer"
    },
    {
      id: 2,
      num: 40,
      title: "Top Hotels"
    },
    {
      id: 3,
      num: "World",
      title: "Top Class Destination"
    }
  ];

  return (
    <section className='mb-[50px]'>
      <div className='container max-w-[1320px] mx-auto mt-[50px] px-4'>
        <div className='flex gap-4 mb-[20px] items-center'>
          <img src={line} alt="line"  />
          <p className='text-[#8B8B8B] text-[16px] sm:text-[18px]'>About Us</p>
        </div>

        <div className='text-[32px] sm:text-[30px] md:text-[60px] leading-[45px] sm:leading-[55px] md:leading-[75px]'>
          Our adventure started with a deep love for travel and a mission to share the world's beauty with others. Over the years, we’ve grown into a trusted travel agency, celebrated for our dedication, expertise, and commitment to delivering exceptional experiences.
        </div>

        <div className='mt-[40px] border-b-[1px] border-b-[rgba(139,139,139,0.6)]'>
          <div className='border-x-[1px] border-x-[rgba(139,139,139,0.6)] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center gap-8 my-8'>
            {
              data.map((item, index) => (
                <div
                  className={`${index !== data.length - 1 ? 'md:border-r md:border-[rgba(139,139,139,0.6)]' : ''}`}
                  key={item.id}
                >
                  <p className='text-[40px] sm:text-[50px] md:text-[60px]'>
                    {item.num}{index !== data.length - 1 ? '+' : ''}
                  </p>
                  <p className='text-[18px] sm:text-[20px] md:text-[22px]'>{item.title}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
