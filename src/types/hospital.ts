export interface Hospital {
  id: number;
  name: string;
  address: string;
  phone: string;
  emergency: boolean;
  rating: number;
  specialties: string[];
  latitude: number;
  longitude: number;
  distance?: number;
}
