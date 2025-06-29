import Profile from "./components/page-section/profile";
import About from "./components/page-section/about";
import Skill from "./components/page-section/skill";
import Project from "./components/page-section/project";
import EducationPage from "./components/page-section/education";
import ContactPage from "./components/page-section/contact";
import HackathonPage from "./components/page-section/hackathon";

function App() {

  return (
    <div className="flex justify-center">
      <div className="flex flex-col h-full w-full gap-8 md:max-w-4/7 lg:max-w-4/7 px-8 py-10">
        <Profile/>
        <About/>
        <Skill/>
        <Project/>
        <HackathonPage/>
        <EducationPage/>
        <ContactPage/>
      </div>
    </div>
  )
}

export default App
