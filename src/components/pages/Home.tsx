// src/components/pages/Home.tsx 🏡

import Profile from "../page-section/profile";
import About from "../page-section/about";
import Skill from "../page-section/skill";
import Project from "../page-section/project";
import EducationPage from "../page-section/education";
import ContactPage from "../page-section/contact";
import HackathonPage from "../page-section/hackathon";

function Home() {
  return (
    <>
      <Profile/>
      <About/>
      <Skill/>
      <Project/>
      <HackathonPage/>
      <EducationPage/>
      <ContactPage/>
    </>
  );
}

export default Home;