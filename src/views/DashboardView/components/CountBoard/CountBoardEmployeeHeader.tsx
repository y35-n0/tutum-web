/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const headerStyle = css`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0b4ca3;
  border-radius: 20px 20px 0 0;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
`;

const titleStyle = css`
  margin-left: 20px;
`;

const totalStyle = css`
  margin-right: 20px;
`;

type Props = {
  count: number;
};

const CountBoardEmployeeHeader: React.FC<Props> = (props) => {
  return (
    <div className="graph-title" css={headerStyle}>
      <span className="graph-titleName" css={titleStyle}>
        근로자 현황
      </span>
      <span className="totalValue" css={totalStyle}>
        TOTAL : {props.count}
      </span>
    </div>
  );
};

export default CountBoardEmployeeHeader;
