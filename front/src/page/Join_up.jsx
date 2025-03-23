import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const User = {
  email: "abc@naver.com",
  pw: "System2000!!",
};

export default function Join_up() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handlePw = (e) => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(pw)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const onClickConfirmButton = () => {
    if (email === User.email && pw === User.pw) {
      alert("로그인에 성공했습니다.");
    } else {
      alert("등록되지 않은 회원이거나 입력한 값이 일치하지 않습니다.");
    }
  };

  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, pwValid]);

  return (
    <div className="page">
      <div className="titleWrap">
        <br />
        회원가입
      </div>
      <div className="contentWrap">
        <div className="inputTitle">아이디</div>
        <div className="inputWrap">
          <input
            type="text"
            className="input"
            placeholder="아이디 또는 전화번호"
            value={email}
            onChange={handleEmail}
          />
        </div>

        <div className="errorMessageWrap">
          {!emailValid && email.length > 0 && (
            <div>올바른 이메일을 입력해주세요.</div>
          )}
        </div>

        <div style={{ marginTop: "26px" }} className="inputTitle">
          비밀번호
        </div>
        <div className="inputWrap">
          <input
            type="password"
            className="input"
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            value={pw}
            onChange={handlePw}
          />
        </div>

        <div className="errorMessageWrap">
          {!pwValid && pw.length > 0 && (
            <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
          )}
        </div>
        <div style={{ marginTop: "26px" }} className="inputTitle">
          비밀번호 확인
        </div>
        <div className="inputWrap">
          <input
            type="password"
            className="input"
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            value={pw}
            onChange={handlePw}
          />
        </div>
        <div className="errorMessageWrap">
          {!pwValid && pw.length > 0 && <div>비밀번호가 틀렸습니다.</div>}
        </div>

        <div style={{ marginTop: "26px" }} className="inputTitle">
          이메일
        </div>
        <div className="inputWrap">
          <input
            type="password"
            className="input"
            placeholder="@gmail.com"
            value={pw}
            onChange={handlePw}
          />
        </div>
        <div className="errorMessageWrap">
          {!pwValid && pw.length > 0 && <div>정확히 입력해주세요.</div>}
        </div>

        <div style={{ marginTop: "26px" }} className="inputTitle">
          이름
        </div>
        <div className="inputWrap">
          <input
            type="password"
            className="input"
            placeholder=""
            value={pw}
            onChange={handlePw}
          />
        </div>
        <div className="errorMessageWrap">
          {!pwValid && pw.length > 0 && <div>정확히 입력해주세요.</div>}
        </div>

        <div style={{ marginTop: "26px" }} className="inputTitle">
          휴대전화
        </div>
        <div className="inputWrap">
          <input
            type="password"
            className="input"
            placeholder="-포함하여 입력하세요"
            value={pw}
            onChange={handlePw}
          />
        </div>
        <div className="errorMessageWrap">
          {!pwValid && pw.length > 0 && <div>정확히 입력해주세요.</div>}
        </div>
      </div>

      <div className="buttonWrap">
        <button
          onClick={onClickConfirmButton}
          disabled={notAllow}
          className="bottomButton"
        >
          로그인
        </button>
      </div>
      <hr nonshade />
      <div className="registerWrap">
        <div className="registerTitle">
          <Link to="/register1">아이디 찾기 | </Link>
          <Link to="/register2">비밀번호 찾기 | </Link>
          <Link to="/Join_up">회원가입</Link>
        </div>
      </div>
    </div>
  );
}
