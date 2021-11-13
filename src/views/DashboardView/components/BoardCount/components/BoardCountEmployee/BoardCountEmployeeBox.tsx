/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const boxStyle = css`
  display: flex;
  width: 30%;
  height: 380px;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: var(--box-shadow);
  border-radius: 20px;
`;

const BoardCountEmployeeBox: React.FC = (props) => {
  return <form css={boxStyle}>{props.children}</form>;
};

export default BoardCountEmployeeBox;
