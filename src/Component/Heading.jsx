import insta from '../assets/insta.svg';
import fb from '../assets/fb.svg';
import twitter from '../assets/new-twitter.svg';
// import arrow from '../../assets/arrow.svg';

const Heading = ({image, title}) => {
  return (
    <section>
      <div
        className="w-full h-[404px] bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className='w-[1320px] mx-auto flex md:justify-between flex-wrap justify-center'>
          <div>
          </div>
          <h1 className='sm:text-[80px] text-white text-center text-[50px]'>{title}</h1>
           <div>
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
                  href="https://www.twitter.com/"
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
      </div>
    </section>
  )
}

export default Heading