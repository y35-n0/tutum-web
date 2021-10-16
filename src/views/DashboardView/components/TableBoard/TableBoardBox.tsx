/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const boxStyle = css`
  width: 100%;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 3px 30px 0 rgba(0, 0, 0, 0.1);
`;

const TableBoardBox: React.FC = (props) => {
  return (
    <section className="section-three" css={boxStyle}>
      {props.children}
    </section>
  );
};

export default TableBoardBox;
