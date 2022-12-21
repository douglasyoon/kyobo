import React from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";

const Header = () => {
  return (
    <div>
      <div className="text-center">
        <Link to="/Home">
        <img
          src="/photo/img_logo_kyobo@2x.png"
          className="logo"
          alt="이미지"
        ></img></Link>
        <p className="subTitle">컴퓨터/IT베스트셀러</p>
        <span className="line"></span>
      </div>
    </div>
   
  );
};

export default Header;
