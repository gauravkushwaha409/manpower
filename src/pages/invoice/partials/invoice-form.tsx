import FormInputDate from "@/components/form/form-input-date";
import FormInputSelect from "@/components/form/form-input-select";
import FormInputText from "@/components/form/FormInputText";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { PlusCircle } from "lucide-react";
import {
  InvoiceProductSchemaType,
  InvoiceSchemaType,
} from "../schema/invoice-schema";
import { useFormikContext } from "formik";
import Table from "@/components/Table";
import { useState } from "react";
import TableWrapper from "@/components/TableWrapper";

const InvoiceForm = () => {
  return (
    <div className="space-y-6">
      <CustomerDetailsForm />
      <ProductDetailsForm />
      <ProductTable />
    </div>
  );
};

export default InvoiceForm;

// Customer Detals Form
const CustomerDetailsForm = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <FormInputSelect
        label="Candidate Name"
        name="candidate_name"
        options={[{ label: "Gaurav Kushwaha", value: "gaurav" }]}
        className="col-span-2"
      />
      <FormInputText label="Reference No." name="reference_no" />
      <FormInputDate label="Invoice Date" name="invoice_date" />
      <FormInputDate label="Due Date" name="due_date" />
    </div>
  );
};

// Product Details Form
const ProductDetailsForm = () => {
  const { setValues, values } = useFormikContext<InvoiceSchemaType>();
  const handleAddProduct = () => {
    setValues((prev) => ({
      ...prev,
      products: [
        ...prev.products,
        {
          product: prev.tempProductSchema.product,
          quantity: Number(prev.tempProductSchema.quantity),
          rate: Number(prev.tempProductSchema.rate),
          discount: Number(prev.tempProductSchema.discount),
          tax: Number(prev.tempProductSchema.tax),
        },
      ],
      tempProductSchema: {
        product: "",
        quantity: 0,
        rate: 0,
        discount: 0,
        tax: 0,
      },
    }));
  };
  console.log(values);
  return (
    <div className="grid grid-cols-10 gap-4">
      <FormInputText
        wrapperClassName="col-span-5"
        label="Product/Service"
        name="tempProductSchema.product"
      />
      <FormInputText label="Quantity" name="tempProductSchema.quantity" />
      <FormInputText label="Rate" name="tempProductSchema.rate" />
      <FormInputText label="Discount" name="tempProductSchema.discount" />
      <FormInputText label="Vat" name="tempProductSchema.tax" />
      <div className="flex flex-col items-center justify-center">
        <Button varient="add" handleClick={handleAddProduct}>
          <PlusCircle size={16} />
          Add
        </Button>
      </div>
    </div>
  );
};

// Product List Table
const ProductTable = () => {
  const formik = useFormikContext<InvoiceSchemaType>();
  const [rowSelection, setRowSelection] = useState({});

  return (
    <TableWrapper isLoading={false}>
      <Table<InvoiceProductSchemaType>
        columns={ProductColumn()}
        data={formik.values?.products || []}
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
      />
    </TableWrapper>
  );
};

const ProductColumn = (): ColumnDef<InvoiceProductSchemaType>[] => {
  return [
    {
      header: "S.N.",
      cell: ({ row }) => <span>{row?.index + 1}</span>,
    },
    {
      header: "Product / Service",
      accessorKey: "product",
    },
    {
      header: "Quantity",
      accessorKey: "quantity",
      cell: ({ row }) => row?.original?.quantity || undefined,
    },
    {
      header: "Rate",
      accessorKey: "rate",
      cell: ({ row }) => row?.original?.rate || undefined,
    },
    {
      header: "Discount",
      accessorKey: "discount",
      cell: ({ row }) => row?.original?.discount || undefined,
    },
    {
      header: "Tax",
      accessorKey: "tax",
      cell: ({ row }) => row?.original?.tax || undefined,
    },
    {
      header: "Amount",
      cell: ({ row }) => {
        const rate = Number(row.original.rate || 0);
        const quantity = Number(row.original.quantity || 0);
        const discount = Number(row.original.discount || 0);
        const tax = Number(row.original.tax || 0);

        const gross = rate * quantity;
        const discountAmount = gross * (discount / 100);
        const net = gross - discountAmount;
        const taxAmount = net * (tax / 100);

        const total = net + taxAmount;

        return <span>{total.toFixed(2)}</span>;
      },
    },
  ];
};

// Button Varient used in this form
type ButtonVarient = "add" | "delete";
const Button = ({
  children,
  handleClick,
  varient,
}: {
  children: React.ReactNode;
  handleClick: () => void;
  varient: ButtonVarient;
}) => {
  const baseStyle =
    "px-3 py-1 flex items-center typo-mid-bd-reg rounded-4xl cursor-pointer";

  const varients: Record<ButtonVarient, string> = {
    add: "text-white bg-secondary-500 hover:bg-secondary-700",
    delete: "text-white bg-error-delete",
  };
  return (
    <button
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        handleClick();
      }}
      className={cn(baseStyle, varients[varient], "")}
    >
      {children}
    </button>
  );
};
