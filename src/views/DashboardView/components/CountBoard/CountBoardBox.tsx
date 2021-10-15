/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const countBoardDivStyle = css`
  width: 100%;
  margin: 30px 0 40px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const CountBoardBox: React.FC = (props) => {
  return (
    <section className="countBoard" css={countBoardDivStyle}>
      {props.children}
    </section>
  );
};

export default CountBoardBox;
