/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const boxStyle = css`
  width: 100%;
  cellspacing: 0;
`;

const BoardTableInTable: React.FC = (props) => {
  return <table css={boxStyle}>{props.children}</table>;
};

export default BoardTableInTable;
