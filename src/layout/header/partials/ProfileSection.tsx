import { useState, useRef, useEffect } from 'react';
import UserImage from '/vite.svg';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDownIcon, LogOut, User } from 'lucide-react';
import { clearAllCookies } from '@/utils/cookie';
import { PATH } from '@/constant/path';
import { showSuccessMessage } from '@/utils/toast';

const ProfileSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    clearAllCookies();
    navigate(PATH.auth.login, { replace: true });
    showSuccessMessage('Logout Successfully');
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="flex items-center gap-1 p-1 rounded-full w-fit transition-colors duration-200 cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="pr-2 rounded-full w-8 h-8 overflow-hidden">
          <img
            src={UserImage}
            alt="Profile"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col text-text-color">
          <span className="text-xs">Jack Grealish</span>
          <span className="text-xs">useremail@gmail.com</span>
        </div>
        <div className="flex justify-center items-center rounded-full w-10 h-10">
          <ChevronDownIcon size={16} className="text-primary-400" />
        </div>
      </div>

      {isOpen && (
        <div className="-right-2 z-50 absolute bg-white shadow-lg mt-2 border border-border-main rounded-lg w-56 overflow-hidden">
          <div className="bg-fillbg px-4 py-3 border-b border-border-main">
            <p className="mb-1 font-medium text-text-caption text-xs">
              Welcome,
            </p>
            <p className="font-semibold text-heading text-sm">Admin</p>
          </div>

          <div className="py-2">
            <Link
              to={PATH.auth.changePassword}
              className="flex items-center gap-3 hover:bg-secondary-50 px-4 py-2.5 w-full text-text-main text-sm transition-colors duration-150 hover:cursor-pointer"
            >
              <User className="w-4 h-4 text-secondary-500" />
              Account Settings
            </Link>

            <button
              onClick={handleLogout}
              className="flex items-center gap-3 hover:bg-red-50 px-4 py-2.5 w-full text-danger-300 text-sm transition-colors duration-150 hover:cursor-pointer"
            >
              <LogOut className="w-4 h-4 text-danger-300" />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileSection;
