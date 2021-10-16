/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const wrapperStyle = css`
  width: 100%
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container: React.FC = (props) => {
  return <div css={wrapperStyle}>{props.children}</div>;
};

export default Container;
