import React from 'react'
import { useNavigate } from 'react-router-dom'
import arrowBackIcon from '../../../../assets/icons/arrow_back.svg'

const JobVacanciesDetails: React.FC = () => {
   const navigate = useNavigate()

   const handleClickNavigate = () => {
      navigate('/jobs/jobs-vacancies')
   }

   return (
      <div className='h-full w-full px-5 py-6 bg-surface rounded-lg'>

         {/* Heading */}
         <div className=''>
            <div className='flex justify-start gap-4'>
               <img
                  className='cursor-pointer'
                  onClick={handleClickNavigate}
                  src={arrowBackIcon} alt="" />
               <span
                  className='typography-heading-poppins-medium text-Black-700'>Job Details and Requirements</span>
            </div>

            <div className='px-6 pt-6 pb-12 mt-8 bg-white rounded-lg'>
               <p className='typography-p2-semibold text-text-color'>Job Category and Description</p>


               <div className='mt-6 w-full flex flex-col justify-center gap-5'>

                  {/* Title */}
                  <div className='flex items-center gap-8'>
                     <p className='w-1/4 typography-p2-regular text-Black-300'>Title</p>
                     <p className='w-3/4 typography-p2-regular text-Black-300'>Software Developer</p>
                  </div>

                  {/* Country */}
                  <div className='flex items-center gap-8'>
                     <p className='w-1/4 typography-p2-regular text-Black-300'>Country</p>
                     <p className='w-3/4 typography-p2-regular text-Black-300'>Dubai</p>
                  </div>

                  {/* No of vacancies */}
                  <div className='flex items-center gap-8'>
                     <p className='w-1/4 typography-p2-regular text-Black-300'>No of vacancies</p>
                     <p className='w-3/4 typography-p2-regular text-Black-300'>200</p>
                  </div>

                  {/* Company Name */}
                  <div className='flex items-center gap-8'>
                     <p className='w-1/4 typography-p2-regular text-Black-300'>Comapany Name</p>
                     <p className='w-3/4 typography-p2-regular text-Black-300'>XYZ company</p>
                  </div>

                  {/* Company Location */}
                  <div className='flex items-center gap-8'>
                     <p className='w-1/4 typography-p2-regular text-Black-300'>Comapany Location</p>
                     <p className='w-3/4 typography-p2-regular text-Black-300'>Dubai</p>
                  </div>

                  {/* Company email */}
                  <div className='flex items-center gap-8'>
                     <p className='w-1/4 typography-p2-regular text-Black-300'>Comapany Email</p>
                     <p className='w-3/4 typography-p2-regular text-Black-300'>Dubai@123gmail.com</p>
                  </div>

                  {/* Phone Number */}
                  <div className='flex items-center gap-8'>
                     <p className='w-1/4 typography-p2-regular text-Black-300'>Phone Number</p>
                     <p className='w-3/4 typography-p2-regular text-Black-300'>982778906545</p>
                  </div>

                  {/* Salary */}
                  <div className='flex items-center gap-8'>
                     <p className='w-1/4 typography-p2-regular text-Black-300'>Salary</p>
                     <p className='w-3/4 typography-p2-regular text-Black-300'>Rs.10,000 - 20,000</p>
                  </div>

                  {/* Start Date */}
                  <div className='flex items-center gap-8'>
                     <p className='w-1/4 typography-p2-regular text-Black-300'>Start Date</p>
                     <p className='w-3/4 typography-p2-regular text-Black-300'>2025/1/2</p>
                  </div>

                  {/* End Date */}
                  <div className='flex items-center gap-8'>
                     <p className='w-1/4 typography-p2-regular text-Black-300'>End Date</p>
                     <p className='w-3/4 typography-p2-regular text-Black-300'>2029/1/2</p>
                  </div>

                  {/* Description */}
                  <div className='flex items-center gap-8'>
                     <p className='w-1/4 typography-p2-regular text-Black-300'>Title</p>
                     <p className='w-3/4 typography-p2-regular text-Black-300'>Full-stack developer with expertise in React.js and Node.js. I have built scalable web applications. Full-stack developer with expertise in React.js and Node.js. I have built scalable web applications  </p>
                  </div>

                  {/* Requirements */}
                  <div className='flex items-center gap-8'>
                     <p className='w-1/4 typography-p2-regular text-Black-300'>Requirements</p>
                     <p className='w-3/4 typography-p2-regular text-Black-300'>Full-stack developer with expertise in React.js and Node.js. I have built scalable web applications. Full-stack developer with expertise in React.js and Node.js. I have built scalable web applications  </p>
                  </div>
               </div>
            </div>


         </div>
      </div>
   )
}

export default JobVacanciesDetails