import { useState } from "react";

export interface IOrientationInstituteListItem {
  id: string;
  name: string;
  address: string;
  email: string;
  phone_no: string;
}

export default function useOrientationInstituteList() {
  const [rowSelection, setRowSelection] = useState({});

  return { rowSelection, setRowSelection };
}
