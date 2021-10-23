type Props = {
  floorName?: string;
  timestamp?: string;
};
const MapFooter: React.FC<Props> = (props) => {
  return (
    <div>
      <h2>{props.floorName}</h2>
      <span>{props.timestamp}</span>
    </div>
  );
};

export default MapFooter;
