import ProfileSection from "./partials/ProfileSection";

const Header = () => {
  return (
    <header className="bg-white u-gap-x flex justify-end items-center">
      <div className="flex items-center gap-4">
        <ProfileSection />
      </div>
    </header>
  );
};

export default Header;
