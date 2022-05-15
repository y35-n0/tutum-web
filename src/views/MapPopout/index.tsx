import MapView from "./MapView";
import Popout from "../common/Popout";
import { useRecoilState } from "recoil";
import { MapPopoutStateAtom } from "../../atoms/mapAtoms";

export interface MapPopoutState {
  name: string;
  id: number;
}

const MapPopoutView: React.FC = () => {
  const [mapPopoutState, setMapPopoutState] =
    useRecoilState(MapPopoutStateAtom);

  return (
    mapPopoutState && (
      <Popout
        title={`${mapPopoutState.name}의 현재 위치`}
        url=""
        name="location"
        closeWindow={() => setMapPopoutState(null)}
      >
        <MapView userId={mapPopoutState.id} />
      </Popout>
    )
  );
};

export default MapPopoutView;
