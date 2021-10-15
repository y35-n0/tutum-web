/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const navigationFormStyle = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderNavigation: React.FC = (props) => {
  return (
    <nav className="navigation">
      <form css={navigationFormStyle}>{props.children}</form>
    </nav>
  );
};
