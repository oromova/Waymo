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
      id: 1,
      num: "World",
      title: "Top Class Destination"
    }
  ];

  return (
    <section className='mb-[50px]'>
      <div className='container max-w-[1320px] mx-auto mt-[50px]'>
        <div className='flex gap-4 mb-[20px]'>
          <img src={line} alt="line" />
          <p className='text-[#8B8B8B]'>About Us</p>
        </div>
        <div className='text-[60px] leading-[75px]'>
          Our adventure started with a deep love for travel and a mission to share the world's beauty with others. Over the years, we’ve grown into a trusted travel agency, celebrated for our dedication, expertise, and commitment to delivering exceptional experiences.
        </div>

        <div className='mt-[40px] border-b-[1px] border-b-[rgba(139,139,139,0.6)]'>
          <div className='border-x-[1px] border-x-[rgba(139,139,139,0.6)] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center gap-8 my-8'>
            {
              data.map((item) => (
                <div className='border-r-[1px] border-r-[rgba(139,139,139,0.6)]' key={item.id}>
                  <p className='text-[60px]'>{item.num}+</p>
                  <p>{item.title}</p>
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