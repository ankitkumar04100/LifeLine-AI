import React from "react";

function HomeScreen() {
  return (
    <div>
      <h1>LifeLine AI</h1>
      <button onClick={() => alert("Select an emergency type")}>
        Start Emergency Assistance
      </button>
    </div>
  );
}

export default HomeScreen;
