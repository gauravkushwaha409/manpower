import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { IApiDetailsResponse } from "@/interface/apiResponse.interface";

interface IExpenseDetails {
  id: string;
}
type ExpenseDetailResponse = IApiDetailsResponse<IExpenseDetails>;

const useExpenseDetails = ({ id }: { id: string }) => {
  const { data, isLoading } = useGetDataQuery<{
    data: ExpenseDetailResponse;
    isLoading: boolean;
  }>(
    {
      url: endpoints.expense.details.replace(":id", id),
    },
    {
      skip: !id,
    }
  );

  return { expenseDetailResponse: data, isLoading };
};

export default useExpenseDetails;
