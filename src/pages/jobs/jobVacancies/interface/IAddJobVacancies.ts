export interface IJobVacancyTableData {
 id: string;
 pre_approval_date: string;
 lt_number: string;
 chalani_number: string;

 // Array of job vacancies, where each vacancy is an object
 job_vaccancies: {
  job_title: string;
  job_category: string;
  male_workers: string;
  female_workers: string;
  work_country: string;
  work_city: string;
  job_description: string;
  contract_duration: string;
  probation_period: string;
  overtime: string;
  daily_working_hours: string;
  weekly_working_hours: string;
  basic_salary: string;
  overtime_allowance: string;
  food_accommodation: string;
  medical_insurance: string;
  annual_leave: string;
  other_benefits: string;
 }[];

 dofe_approval: boolean;
 advertisement_date: string;
 newspaper_portal: string;
 ad_duration_from: string;
 ad_duration_to: string;
 selection_mode: string;
 interview_type: string;
 interview_date: string;
 interview_location: string;
 recruitment_company: string;

 pre_approval_dofe: boolean;
 demand_letter: boolean;
 power_of_attorney: boolean;
 employment_contract: boolean;
 government_service_charge: boolean;

 // Optional file uploads
 documents_pre_approval_dofe?: File | null;
 documents_demand_letter?: File | null;
 documents_power_of_attorney?: File | null;
 documents_employment_contract?: File | null;
 documents_government_service_charge?: File | null;
}
