import "../App.css";
import MapView from "../views/MapView/MapView";

const MapViewTest: React.FC = () => {
  return (
    <div className="App">
      {/* FIXME: targetID 수정 */}
      <MapView targetId={1} />
    </div>
  );
};

export default MapViewTest;
