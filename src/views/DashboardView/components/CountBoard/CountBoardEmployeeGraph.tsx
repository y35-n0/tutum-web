/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const graphStyle = css`
  margin: 20px 0;
  width: 190px;
  height: 190px;
  background-color: #ccc;
  border-radius: 100px;
`;

const CountBoardEmployeeGraph: React.FC = () => {
  return <div className="graph-box" css={graphStyle}></div>;
};

export default CountBoardEmployeeGraph;
