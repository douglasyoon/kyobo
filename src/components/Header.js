import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container header">
      <Link to="/Home">
        <img src="/photo/img_logo_kyobo@2x.png" className="logo" alt="이미지"></img>

        <p className="subTitle text-center">컴퓨터/IT 베스트셀러</p>
      </Link>
    </div>
  );
};

export default Header;
