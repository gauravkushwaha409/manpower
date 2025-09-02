export interface IJobApplicant {
 id: string;
 candidate_name: string;
 company_name: string;
 country: string;
 job_vacancy: string;
 status: "Applied" | "Interviewing" | "Shortlisted" | "Rejected" | "";
 description: string;
}
