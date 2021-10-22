import Header from "../common/Header";
import CountBoard from "./components/BoardCount";
import TableBoard from "./components/BoardTable";
import GlobalStyle from "../common/GlobalStyle";
import NavigatorAndTime from "../common/NavigatorAndTime";
import PopupView from "../PopupView";
import InWrapper from "../common/Wrapper/InWrapper";
import OutWrapper from "../common/Wrapper/OutWrapper";

const DashboradView: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <OutWrapper>
        <NavigatorAndTime />
        <PopupView />
        <InWrapper>
          <CountBoard />
          <TableBoard />
        </InWrapper>
      </OutWrapper>
    </>
  );
};

export default DashboradView;
