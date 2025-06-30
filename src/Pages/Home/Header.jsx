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
        <div className="container max-w-[1320px] mx-auto px-4 pt-20 md:pt-[100px] relative">
          {/* Kontent qismi */}
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 md:gap-6">
            
            {/* Chap tomon - matn */}
            <div className="w-full md:w-[50%] text-center md:text-left">
              <h1 className="font-semibold text-white leading-tight text-[32px] sm:text-[48px] md:text-[60px] lg:text-[72px]">
                Weaving Your Dreams Into <br className="hidden md:block" />
                Unforgettable Adventures
              </h1>
            </div>

            {/* O‘ng tomon - ijtimoiy tarmoqlar */}
            <div className="w-full md:w-[30%] flex md:flex-col gap-4 justify-center md:justify-end items-center md:items-end">
              {[{ icon: insta, alt: "Instagram", link: "https://www.instagram.com/" },
                { icon: twitter, alt: "Twitter", link: "https://twitter.com/" },
                { icon: fb, alt: "Facebook", link: "https://www.facebook.com/" }]
                .map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  className="w-[50px] h-[50px] rounded-full border-2 border-white flex items-center justify-center transition-transform hover:scale-110"
                >
                  <img src={item.icon} alt={item.alt} className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Booking now + description */}
          <div className="w-full flex flex-col sm:flex-row sm:justify-between items-center gap-6 mt-16 sm:mt-20">
            {/* Booking tugmasi */}
            <div className="bg-white w-full sm:w-[220px] h-[57px] rounded-full flex items-center justify-between px-4 shadow-md">
              <p className="font-medium text-black">Booking Now</p>
              <a
                href="https://www.booking.com/?msockid=37b1f26cc17d6d7133b8e00cc0556c7a"
                target="_blank"
              >
                <button className="w-[45px] h-[45px] bg-black rounded-full flex items-center justify-center">
                  <img src={arrow} alt="arrow right" />
                </button>
              </a>
            </div>

            {/* Matn qismi */}
            <p className="text-[16px] sm:text-[18px] text-white text-center sm:text-left max-w-[600px]">
              Discover the magic of remote destinations, where nature’s beauty meets cultural richness — offering a journey that will stay with you forever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
