import Heading from "../../Component/Heading";
import img from '../../assets/contact.jpeg';
import logo1 from '../../assets/call.svg';
import logo2 from '../../assets/email.svg';
import logo3 from '../../assets/contact-location.svg';
import map from '../../assets/contact-map.png';
import axios from "axios";
import { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const sendMessage = (event) => {
    setLoading(true);
    event.preventDefault();
    const token = '7420606017:AAEh1OL5BuVtS93SxN4I5shkrl5Hj8nMqis';
    const chat_id = 6135129095;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const textarea = document.getElementById("textarea").value;
    const messageContent = `Ismi ${name} \nFamiliyasi: ${surname} \nTel: ${phone} \nEmail: ${email} \nMessage: ${textarea}`;

    axios({
      url: url,
      method: "POST",
      data: {
        "chat_id": chat_id,
        "text": messageContent,
      }
    }).then((res) => {
      document.getElementById("myForm").reset();
      alert("Successfully sent");
    }).catch((error) => {
      console.log("Error", error);
    }).finally(() => {
      setLoading(false);
    });
  };


  return (
    <section>
      <Heading image={img} title={'Contact Us'} />
      <div className="w-full bg-[rgba(243,243,243,1)]">
        <div className="max-w-[1320px] mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[100px]">
            {/* Contact Information */}
            <div className="w-full lg:w-[40%] bg-[#011C2B] rounded-xl px-8 py-12 relative overflow-hidden">
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
              <form id="myForm" onSubmit={sendMessage}>
                <div className="text-[#8D8D8D] font-medium text-[12px]">
                  {/* Name & Surname */}
                  <div className="flex flex-col gap-[40px] lg:flex-row">
                    {/* First Name */}
                    <div className="w-full text-[14px]">
                      <label className="block text-[16px]">First Name</label>
                      <input
                        id="name"
                        type="text"
                        required
                        className="w-full border-b border-[#8D8D8D] px-4 py-3 focus:outline-none focus:border-[#011C2A]"
                      />
                    </div>
                    {/* Last Name */}
                    <div className="w-full text-[14px]">
                      <label className="block text-[16px]">Last Name</label>
                      <input
                        id="surname"
                        type="text"
                        required
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
                        id="email"
                        type="email"
                        required
                        className="w-full border-b border-[#8D8D8D] px-4 py-3 focus:outline-none focus:border-[#011C2A]"
                      />
                    </div>
                    {/* Phone */}
                    <div className="w-full text-[14px]">
                      <label className="block text-[16px]">Phone Number</label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        className="w-full border-b border-[#8D8D8D] px-4 py-3 focus:outline-none focus:border-[#011C2A]"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mt-[30px] lg:mt-[60px]">
                    <label className="block text-[16px] font-medium mb-2">Message</label>
                    <textarea
                      id="textarea"
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
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="w-full px-4 py-[80px]">
        <div className="max-w-[1320px] mx-auto">
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] text-center">
            Find Us on Map
          </h2>
          <p className="text-center max-w-[996px] mx-auto text-[#A2A2A2] text-[16px] sm:text-[18px] md:text-[20px]">
            We are located in the heart of the city, easily accessible by public transport and just a few minutes away from major landmarks. Whether you’re traveling by car or train, finding us is simple and straightforward. Use the map below to get directions and plan your visit.
          </p>
          <img
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[581px] rounded mt-[50px] object-cover"
            src={map}
            alt="map"
          />
        </div>
      </div>

    </section>
  );
};

export default Contact;
