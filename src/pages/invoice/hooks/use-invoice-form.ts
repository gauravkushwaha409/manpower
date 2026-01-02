import { useFormikContext } from "formik";
import { InvoiceSchemaType } from "../schema/invoice-schema";
import { useCallback } from "react";

const useInvoiceForm = () => {
  const { values, setValues, validateForm, setTouched, touched } =
    useFormikContext<InvoiceSchemaType>();
  const isProductAvailable = values?.products?.length > 0;

  //   =================== Handle Add Product =======================
  const handleAddProduct = useCallback(async () => {
    // Force validation the form before adding it to the products array
    const error = await validateForm();
    const tempProductError = error?.tempProduct;
    if (tempProductError && Object.keys(tempProductError).length > 0) {
      setTouched({
        tempProduct: {
          product: true,
          quantity: true,
          rate: true,
          discount: true,
          tax: true,
        },
      });
      return;
    }
    // Add the product to products array
    setValues({
      ...values,
      products: [
        ...values.products,
        {
          product: values?.tempProduct?.product,
          quantity: values?.tempProduct?.quantity,
          rate: values?.tempProduct?.rate,
          discount: values?.tempProduct?.discount,
          tax: values?.tempProduct?.tax,
          tax_amount: getTaxAmount().toString(),
          discount_amount: getDiscountAmount()?.toString(),
        },
      ],
      tempProduct: {
        product: "",
        quantity: "",
        discount: "",
        rate: "",
        tax: false,
      },
    });
    setTouched({
      tempProduct: {
        product: false,
        rate: false,
        discount: false,
        quantity: false,
        tax: false,
      },
    });
  }, [values, setValues]);

  //   =================== Handle Delete Product =======================
  const handleDeleteProduct = useCallback(
    async (index: number) => {
      setValues({
        ...values,
        products: values?.products?.filter((_, idx) => index !== idx),
      });
    },
    [values, setValues]
  );

  //   =================== Handle Edit Product =======================
  const handleEditProduct = useCallback(
    async (index: number) => {
      const updateProduct = values?.products[index];
      setValues({
        ...values,
        tempProduct: {
          product: updateProduct?.product,
          rate: updateProduct?.rate,
          quantity: updateProduct?.quantity,
          discount: updateProduct?.discount,
          tax: updateProduct?.tax,
        },
        edit_index: index,
      });
      setTouched({
        ...touched,
        tempProduct: {
          product: false,
          quantity: false,
          discount: false,
          rate: false,
          tax: false,
        },
      });
    },
    [values, setValues, setValues, setTouched]
  );

  //   =================== Handle Update Product =======================
  const handleUpdateProduct = useCallback(async () => {
    if (values?.edit_index === null || values?.edit_index === undefined) return;
    const errors = await validateForm();
    const tempProductError = errors.tempProduct;
    if (tempProductError && Object.keys(tempProductError).length > 0) {
      setTouched({
        ...touched,
        tempProduct: {
          product: false,
          discount: false,
          quantity: false,
          rate: false,
          tax: false,
        },
      });
      return;
    }
    const updateProduct = [...values?.products];
    updateProduct[values?.edit_index] = {
      product: values?.tempProduct?.product,
      discount: values?.tempProduct?.discount,
      quantity: values?.tempProduct?.quantity,
      discount_amount: getDiscountAmount(),
      rate: values?.tempProduct?.rate,
      tax: values?.tempProduct?.tax,
      tax_amount: getTaxAmount(),
    };
    setValues({
      ...values,
      products: [...updateProduct],
      tempProduct: {
        product: "",
        quantity: "",
        rate: "",
        discount: "",
        tax: false,
      },
      edit_index: null,
    });
    setTouched({
      ...touched,
      tempProduct: {
        product: false,
        quantity: false,
        rate: false,
        discount: false,
        tax: false,
      },
    });
  }, [values, setValues]);

  //   =================== Handle Update Product =======================
  const handleCancelUpdateProduct = useCallback(() => {
    setValues({
      ...values,
      tempProduct: {
        product: "",
        discount: "",
        quantity: "",
        rate: "",
        tax: false,
      },
    });
    setTouched({
      ...touched,
      tempProduct: {
        product: false,
        discount: false,
        quantity: false,
        rate: false,
        tax: false,
      },
    });
  }, [values, setValues]);

  // ===================== Calculate Tax Amount ======================
  const getTaxAmount = useCallback(() => {
    if (!values?.tempProduct?.tax) return "0";
    return (
      +values?.tempProduct?.quantity *
      +values?.tempProduct?.rate *
      0.13
    ).toFixed(2);
  }, [
    values?.tempProduct?.tax,
    values?.tempProduct?.quantity,
    values?.tempProduct?.rate,
  ]);

  //   ========================= Calculate Discount Amount ======================
  const getDiscountAmount = useCallback(() => {
    if (!+values?.tempProduct?.discount) return "0";
    return (
      +values?.tempProduct?.rate *
      +values?.tempProduct?.quantity *
      (+values?.tempProduct?.discount / 100)
    ).toFixed(2);
  }, [
    values?.tempProduct?.tax,
    values?.tempProduct?.quantity,
    values?.tempProduct?.rate,
  ]);

  //   =========================== Is Editing ===============================
  const isEditing =
    typeof values.edit_index === "number" &&
    Number.isInteger(values.edit_index);

  return {
    handleAddProduct,
    handleDeleteProduct,
    handleEditProduct,
    handleUpdateProduct,
    handleCancelUpdateProduct,
    isProductAvailable,
    values,
    getTaxAmount,
    getDiscountAmount,
    isEditing,
  };
};
export default useInvoiceForm;
