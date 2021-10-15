import titleImg from "../../../../assets/title.svg";

type Props = {
  title: string;
};

export const HeaderTitle: React.FC<Props> = ({ title }) => {
  return (
    <div className="titleName">
      <img src={titleImg} alt="title logo" />
      <h1>{title}</h1>
    </div>
  );
};
