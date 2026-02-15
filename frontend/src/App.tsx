import React, { useState } from "react";
import Home from "./screens/Home";
import Emergency from "./screens/Emergency";
import SOS from "./screens/SOS";
import Settings from "./screens/Settings";

type Screen = "Home" | "Emergency" | "SOS" | "Settings";

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("Home");

  const navigateTo = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "Home":
        return <Home navigateTo={navigateTo} />;
      case "Emergency":
        return <Emergency />;
      case "SOS":
        return <SOS />;
      case "Settings":
        return <Settings />;
      default:
        return <Home navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="app-container">
      {renderScreen()}
    </div>
  );
};

export default App;
