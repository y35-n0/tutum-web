import { useState } from "react";
import Map from "./Map";
import Popout from "./Popout";

const tmpItem: PopoutItem = {
  name: "근로자",
  id: 1,
};

export type PopoutItem = {
  name: string;
  id: number;
};

const PopoutView: React.FC = () => {
  // TODO: get popout item atom
  const [item, setItem] = useState<PopoutItem | null>(tmpItem);

  // TODO: set popout item atom
  return (
    item && (
      <Popout
        title={`${item.name}의 현재 위치`}
        url=""
        name="location"
        closeWindow={() => setItem(null)}
      >
        <Map userId={item.id} />
      </Popout>
    )
  );
};

export default PopoutView;
