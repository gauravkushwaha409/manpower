export interface ITicket {
 id: string;
 candidate_name: string;
 flight_number: string;
 airline_name: string;
 ticket_no: string;
 departure_airport: string;
 arrival_airport: string;
 departure_date: string;
 status: "Booked" | "Canceled" | "Pending";
 country: string;
}
