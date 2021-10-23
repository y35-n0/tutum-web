type Props = {
  buildingName?: string;
};
const MapHeader: React.FC<Props> = (props) => {
  return (
    <div>
      <h1>{props.buildingName}</h1>
    </div>
  );
};

export default MapHeader;
