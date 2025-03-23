import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./page/Header";
import Board from "./page/Board";
import Login from "./page/Login";
import My from "./page/My";
import Join_up from "./page/Join_up";
import Write from "./page/Write";

const mockData = [
  {
    id: 0,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    content: "명상",
    date: new Date().getTime(),
  },
  {
    id: 2,
    content: "잠자기",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState([mockData]);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/My" element={<My />} />
        <Route path="/Join_up" element={<Join_up />} />
        <Route path="/Write" element={<Write />} />
      </Routes>
    </Router>
  );
}

export default App;
