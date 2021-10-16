import Wrapper2 from "./Wrapper2";
import Wrapper1 from "./Wrapper1";

const Wrapper: React.FC = (props) => {
  return (
    <Wrapper1>
      <Wrapper2>{props.children}</Wrapper2>
    </Wrapper1>
  );
};

export default Wrapper;
