export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  bloodGroup?: string;
  allergies?: string[];
  medicalHistory?: string[];
  emergencyContact?: {
    name: string;
    phone: string;
    relation: string;
  };
}
