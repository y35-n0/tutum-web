/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const boxStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const CountBoardEmployeeLegendBox: React.FC = (props) => {
  return (
    <div className="input-graphTitle-box" css={boxStyle}>
      {props.children}
    </div>
  );
};

export default CountBoardEmployeeLegendBox;
