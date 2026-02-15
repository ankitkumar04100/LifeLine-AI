import React from "react";
import Button from "../components/Button";
import GuidanceCard from "../components/GuidanceCard";

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Emergency Assistance</h2>

      <Button label="SOS Alert" />
      <Button label="Find Nearby Hospital" />

      <GuidanceCard
        title="CPR Guidance"
        description="Follow step-by-step CPR instructions."
      />
    </div>
  );
}

export default Home;
