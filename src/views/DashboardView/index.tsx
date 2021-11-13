import MapPopout from "../MapPopout";
import BoardCount from "./components/BoardCount";
import BoardTable from "./components/BoardTable";

const DashboradView: React.FC = () => {
  return (
    <>
      <MapPopout />
      <BoardCount />
      <BoardTable />
    </>
  );
};

export default DashboradView;
