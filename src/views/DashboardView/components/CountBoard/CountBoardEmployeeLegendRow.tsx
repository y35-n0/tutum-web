/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

// FIXME: margin-bottom 설정
const rowStyle = css`
  display: flex;
`;

const CountBoardEmployeeLegendRow: React.FC = (props) => {
  return (
    <div className="graphlegendRow" css={rowStyle}>
      {props.children}
    </div>
  );
};

export default CountBoardEmployeeLegendRow;
