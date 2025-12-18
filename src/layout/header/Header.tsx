import NotificationModal from "@/components/NotificationModal";
import ProfileSection from "./partials/ProfileSection";

const Header = () => {
  return (
    <header className="flex justify-end items-center bg-white px-6 w-full">
      <div className="flex items-center gap-4">
        <NotificationModal />
        <ProfileSection />
      </div>
    </header>
  );
};

export default Header;
