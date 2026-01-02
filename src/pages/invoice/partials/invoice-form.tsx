import FormInputDate from "@/components/form/form-input-date";
import FormInputSelect from "@/components/form/form-input-select";
import FormInputText from "@/components/form/FormInputText";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { InvoiceProductSchemaType } from "../schema/invoice-schema";
import Table from "@/components/Table";
import TableWrapper from "@/components/TableWrapper";
import useInvoiceForm from "../hooks/use-invoice-form";
import TableAction from "@/components/TableAction";
import FormSwitch from "@/components/form/FormSwitch";

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
  const {
    handleAddProduct,
    getTaxAmount,
    isEditing,
    handleUpdateProduct,
    handleCancelUpdateProduct,
  } = useInvoiceForm();
  return (
    <div className="grid grid-cols-6 gap-4">
      <FormInputText
        wrapperClassName="col-span-2"
        label="Product/Service"
        name="tempProduct.product"
      />
      <FormInputText label="Quantity" name="tempProduct.quantity" />
      <FormInputText label="Rate" name="tempProduct.rate" />
      <FormInputText label="Discount" name="tempProduct.discount" />
      <FormSwitch
        title="Vat (13%)"
        activeText={`Rs. ${getTaxAmount()}`}
        name="tempProduct.tax"
      />
      {isEditing ? (
        <div className="flex items-center gap-x-4">
          <Button variant="update" handleClick={handleUpdateProduct}>
            Update
          </Button>
          <Button variant="delete" handleClick={handleCancelUpdateProduct}>
            Cancel
          </Button>
        </div>
      ) : (
        <div className="flex items-center">
          <Button variant="add" handleClick={handleAddProduct}>
            Add
          </Button>
        </div>
      )}
    </div>
  );
};

// Product List Table
const ProductTable = () => {
  const { isProductAvailable, values } = useInvoiceForm();
  return (
    <TableWrapper isLoading={false} isDataAvailable={isProductAvailable}>
      <Table<InvoiceProductSchemaType>
        columns={ProductColumn()}
        data={values?.products || []}
        isPagination={false}
      />
    </TableWrapper>
  );
};

const ProductColumn = (): ColumnDef<InvoiceProductSchemaType>[] => {
  const { handleEditProduct, handleDeleteProduct } = useInvoiceForm();
  return [
    {
      header: "S.N.",
      cell: ({ row }) => <span>{row?.index + 1}</span>,
      size: 100,
    },
    {
      header: "Product / Service",
      accessorKey: "product",
      size: 400,
    },
    {
      header: "Quantity",
      accessorKey: "quantity",
      cell: ({ row }) => row?.original?.quantity || undefined,
      size: 100,
    },
    {
      header: "Rate",
      accessorKey: "rate",
      cell: ({ row }) => row?.original?.rate || undefined,
      size: 100,
    },
    {
      header: "Discount (%)",
      accessorKey: "discount",
      cell: ({ row }) => row?.original?.discount || undefined,
      size: 100,
    },
    {
      header: "Discount Amount",
      accessorKey: "discount",
      cell: ({ row }) => row?.original?.discount_amount || undefined,
      size: 100,
    },
    {
      header: "Tax Amount",
      accessorKey: "tax_amount",
      cell: ({ row }) => row?.original?.tax_amount || 0,
      size: 100,
    },
    {
      header: "Amount",
      cell: ({ row }) => {
        const rate = Number(row.original.rate || 0);
        const quantity = Number(row.original.quantity || 0);
        const discount = Number(row.original.discount || 0);

        const gross = rate * quantity;
        const discountAmount = gross * (discount / 100);
        const net = gross - discountAmount;

        const total = net + +row?.original?.tax_amount;

        return <span>{total.toFixed(2)}</span>;
      },
    },
    {
      header: "Action",
      cell: ({ row }) => (
        <TableAction
          edit={{
            active: true,
            onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              handleEditProduct(row?.index);
            },
          }}
          del={{
            active: true,
            onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              handleDeleteProduct(row?.index);
            },
          }}
        />
      ),
    },
  ];
};

// ============ Button Component ============
type ButtonVariant = "add" | "update" | "delete";
const Button = ({
  children,
  handleClick,
  variant,
  disabled = false,
}: {
  children: React.ReactNode;
  handleClick: () => void;
  variant: ButtonVariant;
  disabled?: boolean;
}) => {
  const baseStyle =
    "px-4 py-2 flex items-center justify-center typo-mid-bd-reg rounded-lg cursor-pointer transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants: Record<ButtonVariant, string> = {
    add: "text-white bg-secondary-500 hover:bg-secondary-700",
    update: "text-white bg-primary-500 hover:bg-primary-700",
    delete: "text-white bg-error-delete hover:bg-red-700",
  };
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        handleClick();
      }}
      className={cn(baseStyle, variants[variant])}
    >
      {children}
    </button>
  );
};
