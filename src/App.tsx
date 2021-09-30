import React from "react";
import "./App.css";
import MapView from "./views/MapView/MapView";

function App() {
  return (
    <div className="App">
      {/* FIXME: targetID 수정 */}
      <MapView targetId={1} />
    </div>
  );
}

export default App;
