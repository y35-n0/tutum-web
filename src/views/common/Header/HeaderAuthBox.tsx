/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const authBoxStyle = css`
  display: flex;
  align-items: center;
`;
const HeaderAuthBox: React.FC = (props) => {
  return <div css={authBoxStyle}>{props.children}</div>;
};

export default HeaderAuthBox;
