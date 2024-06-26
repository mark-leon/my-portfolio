import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const profiles = [
  {
    image: "https://s3.brilliant.com.bd/brilliant-blog/6.jpg", // Replace with actual path or URL
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    name: "Jennifer Lutheran",
    position: "CEO at pxdraft",
  },
  {
    image: "https://s3.brilliant.com.bd/brilliant-blog/6.jpg",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    name: "John Doe",
    position: "CTO at techcorp",
  },
  {
    image: "https://s3.brilliant.com.bd/brilliant-blog/6.jpg",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    name: "John Doe",
    position: "CTO at techcorp",
  },
  {
    image: "https://s3.brilliant.com.bd/brilliant-blog/6.jpg",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    name: "John Doe",
    position: "CTO at techcorp",
  },

  // Add more profile objects as needed
];

const Testimonial = () => {
  return (
    <div className="max-w-6xl mx-auto mt-20">
      <h2 className="text-2xl font-bold text-secondary mb-8">Testimonial</h2>
      <div className="px-2 py-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {profiles.map((profile, index) => (
          <>
            <Marquee className="py-2">
              <div class="w-[500px] grid grid-cols-[7rem,_1fr] rounded-lg overflow-hidden relative">
                <Image
                  width={400}
                  height={400}
                  src={profile.image}
                  alt="Testimonial image for Matthew I."
                  class="w-full h-44 object-cover"
                />
                <div class="bg-slate-900 text-slate-50 p-4">
                  <span class="block font-semibold text-lg mb-1">
                    {profile.name}
                  </span>
                  <span class="block mb-3 text-sm font-medium">
                    {profile.position}
                  </span>
                  <span class="block text-sm text-slate-300">
                    {profile.text}
                  </span>
                </div>
              </div>
            </Marquee>
          </>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
