/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const boxStyle = css`
  width: 70%;
  height: 380px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: space-between;
  margin-right: 40px;
`;

const BoardCountStatusBox: React.FC = (props) => {
  return <form css={boxStyle}>{props.children}</form>;
};

export default BoardCountStatusBox;
