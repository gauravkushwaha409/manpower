import { useState } from "react";

export interface IInsuranceCompanyListItem {
  id: string;
  name: string;
  address: string;
  email: string;
  phone_no: string;
}

export default function useInsuranceCompanyList() {
  const [rowSelection, setRowSelection] = useState({});

  return { rowSelection, setRowSelection };
}
