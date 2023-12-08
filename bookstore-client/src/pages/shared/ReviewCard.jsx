import React from 'react'
// react icons
import { FaStar } from 'react-icons/fa6'
import { Avatar } from 'flowbite-react';
import profile from "../../assets/profile.jpg"
import profilepic from "../../assets/profilepic.jpg"

const ReviewCard = () => {
    return (
        <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>

            {/* texts */}
            <div className='mt-7'>
                <p className='mb-5'>Books website offers a wide variety of new product samples & qualifying for samples occurs more often than other sampling sites. It's nice to actually be offered samples to try at home & review now. Very happy with Sampler.</p>
                <Avatar
                    alt="avatar of Jese"
                    img={profile}
                    rounded
                    className='w-10 mb-4'
                />
                <h5 className='text-lg font-medium'>Paddles</h5>
                <p className='text-sm'> TV Bracher</p>
            </div>
            
        </div>
    )
}

export default ReviewCard