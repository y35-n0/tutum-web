/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const boxStyle = css`
  display: flex;
  width: var(--width);
  justify-content: space-between;
  margin-bottom: 40px;
`;

const BoardCountBox: React.FC = (props) => {
  return <section css={boxStyle}>{props.children}</section>;
};

export default BoardCountBox;
