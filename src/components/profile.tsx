import Image from 'next/image';
import React from 'react';

function Profile() {
  return (
    <div className='h-full w-full flex flex-col gap-3 p-4'>

        <div className='w-full h-fit flex justify-center items-center'>
            <Image 
                src='/demo-profile.png' 
                alt='profile-image'
                width={90}
                height={90}
                className='rounded-full object-cover'    
            />
        </div>

        <div className='w-full'>
            <h1 className='font-bold'>Bhavesh Choudhary</h1>
            <p className='text-gray-400'>A undergrad student 👨‍🎓. Full stack Developer 👨‍💻. DSA</p>
        </div>

        <div className='w-full'>
            <ul>
                <li>
                    <i className='fas fa-map-marker-alt'></i>
                    <span>India</span>
                </li>
                <li>
                    <i className='fas fa-map-marker-alt'></i>
                    <span>India</span>
                </li>
                <li>
                    <i className='fas fa-map-marker-alt'></i>
                    <span>India</span>
                </li>
                <li>
                    <i className='fas fa-map-marker-alt'></i>
                    <span>India</span>
                </li>
                <li>
                    <i className='fas fa-map-marker-alt'></i>
                    <span>India</span>
                </li>
                <li>
                    <i className='fas fa-map-marker-alt'></i>
                    <span>India</span>
                </li>
                <li>
                    <i className='fas fa-map-marker-alt'></i>
                    <span>India</span>
                </li>
                <li>
                    <i className='fas fa-map-marker-alt'></i>
                    <span>India</span>
                </li>
            </ul>
        </div>

        <div className='w-full'>
            <h3 className='font-semibold'>Education</h3>
            <div>
                <h4>Lokmanya Tilak College of Engineering</h4>
                <p>B.E CSE Iot </p>
                <p>2019-2023</p>
                <p>CGPA: 8.5</p>
            </div>
            <div>
                <h4>Lokmanya Tilak College of Engineering</h4>
                <p>B.E CSE Iot </p>
                <p>2019-2023</p>
                <p>CGPA: 8.5</p>
            </div>
            <div>
                <h4>Lokmanya Tilak College of Engineering</h4>
                <p>B.E CSE Iot </p>
                <p>2019-2023</p>
                <p>CGPA: 8.5</p>
            </div>
            <div>
                <h4>Lokmanya Tilak College of Engineering</h4>
                <p>B.E CSE Iot </p>
                <p>2019-2023</p>
                <p>CGPA: 8.5</p>
            </div>
            <div>
                <h4>Lokmanya Tilak College of Engineering</h4>
                <p>B.E CSE Iot </p>
                <p>2019-2023</p>
                <p>CGPA: 8.5</p>
            </div>
            <div>
                <h4>Lokmanya Tilak College of Engineering</h4>
                <p>B.E CSE Iot </p>
                <p>2019-2023</p>
                <p>CGPA: 8.5</p>
            </div>
        </div>
    </div>
  )
}

export default Profile;