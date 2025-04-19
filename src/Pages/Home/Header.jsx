import bg from '../../assets/header.jpeg';
import insta from '../../assets/insta.svg';
import fb from '../../assets/fb.svg';
import twitter from '../../assets/new-twitter.svg';
import arrow from '../../assets/arrow.svg';

const Header = () => {
  return (
    <section>
      <div
        className="w-full h-screen bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className='container max-w-[1320px] mx-auto mt-[50px] px-4'>
          <div className='flex justify-center items-center'>
            <div className='w-[70%]'>
              <h1 className='font-semibold text-[80px] text-white leading-[90px]'>
                Weaving Your Dreams Into Unforgettable Adventures
              </h1>
            </div>
            <div className='w-[40%] h-full text-right'>
              <div className='flex justify-end'>
                <a
                  className='w-[50px] h-[50px] rounded-full border-2 border-[#fff] flex items-center justify-center transition-all transform hover:scale-110'
                  href="https://www.instagram.com/"
                >
                  <img src={insta} alt="instagram icon" className="w-full h-full p-[10px] object-cover rounded-full" />
                </a>
              </div>

              <div className='mt-[20px] flex justify-end'>
                <a
                  className='w-[50px] h-[50px] rounded-full border-2 border-[#fff] flex items-center justify-center transition-all transform hover:scale-110'
                  href="https://twitter.com/"
                >
                  <img src={twitter} alt="twitter icon" className="w-full h-full p-[10px] object-cover rounded-full" />
                </a>
              </div>

              <div className='mt-[20px] flex justify-end'>
                <a
                  className='w-[50px] h-[50px] rounded-full border-2 border-[#fff] flex items-center justify-center transition-all transform hover:scale-110'
                  href="https://www.facebook.com/"
                >
                  <img src={fb} alt="facebook" className="w-full h-full p-[10px] object-cover rounded-full" />
                </a>
              </div>
            </div>
          </div>

          {/* Booking now */}
          <div className='flex justify-between absolute bottom-[80px] w-[60%]'>
            <div className='bg-white w-[200px] h-[57px] rounded-full flex items-center justify-between px-3 '>
              <p className='font-medium text-black ml-[10px]'>Booking Now</p>
              <a href="/">
                <button className='w-[45px] h-[45px] bg-black rounded-full flex items-center justify-center'>
                  <img src={arrow} alt="arrow right" />
                </button>
              </a>
            </div>

            <div>
              <p className='text-[18px] text-white'>
                Discover the magic of remote destinations, where nature’s beauty meets <br /> cultural richness, offering a journey that will stay with you forever.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Header;