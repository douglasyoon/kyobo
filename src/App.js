import Header from "./components/Header";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
