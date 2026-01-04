import { useState } from "react";

export interface IUserListItem {
  id: string;
  name: string;
  email: string;
  phone_no: string;
  role: string;
}

export default function useUserList() {
  const [rowSelection, setRowSelection] = useState({});

  return { rowSelection, setRowSelection };
}
