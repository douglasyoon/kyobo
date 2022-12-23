import Header from "./components/Header";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Member from "./pages/About";
const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="container">
        <Header />
        <Routes>
          {/* <Route path="/" element={<Navigate to="/home" />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route index element={<Member />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;