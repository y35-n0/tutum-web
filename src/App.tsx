import React from "react";
import { useQuery } from "react-query";
import { atom } from "recoil";
import { getAbnormalStates } from "./api/dashboardApi";
import "./App.css";
import GlobalStyle from "./views/common/GlobalStyle";
import Header from "./views/common/Header";
import NavigatorAndTime from "./views/common/NavigatorAndTime";
import InWrapper from "./views/common/Wrapper/InWrapper";
import OutWrapper from "./views/common/Wrapper/OutWrapper";
import DashboradView from "./views/DashboardView";
import PopupView from "./views/PopupView";

const REFETCH_INTERVAL_MS = 1000;
// TODO: initial state atom

function App() {
  const { data: states } = useQuery("abnormalStates", getAbnormalStates, {
    initialData: [],
    refetchInterval: REFETCH_INTERVAL_MS,
    onSuccess: (states) => {
      console.log(states);
    },
  });

  // get and set state atom

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <OutWrapper>
        <NavigatorAndTime />
        <PopupView />
        <InWrapper>
          <DashboradView />
        </InWrapper>
      </OutWrapper>
    </div>
  );
}

export default App;
