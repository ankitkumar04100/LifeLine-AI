import React, { useState } from "react";
import { sendSOS } from "../utils/api";

interface SOSResponse {
  success: boolean;
  message?: string;
}

const SOS: React.FC = () => {
  const [status, setStatus] = useState<string>("");

  const handleSOS = async () => {
    try {
      setStatus("Sending SOS...");

      const response: SOSResponse = await sendSOS(
        "User Location Placeholder",
        "user123"
      );

      if (response.success) {
        setStatus("SOS Sent Successfully! 🚑");
      } else {
        setStatus(response.message || "Failed to send SOS.");
      }
    } catch (error) {
      console.error("SOS Error:", error);
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="sos-screen">
      <h2>SOS Alert</h2>
      <p>Send your emergency alert to authorities (optional online).</p>

      <button className="button" onClick={handleSOS}>
        Send SOS
      </button>

      {status && <p>{status}</p>}
    </div>
  );
};

export default SOS;
