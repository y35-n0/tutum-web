import React from "react";
import "./App.css";
import MapView from "./views/MapView/MapView";

function App() {
  return (
    <div className="App">
      <MapView targetId={1} />
    </div>
  );
}

export default App;
