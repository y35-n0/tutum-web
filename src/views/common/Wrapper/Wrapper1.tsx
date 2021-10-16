/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const wrapperStyle = css`
  width: var(--width);
  display: flex;
  justify-content: center;
`;

const Wrapper1: React.FC = (props) => {
  return <div css={wrapperStyle}>{props.children}</div>;
};

export default Wrapper1;
