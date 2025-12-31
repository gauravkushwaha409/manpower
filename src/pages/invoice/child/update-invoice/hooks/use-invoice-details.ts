import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { IApiDetailsResponse } from "@/interface/apiResponse.interface";
import { InvoiceProductSchemaType } from "@/pages/invoice/schema/invoice-schema";

interface IInvoiceDetails {
  id: string;
  candidate_name: string;
  due_date: string;
  invoice_date: string;
  referance_no: string;
  products: InvoiceProductSchemaType[];
}
type InvoiceDetailsResponse = IApiDetailsResponse<IInvoiceDetails>;
const useInvoiceDetails = ({ id }: { id: string }) => {
  const { data, isLoading } = useGetDataQuery<{
    data: InvoiceDetailsResponse;
    isLoading: boolean;
  }>({
    url: endpoints?.invoice?.details.replace("id", id),
    tag: apiTags.invoice.details,
  });

  return { data, isLoading };
};

export default useInvoiceDetails;
