import Header from "../common/Header";
import Wrapper from "../common/Wrapper";
import CountBoard from "./components/BoardCount";
import TableBoard from "./components/BoardTable";
import GlobalStyle from "../common/GlobalStyle";
import NavigatorAndTime from "../common/NavigatorAndTime";
import PopupView from "../PopupView";

const DashboradView: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <NavigatorAndTime />
      <Wrapper>
        <CountBoard />
        <TableBoard />
      </Wrapper>
      <PopupView />
    </>
  );
};

export default DashboradView;
