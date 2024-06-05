import AboutMe from "../components/about";
import Content from "../components/content";
import EducationAndSkills from "../components/educationAndSkills";
import Sidebar from "../components/sidebar";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      {/* <Content /> */}
      {/* <AboutMe /> */}
      <EducationAndSkills />
    </div>
  );
}
