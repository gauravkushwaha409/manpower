import { Mail, Users, FileText, PlaneIcon, MoveRight } from "lucide-react";

const steps = [
  {
    icon: Mail,
    label: "Pre-Application",
    count: 1000,
  },
  {
    icon: Users,
    label: "Embassy Interview",
    count: 800,
  },
  {
    icon: FileText,
    label: "DOFE Approval",
    count: 600,
  },
  {
    icon: PlaneIcon,
    label: "Ticket/Departure",
    count: 600,
  },
];

const EmployeeProcess = () => {
  return (
    <div className="bg-white p-6 rounded-lg mt-5 w-full">
      <p className="text-lg font-semibold mb-6 text-gray-800">
        Employment Process
      </p>

      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between w-full">
        {steps.map((step, idx) => (
          <div
            key={step.label}
            className="flex-1 flex flex-col sm:flex-row items-center min-w-0"
          >
            <span className="flex items-center min-w-0">
              <step.icon className="text-primary-400 mr-2 flex-shrink-0" />
              <span className="truncate text-gray-500">{step.label}</span>
              <span className="text-primary-400 font-bold ml-1 whitespace-nowrap">
                ({step.count})
              </span>
            </span>

            {idx < steps.length - 1 && (
              <span className="hidden sm:flex flex-shrink-0 items-center justify-center w-12">
                <MoveRight className="text-primary-400 text-2xl" />
              </span>
            )}

            {idx < steps.length - 1 && (
              <span className="flex sm:hidden mt-2">
                <MoveRight className="text-primary-400 text-2xl rotate-90 mx-auto" />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeProcess;
