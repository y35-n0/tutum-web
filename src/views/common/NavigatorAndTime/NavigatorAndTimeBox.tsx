/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const style = css`
  padding: 30px 0px 20px 0px;
  width: var(--width);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavigatorAndTimeBox: React.FC = (props) => {
  return <div css={style}>{props.children}</div>;
};

export default NavigatorAndTimeBox;
