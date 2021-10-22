import { MouseEventHandler } from "react";

type Props = {
  handleClick: MouseEventHandler;
};

const PopupButton: React.FC<Props> = (props) => {
  return <button onClick={props.handleClick}>{props.children}</button>;
};

export default PopupButton;
