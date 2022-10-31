import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Result from "./pages/Result";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";
import { Fragment } from "react";
import PublicRoute from "./PublicRoute";
function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <AuthProvider>
            <Layout>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/signup" element={<SignUp />} />
                <Route exact path="/login" element={<LogIn />} />
                <Route element={<PrivateRoute />}>
                  <Route path="/quiz" element={<Quiz />} />
                  <Route path="/result" element={<Result />} />
                </Route>

                <Route path="login" element={<PublicRoute />}>
                  <Route path="/login" element={<LogIn />} />
                </Route>
              </Routes>
            </Layout>
          </AuthProvider>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
