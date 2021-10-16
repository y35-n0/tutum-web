/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const boxStyle = css`
  padding: 20px 0;
`;

const TableBoardTableBox: React.FC = (props) => {
  return (
    <div className="table-container" css={boxStyle}>
      <table width="100%" cellSpacing="0">
        {props.children}
      </table>
    </div>
  );
};

export default TableBoardTableBox;
