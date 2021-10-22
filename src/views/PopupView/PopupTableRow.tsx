type Props = {
  content: string;
  value: string;
};

const PopupTableRow: React.FC<Props> = (props) => {
  return (
    <tr>
      <td>{props.content}</td>
      <td>{props.value}</td>
    </tr>
  );
};

export default PopupTableRow;
