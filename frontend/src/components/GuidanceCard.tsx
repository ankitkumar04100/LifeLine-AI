import React from "react";

interface Props {
  title: string;
  description: string;
}

function GuidanceCard({ title, description }: Props) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        margin: "10px",
        borderRadius: "8px"
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default GuidanceCard;
