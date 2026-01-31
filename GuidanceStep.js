import React from "react";

function GuidanceStep({ stepNumber, instruction }) {
  return (
    <div>
      <strong>Step {stepNumber}:</strong> {instruction}
    </div>
  );
}

export default GuidanceStep;
