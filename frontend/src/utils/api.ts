// Placeholder for API calls (optional backend integration)
import axios from "axios";

const BASE_URL = "https://api.lifelineai.com"; // Placeholder URL

export const sendSOS = async (location: string, userId: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/sos`, { location, userId });
    return response.data;
  } catch (error) {
    console.error("SOS API error:", error);
    return { success: false, message: "Unable to send SOS" };
  }
};

export const fetchEmergencyProtocols = async (type: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/emergencies/${type}`);
    return response.data;
  } catch (error) {
    console.error("Emergency API error:", error);
    return { success: false, data: [] };
  }
};
