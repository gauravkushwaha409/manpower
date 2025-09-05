import React from "react";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import PageHeader from "@/common/PageHeader";
import ExtendedForm from "@/components/extended-components/ExtendedForm";
import useCreateSeo from "./hooks/useCreateSeo";
import SeoForm from "./partials/SeoForm";

const AddSeo: React.FC = () => {
  const { formik } = useCreateSeo();

  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb Navone="Dashboard" Navtwo="Static SEO" />
      <PageHeader title="Add Static SEO" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <SeoForm />
      </ExtendedForm>
    </div>
  );
};

export default AddSeo;
