import { Github, Linkedin, Download, Mail } from 'lucide-react';
function Profile() {
  return (
    <div className='h-full w-full flex justify-center'>
      <div className='h-full w-full flex flex-row items-center justify-evenly gap-0.5'>
        <div className='flex items-center justify-center'>
          <img className='bg-gray-600 rounded-full h-32 w-32 md:h-40 md:w-40 flex justify-center items-center' src='/logo.png' alt='Profile Picture' />
        </div>
        <div className='w-fit h-full text-left md:text-left pl-3 md:pl-10 space-y-1.5 md:space-y-3'>
          <h1 className='text-lg font-semibold md:text-4xl md:font-bold'>Bhavesh Choudhary</h1>
          <div className="w-full h-full text-left md:text-left space-y-0.5 md:space-y-1">
            <h3 className='text-sm md:text-lg font-semibold text-gray-400'>Full Stack Web Developer</h3>
            <h3 className='text-sm md:text-lg font-semibold text-gray-400'>📍 Mumbai, India</h3>
            <h3 className='text-xs md:text-lg font-semibold text-gray-400'>Building projects that matter</h3>
            <div className='flex flex-row items-center justify-start gap-2 mt-2'>
              <a href='https://drive.google.com/file/d/1kA-SOHDTnuRUUSbdmIyxxpLhry2jRWqY/view?usp=sharing' download target='_blank' rel='noopener noreferrer'>
                <button className='border border-foreground rounded-4xl px-1.5 py-0.5 flex justify-center cursor-pointer items-center text-xs gap-0.5'><Download className='h-3 w-3' /> Resume</button>
              </a>
              <a href='https://github.com/Bhavesh-0909' target='_blank' rel='noopener noreferrer'>
                <button className='bg-gray-800 text-white rounded-full h-6 w-6 flex justify-center cursor-pointer items-center text-sm md:text-base'><Github className='h-4 w-4' /></button>
              </a>
              <a href='https://www.linkedin.com/in/bhavesh-babulal-choudhary/' target='_blank' rel='noopener noreferrer'>
                <button className='bg-blue-500 text-white rounded-full h-6 w-6 flex justify-center cursor-pointer items-center text-sm md:text-base'><Linkedin className='h-4 w-4' /></button>
              </a>
              <a href='mailto:bhaveshchoudhary0909@gmail.com' target='_blank' rel='noopener noreferrer'>
                <button className='bg-gray-800 text-white rounded-full h-6 w-6 flex justify-center cursor-pointer items-center text-sm md:text-base'><Mail className='h-4 w-4'/></button>
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Profile;