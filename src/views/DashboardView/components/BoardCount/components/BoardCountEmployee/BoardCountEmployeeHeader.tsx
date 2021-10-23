/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const headerStyle = css`
  width: 100%;
  border-radius: 20px 20px 0 0;
  display: flex;
`;

const innerDivStyle = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const titleStyle = css`
  font-size: 20px;
  font-weight: 600;
`;

const valueStyle = css`
  font-size: 18px;
  font-weight: 500;
`;

type Props = {
  count: number;
};

const BoardCountEmployeeHeader: React.FC<Props> = (props) => {
  return (
    <div css={headerStyle}>
      <div css={innerDivStyle}>
        <span css={titleStyle}>근로자 현황</span>
        <span css={valueStyle}>합계 : {props.count}</span>
      </div>
    </div>
  );
};

export default BoardCountEmployeeHeader;
