/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const style = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 24px 0 8px;
`;

const PopupTableBody: React.FC = (props) => {
  return <table css={style}>{props.children}</table>;
};

export default PopupTableBody;
