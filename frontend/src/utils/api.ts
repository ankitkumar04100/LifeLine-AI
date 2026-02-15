export interface SOSResponse {
  success: boolean;
  message?: string;
}

export const sendSOS = async (
  location: string,
  userId: string
): Promise<SOSResponse> => {
  try {
    // Replace with real API later
    return {
      success: true,
      message: "Mock SOS sent"
    };
  } catch (error) {
    return {
      success: false,
      message: "Error sending SOS"
    };
  }
};
