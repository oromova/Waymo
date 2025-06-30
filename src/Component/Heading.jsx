import insta from '../assets/insta.svg';
import fb from '../assets/fb.svg';
import twitter from '../assets/new-twitter.svg';

const Heading = ({ image, title }) => {
  return (
    <section>
      <div
        className="w-full h-[404px] bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Qoraytirilgan fon gradient */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        {/* Asosiy kontent */}
        <div className="relative z-10 w-full max-w-[1320px] mx-auto flex flex-col md:flex-row justify-around items-center px-4 gap-6">

          {/* Sarlavha */}
          <h1 className="text-white text-center text-[40px] sm:text-[60px] lg:text-[80px] font-semibold leading-tight">
            {title}
          </h1>

          {/* Ijtimoiy tarmoqlar */}
          <div className="flex md:flex-col gap-4">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[50px] h-[50px] rounded-full border-2 border-white flex items-center justify-center transition-transform hover:scale-110"
            >
              <img src={insta} alt="Instagram" className="w-6 h-6" />
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[50px] h-[50px] rounded-full border-2 border-white flex items-center justify-center transition-transform hover:scale-110"
            >
              <img src={twitter} alt="Twitter" className="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[50px] h-[50px] rounded-full border-2 border-white flex items-center justify-center transition-transform hover:scale-110"
            >
              <img src={fb} alt="Facebook" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heading;  