// import Image from "next/image";
// import React from "react";
// import Marquee from "react-fast-marquee";

// const profiles = [
//   {
//     image: "https://s3.brilliant.com.bd/brilliant-blog/6.jpg", // Replace with actual path or URL
//     text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
//     name: "Jennifer Lutheran",
//     position: "CEO at pxdraft",
//   },
//   {
//     image: "https://s3.brilliant.com.bd/brilliant-blog/6.jpg",
//     text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
//     name: "John Doe",
//     position: "CTO at techcorp",
//   },
//   {
//     image: "https://s3.brilliant.com.bd/brilliant-blog/6.jpg",
//     text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
//     name: "John Doe",
//     position: "CTO at techcorp",
//   },
//   {
//     image: "https://s3.brilliant.com.bd/brilliant-blog/6.jpg",
//     text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
//     name: "John Doe",
//     position: "CTO at techcorp",
//   },

//   // Add more profile objects as needed
// ];

// const Testimonial = () => {
//   return (
//     <div className="max-w-6xl mx-auto mt-20">
//       <h2 className="text-2xl font-bold text-secondary mb-8">Testimonial</h2>
//       <div className="px-2 py-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
//         {profiles.map((profile, index) => (
//           <>
//             <Marquee className="py-2">
//               <div class="w-[500px] grid grid-cols-[7rem,_1fr] rounded-lg overflow-hidden relative">
//                 <Image
//                   width={400}
//                   height={400}
//                   src={profile.image}
//                   alt="Testimonial image for Matthew I."
//                   class="w-full h-44 object-cover"
//                 />
//                 <div class="bg-slate-900 text-slate-50 p-4">
//                   <span class="block font-semibold text-lg mb-1">
//                     {profile.name}
//                   </span>
//                   <span class="block mb-3 text-sm font-medium">
//                     {profile.position}
//                   </span>
//                   <span class="block text-sm text-slate-300">
//                     {profile.text}
//                   </span>
//                 </div>
//               </div>
//             </Marquee>
//           </>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Testimonial;

import React from "react";
import { testimonials } from "./constants";
// import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <div className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full">
    <p className="text-white font-black text-[48px]">"</p>

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

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl  min-h-[300px]`}>
        <p className="text-3xl font-semibold mb-6 text-secondary">
          What others say
        </p>
        <h2 className="text-3xl font-semibold mb-6 text-secondary">
          Testimonials.
        </h2>
      </div>
      <div className={`-mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
