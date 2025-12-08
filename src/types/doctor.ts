export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  consultationFee: number;
  available: boolean;
  hospital?: string;
  education?: string;
  languages?: string[];
  image?: string;
}
