/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const boxStyle = css`
  width: 460px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 380px;
  background-color: #fff;
  box-shadow: 0 3px 30px 0 rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;

const CountBoardEmployeeBox: React.FC = (props) => {
  return (
    <form className="graph-container" css={boxStyle}>
      {props.children}
    </form>
  );
};

export default CountBoardEmployeeBox;
