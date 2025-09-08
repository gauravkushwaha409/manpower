export interface IPayment {
  id: string;
  candidateName: string;
  payment: number;
  country: string;
  payment_date: string;
  total_payment: string;
  payment_method: string;
  payment_for: string;
  payment_image: null | string | File;
}
