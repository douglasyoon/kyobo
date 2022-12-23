import { Button } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import "../style/Member1.css";

const Member = () => {
  return (
    <div className="container list-box">
      <Link to="/Home">
        <button type="button" className="btn btn-success">
          HOME
        </button>
      </Link>

      {/* 프엔 */}
      <p className="title-main">frontend</p>
      <div className="frontend">
        <div class="card">
          <img
            src="/photo/IMG_8637.png"
            className="card-img-top"
            alt="김주영"
          ></img>
          <div class="card-body">
            <h5 class="card-title">팀장 김주영</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              메인 페이지 <br />- 리스트 <br />
              GitHub
            </li>
          </ul>
          <div class="card-body">
          <a href="https://github.com/zuyoe">GitHub</a>
          </div>
        </div>

        <div class="card">
          <img
            src="/photo/IMG_8638.png"
            className="card-img-top"
            alt="손현지"
          ></img>
          <div class="card-body">
            <h5 class="card-title">팀원 손현지</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              헤더 상세 페이지
              <br></br>- 상품 정보 위로 가기 버튼 Figma
            </li>
          </ul>
          <div class="card-body">
            <a href="https://github.com/sirri1222">GitHub</a>
          </div>
        </div>

        <div class="card">
          <img
            src="/photo/dongyu.png"
            className="card-img-top"
            alt="윤동규"
          ></img>
          <div class="card-body">
            <h5 class="card-title">팀원 윤동규</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              상세 페이지 <br />- 리뷰
              <br /> Notion
            </li>
          </ul>
          <div class="card-body">
          <a href="https://github.com/douglasyoon">GitHub</a>
          </div>
        </div>
      </div>

      {/* 백엔드 */}
      <p className="title-main">backend</p>

      <div className="backend">
        <div class="card">
          <img
            src="/photo/민경.png"
            className="card-img-top"
            alt="우민경"
          ></img>
          <div class="card-body">
            <h5 class="card-title">팀장 우민경</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              entity 코드작성 <br />
              의견조율 발표
            </li>
          </ul>
          <div class="card-body">
          <a href="https://github.com/shiningok">GitHub</a>
          </div>
        </div>

        <div class="card">
          <img
            src="/photo/진희.png"
            className="card-img-top"
            alt="박진희"
          ></img>
          <div class="card-body">
            <h5 class="card-title">팀원 박진희</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              service, controller 코드작성 <br />
              sql 쿼리문 작성
            </li>
          </ul>
          <div class="card-body">
          <a href="https://github.com/nunnunnu">GitHub</a>
          </div>
        </div>

        <div class="card">
          <img
            src="/photo/진혁.png"
            className="card-img-top"
            alt="박진혁"
          ></img>
          <div class="card-body">
            <h5 class="card-title">팀원 박진혁</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              서버구동
              <p></p>
            </li>
          </ul>
          <div class="card-body">
          <a href="https://github.com/parkmawani">GitHub</a>
          </div>
        </div>

        <div class="card">
          <img
            src="/photo/찬희.png"
            className="card-img-top"
            alt="이찬희"
          ></img>
          <div class="card-body">
            <h5 class="card-title">팀원 이찬희</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              Repository 코드 작성
              <br /> 명세서 작성
            </li>
          </ul>
          <div class="card-body">
          <a href="https://github.com/dlcksgml123123">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
