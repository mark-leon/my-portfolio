import React from "react";

const profiles = [
  {
    image: "https://sergio-react.vercel.app/static/img/team-2.jpg", // Replace with actual path or URL
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    name: "Jennifer Lutheran",
    position: "CEO at pxdraft",
  },
  {
    image: "https://sergio-react.vercel.app/static/img/team-2.jpg",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    name: "John Doe",
    position: "CTO at techcorp",
  },
  // Add more profile objects as needed
];

const Testimonial = () => {
  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-8">Experience</h2>
      <div className="px-4 py-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {profiles.map((profile, index) => (
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <img
              src={profile.image}
              alt={`${profile.name}'s profile`}
              className="h-20 w-20"
            />
            <div>
              <p className="text-gray-700 mb-4">{profile.text}</p>
              <h3 className="text-lg font-semibold">{profile.name}</h3>
              <p className="text-gray-500">{profile.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
