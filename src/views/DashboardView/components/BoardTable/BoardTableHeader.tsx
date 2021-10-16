/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const headerStyle = css`
  color: #333;
  height: 55px;
  font-size: 16px;
  font-weight: 500;
`;

export type BoardTableHeaderItemContent = {
  id: string;
  name: string;
};

type Props = {
  items: BoardTableHeaderItemContent[];
};

const BoardTableHeader: React.FC<Props> = (props) => {
  return (
    <thead>
      <tr>
        {props.items.map((headerName) => (
          <th css={headerStyle} key={headerName.id}>
            {headerName.name}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default BoardTableHeader;
