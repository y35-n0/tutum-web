/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const bodyStyle = css`
  width: 100%;
  overflow: auto;
  text-align: center;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #c2c2c2;
    border-radius: 10px;
    border: 2px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: #e2e2e2;
  }
`;

const TableBoardBody: React.FC = (props) => {
  return <tbody css={bodyStyle}>{props.children}</tbody>;
};

export default TableBoardBody;
