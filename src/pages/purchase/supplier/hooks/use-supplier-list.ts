import { useState } from "react";

export interface ISupplierListItem {
  id: string;
  name: string;
  address: string;
  code: string;
  phone_no: string;
  group: string;
}

export default function useSupplierList() {
  const [rowSelection, SetRowSelection] = useState({});
  return { rowSelection, SetRowSelection };
}
