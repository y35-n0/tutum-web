/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const headerTopDivStyle = css`
  width: 100%;
  padding: 0 20px;
  margin-bottom: 40px;
  max-width: 1340px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
`;

export const HeaderTop: React.FC = (props) => {
  return (
    <div className="headerTop" css={headerTopDivStyle}>
      {props.children}
    </div>
  );
};
