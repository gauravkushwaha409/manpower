export interface IVisa {
  id: string;
  company_name: string;
  candidate_name: string;
  job_vacancy: string;
  visa_number: string;
  status: "Pending" | "Visa Accepted" | "Rejected" | "";
}
