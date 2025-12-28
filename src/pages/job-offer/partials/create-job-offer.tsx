import ExtendedForm from "@/components/extended-components/ExtendedForm";
import useCreateJobOffer from "../hooks/use-create-job-offer";
import JobOfferForm from "./job-offer-form";

const CreateJobOffer = () => {
  const { formik, isLoading } = useCreateJobOffer();
  return (
    <ExtendedForm formik={formik} isSubmitting={isLoading}>
      <JobOfferForm />
    </ExtendedForm>
  );
};

export default CreateJobOffer;
