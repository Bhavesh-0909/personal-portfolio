function Profile() {
  return (
    <div className='h-full w-full flex justify-center'>
      <div className='h-full w-full flex flex-col md:flex-row items-center justify-center gap-5 md:gap-0.5'>
        <div className='flex items-center justify-center'>
          <div className='bg-gray-600 rounded-full h-36 w-36 flex justify-center items-center'>image</div>
        </div>
        <div className='w-full h-full text-center md:text-left md:pl-10 space-y-3'>
          <h1 className='text-3xl md:text-5xl font-bold'>Hii!!, I'm Bhavesh</h1>
          <h3 className='text-xl font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, molestias.</h3>
        </div>
      </div>
    </div>
  )
}

export default Profile;