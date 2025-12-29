import { useFormik } from "formik";
import {
  InterviewResult,
  InterviewResultType,
  InterviewSchemaType,
} from "../schema/interview-schema";
import {
  useDeleteSearchParams,
  useGetSearchParams,
  useUpdateSearchParams,
  useValidatedSearchParam,
} from "@/hooks/updateSearchParams";

const useInterviewResult = () => {
  const getValidatedSearchParams = useValidatedSearchParam(
    "interview-result",
    InterviewResult,
    InterviewResult[0]
  );
  const initialValues: Partial<InterviewSchemaType> = {
    result: getValidatedSearchParams || "pending",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: () => {},
  });

  return { formik };
};

export default useInterviewResult;

export const useInterviewResultModal = () => {
  const updateSearchParams = useUpdateSearchParams();
  const deleteSearchParams = useDeleteSearchParams();
  const getSerachParams = useGetSearchParams();

  const handleStatusClick = (id: string, result: InterviewResultType) => {
    updateSearchParams({
      "interview-id": id,
      "interview-result": result,
    });
  };

  const handleStatusClose = () => {
    deleteSearchParams(["interview-id", "interview-result"]);
  };

  return {
    handleStatusClick,
    isOpen:
      !!getSerachParams("interview-id") &&
      !!getSerachParams("interview-result"),
    handleStatusClose,
  };
};
