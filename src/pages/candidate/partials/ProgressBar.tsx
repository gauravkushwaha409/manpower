import React from "react";

interface IProps {
  stages: number;
  progress: string[];
}

const ProgressBar: React.FC<IProps> = ({ stages, progress }) => {
  // Determine active/inactive states for each stage
  const getStageClass = (stageNumber: number) => {
    const isCompleted = stages >= stageNumber;
    return `typography-caption-c1 w-5 h-5 rounded-lg border flex items-center justify-center ${
      isCompleted
        ? " text-primary border-primary"
        : "bg-white text-Black-400 border-Black-200"
    }`;
  };

  const getConnectorClass = (stageNumber: number) => {
    return `h-1 w-1/2 ${stages >= stageNumber ? "bg-primary" : "bg-Black-100"}`;
  };

  return (
    <div className="">
      {/* Progress indicators */}
      <div className="px-20">
        <div className="flex items-center ">
          {progress.map((_, index) => (
            <>
              <div className="">
                <span className={getStageClass(1)}>{index + 1}</span>
              </div>
              {index !== progress.length - 1 && (
                <div className={getConnectorClass(index + 2)} />
              )}
            </>
          ))}
        </div>
      </div>

      {/* Stage labels */}
      <div className="px-10">
        <div className="flex items-center justify-between mt-2">
          {progress.map((item, index) => (
            <span
              className={`typography-caption-c2 ${
                stages >= index + 1
                  ? "text-Black-500 font-medium"
                  : "text-Black-400"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
