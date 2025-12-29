import {
  useDeleteSearchParams,
  useGetSearchParams,
  useUpdateSearchParams,
} from "@/hooks/updateSearchParams";
import { useFormik } from "formik";

const MOVE_TO_INTERVIEW_PARAMS = "move-to-interview";

// This hook will Send the Candidate to Interview
const useMoveToInterview = () => {
  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {},
  });
  return { formik };
};
export default useMoveToInterview;

// This hook will toogle the modal that send the selected candidate to interview
export const useMoveToInterviewModal = () => {
  const getSearchParams = useGetSearchParams();
  const updateSearchParams = useUpdateSearchParams();
  const deleteSearchParams = useDeleteSearchParams();
  const isMoveToInterviewOpen = getSearchParams(MOVE_TO_INTERVIEW_PARAMS);

  const handleOpenMoveToInterview = () => {
    updateSearchParams({ [MOVE_TO_INTERVIEW_PARAMS]: "active" });
  };

  const handleCloseMoveToInterview = () => {
    deleteSearchParams([MOVE_TO_INTERVIEW_PARAMS]);
  };

  return {
    isMoveToInterviewOpen: !!isMoveToInterviewOpen,
    handleOpenMoveToInterview,
    handleCloseMoveToInterview,
  };
};
