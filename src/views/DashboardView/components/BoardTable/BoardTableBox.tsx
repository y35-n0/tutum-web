/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const outerBoxStyle = css`
  width: 100%;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: var(--box-shadow);
  margin-bottom: 40px;
`;

const innerBoxStyle = css`
  padding: 20px;
`;

const BoardTableBox: React.FC = (props) => {
  return (
    <section css={outerBoxStyle}>
      <div css={innerBoxStyle}>{props.children}</div>
    </section>
  );
};

export default BoardTableBox;
