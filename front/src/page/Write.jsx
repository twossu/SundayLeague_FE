import "./Write.css";

const Write = () => {
  return (
    <div className="write">
      <h1>게시글 작성</h1>
      <div>제목</div>
      <div className="search">
        <input placeholder="글제목" />
      </div>

      <div>게시글 종류</div>
      <div className="type">
        <select>
          <option value="kr">자유</option>
          <option value="us">지역</option>
        </select>
      </div>

      <div>내용</div>
      <div className="search2">
        <input placeholder="게시글 상세 내용을 적어주세요" />
      </div>
      <div className="button">
        <button>작성 완료</button>
      </div>
    </div>
  );
};

export default Write;
