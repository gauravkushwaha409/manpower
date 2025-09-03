import React from 'react'
import bg_image from '../../../assets/bg_login.jpg'
import leftArrowaIcon from '../../../assets/icons/leftArrowPrimary.svg'
import { Link } from 'react-router-dom'
import { PATH } from '../../../utils/path'
import NewPassModal from '../modal/NewPassModal'

const NewPassComponent: React.FC = () => {
    return (
        <div
            style={{ background: `url(${bg_image})`, }}
            className={`h-screen w-screen !bg-cover flex items-center justify-center`}>
            <div className='h-1/2 w-fit lg:w-1/2'>
                <NewPassModal />

                {/* Password reset section */}
                <Link to={PATH.login}>
                    <div className='mt-5 lg:mt-10 flex flex-col gap-1 items-center justify-center lg:flex-row'>
                        <img src={leftArrowaIcon} alt="" />
                        <p className='text-center typography-p1-semibold text-primary'>Go Back To Login Page</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default NewPassComponent