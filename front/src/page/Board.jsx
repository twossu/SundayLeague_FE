import "./Board.css";
import List from "./List.jsx";
import { Link } from "react-router-dom";

const Board = () => {
  return (
    <div className="Board">
      <h1>게시판</h1>
      <div className="Search">
        <input placeholder="검색할내용" />
        <button>검색</button>
      </div>
      <div className="Button">
        <button>전체</button>
        <button>공지</button>
        <button>자유</button>
      </div>
      <List />
      <div className="Button2">
        <Link to="/Write">
          <button>글쓰기</button>
        </Link>
      </div>
    </div>
  );
};

export default Board;
