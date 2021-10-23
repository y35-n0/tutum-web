/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

// TODO: D3 Circle Graph
const graphStyle = css`
  margin: 25px 0;
  width: 190px;
  height: 190px;
  background-color: #ccc;
  border-radius: 100px;
`;

const BoardCountEmployeeGraph: React.FC = () => {
  return <div css={graphStyle}></div>;
};

export default BoardCountEmployeeGraph;
