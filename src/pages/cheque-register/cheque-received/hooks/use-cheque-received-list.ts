import { useState } from "react";
export interface IChequeReceivedListItem {
  id: string;
  customer_name: string;
  cheque_date: string;
  received_date: string;
  amount: string;
  cheque_no: string;
  bank: string;
  status: string;
}

const useChequeReceivedList = () => {
  const [rowSelection, setRowSelection] = useState({});
  return { rowSelection, setRowSelection };
};

export default useChequeReceivedList;
