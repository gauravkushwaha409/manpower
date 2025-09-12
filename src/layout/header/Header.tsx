import NotificationModal from '@/pages/notification/partials/NotificationModal';
import ProfileSection from './partials/ProfileSection';
// import NotificationSection from './partials/NotificationSection';

const Header = () => {
  return (
    <header className="flex justify-end items-center bg-white px-6 py-[10px] w-full">
      <div className="flex items-center gap-4">
        <NotificationModal />
        <ProfileSection />
      </div>
    </header>
  );
};

export default Header;
