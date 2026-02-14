import React from "react";

const Emergency: React.FC = () => {
  return (
    <div className="emergency-screen">
      <h2>Emergency Guidance</h2>
      <p>Follow step-by-step instructions carefully.</p>
      <div className="guidance-card">
        <h3>Step 1:</h3>
        <p>Check the surroundings for safety.</p>
      </div>
      <div className="guidance-card">
        <h3>Step 2:</h3>
        <p>Perform the required emergency action.</p>
      </div>
      <div className="guidance-card">
        <h3>Step 3:</h3>
        <p>Call for help if necessary.</p>
      </div>
    </div>
  );
};

export default Emergency;
