import React from "react";
import ExtendedForm from "@/components/extended-components/ExtendedForm";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import PageHeader from "@/common/PageHeader";
import useUpdateSeo from "./hooks/useUpdateSeo";
import SeoForm from "./partials/SeoForm";

const UpdateSeo: React.FC = () => {
  const { formik } = useUpdateSeo();
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb Navone="Dashboard" Navtwo="Static SEO" />
      <PageHeader title="Update SEO" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <SeoForm />
      </ExtendedForm>
    </div>
  );
};

export default UpdateSeo;
