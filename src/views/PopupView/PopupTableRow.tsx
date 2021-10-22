/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const rowStyle = css`
  display: flex;
  font-size: 15px;
  margin-bottom: 12px;
`;
const contentStyle = css`
  width: 60px;
  color: #666;
  margin-right: 30px;
`;
const valueStyle = css`
  width: 150px;
  white-space: normal;
`;

type Props = {
  content: string;
  value: string;
};

const PopupTableRow: React.FC<Props> = (props) => {
  return (
    <tr css={rowStyle}>
      <td css={contentStyle}>{props.content}</td>
      <td css={valueStyle}>{props.value}</td>
    </tr>
  );
};

export default PopupTableRow;
