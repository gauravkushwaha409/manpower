import { ExpenseSchemaType } from "@/pages/expense/schema/expense-schema";
import { useFormikContext } from "formik";
import { useCallback } from "react";

const useExpenseAccount = () => {
  const { values, setValues, setTouched } =
    useFormikContext<ExpenseSchemaType>();
  //  ======================= Edit Expense Account ======================
  const handleEditAccount = useCallback(
    (index: number) => {
      const accountToEdit = values.accounts[index];
      setValues({
        ...values,
        temp_account: {
          account: accountToEdit?.account,
          amount: accountToEdit?.amount,
          tax: accountToEdit?.tax,
        },
        editing_index: index,
      });
    },
    [values, setValues]
  );

  //   ========================= Update Expense Account =======================
  const handleUpdateAccount = useCallback(() => {
    if (values?.editing_index === null || values?.editing_index === undefined)
      return;
    if (!values?.temp_account?.account) return;
    const updateAccount = [...values?.accounts];
    updateAccount[values?.editing_index] = {
      account: values?.temp_account?.account,
      amount: values?.temp_account?.amount,
      tax: values?.temp_account?.tax,
    };
    setValues({
      ...values,
      accounts: updateAccount,
      temp_account: {
        account: "",
        amount: 0,
        tax: false,
      },
      editing_index: null,
    });
    setTouched({
      temp_account: {
        account: false,
        amount: false,
        tax: false,
      },
    });
  }, [values, setValues, setTouched]);

  //========================== Delete Expense Accont =====================
  const handleDeleteAccount = useCallback(
    (index: number) => {
      const updatedAccount = values?.accounts?.filter((_, i) => i !== index);
      setValues({
        ...values,
        accounts: updatedAccount,
        editing_index:
          values.editing_index === index ? null : values.editing_index,
        temp_account:
          values.editing_index === index
            ? { account: "", amount: 0, tax: false }
            : values.temp_account,
      });
    },
    [setValues, values]
  );

  //   ====================== Add Temp Account to Account Array ============================
  const handleAddAccount = useCallback(() => {
    setValues({
      ...values,
      accounts: [
        ...values?.accounts,
        {
          account: values?.temp_account?.account,
          amount: values?.temp_account?.amount,
          tax: values?.temp_account?.tax,
        },
      ],
      temp_account: {
        account: "",
        amount: 0,
        tax: false,
      },
      editing_index: null,
    });
    setTouched({
      temp_account: {
        account: false,
        amount: false,
        tax: false,
      },
    });
  }, [values, setValues, setTouched]);

  //   =============================== is Editing ===========================
  const isEditing =
    values?.editing_index !== null && values?.editing_index !== undefined;

  // ============================== Editing Index ===========================
  const editingIndex = values?.editing_index;
  return {
    handleEditAccount,
    isEditing,
    handleAddAccount,
    handleDeleteAccount,
    handleUpdateAccount,
    editingIndex,
    values,
  };
};
export default useExpenseAccount;
