/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import { format } from "date-fns";

export const formattingDate = (date: Date): string => {
  return format(date, "yyyy.MM.dd ccc aa hh:mm:ss");
};

export const DANGER_LEVEL_COLOR: { [name: string]: string } = {
  위험: "#FF0000",
  경고: "#FF9100",
  주의: "#555",
};

export const EMPLOYEE_TYPE_COLOR: { [name: string]: string } = {
  working: "#3F8CFF",
  rest: "#0EC07F",
  visitor: "#FFB03D",
  off: "#AAA",
  undefined: "#FF7A2D",
};

const GlobalStyle: React.FC = (props) => {
  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap");

        :root {
          --title-color: #0b4ca3;
          --box-shadow: 0 3px 30px 0 rgba(0, 0, 0, 0.05);
          --width: 1280px;
        }

        * {
          margin: 0;
          padding: 0;
          text-decoration: none;
          list-style: none;
        }

        .App {
          font-family: "Noto Sans KR", sans-serif;
          color: #444;
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          background-color: #f3f3f3;
          overflow-x: hidden;
          align-items: center;
        }

        img {
          margin-right: 10px;
        }
      `}
    />
  );
};

export default GlobalStyle;
