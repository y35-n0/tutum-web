import BoardCountBox from "./components/BoardCountBox";
import BoardCountState from "./components/BoardCountState";
import BoardCountEmployee from "./components/BoardCountEmployee";

const BoardCount: React.FC = () => {
  return (
    <BoardCountBox>
      <BoardCountState />
      <BoardCountEmployee />
    </BoardCountBox>
  );
};

export default BoardCount;
