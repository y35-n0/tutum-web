/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const headerBottomDivStyle = css`
  width: 100%;
  padding: 0 20px;
  max-width: 1340px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
`;

export const HeaderBottom: React.FC = (props) => {
  return (
    <div className="headerBottom" css={headerBottomDivStyle}>
      {props.children}
    </div>
  );
};
