import { useFormikContext } from "formik";
import { CandidateSchemaType } from "../schema/candidate-schema";
import React from "react";

export default function useCandidateDocument() {
    const { setValues } = useFormikContext<CandidateSchemaType>();
    const documetPdfRef = React.useRef<{ reset: () => void }>(null)


    // ============ Add document ================
    function handleAddDocument() {
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
    }

    // ============= Delete Document =====================
    function handleDeleteDocument(index: number) {
        setValues(prev => ({
            ...prev,
            documents: prev.documents.filter((_, i) => i !== index)
        }))
    }

    return { handleAddDocument, handleDeleteDocument, documetPdfRef };
}