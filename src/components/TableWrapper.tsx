import React from "react";
import LoadingScreen from "./reusable-component/LoadingScreen";
import { cn } from "@/lib/utils";
import NoDataFound from "./NoDataFound";

interface IProps {
  children: React.ReactNode;
  isLoading: boolean;
  wrapperClassName?: string;
  isDataAvailable?: boolean;
}

const TableWrapper = ({
  children,
  isLoading,
  wrapperClassName,
  isDataAvailable = true,
}: IProps) => {
  return (
    <div
      className={cn(
        `flex-1 rounded-[12px] overflow-hidden shadow-[0px_0px_2px_0px_#00000014,0px_1px_4px_0px_#454B571F,0px_0px_0px_1px_#98A1B21A]`,
        wrapperClassName
      )}
    >
      {!isLoading ? (
        isDataAvailable ? (
          children
        ) : (
          <NoDataFound />
        )
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};
export default TableWrapper;
