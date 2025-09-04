import { IJobApplication } from '@/pages/jobs/jobApplication/interface/IJobApplication';

const JobApplicationTableData: IJobApplication[] = [
  {
    id: '1',
    title: 'Devloper',
    candidate_name: 'Neeraj Bhattarai',
    company_name: 'TechNepal Pvt. Ltd.',
    country: 'Nepal',
    job_vacancy: 'Frontend Developer',
    status: 'Applied',
    description:
      'Applied for frontend developer role focusing on React and TypeScript.',
  },
  {
    id: '2',
    title: 'Devloper',
    candidate_name: 'Sita Sharma',
    company_name: 'GlobalSoft Solutions',
    country: 'India',
    job_vacancy: 'Backend Developer',
    status: 'Interviewing',
    description:
      'Currently in second-round interview for backend developer position (Node.js).',
  },
  {
    id: '3',
    title: 'Devloper',
    candidate_name: 'Amit Karki',
    company_name: 'Innovatech Inc.',
    country: 'USA',
    job_vacancy: 'Full Stack Engineer',
    status: 'Shortlisted',
    description:
      'Shortlisted for full stack engineer role requiring React, Node, and PostgreSQL.',
  },
  {
    id: '4',
    title: 'Devloper',
    candidate_name: 'Priya Singh',
    company_name: 'CloudWorks',
    country: 'UK',
    job_vacancy: 'DevOps Engineer',
    status: 'Rejected',
    description: 'Application rejected after initial screening.',
  },
  {
    id: '5',
    title: 'Devloper',
    candidate_name: 'Rajesh Kharel',
    company_name: 'DataAnalytics Hub',
    country: 'Australia',
    job_vacancy: 'Data Scientist',
    status: 'Applied',
    description: 'Applied for data scientist role with focus on ML and AI.',
  },
];

export default JobApplicationTableData;
