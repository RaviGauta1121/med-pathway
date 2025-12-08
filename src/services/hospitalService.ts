const mockHospitals = [
  {
    id: 1,
    name: "City General Hospital",
    address: "123 Main Street, Delhi",
    phone: "+91 98765 43210",
    emergency: true,
    rating: 4.8,
    specialties: ["Emergency Care", "Cardiology", "Orthopedics"],
    latitude: 28.6139,
    longitude: 77.209,
    distance: 2.3,
  },
  {
    id: 2,
    name: "Apollo Hospital",
    address: "456 Park Road, Mumbai",
    phone: "+91 98765 43211",
    emergency: true,
    rating: 4.9,
    specialties: ["Cardiology", "Neurology", "Oncology"],
    latitude: 19.076,
    longitude: 72.8777,
    distance: 3.1,
  },
  {
    id: 3,
    name: "Fortis Hospital",
    address: "789 Lake View, Bangalore",
    phone: "+91 98765 43212",
    emergency: true,
    rating: 4.7,
    specialties: ["Orthopedics", "Pediatrics", "Dermatology"],
    latitude: 12.9716,
    longitude: 77.5946,
    distance: 4.5,
  },
];

export const hospitalService = {
  getAllHospitals: async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockHospitals), 500);
    });
  },

  getNearbyHospitals: async (lat: number, lng: number) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Sort by distance (in real app, calculate actual distance)
        const sorted = [...mockHospitals].sort((a, b) => a.distance - b.distance);
        resolve(sorted);
      }, 500);
    });
  },

  getHospitalById: async (id: number) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const hospital = mockHospitals.find((h) => h.id === id);
        resolve(hospital);
      }, 500);
    });
  },
};
