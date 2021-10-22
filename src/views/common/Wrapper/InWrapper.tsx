/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const wrapperStyle = css`
  width: var(--width);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const InWrapper: React.FC = (props) => {
  return <div css={wrapperStyle}>{props.children}</div>;
};

export default InWrapper;
