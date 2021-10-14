import AbnormalStatusTable from "./components/AbnormalStatusTable";
import ComprehensiveStatusBoard from "./components/ComprehensiveStatusBoard";
import EmployeesGraph from "./components/EmployeesGraph";
import Header from "./components/Header";
import Navigator from "./components/Navigator";
import Popup from "./components/Popup";

export const DashboradView = () => {
  return (
    <>
      <Header />
      <Navigator />
      <Popup />
      <ComprehensiveStatusBoard />
      <EmployeesGraph />
      <AbnormalStatusTable />
    </>
  );
};

export default DashboradView;
