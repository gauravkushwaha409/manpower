import Table from "@/components/Table";
import { dashboardData } from "@/data/dashboard";
import { DashboardTableColumns } from "./partials/DashboardTableColumns";
import EmployeeProcess from "./partials/EmployeeProcess";
import DashboardPieChart from "./partials/PieChart";
import DashboardBarChart from "./partials/BarChart";
import Statistics from "./partials/Statistics";
const Dashboard = () => {
  return (
    <div>
      <Statistics />
      <div className="flex w-full gap-4 mb-5">
        <div className="w-2/3 flex items-center justify-center bg-white rounded-lg p-4 h-96">
          <DashboardBarChart />
        </div>
        <div className="w-1/3 flex bg-white rounded-lg p-4">
          <DashboardPieChart />
        </div>
      </div>
      <EmployeeProcess />
      <div className="overflow-x-visible bg-white p-5 rounded-lg mt-5">
        <h2 className="text-lg font-semibold mb-6 text-gray-800">
          Recent Activities and alerts
        </h2>
        <Table columns={DashboardTableColumns} data={dashboardData} />
      </div>
    </div>
  );
};

export default Dashboard;
