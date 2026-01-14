import { useFormikContext } from "formik";
import React, { useCallback } from "react";
import { CandidateSchemaType } from "../schema/candidate-schema";

const useCandidateForm = () => {
    const { values, setValues, validateForm, touched, setTouched } =
        useFormikContext<CandidateSchemaType>();
    const certificatePdfRef = React.useRef<{ reset: () => void }>(null)
    const documetPdfRef = React.useRef<{ reset: () => void }>(null)


    // ====================================================================================================
    //                                      Work Experience Logic
    // ====================================================================================================

    const handleAddWorkExperience = useCallback(async () => {
        const errors = await validateForm();
        const tempWorkExperienceError = errors?.tempWorkExperience;

        if (tempWorkExperienceError && Object.keys(tempWorkExperienceError).length > 0) {
            setTouched({
                ...touched,
                tempWorkExperience: {
                    job_title: true,
                    company_name: true,
                    job_level: true,
                    currently_working: true,
                    start_date: true,
                    end_date: true,
                    description: true,
                },
            });
            return;
        }

        setValues({
            ...values,
            workExperience: [
                ...values.workExperience,
                { ...values.tempWorkExperience },
            ],
            tempWorkExperience: {
                job_title: "",
                company_name: "",
                job_level: "",
                currently_working: false,
                start_date: "",
                end_date: "",
                description: "",
            },
        });
        setTouched({
            ...touched,
            tempWorkExperience: {
                job_title: false,
                company_name: false,
                job_level: false,
                currently_working: false,
                start_date: false,
                end_date: false,
                description: false,
            },
        });

    }, [values, setValues, validateForm, touched, setTouched]);

    const handleEditWorkExperience = useCallback((index: number) => {
        const itemToEdit = values.workExperience[index];
        setValues({
            ...values,
            tempWorkExperience: { ...itemToEdit },
            edit_work_experience_index: index,
        });
    }, [values, setValues]);

    const handleUpdateWorkExperience = useCallback(async () => {
        if (values.edit_work_experience_index === null || values.edit_work_experience_index === undefined) return;

        const errors = await validateForm();
        const tempWorkExperienceError = errors?.tempWorkExperience;

        if (tempWorkExperienceError && Object.keys(tempWorkExperienceError).length > 0) {
            setTouched({
                ...touched,
                tempWorkExperience: {
                    job_title: true,
                    company_name: true,
                    job_level: true,
                    currently_working: true,
                    start_date: true,
                    end_date: true,
                    description: true,
                },
            });
            return;
        }

        const updatedList = [...values.workExperience];
        updatedList[values.edit_work_experience_index] = { ...values.tempWorkExperience };

        setValues({
            ...values,
            workExperience: updatedList,
            tempWorkExperience: {
                job_title: "",
                company_name: "",
                job_level: "",
                currently_working: false,
                start_date: "",
                end_date: "",
                description: "",
            },
            edit_work_experience_index: null,
        });
        setTouched({
            ...touched,
            tempWorkExperience: {
                job_title: false,
                company_name: false,
                job_level: false,
                currently_working: false,
                start_date: false,
                end_date: false,
                description: false,
            },
        });
    }, [values, setValues, validateForm, touched, setTouched]);

    const handleCancelUpdateWorkExperience = useCallback(() => {
        setValues({
            ...values,
            tempWorkExperience: {
                job_title: "",
                company_name: "",
                job_level: "",
                currently_working: false,
                start_date: "",
                end_date: "",
                description: "",
            },
            edit_work_experience_index: null,
        });
    }, [values, setValues]);


    const handleDeleteWorkExperience = useCallback((index: number) => {
        const updatedList = values.workExperience.filter((_, i) => i !== index);
        setValues({
            ...values,
            workExperience: updatedList,
            tempWorkExperience: values.edit_work_experience_index === index ? {
                job_title: "",
                company_name: "",
                job_level: "",
                currently_working: false,
                start_date: "",
                end_date: "",
                description: "",
            } : values.tempWorkExperience,
            edit_work_experience_index: values.edit_work_experience_index === index ? null : values.edit_work_experience_index,
        })

    }, [values, setValues]);

    // ====================================================================================================
    //                                      Education Logic
    // ====================================================================================================

    const handleAddEducation = useCallback(async () => {
        const errors = await validateForm();
        const tempEducationError = errors?.tempEducationDetails;

        if (tempEducationError && Object.keys(tempEducationError).length > 0) {
            setTouched({
                ...touched,
                tempEducationDetails: {
                    degree: true,
                    institute_name: true,
                    faculty_name: true,
                    currently_studying: true,
                    start_date: true,
                    end_date: true,
                },
            });
            return;
        }

        setValues({
            ...values,
            educationDetails: [
                ...values.educationDetails,
                { ...values.tempEducationDetails },
            ],
            tempEducationDetails: {
                degree: "",
                institute_name: "",
                faculty_name: "",
                currently_studying: false,
                start_date: "",
                end_date: "",
            },
        });
        setTouched({
            ...touched,
            tempEducationDetails: {
                degree: false,
                institute_name: false,
                faculty_name: false,
                currently_studying: false,
                start_date: false,
                end_date: false,
            },
        });

    }, [values, setValues, validateForm, touched, setTouched]);

    const handleEditEducation = useCallback((index: number) => {
        const itemToEdit = values.educationDetails[index];
        setValues({
            ...values,
            tempEducationDetails: { ...itemToEdit },
            edit_education_index: index,
        });
    }, [values, setValues]);

    const handleUpdateEducation = useCallback(async () => {
        if (values.edit_education_index === null || values.edit_education_index === undefined) return;

        const errors = await validateForm();
        const tempEducationError = errors?.tempEducationDetails;

        if (tempEducationError && Object.keys(tempEducationError).length > 0) {
            setTouched({
                ...touched,
                tempEducationDetails: {
                    degree: true,
                    institute_name: true,
                    faculty_name: true,
                    currently_studying: true,
                    start_date: true,
                    end_date: true,
                },
            });
            return;
        }

        const updatedList = [...values.educationDetails];
        updatedList[values.edit_education_index] = { ...values.tempEducationDetails };

        setValues({
            ...values,
            educationDetails: updatedList,
            tempEducationDetails: {
                degree: "",
                institute_name: "",
                faculty_name: "",
                currently_studying: false,
                start_date: "",
                end_date: "",
            },
            edit_education_index: null,
        });
        setTouched({
            ...touched,
            tempEducationDetails: {
                degree: false,
                institute_name: false,
                faculty_name: false,
                currently_studying: false,
                start_date: false,
                end_date: false,
            },
        });

    }, [values, setValues, validateForm, touched, setTouched]);

    const handleCancelUpdateEducation = useCallback(() => {
        setValues({
            ...values,
            tempEducationDetails: {
                degree: "",
                institute_name: "",
                faculty_name: "",
                currently_studying: false,
                start_date: "",
                end_date: "",
            },
            edit_education_index: null,
        });
    }, [values, setValues]);


    const handleDeleteEducation = useCallback((index: number) => {
        const updatedList = values.educationDetails.filter((_, i) => i !== index);

        setValues({
            ...values,
            educationDetails: updatedList,
            tempEducationDetails: values.edit_education_index === index ? {
                degree: "",
                institute_name: "",
                faculty_name: "",
                currently_studying: false,
                start_date: "",
                end_date: "",
            } : values.tempEducationDetails,
            edit_education_index: values.edit_education_index === index ? null : values.edit_education_index
        })

    }, [values, setValues]);

    // ====================================================================================================
    //                                      Certificate Logic
    // ====================================================================================================

    const handleAddCertificate = useCallback(async () => {
        const errors = await validateForm();
        const tempCertificateError = errors?.tempCertificate;

        if (tempCertificateError && Object.keys(tempCertificateError).length > 0) {
            setTouched({
                ...touched,
                tempCertificate: {
                    certificate_title: true,
                    organization_name: true,
                    description: true,
                    certificate_file: true
                },
            });
            return;
        }

        setValues({
            ...values,
            certificates: [
                ...values.certificates,
                { ...values.tempCertificate },
            ],
            tempCertificate: {
                certificate_title: "",
                organization_name: "",
                description: "",
                certificate_file: "",
            },
        });
        setTouched({
            ...touched,
            tempCertificate: {
                certificate_title: false,
                organization_name: false,
                description: false,
                certificate_file: false,
            },
        });
        certificatePdfRef.current?.reset();
    }, [values, setValues, validateForm, touched, setTouched]);

    const handleEditCertificate = useCallback((index: number) => {
        const itemToEdit = values.certificates[index];
        setValues({
            ...values,
            tempCertificate: { ...itemToEdit },
            edit_certificate_index: index,
        });
    }, [values, setValues]);

    const handleUpdateCertificate = useCallback(async () => {
        if (values.edit_certificate_index === null || values.edit_certificate_index === undefined) return;

        const errors = await validateForm();
        const tempCertificateError = errors?.tempCertificate;

        if (tempCertificateError && Object.keys(tempCertificateError).length > 0) {
            setTouched({
                ...touched,
                tempCertificate: {
                    certificate_title: true,
                    organization_name: true,
                    description: true,
                    certificate_file: true
                },
            });
            return;
        }

        const updatedList = [...values.certificates];
        updatedList[values.edit_certificate_index] = { ...values.tempCertificate };

        setValues({
            ...values,
            certificates: updatedList,
            tempCertificate: {
                certificate_title: "",
                organization_name: "",
                description: "",
                certificate_file: "",
            },
            edit_certificate_index: null,
        });

        setTouched({
            ...touched,
            tempCertificate: {
                certificate_title: false,
                organization_name: false,
                description: false,
                certificate_file: false,
            },
        });
        certificatePdfRef.current?.reset();
    }, [values, setValues, validateForm, touched, setTouched]);

    const handleCancelUpdateCertificate = useCallback(() => {
        setValues({
            ...values,
            tempCertificate: {
                certificate_title: "",
                organization_name: "",
                description: "",
                certificate_file: "",
            },
            edit_certificate_index: null,
        });
        certificatePdfRef.current?.reset();
    }, [values, setValues]);

    const handleDeleteCertificate = useCallback((index: number) => {
        const updatedList = values.certificates.filter((_, i) => i !== index);

        setValues({
            ...values,
            certificates: updatedList,
            tempCertificate: values.edit_certificate_index === index ? {
                certificate_title: "",
                organization_name: "",
                description: "",
                certificate_file: "",
            } : values.tempCertificate,
            edit_certificate_index: values.edit_certificate_index === index ? null : values.edit_certificate_index
        })
        certificatePdfRef.current?.reset();
    }, [values, setValues]);

    // ====================================================================================================
    //                                      Document Logic
    // ====================================================================================================

    // ============ Add document ================
    const handleAddDocument = useCallback(() => {
        setValues(prev => ({
            ...prev,
            ...(prev.tempDocument.type === 'citizenship' && {
                documents: [
                    ...prev.documents,
                    {
                        type: prev.tempDocument.type,
                        citizenship_number: prev.tempDocument.citizenship_number,
                        issued_district: prev.tempDocument.citizenship_issued_district,
                        document: prev.tempDocument.document
                    }
                ]
            }),
            tempDocument: {
                document: "",
                type: "citizenship",
                citizenship_issued_date: "",
                citizenship_issued_district: "",
                citizenship_number: "",
                passport_number: "",
                police_report_issued_date: "",
                police_report_dispatch_number: "",
                passport_expiry_date: "",
                passport_issued_date: "",
            }
        }))
        documetPdfRef.current?.reset();
    }, [setValues]);

    // ============= Delete Document =====================
    const handleDeleteDocument = useCallback((index: number) => {
        setValues(prev => ({
            ...prev,
            documents: prev.documents.filter((_, i) => i !== index)
        }))
    }, [setValues]);

    return {
        // Work Experience
        handleAddWorkExperience,
        handleEditWorkExperience,
        handleUpdateWorkExperience,
        handleDeleteWorkExperience,
        handleCancelUpdateWorkExperience,
        isEditingWorkExperience: values.edit_work_experience_index !== null && values.edit_work_experience_index !== undefined,

        // Education
        handleAddEducation,
        handleEditEducation,
        handleUpdateEducation,
        handleDeleteEducation,
        handleCancelUpdateEducation,
        isEditingEducation: values.edit_education_index !== null && values.edit_education_index !== undefined,

        // Certificate
        handleAddCertificate,
        handleEditCertificate,
        handleUpdateCertificate,
        handleDeleteCertificate,
        handleCancelUpdateCertificate,
        isEditingCertificate: values.edit_certificate_index !== null && values.edit_certificate_index !== undefined,

        certificatePdfRef,

        // Documents
        handleAddDocument,
        handleDeleteDocument,
        documetPdfRef,

        values,
    };
}

export default useCandidateForm;
