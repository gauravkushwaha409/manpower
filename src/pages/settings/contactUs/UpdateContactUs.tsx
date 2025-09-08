import React from "react";
import ExtendedForm from "@/components/extended-components/ExtendedForm";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import PageHeader from "@/common/PageHeader";
import ContactUsForm from "./partials/ContactUsForm";
import useUpdateContactUs from "./hooks/useUpdateContactUs";

const UpdateContactUs: React.FC = () => {
  const { formik } = useUpdateContactUs();
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb Navone="Dashboard" Navtwo="Contact" />
      <PageHeader title="Update Contact" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <ContactUsForm />
      </ExtendedForm>
    </div>
  );
};

export default UpdateContactUs;
