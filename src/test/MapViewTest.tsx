import "../App.css";
import MapView from "../views/MapPopout/MapView";

const MapViewTest: React.FC = () => {
  return (
    <div className="App">
      <MapView userId={1} />
    </div>
  );
};

export default MapViewTest;
