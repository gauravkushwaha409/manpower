import React from "react";
import { RefreshCcw } from "lucide-react";
import { FaUserCheck, FaUsers } from "react-icons/fa";
import { BiSolidPlaneAlt } from "react-icons/bi";

interface StatCardProps {
  icon: React.ElementType;
  title: string;
  value: string | number;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, title, value }) => {
  return (
    <div className="flex flex-1 min-w-0 rounded-xl bg-white px-6 py-6 items-center justify-between relative shadow-sm">
      <div className="flex items-center gap-4 w-full">
        <div className="flex flex-col justify-center flex-1 min-w-0">
          <p className="text-gray-900 mt-1 whitespace-nowrap overflow-hidden text-ellipsis">
            {title}
          </p>
          <p className="text-3xl font-medium text-primary-500 m-0">{value}</p>
        </div>
        <div className="ml-6 w-12 h-12 rounded-lg flex items-center justify-center shadow-md bg-gradient-to-br from-primary-75 to-white">
          <Icon className="w-6 h-6 text-primary-300" />
        </div>
      </div>
    </div>
  );
};

const Statistics: React.FC = () => (
  <div className="flex mb-5 w-full">
    <div className="flex flex-row gap-4 w-full">
      <StatCard icon={FaUsers} title="Total Candidates" value={5500} />
      <StatCard icon={RefreshCcw} title="Visa in Process" value={300} />
      <StatCard icon={FaUserCheck} title="Visa Approved" value={300} />
      <StatCard icon={BiSolidPlaneAlt} title="Ready for Departure" value={55} />
    </div>
  </div>
);

export default Statistics;
