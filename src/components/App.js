import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Result from "./pages/Result";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/quiz" element={<Quiz />} />
            <Route exact path="/result" element={<Result />} />
            <Route exact path="/sign-up" element={<SignUp />} />
            <Route exact path="/login" element={<LogIn />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
