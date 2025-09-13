import Table from "@/components/Table";
import { dashboardData } from "@/data/dashboard";
import { DashboardTableColumns } from "./partials/DashboardTableColumns";
import EmployeeProcess from "./partials/EmployeeProcess";
import DashboardPieChart from "./partials/PieChart";
import DashboardBarChart from "./partials/BarChart";
import Statistics from "./partials/Statistics";

const Dashboard = () => {
  return (
    <div className="max-w-full">
      <Statistics />

      <div className="flex flex-col md:flex-row gap-4 mb-5 w-full">
        <div className="md:w-1/2 lg:w-2/3 bg-white rounded-lg p-4 flex items-center justify-center h-96">
          <DashboardBarChart />
        </div>

        <div className="md:w-1/2 lg:w-1/3 bg-white rounded-lg p-4 flex items-center justify-center h-96">
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
