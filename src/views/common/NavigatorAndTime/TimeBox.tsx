/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import timeSvg from "../../../assets/time.svg";

const boxStyle = css`
  display: flex;
  align-items: center;
  padding: 10px 30px;
  border-radius: 100px;
  background-color: #eaecf5;
`;

const spanStyle = css`
  color: #6a7193;
  font-size: 14px;
  font-weight: 500;
`;

type Props = {
  time: string;
};

export const HeaderTime: React.FC<Props> = (props) => {
  return (
    <div className="current-time" css={boxStyle}>
      <img src={timeSvg} alt="time" />
      <span className="current-time" css={spanStyle}>
        현재시각 :&nbsp; {props.time}
      </span>
    </div>
  );
};
