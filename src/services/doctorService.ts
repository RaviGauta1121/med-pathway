// Mock data for doctors
const mockDoctors = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    specialty: "Cardiologist",
    experience: "15 years",
    rating: 4.9,
    consultationFee: 500,
    available: true,
    hospital: "Apollo Hospital",
    education: "MBBS, MD - Cardiology",
    languages: ["English", "Hindi"],
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    specialty: "Dermatologist",
    experience: "10 years",
    rating: 4.8,
    consultationFee: 400,
    available: true,
    hospital: "Fortis Hospital",
    education: "MBBS, MD - Dermatology",
    languages: ["English", "Hindi", "Marathi"],
  },
  {
    id: 3,
    name: "Dr. Amit Patel",
    specialty: "Orthopedic",
    experience: "12 years",
    rating: 4.7,
    consultationFee: 600,
    available: false,
    hospital: "Max Hospital",
    education: "MBBS, MS - Orthopedics",
    languages: ["English", "Hindi", "Gujarati"],
  },
];

export const doctorService = {
  getAllDoctors: async () => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockDoctors), 500);
    });
  },

  getDoctorById: async (id: number) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const doctor = mockDoctors.find((d) => d.id === id);
        resolve(doctor);
      }, 500);
    });
  },

  searchDoctors: async (query: string, specialty?: string) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let results = mockDoctors;
        
        if (query) {
          results = results.filter((d) =>
            d.name.toLowerCase().includes(query.toLowerCase())
          );
        }
        
        if (specialty && specialty !== "all") {
          results = results.filter(
            (d) => d.specialty.toLowerCase() === specialty.toLowerCase()
          );
        }
        
        resolve(results);
      }, 500);
    });
  },
};
