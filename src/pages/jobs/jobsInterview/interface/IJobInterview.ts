export interface IJobInterview {
 id: string;
 company_name: string;
 candidate_name: string;
 job_vacancy: string;
 interview_date_time: string;
 salary_offered: string;
 interviewer: string;
 status: "Scheduled" | "Pending" | "";
 remarks: string;
}
