import React from "react";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import PageHeader from "@/common/PageHeader";
import ExtendedForm from "@/components/extended-components/ExtendedForm";
import ContactUsForm from "./partials/ContactUsForm";
import useCreateContactUs from "./hooks/useCreateContactUs";

const AddContactUs: React.FC = () => {
  const { formik } = useCreateContactUs();

  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb Navone="Dashboard" Navtwo="Contact" />
      <PageHeader title="Add Contact" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <ContactUsForm />
      </ExtendedForm>
    </div>
  );
};

export default AddContactUs;
