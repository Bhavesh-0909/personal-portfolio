import { Github, Linkedin, Download, Mail,  } from "lucide-react";
import { motion } from "framer-motion";
import leetcodeIcon from "../../assets/leetcode.svg";

function Profile() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-4xl flex items-center gap-3 md:gap-10">
        {/* Profile Image */}
        <motion.div
          className="relative flex-shrink-0"
          whileHover={{ scale: 1.12, zIndex: 40 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
        >
          <img
            src="https://res.cloudinary.com/dfhbzmhxb/image/upload/v1761915852/portfolio/cropped_circle_image_s5dcfk.png"
            alt="Bhavesh Choudhary"
            className="h-32 w-32 md:h-40 md:w-40 rounded-full object-cover"
          />
        </motion.div>

        {/* Text Content */}
        <div className="flex flex-col md:space-y-1">
          {/* Name */}
          <h1 className="text-xl md:text-5xl font-bold">
            Bhavesh Choudhary
          </h1>

          {/* Role */}
          <h2 className="max-w-xl text-[10px] md:text-lg font-semibold text-gray-400">
            Backend-Focused Full Stack Engineer
          </h2>

          {/* Description */}
          <p className="max-w-xl text-[10px] md:text-base text-gray-400 leading-snug md:leading-relaxed">
            I design and build scalable backend systems, real-time collaborative
            apps, and production grade software.
          </p>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-2">
            {/* Resume */}
            <a
              href="https://drive.google.com/file/d/1kA-SOHDTnuRUUSbdmIyxxpLhry2jRWqY/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border border-foreground rounded-full px-3 py-1.5 text-xs flex items-center gap-1 hover:bg-foreground hover:text-background transition">
                <Download className="h-3.5 w-3.5" />
                Resume
              </button>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Bhavesh-0909"
              target="_blank"
              rel="noopener noreferrer"
              className="h-7 w-7 rounded-full bg-gray-800 text-white flex items-center justify-center hover:scale-105 transition"
            >
              <Github className="h-3 w-3" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/bhavesh-babulal-choudhary/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-7 w-7 rounded-full bg-blue-500 text-white flex items-center justify-center hover:scale-105 transition"
            >
              <Linkedin className="h-3 w-3" />
            </a>

            {/* Email */}
            <a
              href="mailto:bhaveshchoudhary0909@gmail.com"
              className="h-7 w-7 rounded-full bg-gray-800 text-white flex items-center justify-center hover:scale-105 transition"
            >
              <Mail className="h-3 w-3" />
            </a>

            {/* leetcode*/}
            <a
              href="https://leetcode.com/u/bhaveshchoudhary0909/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-7 w-7 rounded-full bg-white text-white flex items-center justify-center hover:scale-105 transition"
            >
              <img src={leetcodeIcon} alt="LeetCode" className="h-3 w-3"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
