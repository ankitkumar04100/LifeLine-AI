import React from "react";

interface GuidanceCardProps {
  stepNumber: number;
  instruction: string;
}

const GuidanceCard: React.FC<GuidanceCardProps> = ({ stepNumber, instruction }) => {
  return (
    <div className="guidance-card">
      <h3>Step {stepNumber}:</h3>
      <p>{instruction}</p>
    </div>
  );
};

export default GuidanceCard;
