import { ITicket } from "@/pages/visaProcess/ticket/interface/ITicket";

export const flightTableData: Pick<ITicket, "id" | "candidate_name" | "country" | "flight_number" | "airline_name" | "status">[] = [
 {
  id: "1",
  candidate_name: "John Doe",
  country: "Germany",
  flight_number: "LH1234",
  airline_name: "Lufthansa",
  status: "Canceled",
 },
 {
  id: "2",
  candidate_name: "John Doe",
  country: "Germany",
  flight_number: "LH1234",
  airline_name: "Lufthansa",
  status: "Booked",
 },
 {
  id: "3",
  candidate_name: "John Doe",
  country: "Germany",
  flight_number: "LH1234",
  airline_name: "Lufthansa",
  status: "Pending",
 },
];
