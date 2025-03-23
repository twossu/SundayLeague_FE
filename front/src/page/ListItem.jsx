import "./ListItem.css";

const ListItem = () => {
  return (
    <div className="ListItem">
      <div className="type">게시글종류</div>
      <div className="title">제목</div>
      <div className="user">작성자</div>
      <div className="date">날짜</div>
    </div>
  );
};
export default ListItem;
