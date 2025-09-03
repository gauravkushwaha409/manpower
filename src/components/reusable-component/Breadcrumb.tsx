import { ChevronRightIcon } from 'lucide-react';
// import HomeIcon from '../../assets/icons/Home.svg';
import { IBreadcrumbProps } from '@/types';

const Breadcrumb = ({ Navone, Navtwo }: IBreadcrumbProps) => {
  return (
    <div className="flex gap-2 text-primary-400 text-sm">
      {/* <img src={HomeIcon} alt="Home Icon" className="w-4 h-4" /> */}
      <span className="font-[500] text-[12px] text-text-main">{Navone}</span>
      <ChevronRightIcon className="-mx-1 w-4 h-4" />
      <span className="font-[500] text-[12px] text-text-main">{Navtwo}</span>
    </div>
  );
};

export default Breadcrumb;
