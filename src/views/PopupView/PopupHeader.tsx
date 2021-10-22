/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  DANGER_LEVEL,
  DANGER_LEVEL_COLOR,
  DANGER_LEVEL_CONTENT,
} from "../../constants/statusConstants";

type Props = {
  level: DANGER_LEVEL;
};
const PopupHeader: React.FC<Props> = (props) => {
  return (
    <div>
      <h1
        css={css`
          font-size: 28px;
          color: ${DANGER_LEVEL_COLOR[props.level]};
          width: 100%;
          text-align: center;
        `}
      >
        {DANGER_LEVEL_CONTENT[props.level]}
      </h1>
    </div>
  );
};

export default PopupHeader;
