import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./page/Header";
import Home from "./page/Home";
import Login from "./page/Login";
import My from "./page/My";
import Join_up from "./page/Join_up";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/My" element={<My />} />
        <Route path="/Join_up" element={<Join_up />} />
      </Routes>
    </Router>
  );
}

export default App;
