import React from "react";

function EmergencyScreen({ emergencyType, instructions }) {
  return (
    <div>
      <h2>Emergency: {emergencyType}</h2>
      <ol>
        {instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

export default EmergencyScreen;
