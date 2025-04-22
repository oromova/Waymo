import Heading from "../../Component/Heading";
import img from '../../assets/contact.jpeg';
import logo1 from '../../assets/call.svg';
import logo2 from '../../assets/email.svg';
import logo3 from '../../assets/contact-location.svg';

const Contact = () => {
  return (
    <section>
      <Heading image={img} title={'Contact'} />
      <div className="w-full bg-[rgba(243,243,243,1)]">
        <div className="max-w-[1320px] mx-auto px-4 py-16">

          <div className="flex justify-center lg:justify-start">
            <div className="w-full lg:w-[40%] bg-[#011C2B] rounded-xl px-8 py-12 relative">
              <h4 className="font-bold text-[24px] sm:text-[28px] text-white mb-2">
                Contact Information
              </h4>
              <p className="text-[16px] sm:text-[18px] text-[#C9C9C9]">
                Say something to start a live chat!
              </p>

              {/* Contact List */}
              <div className="text-white mt-20 space-y-6">
                {/* Call */}
                <div className="flex items-start gap-[20px]">
                  <img className="w-[24px] h-[24px]" src={logo1} alt="call" />
                  <a
                    href="tel:+50132456456"
                    className="text-[16px] sm:text-[18px]">+5013 2456 456</a>
                </div>

                {/* Email */}
                <div className="flex items-start gap-[20px]">
                  <img className="w-[24px] h-[24px]" src={logo2} alt="email" />
                  <a
                    href="mailto:demo@gmail.com"
                    className="text-[16px] sm:text-[18px]">demo@gmail.com</a>
                </div>

                {/* Location */}
                <div className="flex items-start gap-[20px]">
                  <img className="w-[24px] h-[24px]" src={logo3} alt="location" />
                  <a
                    href="https://www.bing.com/maps?pglt=425&q=132+Dartmouth+Street+Boston%2C+Massachusetts+02156+United+States&cvid=f37e73c7def844eaaa43397f85151b8b&gs_lcrp=EgRlZGdlKgYIABBFGDkyBggAEEUYOdIBCDEwNzRqMGoxqAIIsAIB&FORM=ANNTA1&ucpdpc=UCPD&adppc=EDGEDBB&PC=EDGEDBB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[16px] sm:text-[18px]">
                    132 Dartmouth Street Boston, <br /> Massachusetts 02156 United <br /> States
                  </a>
                </div>
              </div>

              {/* Decorative circles */}
              <div className="absolute bottom-[-65px] right-[70px] bg-[rgba(255,249,249,0.13)] w-[100px] h-[100px] sm:w-[138px] sm:h-[138px] rounded-full"></div>
              <div className="absolute bottom-[-100px] right-[-120px] bg-[rgba(255,255,255,0.12)] w-[200px] h-[200px] sm:w-[269px] sm:h-[269px] rounded-full"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
