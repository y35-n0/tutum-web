import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import "./App.css";
import { abnormalStatesAtom } from "./atoms/abnormalStatesAtoms";
import useAbnormalStates from "./hooks/useAbnormalStates";
import GlobalStyle from "./views/common/GlobalStyle";
import Header from "./views/common/Header";
import NavigatorAndTime from "./views/common/NavigatorAndTime";
import InWrapper from "./views/common/Wrapper/InWrapper";
import OutWrapper from "./views/common/Wrapper/OutWrapper";
import DashboradView from "./views/DashboardView";
import PopupView from "./views/PopupView";

const REFETCH_INTERVAL_MS = 1000;

function App() {
  const setAbnormalStates = useSetRecoilState(abnormalStatesAtom);
  const [updatedAbnormalStates, updateAbnormalStates] = useAbnormalStates();

  useEffect(() => {
    document.title = "Dashboard - TUTUM";
  }, []);

  useEffect(() => {
    setAbnormalStates(updatedAbnormalStates);
    const timer = setInterval(async () => {
      await updateAbnormalStates();
    }, REFETCH_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [updateAbnormalStates]);

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
