import React from "react";

/// [TableItem] Table 내 각 item(행)
/// [item] : item 관련 전체 내용 [values] : 표시할 내용
/// [handleClick] : 해당 item을 클릭하면 실행할 callback 함수
/// [handleClickPropsIndecator] : handleClick에 param이 필요할 시 넣을 인디케이터
type ItemProps = {
  item: any;
  values: any;
  handleClick: Function;
  handleClickPropsIndecator?: Function;
};

export const TableItem: React.FC<ItemProps> = ({
  item,
  values,
  handleClick,
  handleClickPropsIndecator,
}) => {
  return (
    <tr
      onClick={
        handleClickPropsIndecator
          ? () => handleClick(handleClickPropsIndecator(item))
          : () => handleClick()
      }
    >
      {values.map((value: any, index: number) => (
        <td key={index}>{value}</td>
      ))}
    </tr>
  );
};

// [TableHeader] : Table의 Header
// [headerNames] : Header로 표시할 값들
type HeaderProps = {
  headerNames: string[];
};
export const TableHeader: React.FC<HeaderProps> = ({ headerNames }) => {
  return (
    <thead>
      <tr>
        {headerNames.map((headerName) => (
          <th key={headerName}>{headerName}</th>
        ))}
      </tr>
    </thead>
  );
};

// [TableBody] : Table의 Body (body에 값을 지정하면, 알아서 item을 생성하여 만들어줌)
// [keyIndecator] : key로 지정하기 위한 indecator 함수
// [valuesIndecator] : item으로 표시할 값들을 지정하기 위한 indecator 함수
// [items] : 사용할 item들이 저장된 객체
/// [handleClick] : 해당 item을 클릭하면 실행할 callback 함수
/// [handleClickPropsIndecator] : handleClick에 param이 필요할 시 넣을 인디케이터
type BodyProps = {
  keyIndecator: Function;
  valuesIndecator: Function;
  items: any;
  handleClick: Function;
  handleClickPropsIndecator: Function;
};

export const TableBody: React.FC<BodyProps> = ({
  keyIndecator,
  valuesIndecator,
  items,
  handleClick,
  handleClickPropsIndecator,
}) => {
  return (
    <tbody>
      {items.map((item: any) => (
        <TableItem
          item={item}
          key={keyIndecator(item)}
          values={valuesIndecator(item)}
          handleClick={handleClick}
          handleClickPropsIndecator={handleClickPropsIndecator}
        />
      ))}
    </tbody>
  );
};

// Table
export const Table: React.FC<{}> = ({ children }) => {
  return (
    <div>
      <table>{children}</table>
    </div>
  );
};
