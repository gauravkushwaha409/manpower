import * as Yup from "yup";

export const company_details_validation = Yup.object().shape({
 pre_approval_date: Yup.date().required("Pre-Approval Date is required"),
 lt_number: Yup.string().required("LT Number is required"),
 chalani_number: Yup.string().required("Chalani Number is required"),
});

export const job_details_validation = Yup.object().shape({
 job_vaccancies: Yup.array().of(
  Yup.object().shape({
   job_title: Yup.string().required("Job Title is required"),
   job_category: Yup.string().required("Job Category is required"),
   male_workers: Yup.number().required("Number of Male Workers is required").positive("Must be positive"),
   female_workers: Yup.number().required("Number of Female Workers is required").positive("Must be positive"),
   work_country: Yup.string().required("Work Country is required"),
   work_city: Yup.string().required("Work City is required"),
   job_description: Yup.string().required("Job Description is required"),
   contract_duration: Yup.number().required("Contract Duration is required").positive("Must be positive"),
   probation_period: Yup.number().required("Probation Period is required").positive("Must be positive"),
   overtime: Yup.string().required("Overtime field is required"),
   overtime_allowance: Yup.string().required("Overtime Allowance field is required"),
   daily_working_hours: Yup.number().required("Daily Working Hours is required").positive("Must be positive"),
   weekly_working_hours: Yup.number().required("Weekly Working Hours is required").positive("Must be positive"),
   basic_salary: Yup.number().required("Basic Salary is required").positive("Must be positive"),
   food_accommodation: Yup.string().required("Food & Accommodation selection is required"),
   medical_insurance: Yup.string().required("Medical Insurance selection is required"),
   annual_leave: Yup.number().required("Annual Leave days is required").positive("Must be positive"),
   other_benefits: Yup.string(),
  })
 ),
});

export const recruitement_process_validation = Yup.object().shape({
 dofe_approval: Yup.boolean().oneOf([true, false], "DOFE approval status is required"),
 advertisement_date: Yup.date().required("Advertisement date is required"),
 newspaper_portal: Yup.string().required("Newspaper/Portal is required"),
 ad_duration_from: Yup.date().required("Start date is required"),
 ad_duration_to: Yup.date().required("End date is required").min(Yup.ref("ad_duration_from"), "End date must be after start date"),
 selection_mode: Yup.string().required("Selection mode is required"),
 interview_type: Yup.string().required("Interview type is required"),
 interview_date: Yup.date().required("Interview date is required"),
 interview_location: Yup.string().required("Interview location is required"),
 recruitment_company: Yup.string().required("Recruitment company is required"),
});

export const documentation_validation = Yup.object().shape({
 pre_approval_dofe: Yup.boolean().required("Pre-approval DOFE is required"),
 demand_letter: Yup.boolean().required("Demand Letter selection is required"),
 power_of_attorney: Yup.boolean().required("Power of Attorney selection is required"),
 employment_contract: Yup.boolean().required("Employment Contract selection is required"),
 government_service_charge: Yup.boolean().required("Government Service Charge selection is required"),
 ...Object.fromEntries(
  ["pre_approval_dofe", "demand_letter", "power_of_attorney", "employment_contract", "government_service_charge"].map((field) => [
   `documents_${field}`,
   Yup.mixed().when(field, {
    is: (value: boolean) => value === true,
    then: (schema) => schema.required("Document is required"),
    otherwise: (schema) => schema.notRequired(),
   }),
  ])
 ),
});
