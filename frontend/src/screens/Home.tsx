import React from "react";

interface HomeProps {
  navigateTo: (screen: string) => void;
}

const Home: React.FC<HomeProps> = ({ navigateTo }) => {
  return (
    <div className="home-screen">
      <h1>Welcome to LifeLine AI</h1>
      <p>Your offline emergency assistant.</p>
      <button className="button" onClick={() => navigateTo("Emergency")}>
        Start Emergency Guidance
      </button>
      <button className="button" onClick={() => navigateTo("SOS")}>
        Send SOS
      </button>
      <button className="button" onClick={() => navigateTo("Settings")}>
        Settings
      </button>
    </div>
  );
};

export default Home;
