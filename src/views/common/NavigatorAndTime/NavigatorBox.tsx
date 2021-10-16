/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const style = css`
  display: flex;
  align-items: center;
`;

const NavigatorBox: React.FC = (props) => {
  return (
    <nav>
      <form css={style}>{props.children}</form>
    </nav>
  );
};

export default NavigatorBox;
