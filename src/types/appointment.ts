export interface Appointment {
  id: string;
  doctorId: number;
  doctorName?: string;
  patientName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  symptoms?: string;
  status: "Confirmed" | "Cancelled" | "Completed" | "Pending";
}
