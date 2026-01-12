import TableAction from "@/components/TableAction";
import { ColumnDef } from "@tanstack/react-table";
import { useDelete } from "@/hooks/useDelete";
import { useUpdateModal } from "@/hooks/use-update-modal";
import { Checkbox } from "@/components/ui/checkbox";
import { File } from "lucide-react";
import Medical from "@/types/medical.types";

export const medicalData: Medical.ListItem[] = [
  {
    id: "1",
    candidate: "Arjun Singh",
    exam_date: "2024-12-01",
    medical_center: "Norvic International Hospital",
    report_file: "medical_reports/medical-001.pdf",
    status: "Fit",
    remarks: "All medical parameters are normal.",
    created_at: "2024-12-01T09:20:00Z",
  },
  {
    id: "2",
    candidate: "Ramesh Sharma",
    exam_date: "2024-12-02",
    medical_center: "Grande International Hospital",
    report_file: "medical_reports/medical-002.pdf",
    status: "Fit",
    remarks: "Cleared all required medical tests.",
    created_at: "2024-12-02T10:15:00Z",
  },
  {
    id: "3",
    candidate: "Sita Thapa",
    exam_date: "2024-12-03",
    medical_center: "CIWEC Hospital",
    report_file: "medical_reports/medical-003.pdf",
    status: "Unfit",
    remarks: "Blood pressure not within acceptable range.",
    created_at: "2024-12-03T11:40:00Z",
  },
  {
    id: "4",
    candidate: "Anil Gurung",
    exam_date: "2024-12-04",
    medical_center: "Om Hospital",
    report_file: "medical_reports/medical-004.pdf",
    status: "Pending",
    remarks: "Awaiting lab test reports.",
    created_at: "2024-12-04T08:55:00Z",
  },
  {
    id: "5",
    candidate: "Maya Rai",
    exam_date: "2024-12-05",
    medical_center: "B&B Hospital",
    report_file: "medical_reports/medical-005.pdf",
    status: "Fit",
    remarks: "Medically fit for overseas employment.",
    created_at: "2024-12-05T13:30:00Z",
  },
  {
    id: "6",
    candidate: "Binod Khanal",
    exam_date: "2024-12-06",
    medical_center: "Hams Hospital",
    report_file: "medical_reports/medical-006.pdf",
    status: "Pending",
    remarks: "X-ray report under review.",
    created_at: "2024-12-06T14:10:00Z",
  },
  {
    id: "7",
    candidate: "Sushma Magar",
    exam_date: "2024-12-07",
    medical_center: "Star Hospital",
    report_file: "medical_reports/medical-007.pdf",
    status: "Fit",
    remarks: "All reports normal.",
    created_at: "2024-12-07T09:05:00Z",
  },
  {
    id: "8",
    candidate: "Rajesh Basnet",
    exam_date: "2024-12-08",
    medical_center: "Bir Hospital",
    report_file: "medical_reports/medical-008.pdf",
    status: "Unfit",
    remarks: "Vision test failed.",
    created_at: "2024-12-08T12:45:00Z",
  },
];

const MedicalColumns = (): ColumnDef<Medical.ListItem>[] => {
  const { handleOpenModal: handleOpenDeleteModal } = useDelete({ endpoints: "", invalidates: [""] });
  const { handleOpenModal: handleOpenUpdateModal } = useUpdateModal();
  return [
    {
      id: "select",
      header: ({ table }) => {
        return (
          <div className="">
            <Checkbox
              checked={
                table.getIsAllRowsSelected()
                  ? true
                  : table.getIsSomeRowsSelected()
                    ? "indeterminate"
                    : false
              }
              onCheckedChange={(value) => {
                table.toggleAllRowsSelected(!!value);
              }}
            />
          </div>
        );
      },
      cell: ({ row }) => {
        return (
          <div className="">
            <Checkbox
              checked={
                row.getIsSelected()
                  ? true
                  : row.getIsSomeSelected()
                    ? "indeterminate"
                    : false
              }
              onCheckedChange={row.getToggleSelectedHandler()}
            />
          </div>
        );
      },
      size: 50,
    },
    {
      header: "S.N.",
      cell: ({ row }) => row.index + 1,
      size: 100,
    },
    {
      header: "Candidate Name",
      accessorKey: "candidate",
      size: 400,
    },
    {
      header: "Exam Date",
      accessorKey: "exam_date",
      size: 200,
    },
    {
      header: "Medical Center",
      accessorKey: "medical_center",
      size: 400,
    },
    {
      header: "Report File",
      cell: () => (
        <File
          className="cursor-pointer"
          onClick={() => {
            window.open(
              "https://images.sampletemplates.com/wp-content/uploads/2017/02/Medical-Reports-of-Patients.png",
              "_blank"
            );
          }}
        />
      ),
      size: 200,
    },
    {
      header: "Status",
      accessorKey: "status",
      size: 200,
    },
    {
      header: "Remarks",
      accessorKey: "remarks",
      size: 400,
    },
    {
      header: "Created At",
      accessorKey: "created_at",
      cell: ({ getValue }) => {
        return <span>{new Date(getValue() as string).toLocaleString()}</span>;
      },
      size: 250,
    },
    {
      header: "Action",
      accessorKey: "action",
      cell: ({ row }) => (
        <TableAction
          edit={{
            active: true,
            onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              handleOpenUpdateModal(row?.original?.id);
            },
          }}
          del={{
            active: true,
            onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              handleOpenDeleteModal(row?.original?.id);
            },
          }}
        />
      ),
      size: 200,
      maxSize: 200,
    },
  ];
};

export default MedicalColumns;
