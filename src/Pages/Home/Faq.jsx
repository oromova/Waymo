import { useState } from 'react';
import line from '../../assets/line.svg';
import faqs from '../../mock/faqs';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <section>
      <div className="container max-w-[1320px] mx-auto my-[60px] px-4">
        {/* Heading */}
        <div className="flex gap-4 mb-[20px] items-center">
          <img src={line} alt="line" />
          <p className="text-[#8B8B8B] text-[16px] sm:text-[18px]">
            FAQs
          </p>
        </div>

        {/* Content */}
        <div className="mb-[40px] flex flex-col md:flex-row justify-between md:gap-[60px] lg:gap-[200px]">
          <h3 className="text-[24px] sm:text-[36px] md:text-[48px] leading-tight md:w-[70%] mb-4 md:mb-0">
            Frequently Asked Questions
          </h3>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] text-[#A2A2A2] md:w-[30%]">
            Explore our comprehensive FAQ section, designed to answer all your queries and help you plan a seamless and unforgettable journey.
          </p>
        </div>
        {/* FAQs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="relative border border-[rgba(139,139,139,0.6)] rounded p-4 transition-all duration-300 hover:shadow-lg hover:bg-[rgba(245, 245, 245, 0.4)]"
            >
              <button
                className="cursor-pointer text-[32px] absolute top-2 right-4"
                onClick={() => toggle(index)}
              >
                {openIndex === index ? '−' : '+'}
              </button>
              <h3 className="font-bold text-[20px] sm:text-[24px] pr-[40px]">
                {faq.question}
              </h3>
              {openIndex === index && (
                <p className="text-[16px] sm:text-[20px] text-[#A2A2A2] mt-2">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Faq;