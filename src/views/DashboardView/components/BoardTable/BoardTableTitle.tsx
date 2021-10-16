/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const outerDivStyle = css`
  width: 100%;
  border-radius: 20px 20px 0 0;
  align-items: center;
  display: flex;
`;

const innerDivStyle = css`
  width: 100%;
  display: flex;
  align-items: center;
`;

const titleStyle = css`
  font-size: 20px;
  font-weight: 600;
  text-align: left;
`;

const BoardTableTitle: React.FC = () => {
  return (
    <div css={outerDivStyle}>
      <div css={innerDivStyle}>
        <p css={titleStyle}>이상상태 현황</p>
      </div>
    </div>
  );
};

export default BoardTableTitle;
