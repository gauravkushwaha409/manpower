import React from 'react';
import bg_image from '../../../assets/bg_login.jpg';
import leftArrowaIcon from '../../../assets/icons/leftArrowPrimary.svg';
import { Link } from 'react-router-dom';
import NewPassModal from '../modal/NewPassModal';
import { PATH } from '@/constant/path';

const NewPassComponent: React.FC = () => {
  return (
    <div
      style={{ background: `url(${bg_image})` }}
      className={`h-screen w-screen !bg-cover flex items-center justify-center`}
    >
      <div className="w-fit lg:w-1/2 h-1/2">
        <NewPassModal />

        {/* Password reset section */}
        <Link to={PATH.auth.login}>
          <div className="flex lg:flex-row flex-col justify-center items-center gap-1 mt-5 lg:mt-10">
            <img src={leftArrowaIcon} alt="" />
            <p className="text-primary text-center typography-p1-semibold">
              Go Back To Login Page
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NewPassComponent;
