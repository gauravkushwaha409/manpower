import React from 'react'
import arrowBackIcon from '../../../../assets/icons/arrow_back.svg'
import locationIcon from '../../../../assets/icons/location.svg'
import contactIcon from '../../../../assets/icons/contact.svg'
import { useNavigate } from 'react-router-dom'
import { PATH } from '@/constant/path'


const JobOfferDetails: React.FC = () => {
   const navigate = useNavigate()

   const handleClickNavigate = () => {
      navigate(PATH.jobProcess.jobOffer)
   }
   return (
      <div className='bg-surface px-5 py-6 rounded-lg w-full h-full'>

         {/* Heading */}
         <div className='flex justify-start items-center'>
            <div className='flex justify-start gap-4'>
               <img
                  onClick={handleClickNavigate}
                  className='cursor-pointer'
                  src={arrowBackIcon}
                  alt="" />
               <span className='text-Black-700 typography-heading-poppins-medium'>Job Offer Details</span>
            </div>
         </div>

         {/* Details*/}
         <div className='flex flex-col gap-2 mt-10 px-2'>

            {/* Name and status */}
            <div className='flex items-center gap-3.5'>
               <span className='text-Black-300 typography-p1-medium'>Suman Bhatt</span>
               <span className='bg-yellow/30 px-2.5 py-1 rounded-lg typography-caption-c1'>Accepted</span>
            </div>

            {/* Address */}
            <div className='flex items-center gap-0.5'>
               <img src={locationIcon} alt="" />
               <span className='text-Black-200 typography-caption-c1-semibold'>Kathmandu, Nepal</span>
            </div>

            {/* Contact */}
            <div className='flex items-center gap-0.5'>
               <img src={contactIcon} alt="" />
               <span className='text-primary typography-caption-c1'>9801108822</span>
            </div>
         </div>


         {/* Details */}
         <div className='mt-5'>
            <div className='bg-white mt-8 px-6 pt-6 pb-12 rounded-lg'>
               <p className='text-text-color typography-p2-semibold'>Basic Details For Job Offer</p>

               <div className='flex flex-col justify-center gap-5 mt-6 w-full'>

                  {/* Title */}
                  <div className='flex items-center gap-8'>
                     <p className='w-1/4 text-Black-300 typography-p2-regular'>Full Name</p>
                     <p className='w-3/4 text-Black-300 typography-p2-regular'>Suman Bhatt</p>
                  </div>

                  {/* Job Vacancy */}
                  <div className='flex items-center gap-8'>
                     <p className='w-1/4 text-Black-300 typography-p2-regular'>Job Vaccancy</p>
                     <p className='w-3/4 text-Black-300 typography-p2-regular'>Frontend Developer</p>
                  </div>

                  {/* Company Name */}
                  <div className='flex items-center gap-8'>
                     <p className='w-1/4 text-Black-300 typography-p2-regular'>Comapany Name</p>
                     <p className='w-3/4 text-Black-300 typography-p2-regular'>XYZ company</p>
                  </div>

                  {/* Salary Offered */}
                  <div className='flex items-center gap-8'>
                     <p className='w-1/4 text-Black-300 typography-p2-regular'>Salary Offered</p>
                     <p className='w-3/4 text-Black-300 typography-p2-regular'>Rs.10000 per month</p>
                  </div>

                  {/* Offer Date */}
                  <div className='flex items-center gap-8'>
                     <p className='w-1/4 text-Black-300 typography-p2-regular'>Offer Date</p>
                     <p className='w-3/4 text-Black-300 typography-p2-regular'>2024/01/01</p>
                  </div>

                  {/* Start Date */}
                  <div className='flex items-center gap-8'>
                     <p className='w-1/4 text-Black-300 typography-p2-regular'>Start Date</p>
                     <p className='w-3/4 text-Black-300 typography-p2-regular'>2024/01/01</p>
                  </div>

               </div>
            </div>
         </div>

      </div>

   )
}

export default JobOfferDetails