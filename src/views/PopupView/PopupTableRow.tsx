/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const rowStyle = css`
  display: flex;
  font-size: 16px;
  margin-bottom: 12px;
`;
const contentStyle = css`
  width: 100px;
  color: #666;
`;
const valueStyle = css`
  width: 250px;
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
