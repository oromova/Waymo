import { useState } from 'react';
import line from '../../assets/line.svg';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I book a trip with your travel service?",
      answer: "You can book a trip through our website, by calling our customer service hotline, or by visiting one of our offices. Simply choose your destination, travel dates, and preferred"
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit/debit cards, PayPal, bank transfers, and digital wallets like Apple Pay and Google Pay."
    },
    {
      question: "How do I know if my booking is confirmed?",
      answer: "You’ll receive a confirmation email or message with your booking details as soon as your reservation is successfully completed."
    },
    {
      question: "Do you offer group travel packages?",
      answer: "Yes, we offer customized group travel packages for families, friends, and corporate teams, tailored to fit your preferences and budget"
    },
    {
      question: "What destinations do you offer?",
      answer: "We offer a wide range of destinations including tropical beaches, historic cities, mountain getaways, and cultural hotspots across the globe."
    },
    {
      question: "Do you offer travel insurance?",
      answer: "Yes, we offer optional travel insurance plans to help protect your trip against unexpected events like cancellations, delays, or medical emergencies."
    },
    {
      question: "What is included in the travel packages?",
      answer: "Our travel packages typically include accommodation, transportation, guided tours, some meals, and curated experiences based on your chosen destination."
    },
    {
      question: "How do I know which package is right for me?",
      answer: "To find the right package for you, consider your preferences such as destination, trip duration, budget, and activities. You can explore our package details, check customer reviews, or contact our team for personalized recommendations."
    },
  ];

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
              className="relative border border-[rgba(139,139,139,0.6)] rounded p-4 transition-all duration-300"
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
                <p className="text-[16px] sm:text-[20px] text-[rgba(103, 103, 103, 1)] mt-2">
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