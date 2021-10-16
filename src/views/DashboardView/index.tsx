import Header from "../common/Header";
import CountBoard from "./components/CountBoard";
import TableBoard from "./components/TableBoard";

const DashboradView: React.FC = () => {
  return (
    <>
      <Header />
      <CountBoard />
      <TableBoard />
    </>
  );
};

export default DashboradView;
