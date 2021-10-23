import Map from "./Map";
import Popout from "./Popout";

export type PopoutItem = {
  name: string;
  id: string;
};

type Props = {
  item: PopoutItem | null;
  handleCloseWindow: Function;
};

const PopoutView: React.FC<Props> = (props) => {
  // TODO: get popout item atom

  // TODO: set popout item atom
  return (
    props.item && (
      <Popout
        title={`${props.item.name}의 현재 위치`}
        url=""
        name="location"
        closeWindow={() => {
          props.handleCloseWindow(null);
        }}
      >
        <Map userId={props.item.id} />
      </Popout>
    )
  );
};

export default PopoutView;
