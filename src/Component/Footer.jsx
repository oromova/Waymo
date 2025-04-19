import img from '../assets/footer.jpeg';
import arrow from '../assets/arrow.svg';

const Footer = () => {
  return (
    <footer className="w-full h-fit z-10">
      <div className="relative w-full h-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm scale-110"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 text-white px-4 lg:px-0 py-10">
          <h2 className='w-full max-w-[1140px] mx-auto text-[32px] sm:text-[48px] lg:text-[60px] font-medium text-center leading-tight'>
            Find your ideal journey and uncover unforgettable adventures with us
          </h2>

          <p className='text-[16px] sm:text-[18px] lg:text-[20px] max-w-[671px] mx-auto text-center mt-[30px]'>
            Set off on a journey of discovery and thrill, with us guiding you to unforgettable experiences around the world
          </p>

          {/* button */}
          <div className='bg-white w-[195px] h-[57px] rounded-full flex items-center justify-between px-3 mx-auto mt-[30px]'>
            <p className='font-medium text-black ml-[10px] text-[18px]'>Get Started</p>
            <a href="/">
              <button className='w-[45px] h-[45px] bg-black rounded-full flex items-center justify-center cursor-pointer'>
                <img src={arrow} alt="arrow right" />
              </button>
            </a>
          </div>

          {/* Navigation */}
          <div className='w-full max-w-[1320px] mx-auto flex flex-col lg:flex-row justify-between gap-12 lg:gap-0 p-6 mt-[50px]'>
            <div className='w-full max-w-[307px]'>
              <h4 className='font-medium text-[24px]'>Waymo</h4>
              <p className='text-[18px] lg:text-[20px]'>
                Your gateway to the breathtaking beauty, rich culture, and thrilling adventures awaiting in Iceland’s stunning landscapes
              </p>
            </div>
            <div className='flex flex-col sm:flex-row justify-between gap-12 lg:gap-[100px]'>
              {/* 1 */}
              <div>
                <h4 className='font-medium text-[24px]'>Navigations</h4>
                <a href="/"><p className='text-[18px] lg:text-[20px]'>Destinations</p></a>
                <a href="/"><p className='text-[18px] lg:text-[20px]'>Gallery</p></a>
                <a href="/"><p className='text-[18px] lg:text-[20px]'>Travel Packages</p></a>
                <a href="/"><p className='text-[18px] lg:text-[20px]'>Contact</p></a>
              </div>
              {/* 2 */}
              <div>
                <h4 className='font-medium text-[24px]'>Social</h4>
                <a href="/"><p className='text-[18px] lg:text-[20px]'>Instagram</p></a>
                <a href="/"><p className='text-[18px] lg:text-[20px]'>X</p></a>
                <a href="/"><p className='text-[18px] lg:text-[20px]'>Youtube</p></a>
              </div>
              {/* 3 */}
              <div>
                <h4 className='font-medium text-[24px]'>Contact</h4>
                <a href="/"><p className='text-[18px] lg:text-[20px]'>Waymotravel@gmail.com</p></a>
                <a href="/"><p className='text-[18px] lg:text-[20px]'>(704)-223-0126</p></a>
                <a href="/"><p className='text-[18px] lg:text-[20px]'>9999 Thornridge Cir. Syracuse.</p></a>
                <a href="/"><p className='text-[18px] lg:text-[20px]'>Connecticut 35894</p></a>
              </div>
            </div>
          </div>

          {/* Logo */}
          <div className='uppercase font-medium text-center text-[60px] sm:text-[100px] md:text-[150px] lg:text-[200px] w-fit mx-auto'>
            Waymo
          </div>

          {/* Footer end */}
          <div className='flex flex-col md:flex-row justify-between items-center gap-4 w-full max-w-[1320px] mx-auto mt-10 text-[16px] text-center md:text-left'>
            <div className='flex gap-6'>
              <p>Privacy policy</p>
              <p>Terms & Conditions</p>
            </div>
            <div>
              <p>@SNAELAND 2024. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
