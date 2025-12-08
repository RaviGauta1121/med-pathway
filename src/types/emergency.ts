export interface Emergency {
  id: string;
  name: string;
  phone: string;
  emergencyType: string;
  description: string;
  location: {
    lat: number;
    lng: number;
  };
  status: "Pending" | "Dispatched" | "En Route" | "Arrived" | "Completed";
  timestamp: string;
}
