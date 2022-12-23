import React from "react";
import { Link } from "react-router-dom";
import "../style/Member1.css";

const Member = () => {
  return (
    <div className="container list-box about-member">
      <Link to="/home">
        <button type="button" className="btn-1 btn-success">
          HOME
        </button>
      </Link>
      {/* 프엔 */}
      <p className="title-main">Front-End</p>
      <div className="frontend">
        <div className="card">
          <img src="/photo/IMG_8637.png" className="card-img-top" alt="김주영"></img>
          <div className="card-body">
            <h5 className="card-title">팀장 김주영</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              메인 페이지 - 리스트 <br />
              GitHub
              <br />
              <br />
              <br />
            </li>
          </ul>
          <div className="card-body">
            <a href="https://github.com/zuyoe">
              <img
                src="/photo/icon_github.png"
                alt="github"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
          </div>
        </div>

        <div className="card">
          <img src="/photo/IMG_8638.png" className="card-img-top" alt="손현지"></img>
          <div className="card-body">
            <h5 className="card-title">팀원 손현지</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              헤더 <br />
              상세 페이지 - 상품 정보 <br />
              위로 가기 버튼 <br />
              Figma
            </li>
          </ul>
          <div className="card-body">
            <a href="https://github.com/sirri1222">
              <img
                src="/photo/icon_github.png"
                alt="github"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
          </div>
        </div>

        <div className="card">
          <img src="/photo/dongyu.png" className="card-img-top" alt="윤동규"></img>
          <div className="card-body">
            <h5 className="card-title">팀원 윤동규</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              상세 페이지 - 리뷰
              <br /> Notion
              <br />
              <br />
              <br />
            </li>
          </ul>
          <div className="card-body">
            <a href="https://github.com/douglasyoon">
              <img
                src="/photo/icon_github.png"
                alt="github"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
          </div>
        </div>
      </div>

      {/* 백엔드 */}
      <p className="title-main">Back-End</p>

      <div className="backend">
        <div className="card">
          <img src="/photo/민경.png" className="card-img-top" alt="우민경"></img>
          <div className="card-body">
            <h5 className="card-title">팀장 우민경</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Entity 코드작성 <br />
              의견조율 발표
            </li>
          </ul>
          <div className="card-body">
            <a href="https://github.com/shiningok">
              <img
                src="/photo/icon_github.png"
                alt="github"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
          </div>
        </div>

        <div className="card">
          <img src="/photo/진희.png" className="card-img-top" alt="박진희"></img>
          <div className="card-body">
            <h5 className="card-title">팀원 박진희</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Service, Controller 코드작성 <br />
              SQL 쿼리문 작성
            </li>
          </ul>
          <div className="card-body">
            <a href="https://github.com/nunnunnu">
              <img
                src="/photo/icon_github.png"
                alt="github"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
          </div>
        </div>

        <div className="card">
          <img src="/photo/진혁.png" className="card-img-top" alt="박진혁"></img>
          <div className="card-body">
            <h5 className="card-title">팀원 박진혁</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              서버구동
              <p></p>
            </li>
          </ul>
          <div className="card-body">
            <a href="https://github.com/parkmawani">
              <img
                src="/photo/icon_github.png"
                alt="github"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
          </div>
        </div>
        <div className="card">
          <img src="/photo/찬희.png" className="card-img-top" alt="이찬희"></img>
          <div className="card-body">
            <h5 className="card-title">팀원 이찬희</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Repository 코드 작성
              <br /> 명세서 작성
            </li>
          </ul>
          <div className="card-body">
            <a href="https://github.com/dlcksgml123123">
              <img
                src="/photo/icon_github.png"
                alt="github"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
