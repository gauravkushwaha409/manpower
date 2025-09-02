export interface IEmbassyInterview {
  id: string;
  candidate_name: string;
  embassy_name: string;
  interview_date: string;
  visa_number: string;
  status: "Scheduled" | "Cancelled" | "";
}
