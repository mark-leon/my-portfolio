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
    <div className="bg-[#10101A] p-6 sm:p-10 rounded-3xl w-full">
      <p className="text-white font-black text-[48px]"></p>

      <div className="mt-1">
        <p className="text-white tracking-wider text-[16px] sm:text-[18px]">
          {testimonial}
        </p>

        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[14px] sm:text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[10px] sm:text-[12px]">
              {designation} of {company}
            </p>
          </div>

          <img
            src={image}
            alt={`feedback_by-${name}`}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const Feedbacks = () => {
  return (
    <div className="max-w-6xl mx-auto mt-12 sm:mt-20 px-4 sm:px-6">
      <div className={`mt-6 bg-[#0F172A] rounded-[20px]`}>
        <div
          className={`rounded-2xl px-4 sm:px-16 py-8 sm:py-16 min-h-[200px] sm:min-h-[300px]`}
        >
          <p className="text-[14px] sm:text-[18px] text-secondary uppercase tracking-wider">
            What others say
          </p>
          <h2 className="text-white font-black text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px]">
            Testimonials.
          </h2>
        </div>
        <div className={`-mt-12 sm:-mt-20 pb-8 sm:pb-14 px-4 sm:px-16`}>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-7">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="w-full sm:w-[calc(50%-14px)] lg:w-[calc(33.33%-19px)]"
              >
                <FeedbackCard index={index} {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
