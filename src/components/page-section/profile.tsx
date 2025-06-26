import { Github, Linkedin, Download } from 'lucide-react';
function Profile() {
  return (
    <div className='h-full w-full flex justify-center'>
      <div className='h-full w-full flex flex-row items-center justify-center gap-0.5'>
        <div className='flex items-center justify-center'>
          <div className='bg-gray-600 rounded-full h-32 w-32 md:h-40 md:w-40 flex justify-center items-center'>image</div>
        </div>
        <div className='w-full h-full text-left md:text-left pl-4 md:pl-10 space-y-1.5 md:space-y-3'>
          <h1 className='text-xl md:text-4xl font-bold'>Bhavesh Choudhary</h1>
          <div className="w-full h-full text-left md:text-left space-y-0.5 md:space-y-1">
            <h3 className='text-sm md:text-lg font-semibold text-gray-500'>Full Stack Web Developer</h3>
            <h3 className='text-sm md:text-lg font-semibold text-gray-500'>📍 Mumbai, India</h3>
            <h3 className='text-xs md:text-lg font-semibold text-gray-500'>Building projects that matter</h3>
          </div>
          <div className='flex flex-row items-center justify-start gap-2 mt-2'>
            <a href='https://www.linkedin.com/in/bhaveshchoudhary/' target='_blank' rel='noopener noreferrer'>
              <button className='bg-blue-500 text-white rounded-4xl px-1.5 py-0.5 flex justify-center items-center text-xs gap-0.5'><Download className='h-3 w-3' /> Resume</button>
            </a>
            <a href='https://github.com/bhaveshchoudhary' target='_blank' rel='noopener noreferrer'>
              <button className='bg-gray-800 text-white rounded-full h-6 w-6 flex justify-center items-center text-sm md:text-base'><Github className='h-4 w-4' /></button>
            </a>
            <a href='https://www.linkedin.com/in/bhaveshchoudhary/' target='_blank' rel='noopener noreferrer'>
              <button className='bg-blue-500 text-white rounded-full h-6 w-6 flex justify-center items-center text-sm md:text-base'><Linkedin className='h-4 w-4' /></button>
            </a>
            <a href='https://github.com/bhaveshchoudhary' target='_blank' rel='noopener noreferrer'>
              <button className='bg-gray-800 text-white rounded-full h-6 w-6 flex justify-center items-center text-sm md:text-base'><Github className='h-4 w-4' /></button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;