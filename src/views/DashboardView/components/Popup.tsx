const item = {
  level: "위험",
  timestamp: Date(),
  content: "심박수 이상",
  userName: "홍길동",
  workingState: "업무 중",
  phoneNumber: "010-1234-5678",
};

type PopupTitleProps = {
  level: string;
};

const PopupTitle: React.FC<PopupTitleProps> = ({ level }) => {
  return <h1 className="popUpTitle">{level}</h1>;
};

type PopupCententItemProps = {
  title: string;
  content: string;
};

const PopupCententItem: React.FC<PopupCententItemProps> = ({
  title,
  content,
}) => {
  return (
    <li className="data-li">
      <p className="a">{title}</p>
      <p className="b">{content}</p>
    </li>
  );
};

const PopupContent: React.FC = ({ children }) => {
  return <ul className="data-result">{children}</ul>;
};

const PopupBox: React.FC = ({ children }) => {
  return <div className="popUp">{children}</div>;
};

const Popup: React.FC = () => {
  return (
    <PopupBox>
      <PopupTitle level={item.level} />
      <PopupContent>
        <PopupCententItem title="발생시간" content={item.timestamp} />
        <PopupCententItem title="내용" content={item.content} />
        <PopupCententItem title="이름" content={item.userName} />
        <PopupCententItem title="근무상태" content={item.workingState} />
        <PopupCententItem title="전화번호" content={item.phoneNumber} />
      </PopupContent>
    </PopupBox>
  );
};

export default Popup;
