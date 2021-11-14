/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const outerStyle = css`
  position: flex;
  background-color: var(--title-color);
  z-index: 1000;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
`;

const innerStyle = css`
  display: flex;
  width: var(--width);
  justify-content: space-between;
  align-items: center;
  color: #fff;

  /* align-items: center; */
`;

const HeaderBox: React.FC = (props) => {
  return (
    <header css={outerStyle}>
      <div css={innerStyle}>{props.children}</div>
    </header>
  );
};

export default HeaderBox;
