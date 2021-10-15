type Props = {
  time: string;
};

export const HeaderTime: React.FC<Props> = ({ time }) => {
  return (
    <div className="currentTime">
      <img src="/assets/time.svg" alt="time" />
      <p className="time">현재시각 :&nbsp; {time}</p>
    </div>
  );
};
