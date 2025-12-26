// src/components/pages/Home.tsx 🏡

import Profile from "../page-section/profile";
import About from "../page-section/about";
import Skill from "../page-section/skill";
import Project from "../page-section/project";
import EducationPage from "../page-section/education";
import ContactPage from "../page-section/contact";
import HackathonPage from "../page-section/hackathon";
import { motion } from "framer-motion";


function Home() {
  return (
    <motion.main
      style={{ transformOrigin: "top center" }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex flex-col gap-8"
    >
      <Profile/>
      <About/>
      <Skill/>
      <Project/>
      <HackathonPage/>
      <EducationPage/>
      <ContactPage/>
    </motion.main>
  );
}

export default Home;