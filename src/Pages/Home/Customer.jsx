import line from '../../assets/line.svg';
import Marquee from 'react-fast-marquee';
import customers from '../../mock/customers';

const Customers = () => {
  return (
    <section>
      <div className="container max-w-[1320px] mx-auto mt-[60px] mb-[100px] px-4 ">
        {/* Heading */}
        <div className="flex gap-4 mb-[20px] items-center">
          <img src={line} alt="line" />
          <p className="text-[#8B8B8B] text-[16px] sm:text-[18px]">
            Customer Testimonials
          </p>
        </div>
        {/* Content */}
        <div className="mb-[40px] flex flex-col md:flex-row justify-between md:gap-[60px] lg:gap-[200px]">
          <h3 className="text-[24px] sm:text-[36px] md:text-[48px] leading-tight md:w-[70%] mb-4 md:mb-0">
            What Our Customers Are Saying
          </h3>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] text-[#A2A2A2] md:w-[30%]">
            Our customers’ experiences help us continually improve our services. Here’s what some of them have to say about their travels with us.
          </p>
        </div>
        {/* Customers */}
        <div className="relative mb-10">
          {/* Fade Left */}
          <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          {/* Fade Right */}
          <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <Marquee
            pauseOnHover={true}
          >
            <div className='flex gap-4 px-4'>
              {
                customers.map((customer) => (
                  <div className='w-[424px] h-[217px] p-4 border border-[#C7C7C7] rounded '>
                    <div className='flex gap-4 mb-[10px]'>
                      <img
                        className='w-[50px] w-[50px] rounded-full'
                        src={customer.img}
                        alt={customer.name} />
                      <h3 className='font-bold text-[24px]'>
                        {customer.name}
                      </h3>
                    </div>
                    <p className='text-[20px] text-[#676767]'>
                      {customer.comment}
                    </p>
                  </div>
                ))
              }
            </div>
          </Marquee>
        </div>
        <div className="relative">
          {/* Fade Left */}
          <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          {/* Fade Right */}
          <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <Marquee
            direction="right"
            pauseOnHover={true}
          >
            <div className='flex gap-4 px-4'>
              {
                customers.map((customer) => (
                  <div  
                    className='w-[424px] h-[217px] p-4 border border-[#C7C7C7] rounded '>
                    <div className='flex gap-4 mb-[10px]'>
                      <img
                        className='w-[50px] w-[50px] rounded-full'
                        src={customer.img}
                        alt={customer.name} />
                      <h3 className='font-bold text-[24px]'>
                        {customer.name}
                      </h3>
                    </div>
                    <p className='text-[20px] text-[#676767]'>
                      {customer.comment}
                    </p>
                  </div>
                ))
              }
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Customers;
