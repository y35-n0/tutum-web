/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import timeSvg from "../../../../assets/time.svg";

const currentTimeDivStyle = css`
  display: flex;
  align-items: center;
  background-color: #eaecf5;
  padding: 10px 30px;
  border-radius: 100px;
`;

const currentTimeSpanStyle = css`
  font-size: 18px;
  color: #6a7193;
  font-weight: 500;
`;

const imgStyle = css`
  margin-right: 10px;
`;

type Props = {
  time: string;
};

export const HeaderTime: React.FC<Props> = ({ time }) => {
  return (
    <div className="current-time" css={currentTimeDivStyle}>
      <img src={timeSvg} alt="time" css={imgStyle} />
      <span className="current-time" css={currentTimeSpanStyle}>
        현재시각 :&nbsp; {time}
      </span>
    </div>
  );
};
