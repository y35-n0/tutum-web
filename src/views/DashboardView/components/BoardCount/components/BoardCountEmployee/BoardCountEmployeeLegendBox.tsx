/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const boxStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const BoardCountEmployeeLegendBox: React.FC = (props) => {
  return <div css={boxStyle}>{props.children}</div>;
};

export default BoardCountEmployeeLegendBox;
