import "./App.css";
import GlobalStyle from "./views/common/GlobalStyle";
import Header from "./views/common/Header";
import NavigatorAndTime from "./views/common/NavigatorAndTime";
import InWrapper from "./views/common/Wrapper/InWrapper";
import OutWrapper from "./views/common/Wrapper/OutWrapper";
import DashboradView from "./views/DashboardView";
import PopupView from "./views/PopupView";

function App() {
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
