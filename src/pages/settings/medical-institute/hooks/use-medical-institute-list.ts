import { useState } from "react";

export interface IMedicalInstituteListItem {
  id: string;
  name: string;
  address: string;
  email: string;
  phone_no: string;
}

export default function useMedicalInstituteList() {
  const [rowSelection, setRowSelection] = useState({});

  return { rowSelection, setRowSelection };
}
