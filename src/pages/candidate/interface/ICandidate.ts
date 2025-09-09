interface Language {
 language: string;
 languageLevel: string;
}
interface Education {
 name_of_instute: string;
 course: string;
 passed_year: string;
}

export interface ICandidate {
 id: string;
 firstname: string;
 lastname: string;
 agentName: string;
 dateOfBirth: string;
 phone: string;
 email: string;
 country: string;
 province: string;
 district: string;
 municipality: string;
 wardNo: string;
 languages: Language[];

 skills: string;
 current_jobtitle: string;
 education: Education[]; // Array of education objects

 document_type: string;
 citizenship_number: string;
 passport_issued_date: string;
 passport_expiry_date: string;
 passport_number: string;
 police_report_issued__date: string;
 dispatch_number: string;
 police_report_issue_date: string;
 citizenship_issued_date: string;
 resume_file: null | File;
 passport_file: null | File;
 police_report_file: null | File;
 citizenship_document: null | File;
}
