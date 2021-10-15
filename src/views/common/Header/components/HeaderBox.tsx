/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const headerStyle = css`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  padding: 24px;
  background-color: #0b4ca3;
  align-items: center;
  justify-content: center;
`;

export const HeaderBox: React.FC = (props) => {
  return <header css={headerStyle}>{props.children}</header>;
};
