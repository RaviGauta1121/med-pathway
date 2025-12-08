export interface EmergencyRequest {
  name: string;
  phone: string;
  emergencyType: string;
  description: string;
  location: {
    lat: number;
    lng: number;
  };
}

export interface EmergencyResponse {
  id: string;
  status: string;
  eta: number;
  ambulanceNumber: string;
  driverPhone: string;
}

export const emergencyService = {
  submitEmergencyRequest: async (
    request: EmergencyRequest
  ): Promise<EmergencyResponse> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const response: EmergencyResponse = {
          id: `EMG${Date.now()}`,
          status: "Dispatched",
          eta: 8,
          ambulanceNumber: "DL-01-AB-1234",
          driverPhone: "+91 98765 00000",
        };
        resolve(response);
      }, 1000);
    });
  },

  trackAmbulance: async (trackingId: string) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          status: "En Route",
          currentLocation: { lat: 28.6139, lng: 77.209 },
          eta: 5,
        });
      }, 500);
    });
  },
};
