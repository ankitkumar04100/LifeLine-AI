import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        margin: "10px",
        background: "#2563eb",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer"
      }}
    >
      {label}
    </button>
  );
}

export default Button;
