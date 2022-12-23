import Header from "./components/Header";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";
const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/member" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/member" element={<About />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
