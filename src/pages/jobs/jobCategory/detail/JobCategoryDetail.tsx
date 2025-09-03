import React from 'react'
import arrowBackIcon from '../../../../assets/icons/arrow_back.svg'
import { useNavigate } from 'react-router-dom'


const JobCategoryDetail: React.FC = () => {
   const navigate = useNavigate();
   return (
      <div className='h-full w-full px-5 py-6 bg-surface rounded-lg'>

         {/* Heading */}
         <div className=''>
            <div className='flex justify-start gap-4'>
               <img
                  className='cursor-pointer'
                  onClick={() => { navigate('/jobs/jobs-categories') }}
                  src={arrowBackIcon} alt="" />
               <span
                  className='typography-heading-poppins-medium text-Black-700'>Job Category Details</span>
            </div>

            <div className='px-6 pt-6 pb-12 mt-8 bg-white rounded-lg'>
               <p className='typography-p2-semibold text-text-color'>Job Category and Description</p>


               <div className='mt-6 w-full flex flex-col justify-center gap-5'>
                  {/* Title */}
                  <div className='flex items-center gap-8'>
                     <p className='w-1/4 typography-p2-regular text-Black-300'>Title</p>
                     <p className='w-3/4 typography-p2-regular text-Black-300'>Software Developer</p>
                  </div>
                  {/* Description */}
                  <div className='flex items-center gap-8'>
                     <p className='w-1/4 typography-p2-regular text-Black-300'>Title</p>
                     <p className='w-3/4 typography-p2-regular text-Black-300'>Full-stack developer with expertise in React.js and Node.js. I have built scalable web applications. Full-stack developer with expertise in React.js and Node.js. I have built scalable web applications  </p>
                  </div>
               </div>
            </div>


         </div>
      </div>
   )
}

export default JobCategoryDetail