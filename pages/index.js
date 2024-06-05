import AboutMe from "../components/about";
import Content from "../components/content";
import EducationAndSkills from "../components/educationAndSkills";
import Experience from "../components/experience";
import Sidebar from "../components/sidebar";
import Testimonial from "../components/testimonial";
import WhatIDo from "../components/whatIdo";

export default function Home() {
  return (
    <div className="flex ">
      <Sidebar />
      {/* <Content /> */}
      {/* <AboutMe /> */}
      {/* <EducationAndSkills /> */}
      {/* <WhatIDo /> */}
      {/* <Experience /> */}
      <Testimonial />
    </div>
  );
}
