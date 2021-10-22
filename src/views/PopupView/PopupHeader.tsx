import {
  DANGER_LEVEL,
  DANGER_LEVEL_CONTENT,
} from "../../constants/statusConstants";

type Props = {
  level: DANGER_LEVEL;
};
const PopupHeader: React.FC<Props> = (props) => {
  return (
    <div>
      <h1>{DANGER_LEVEL_CONTENT[props.level]}</h1>
    </div>
  );
};

export default PopupHeader;
