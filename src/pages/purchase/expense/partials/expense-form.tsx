import FormInputDate from "@/components/form/form-input-date";
import FormInputSelect from "@/components/form/form-input-select";
import FormInputText from "@/components/form/FormInputText";
import FormSwitch from "@/components/form/FormSwitch";
import { ExpenseItemSchema } from "../schema/expense-schema";
import Table from "@/components/Table";
import { ColumnDef } from "@tanstack/react-table";
import TableAction from "@/components/TableAction";
import { cn } from "@/lib/utils";
import React from "react";
import TableWrapper from "@/components/TableWrapper";
import useExpenseForm from "../hooks/use-expense-form";

const ExpenseForm = () => {
  return (
    <div className="space-y-6">
      <ExpenseDetails />
      <ExpenseItemForm />
      <ExpenseTable />
    </div>
  );
};
export default ExpenseForm;

const ExpenseDetails = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <FormInputSelect
        label="Candidate Name"
        name="candidate_name"
        options={[{ label: "Gaurav Kushwaha", value: "gaurav-kushwaha" }]}
        className="col-span-2"
      />
      <FormInputText
        label="Supplier Invoice Reference No."
        name="supplier_invoice_reference_no"
      />
      <FormInputDate label="Date" name="date" />
      <FormInputDate label="Due Date" name="due_date" />
    </div>
  );
};
// ========================== Expense Form =========================
const ExpenseItemForm = () => {
  const {
    isEditing,
    values,
    handleUpdateExpense,
    handleAddExpense,
    handleCancelUpdateExpense,
  } = useExpenseForm();
  return (
    <div className="grid grid-cols-5 gap-4">
      <FormInputSelect
        label="Account"
        name="temp_expense.account"
        options={[
          {
            label: "Purchase Goods",
            value: "purchase_goods",
          },
          {
            label: "Purchase Service",
            value: "purchase_service",
          },
          {
            label: "Retained Earning",
            value: "retained_earnings",
          },
        ]}
      />
      <FormInputText label="Amount (Rs.)" name="temp_expense.amount" />
      <FormSwitch
        title="Tax (13%)"
        activeText={((Number(values?.temp_expense?.amount) ?? 0) * 0.13)
          .toFixed(2)
          .toString()}
        name="temp_expense.tax"
      />
      <div className="flex items-center">
        {isEditing ? (
          <div className="flex items-center gap-x-4">
            <Button variant="update" handleClick={handleUpdateExpense}>
              Update
            </Button>
            <Button variant="delete" handleClick={handleCancelUpdateExpense}>
              Cancel
            </Button>
          </div>
        ) : (
          <div className="flex items-center">
            <Button variant="add" handleClick={handleAddExpense}>
              Add
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

// ============================== Expense List Table ===========================
const ExpenseTable = () => {
  const { values } = useExpenseForm();
  return (
    <TableWrapper
      isLoading={false}
      isDataAvailable={values?.expenses?.length > 0}
    >
      <Table columns={ExpenseColumn()} data={values?.expenses} />;
    </TableWrapper>
  );
};
// ==================== Expense Item Column ===============================
const ExpenseColumn = (): ColumnDef<ExpenseItemSchema>[] => {
  const { handleEditExpense, handleDeleteExpense } = useExpenseForm();
  return [
    {
      header: "Account",
      accessorKey: "account",
      size: 1000,
    },
    {
      header: "Amount",
      accessorKey: "amount",
      size: 200,
    },
    {
      header: "Tax",
      accessorKey: "tax",
      cell: ({ row }) => (row?.original?.tax ? "13%" : "0%"),
      size: 200,
    },
    {
      header: "Tax Amount",
      cell: ({ row }) =>
        row?.original?.tax
          ? (Number(row?.original?.amount) * 0.13).toFixed(2)
          : "0",
      size: 200,
    },
    {
      header: "Action",
      cell: ({ row }) => (
        <TableAction
          edit={{
            active: true,
            onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              handleEditExpense(row?.index);
            },
          }}
          del={{
            active: true,
            onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              handleDeleteExpense(row?.index);
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
