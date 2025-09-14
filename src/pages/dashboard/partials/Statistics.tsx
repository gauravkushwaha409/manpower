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
    <div className="flex flex-row items-center justify-between rounded-xl bg-white px-6 py-5 shadow-sm w-full h-full">
      <div className="flex flex-col">
        <p className="text-gray-900 text-base font-medium truncate">{title}</p>
        <p className="text-3xl font-semibold text-primary-500">{value}</p>
      </div>
      <div className="ml-4 w-12 h-12 rounded-lg flex items-center justify-center shadow-md bg-gradient-to-br from-primary-75 to-white">
        <Icon className="w-6 h-6 text-primary-300" />
      </div>
    </div>
  );
};

const Statistics: React.FC = () => (
  <div className="mb-5 w-full">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full">
      <StatCard icon={FaUsers} title="Total Candidates" value={5500} />
      <StatCard icon={RefreshCcw} title="Visa in Process" value={300} />
      <StatCard icon={FaUserCheck} title="Visa Approved" value={300} />
      <StatCard icon={BiSolidPlaneAlt} title="Ready for Departure" value={55} />
    </div>
  </div>
);

export default Statistics;
