import FormInputDate from "@/components/form/form-input-date";
import FormInputSelect, { IOption } from "@/components/form/form-input-select";
import FormTextArea from "@/components/form/form-input-text-area";
import FormInputText from "@/components/form/FormInputText";
import Table from "@/components/Table";
import TableWrapper from "@/components/TableWrapper";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import {
  QuickPaymentItemSchema,
  QuickPaymentSchema,
} from "../schema/quick-payment-schema";
import TableAction from "@/components/TableAction";
import { useFormikContext } from "formik";
import useQuickPaymentForm from "../hooks/use-quick-payment-form";

const QuickPaymentForm = () => {
  return (
    <div className="space-y-6">
      <QuickPayment />
      <Payments />
      <PaymentsTable />
    </div>
  );
};
export default QuickPaymentForm;

// ============================ Payment Basic Details Form =================================
const QuickPayment = () => {
  const paidFromOption: IOption[] = [
    { label: "Cash in hand", value: "cash-in-hand" },
  ];
  return (
    <div className="grid grid-cols-5 gap-4">
      <FormInputSelect
        label="Paid From"
        name="paid_from"
        options={paidFromOption}
        className="col-span-3"
      />
      <FormInputDate label="Date" name="date" />
      <FormInputText label="Reference" name="reference" />
    </div>
  );
};

// ============================ Payments Form =================================

const Payments = () => {
  const {
    handleAddPayment,
    isEditMode,
    handleUpdatePayment,
    handleCancelUpdatePayment,
  } = useQuickPaymentForm();
  const accountOption: IOption[] = [
    { label: "Cash Customer", value: "cash-customer" },
    { label: "Purchase Goods", value: "purchase-goods" },
    { label: "Sales Goods", value: "sales-goods" },
  ];
  return (
    <div className="grid col-span-2 gap-4">
      <FormInputSelect
        label="Account"
        name="temp_payment.account"
        options={accountOption}
      />
      <FormInputText label="Amount" name="temp_payment.amount" />
      <FormTextArea
        wrapperClassName="col-span-2"
        label="Description"
        name="temp_payment.description"
        className=""
      />
      <div className="col-span-2 flex items-center justify-end">
        {isEditMode ? (
          <div className="flex items-center gap-x-4">
            <Button variant="update" handleClick={handleUpdatePayment}>
              Update
            </Button>
            <Button variant="delete" handleClick={handleCancelUpdatePayment}>
              Cancel
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-x-4">
            <Button variant="add" handleClick={handleAddPayment}>
              Add
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

// ============================ Payments Table =================================
const PaymentsTable = () => {
  const { values } = useFormikContext<QuickPaymentSchema>();
  return (
    <TableWrapper
      isLoading={false}
      isDataAvailable={values?.payments?.length > 0}
    >
      <Table columns={PaymentColumn()} data={values?.payments} />
    </TableWrapper>
  );
};

// ============================= Payment Columns =====================================
const PaymentColumn = (): ColumnDef<QuickPaymentItemSchema>[] => {
  const { handleEditPayment, handleDeletePayment } = useQuickPaymentForm();
  return [
    {
      header: "Account",
      accessorKey: "account",
    },
    {
      header: "Amount",
      accessorKey: "amount",
    },
    {
      header: "Description",
      accessorKey: "description",
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
              handleEditPayment(row?.index);
            },
          }}
          del={{
            active: true,
            onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              handleDeletePayment(row?.index);
            },
          }}
        />
      ),
      size: 200,
      maxSize: 200,
    },
  ];
};

// ==================================== Button Component ================================
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
