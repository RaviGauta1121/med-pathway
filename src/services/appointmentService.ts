export interface AppointmentData {
  doctorId: number;
  patientName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  symptoms?: string;
}

export const appointmentService = {
  bookAppointment: async (data: AppointmentData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: `APT${Date.now()}`,
          status: "Confirmed",
          ...data,
        });
      }, 1000);
    });
  },

  getAppointments: async (userId: string) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: "APT001",
            doctorName: "Dr. Rajesh Kumar",
            date: "2025-12-10",
            time: "10:00 AM",
            status: "Confirmed",
          },
        ]);
      }, 500);
    });
  },

  cancelAppointment: async (appointmentId: string) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: "Appointment cancelled" });
      }, 500);
    });
  },
};
