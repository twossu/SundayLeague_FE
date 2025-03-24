import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Join_up.css";
const User = {
  id: "abc",
  pw: "System2000!!",
  email: "abc@naver.com",
  name: "이수",
  number: "010-1234-5678",
};

export default function Join_up() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwcheck, setPwcheck] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const [idValid, setIdValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [pwcheckValid, setPwcheckValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const handleId = (e) => {
    setId(e.target.value);
    const regex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(id)) {
      setIdValid(true);
    } else {
      setIdValid(false);
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

  const handlePwcheck = (e) => {
    setPwcheck(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(pwcheck)) {
      setPwcheckValid(true);
    } else {
      setPwcheckValid(false);
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(id)) {
      setIdValid(true);
    } else {
      setIdValid(false);
    }
  };

  const handleName = (e) => {
    setName(e.target.value);
    const regex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(id)) {
      setIdValid(true);
    } else {
      setIdValid(false);
    }
  };

  const handleNumber = (e) => {
    setNumber(e.target.value);
    const regex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(id)) {
      setIdValid(true);
    } else {
      setIdValid(false);
    }
  };

  useEffect(() => {
    if (idValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [idValid, pwValid]);

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
            value={id}
            onChange={handleId}
          />
        </div>
        <div className="errorMessageWrap">
          {!idValid && id.length > 0 && (
            <div>올바른 아이디를 입력해주세요.</div>
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
            type="passwordcheck"
            className="input"
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            value={pwcheck}
            onChange={handlePwcheck}
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
            type="text"
            className="input"
            placeholder="아이디 또는 전화번호"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className="errorMessageWrap">
          {!idValid && id.length > 0 && (
            <div>올바른 이메일을 입력해주세요.</div>
          )}
        </div>

        <div style={{ marginTop: "26px" }} className="inputTitle">
          이름
        </div>
        <div className="inputWrap">
          <input
            type="password"
            className="input"
            placeholder=""
            value={name}
            onChange={handleName}
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
            value={number}
            onChange={handleNumber}
          />
        </div>
        <div className="errorMessageWrap">
          {!pwValid && pw.length > 0 && <div>정확히 입력해주세요.</div>}
        </div>
      </div>

      <div className="buttonWrap">
        <button disabled={notAllow} className="bottomButton">
          회원가입
        </button>
      </div>
      <hr nonshade />
    </div>
  );
}
