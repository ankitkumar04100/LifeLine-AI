import React from "react";

const Settings: React.FC = () => {
  return (
    <div className="settings-screen">
      <h2>Settings</h2>
      <p>Configure your preferences:</p>
      <ul>
        <li>Enable/disable SOS alerts</li>
        <li>Choose preferred emergency types</li>
        <li>Change theme or language</li>
      </ul>
    </div>
  );
};

export default Settings;
