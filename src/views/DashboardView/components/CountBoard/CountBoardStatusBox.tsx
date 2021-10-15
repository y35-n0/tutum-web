/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const countBoardStatusDivStyle = css`
  width: 845px;
  height: 380px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: space-between;
`;

const CountBoardStatusBox: React.FC = (props) => {
  return (
    <div className="countStatus" css={countBoardStatusDivStyle}>
      {props.children}
    </div>
  );
};

export default CountBoardStatusBox;
