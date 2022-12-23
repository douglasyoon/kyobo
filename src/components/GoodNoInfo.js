import { Link } from "react-router-dom";

const GoodNoInfo = () => {
  return (
    <div className="container text-center" style={{ marginTop: "80px" }}>
      <img src="/photo/ico_error_404.png" alt="error" style={{ width: "200px" }} />
      <h3 style={{ marginTop: "40px", marginBottom: "40px" }}>그런 책은 없어요!</h3>
      <Link to="/home" className="btn-green">
        홈으로 돌아가기
      </Link>
    </div>
  );
};

export default GoodNoInfo;

