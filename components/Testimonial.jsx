import React from "react";

import { testimonials } from "../components/constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  return (
    <div
      //   variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-[#10101A] p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <p className="text-white font-black text-[48px]"></p>

      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} of {company}
            </p>
          </div>

          <img
            src={image}
            alt={`feedback_by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const Feedbacks = () => {
  return (
    <div className="max-w-6xl mx-auto mt-20">
      <div className={`mt-6 bg-[#0F172A] rounded-[20px]`}>
        <div
          className={` rounded-2xl sm:px-16 px-6 sm:py-16 py-10 min-h-[300px]`}
        >
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
            What others say
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Testimonials.
          </h2>
        </div>
        <div className={`-mt-20 pb-14 sm:px-16 px-6 flex  gap-7`}>
          {testimonials.map((testimonial, index) => (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
