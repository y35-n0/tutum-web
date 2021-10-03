import React, { useEffect, useState } from "react";
import Popout from "../../components/Popout";
import MapView from "../MapView/MapView";

type UserPopoutProps = {
  id: number;
};

const DashboradView: React.FC = () => {
  const [userPopout, setUserPopout] = useState<UserPopoutProps | null>(null);

  return (
    <div>
      {userPopout && (
        <Popout
          title={`${userPopout.id}의 현재 위치`}
          url=""
          name="map"
          closeWindow={() => {
            setUserPopout(null);
          }}
        >
          <MapView targetId={userPopout.id} />
        </Popout>
      )}
      <h1>DASHBOARD</h1>
      <button
        onClick={() => {
          setUserPopout({ id: 1 });
        }}
      >
        {1}
      </button>
    </div>
  );
};

export default DashboradView;
