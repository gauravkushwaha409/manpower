import React from 'react';
import arrowBackIcon from '../../../../assets/icons/arrow_back.svg';
import locationIcon from '../../../../assets/icons/location.svg';
import contactIcon from '../../../../assets/icons/contact.svg';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constant/path';

const JobInterviewDetails: React.FC = () => {
  const navigate = useNavigate();

  const handleClickNavigate = () => {
    navigate(PATH.jobProcess.jobApplications);
  };
  return (
    <div className="bg-surface px-5 py-6 rounded-lg w-full h-full">
      {/* Heading */}
      <div className="flex justify-start items-center">
        <div className="flex justify-start gap-4">
          <img
            onClick={handleClickNavigate}
            className="cursor-pointer"
            src={arrowBackIcon}
            alt=""
          />
          <span className="text-Black-700 typography-heading-poppins-medium">
            Job Interview Details
          </span>
        </div>
      </div>

      {/* Details*/}
      <div className="flex flex-col gap-2 mt-10 px-2">
        {/* Name and status */}
        <div className="flex items-center gap-3.5">
          <span className="text-Black-300 typography-p1-medium">
            Suman Bhatt
          </span>
          <span className="bg-yellow/30 px-2.5 py-1 rounded-lg typography-caption-c1">
            Scheduled
          </span>
        </div>

        {/* Address */}
        <div className="flex items-center gap-0.5">
          <img src={locationIcon} alt="" />
          <span className="text-Black-200 typography-caption-c1-semibold">
            Kathmandu, Nepal
          </span>
        </div>

        {/* Contact */}
        <div className="flex items-center gap-0.5">
          <img src={contactIcon} alt="" />
          <span className="text-primary typography-caption-c1">9801108822</span>
        </div>
      </div>

      {/* Details */}
      <div className="mt-5">
        <div className="bg-white mt-8 px-6 pt-6 pb-12 rounded-lg">
          <p className="text-text-color typography-p2-semibold">
            Basic Details For Job Interview
          </p>

          <div className="flex flex-col justify-center gap-5 mt-6 w-full">
            {/* Title */}
            <div className="flex items-center gap-8">
              <p className="w-1/4 text-Black-300 typography-p2-regular">
                Full Name
              </p>
              <p className="w-3/4 text-Black-300 typography-p2-regular">
                Suman Bhatt
              </p>
            </div>

            {/* Company Name */}
            <div className="flex items-center gap-8">
              <p className="w-1/4 text-Black-300 typography-p2-regular">
                Comapany Name
              </p>
              <p className="w-3/4 text-Black-300 typography-p2-regular">
                XYZ company
              </p>
            </div>

            {/* Job Vacancy */}
            <div className="flex items-center gap-8">
              <p className="w-1/4 text-Black-300 typography-p2-regular">
                Job Vaccancy
              </p>
              <p className="w-3/4 text-Black-300 typography-p2-regular">
                Frontend Developer
              </p>
            </div>

            {/* Date And Time */}
            <div className="flex items-center gap-8">
              <p className="w-1/4 text-Black-300 typography-p2-regular">
                Date and Time
              </p>
              <p className="w-3/4 text-Black-300 typography-p2-regular">
                2024/01/01 at 6:00 A.M
              </p>
            </div>

            {/* Interviewer Name */}
            <div className="flex items-center gap-8">
              <p className="w-1/4 text-Black-300 typography-p2-regular">
                Interviewer Name
              </p>
              <p className="w-3/4 text-Black-300 typography-p2-regular">
                Gaurav Kushwaha
              </p>
            </div>

            {/* Salary Offered */}
            <div className="flex items-center gap-8">
              <p className="w-1/4 text-Black-300 typography-p2-regular">
                Salary Offered
              </p>
              <p className="w-3/4 text-Black-300 typography-p2-regular">
                Rs.10000 per month
              </p>
            </div>

            {/* Remarks */}
            <div className="flex items-center gap-8">
              <p className="w-1/4 text-Black-300 typography-p2-regular">
                Country
              </p>
              <p className="w-3/4 text-Black-300 typography-p2-regular">
                Full-stack developer with expertise in React.js and Node.js. I
                have built scalable web applications. Full-stack developer with
                expertise in React.js and Node.js. I have built scalable web
                applications{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobInterviewDetails;
