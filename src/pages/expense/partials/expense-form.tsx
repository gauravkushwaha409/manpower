import FormInputDate from "@/components/form/form-input-date";
import FormInputSelect from "@/components/form/form-input-select";
import FormInputText from "@/components/form/FormInputText";
import FormSwitch from "@/components/form/FormSwitch";
import { ExpenseAccountSchema } from "../schema/expense-schema";
import Table from "@/components/Table";
import { ColumnDef } from "@tanstack/react-table";
import TableAction from "@/components/TableAction";
import { cn } from "@/lib/utils";
import React from "react";
import useExpenseAccount from "../child/create-expense/hooks/use-expense-account";
import TableWrapper from "@/components/TableWrapper";

const ExpenseForm = () => {
  return (
    <div className="space-y-6">
      <ExpenseDetails />
      <Account />
      <ExpenseAccountTable />
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

const Account = () => {
  const {
    editingIndex,
    isEditing,
    values,
    handleUpdateAccount,
    handleAddAccount,
  } = useExpenseAccount();
  return (
    <div className="p-4 border rounded-lg bg-gray-50">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">
          {isEditing ? "Edit Account" : "Add Account"}
        </h3>
        {isEditing && (
          <span className="text-sm text-amber-600 bg-amber-50 px-2 py-1 rounded">
            Editing row {(editingIndex ?? 0) + 1}
          </span>
        )}
      </div>

      <div className="grid grid-cols-5 gap-4">
        <FormInputSelect
          label="Account"
          name="temp_account.account"
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
        <FormInputText label="Amount" name="temp_account.amount" />
        <FormSwitch
          title="Tax"
          activeText={((values?.temp_account?.amount ?? 0) * 0.13)
            .toFixed(2)
            .toString()}
          name="temp_account.tax"
        />
        <div>
          {isEditing ? (
            <Button variant="update" handleClick={handleUpdateAccount}>
              Update
            </Button>
          ) : (
            <Button variant="add" handleClick={handleAddAccount}>
              Add
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const ExpenseAccountTable = () => {
  const { values } = useExpenseAccount();

  return (
    <TableWrapper
      isLoading={false}
      isDataAvailable={values?.accounts?.length > 0}
    >
      <Table columns={ExpenseAccountColumn()} data={values?.accounts} />;
    </TableWrapper>
  );
};

const ExpenseAccountColumn = (): ColumnDef<ExpenseAccountSchema>[] => {
  const { handleEditAccount, handleDeleteAccount } = useExpenseAccount();
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
        row?.original?.tax ? (row?.original?.amount * 0.13).toFixed(2) : "0",
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
              handleEditAccount(row?.index);
            },
          }}
          del={{
            active: true,
            onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              handleDeleteAccount(row?.index);
            },
          }}
        />
      ),
    },
  ];
};

// ============ Button Component ============
type ButtonVariant = "add" | "update" | "delete" | "cancel";

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
    cancel: "text-gray-700 bg-gray-200 hover:bg-gray-300",
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
