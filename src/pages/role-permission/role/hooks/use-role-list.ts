import { useState } from "react";

export interface IRoleListItem {
  id: string;
  role_name: string;
  description: string;
}
export default function useRoleList() {
  const [rowSelection, setRowSelection] = useState({});
  return { rowSelection, setRowSelection };
}
