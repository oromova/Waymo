import Heading from "../../Component/Heading";
import img from '../../assets/contact.jpeg';
import logo1 from '../../assets/call.svg';
import logo2 from '../../assets/email.svg';
import logo3 from '../../assets/contact-location.svg';

const Contact = () => {
  return (
    <section>
      <Heading image={img} title={'Contact Us'} />
      <div className="w-full bg-[rgba(243,243,243,1)]">
        <div className="max-w-[1320px] mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[100px]">
            {/* Contact Information */}
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

            {/* Contact Input */}
            <div className="w-full lg:w-[60%]">
              <form>
                <div className="text-[#8D8D8D] font-medium text-[12px]">
                  {/* Name & Surname */}
                  <div className="flex flex-col gap-[40px] lg:flex-row">
                    {/* First Name */}
                    <div className="w-full text-[14px]">
                      <label className="block text-[16px]">First Name</label>
                      <input
                        type="text"
                        className="w-full border-b border-[#8D8D8D] px-4 py-3 focus:outline-none focus:border-[#011C2A]"
                      />
                    </div>
                    {/* Last Name */}
                    <div className="w-full text-[14px]">
                      <label className="block text-[16px]">Last Name</label>
                      <input
                        type="text"
                        className="w-full border-b border-[#8D8D8D] px-4 py-3 focus:outline-none focus:border-[#011C2A]"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="flex flex-col gap-[40px] lg:flex-row mt-[30px] lg:mt-[60px]">
                    {/* Email */}
                    <div className="w-full text-[14px]">
                      <label className="block text-[16px]">Email</label>
                      <input
                        type="email"
                        className="w-full border-b border-[#8D8D8D] px-4 py-3 focus:outline-none focus:border-[#011C2A]"
                      />
                    </div>
                    {/* Phone */}
                    <div className="w-full text-[14px]">
                      <label className="block text-[16px]">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full border-b border-[#8D8D8D] px-4 py-3 focus:outline-none focus:border-[#011C2A]"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mt-[30px] lg:mt-[60px]">
                    <label className="block text-[16px] font-medium mb-2">Message</label>
                    <textarea
                      rows="3"
                      placeholder="Write your message..."
                      className="w-full border-b text-[#8D8D8D] border-[#8D8D8D] text-[14px] py-3 focus:outline-none focus:border-[#011C2A]"
                    ></textarea>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="bg-[#011C2B] text-white px-6 py-3 rounded-md text-[16px] hover:bg-[#023147] font-medium transition mt-[30px] lg:mt-[60px]"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1320px] mx-auto py-[80px]">
        <h2 className="text-[60px] text-center">
          Find Us on Map
        </h2>
        <p className="text-center">
          We are located in the heart of the city, easily accessible by public transport and just a few minutes away from major landmarks. Whether you’re traveling by car or train, finding us is simple and straightforward. Use the map below to get directions and plan your visit.
        </p>
      </div>
    </section>
  );
};

export default Contact;
