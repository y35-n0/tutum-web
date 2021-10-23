import PopoutView from "../PopoutView";
import BoardCount from "./components/BoardCount";
import BoardTable from "./components/BoardTable";

const DashboradView: React.FC = () => {
  return (
    <>
      <PopoutView />
      <BoardCount />
      <BoardTable />
    </>
  );
};

export default DashboradView;
