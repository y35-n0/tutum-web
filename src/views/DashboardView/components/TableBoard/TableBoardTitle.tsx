/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const titleStyle = css`
  margin: 30px 0 0 30px;
  font-weight: 600;
`;

const TableBoardTitle: React.FC = () => {
  return (
    <p className="table-title" css={titleStyle}>
      이상상태 현황
    </p>
  );
};

export default TableBoardTitle;
