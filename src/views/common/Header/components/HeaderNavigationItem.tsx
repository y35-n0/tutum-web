import { ChangeEventHandler } from "react";

export type HeaderNavigationItemContent = {
  id: string;
  value: string;
  content: string;
};

type Props = {
  item: HeaderNavigationItemContent;
  checked: boolean;
  handleChange: ChangeEventHandler;
};

export const HeaderNavigationItem: React.FC<Props> = ({
  item,
  checked,
  handleChange,
}) => {
  return (
    <>
      <div className="view">
        <input
          className="view"
          type="radio"
          id={item.id}
          name="view"
          value={item.value}
          checked={checked}
          onChange={handleChange}
        />
        <label className="view">{item.content}</label>
      </div>
    </>
  );
};
