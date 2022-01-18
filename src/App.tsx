import { useEffect } from "react";
import "./App.css";
import AbnormalStatesQuery from "./queries/AbnormalStatesQuery";
import GlobalStyle from "./views/common/GlobalStyle";
import Header from "./views/common/Header";
import NavigatorAndTime from "./views/common/NavigatorAndTime";
import InWrapper from "./views/common/Wrapper/InWrapper";
import OutWrapper from "./views/common/Wrapper/OutWrapper";
import DashboradView from "./views/DashboardView";
import AbnormalStatePopup from "./views/AbnormalStatePopup";

function App() {
  useEffect(() => {
    document.title = "Dashboard - TUTUM";
  }, []);

  // get and set state atom

  // TODO: wrap abnormal states management
  return (
    <div className="App">
      <AbnormalStatesQuery />
      <GlobalStyle />
      <Header />
      <OutWrapper>
        <NavigatorAndTime />
        <AbnormalStatePopup />
        <InWrapper>
          <DashboradView />
        </InWrapper>
      </OutWrapper>
    </div>
  );
}

export default App;
