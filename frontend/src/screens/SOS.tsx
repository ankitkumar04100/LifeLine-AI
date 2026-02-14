import React, { useState } from "react";
import { sendSOS } from "../utils/api";

const SOS: React.FC = () => {
  const [status, setStatus] = useState<string>("");

  const handleSOS = async () => {
    setStatus("Sending SOS...");
    const response = await sendSOS("User Location Placeholder", "user123");
    setStatus(response.success ? "SOS Sent Successfully!" : "Failed to send SOS.");
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
